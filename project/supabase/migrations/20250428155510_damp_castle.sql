/*
  # Update appointments table with status enum

  1. Changes
    - Create appointment_status enum type
    - Update status column to use enum type
    - Add policies for update and delete operations

  2. Security
    - Add policies for authenticated users to:
      - Update their own appointments
      - Delete their own appointments
*/

-- Create appointment status enum
DO $$ BEGIN
  CREATE TYPE appointment_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- First remove the default constraint
ALTER TABLE appointments 
  ALTER COLUMN status DROP DEFAULT;

-- Then update the column type and set the new default
ALTER TABLE appointments 
  ALTER COLUMN status TYPE appointment_status USING status::appointment_status,
  ALTER COLUMN status SET DEFAULT 'pending';

-- Allow users to update their own appointments
CREATE POLICY "Users can update their own appointments"
  ON appointments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own appointments
CREATE POLICY "Users can delete their own appointments"
  ON appointments
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);