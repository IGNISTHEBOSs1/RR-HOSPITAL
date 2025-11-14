import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Brain,
  Bone,
  Eye,
  Stethoscope,
  Building2,
  Microscope,
  Baby,
  Syringe,
  Pill,
  Activity,
  Scissors,
  UserCircle,
  Phone
} from 'lucide-react';

function Services() {
  const navigate = useNavigate();
  
  const mainService = {
    icon: UserCircle,
    title: 'Gynaecology',
    desc: 'Comprehensive women\'s healthcare services',
    details: [
      'Routine gynecological check-ups',
      'High-risk pregnancy care',
      'Infertility treatments',
      'Minimally invasive surgeries',
      'Menstrual disorder management',
      'Family planning services',
      'Menopause management',
      'Advanced ultrasound services'
    ]
  };

  const specialties = [
    {
      icon: Baby,
      title: 'Obstetrics',
      desc: 'Complete pregnancy and childbirth care',
      details: [
        'Prenatal care',
        'High-risk pregnancy management',
        'Natural childbirth',
        'Cesarean delivery'
      ]
    },
    {
      icon: Heart,
      title: 'Cardiology',
      desc: 'Comprehensive heart care and treatments',
      details: [
        'Advanced cardiac diagnostics',
        'Heart surgery and interventions',
        'Cardiac rehabilitation programs',
        'Preventive cardiology services'
      ],
      onCall: true
    },
    {
      icon: Brain,
      title: 'Neurology',
      desc: 'Expert neurological care and procedures',
      details: [
        'Brain and spine surgery',
        'Stroke treatment and management',
        'Epilepsy monitoring',
        'Neurological rehabilitation'
      ],
      onCall: true
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      desc: 'Specialized bone and joint treatments',
      details: [
        'Joint replacement surgery',
        'Sports injury treatment',
        'Spine surgery',
        'Arthroscopic procedures'
      ]
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      desc: 'Advanced eye care services',
      details: [
        'Cataract surgery',
        'Glaucoma treatment',
        'Retinal procedures',
        'Vision correction'
      ]
    },
    {
      icon: Microscope,
      title: 'Pathology',
      desc: 'Advanced diagnostic services',
      details: [
        'Clinical laboratory tests',
        'Molecular diagnostics',
        'Cytology services',
        'Blood bank facilities'
      ]
    },
    {
      icon: Activity,
      title: 'Critical Care',
      desc: 'Intensive care services',
      details: [
        '24/7 ICU facilities',
        'Advanced life support',
        'Critical care monitoring',
        'Emergency response team'
      ]
    },
    {
      icon: Scissors,
      title: 'General Surgery',
      desc: 'Comprehensive surgical care',
      details: [
        'Minimally invasive surgery',
        'Laparoscopic procedures',
        'Emergency surgery',
        'Post-operative care'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in">Our Medical Specialties</h1>
        
        {/* Main Gynaecology Service */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-xl hover-lift hover-glow group transition-all duration-300">
            <div className="flex items-center mb-6">
              <mainService.icon className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-3xl font-bold ml-4 text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
                {mainService.title}
              </h2>
            </div>
            
            <p className="text-xl text-gray-700 mb-6 group-hover:text-gray-800 transition-colors duration-300">
              {mainService.desc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainService.details.map((detail, idx) => (
                <div 
                  key={idx}
                  className="flex items-center bg-white bg-opacity-50 p-4 rounded-lg group-hover:bg-opacity-70 transition-all duration-300"
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    {detail}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/appointments')}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover-lift hover-glow"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
        
        {/* Other Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover-lift hover-glow group transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 relative"
            >
              {specialty.onCall && (
                <div className="absolute top-4 right-4 flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full animate-pulse">
                  <Phone className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">ON CALL</span>
                </div>
              )}
              <div className="flex items-center mb-4">
                <specialty.icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold ml-3 group-hover:text-blue-700 transition-colors duration-300">
                  {specialty.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {specialty.desc}
              </p>
              
              <ul className="space-y-2">
                {specialty.details.map((detail, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Medical Assistance?</h2>
          <p className="text-gray-600 mb-8">Our team of expert medical professionals is here to help you 24/7.</p>
          <button 
            onClick={() => navigate('/appointments')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover-lift hover-glow"
          >
            Schedule an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;