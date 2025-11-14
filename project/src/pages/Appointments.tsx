import React, { useState, useEffect } from 'react';
import { Calendar, Video, Clock, DollarSign, Trash2, Edit2, Check, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Auth from '../components/Auth';

interface Appointment {
  id: string;
  type: 'physical' | 'video';
  full_name: string;
  email: string;
  phone: string;
  date: string;
  notes: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
}

interface AppointmentType {
  type: 'physical' | 'video';
  price: number;
}

function Appointments() {
  const [session, setSession] = useState(null);
  const [appointmentType, setAppointmentType] = useState<'physical' | 'video'>('physical');
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
  const [formKey, setFormKey] = useState(0); // Add this line to force form reset

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchAppointments();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchAppointments();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setAppointments(data || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      alert('Error fetching appointments');
    }
  };

  const appointmentTypes: Record<string, AppointmentType> = {
    physical: {
      type: 'physical',
      price: 2.30
    },
    video: {
      type: 'video',
      price: 2.91
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!session) return;

    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const appointmentData = {
        user_id: session.user.id,
        type: appointmentType,
        full_name: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        notes: formData.get('notes'),
        price: appointmentTypes[appointmentType].price,
        status: 'pending'
      };

      if (editingAppointment) {
        const { error } = await supabase
          .from('appointments')
          .update(appointmentData)
          .eq('id', editingAppointment.id);

        if (error) throw error;
        alert('Appointment updated successfully!');
        setEditingAppointment(null);
      } else {
        const { error } = await supabase
          .from('appointments')
          .insert([appointmentData]);

        if (error) throw error;
        alert('Appointment scheduled successfully!');
      }

      // Reset form by updating the key
      setFormKey(prev => prev + 1);
      fetchAppointments();
    } catch (error) {
      alert('Error ' + (editingAppointment ? 'updating' : 'scheduling') + ' appointment: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this appointment?')) return;

    try {
      const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id);

      if (error) throw error;
      alert('Appointment deleted successfully!');
      fetchAppointments();
    } catch (error) {
      alert('Error deleting appointment: ' + error.message);
    }
  };

  const handleStatusChange = async (id: string, newStatus: Appointment['status']) => {
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      fetchAppointments();
    } catch (error) {
      alert('Error updating appointment status: ' + error.message);
    }
  };

  if (!session) {
    return <Auth />;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fade-in">
          {editingAppointment ? 'Edit Appointment' : 'Book an Appointment'}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Appointment Type Selection */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  appointmentType === 'physical' 
                    ? 'bg-blue-50 border-2 border-blue-500' 
                    : 'bg-gray-50 border-2 border-transparent'
                }`}
                onClick={() => setAppointmentType('physical')}
              >
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Physical Appointment</h3>
                <p className="text-gray-600 mb-4">Visit our hospital during business hours</p>
                <div className="flex items-center text-blue-600">
                  <DollarSign className="h-5 w-5 mr-1" />
                  <span className="font-semibold">{appointmentTypes.physical.price.toFixed(2)}</span>
                </div>
              </div>

              <div 
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  appointmentType === 'video' 
                    ? 'bg-blue-50 border-2 border-blue-500' 
                    : 'bg-gray-50 border-2 border-transparent'
                }`}
                onClick={() => setAppointmentType('video')}
              >
                <Video className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Video Consultation</h3>
                <p className="text-gray-600 mb-4">Connect with our doctors online</p>
                <div className="flex items-center text-blue-600">
                  <DollarSign className="h-5 w-5 mr-1" />
                  <span className="font-semibold">{appointmentTypes.video.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <form key={formKey} onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 animate-scale-in mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  defaultValue={editingAppointment?.full_name || ''}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  defaultValue={editingAppointment?.email || ''}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  defaultValue={editingAppointment?.phone || ''}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  defaultValue={editingAppointment?.date || ''}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  defaultValue={editingAppointment?.notes || ''}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Any specific concerns or requirements?"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              {editingAppointment && (
                <button
                  type="button"
                  onClick={() => setEditingAppointment(null)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
              )}
              <button 
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Processing...' : editingAppointment ? 'Update Appointment' : 'Schedule Appointment'}
              </button>
            </div>
          </form>

          {/* Appointments List */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Your Appointments</h2>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{appointment.full_name}</h3>
                      <p className="text-gray-600">{appointment.type} appointment</p>
                      <p className="text-gray-600">Date: {new Date(appointment.date).toLocaleDateString()}</p>
                      <p className="text-gray-600">Status: 
                        <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                          appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          appointment.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingAppointment(appointment)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300"
                      >
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(appointment.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-all duration-300"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  {appointment.status === 'pending' && (
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                        className="flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-all duration-300"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Confirm
                      </button>
                      <button
                        onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                        className="flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-all duration-300"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              ))}
              
              {appointments.length === 0 && (
                <p className="text-gray-600 text-center py-4">No appointments found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;