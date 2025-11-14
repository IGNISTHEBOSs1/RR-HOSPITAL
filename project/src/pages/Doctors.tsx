import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, Star, Calendar, Award } from 'lucide-react';

function Doctors() {
  const navigate = useNavigate();
  const doctors = [
    {
      name: "Dr. Reena Yadav",
      specialty: "Senior Gynaecologist & Medical Director",
      experience: "20+ years",
      image: "https://i.postimg.cc/RCwqDcQy/2023-03-05.jpg",
      rating: 4.9,
      achievements: "Founder of RR Hospital",
      showAppointment: true
    },
    {
      name: "Dr. Rajeev K. Yadav",
      specialty: "Medical Officer",
      experience: "11+ years",
      image: "https://i.postimg.cc/R0c6Djz2/2023-03-05-1.jpg",
      rating: 4.8,
      showAppointment: true
    },
    {
      name: "Dr. KK Aggarwal",
      specialty: "Anesthetist",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
    },
    {
      name: "Dr. Omprakash Meena",
      specialty: "Surgeon",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
    },
    {
      name: "Dr. Yaspal Mehndiratta",
      specialty: "Medical Specialist",
      experience: "14+ years",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "16+ years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      name: "Dr. Monika Sihag",
      specialty: "Physiotherapist",
      experience: "13+ years",
      image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
    },
    {
      name: "Dr. Raju Yadav",
      specialty: "Orthopedician",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      name: "Dr. Sunita Verma",
      specialty: "Endocrinologist",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in">Our Expert Doctors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                index === 0 ? 'lg:col-span-3 md:col-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'md:flex' : ''}`}>
                <div className={`${index === 0 ? 'md:w-1/3' : 'h-48'} overflow-hidden`}>
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className={`p-6 ${index === 0 ? 'md:w-2/3' : ''}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {doctor.name}
                    </h3>
                    {index === 0 && (
                      <div className="flex items-center text-blue-600">
                        <Award className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Medical Director</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center mt-2 text-gray-600">
                    <UserCircle className="h-4 w-4 mr-2" />
                    <span>{doctor.specialty}</span>
                  </div>
                  
                  <div className="flex items-center mt-2 text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{doctor.experience}</span>
                  </div>
                  
                  <div className="flex items-center mt-2 text-yellow-500">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span>{doctor.rating}</span>
                  </div>

                  {index === 0 && doctor.achievements && (
                    <div className="mt-4 text-gray-600">
                      <p className="italic">{doctor.achievements}</p>
                    </div>
                  )}
                  
                  {doctor.showAppointment && (
                    <button 
                      onClick={() => navigate('/appointments')}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Book Appointment
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;