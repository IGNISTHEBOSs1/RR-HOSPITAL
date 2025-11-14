import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function AuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/appointments');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 animate-bounce" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Successfully Logged In!
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Redirecting you to appointments...
        </p>
      </div>
    </div>
  );
}