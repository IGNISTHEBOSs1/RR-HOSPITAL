import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  Users,
  Award,
  Heart,
  Stethoscope
} from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-slide-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Excellence in Healthcare, <br />Committed to Your Well-being
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Providing world-class medical care with compassion and expertise.
              </p>
              <button 
                onClick={() => navigate('/appointments')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover-lift hover-glow"
              >
                Book an Appointment
              </button>
            </div>
            <div className="md:w-1/2 animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Modern Hospital Building"
                className="rounded-lg shadow-xl hover-glow hover-bright"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Schemes Section */}
      <section className="py-16 bg-white hover:bg-blue-50 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in hover:text-blue-700 transition-colors duration-300">Healthcare Schemes that we have</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 stagger-children">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover-lift hover-glow group transition-all duration-300 hover:from-blue-100 hover:to-blue-200">
              <Shield className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">RGHS</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Rajasthan Government Health Scheme providing comprehensive healthcare coverage to state government employees and their dependents.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover-lift hover-glow group transition-all duration-300 hover:from-blue-100 hover:to-blue-200">
              <Users className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">ECHS</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Ex-servicemen Contributory Health Scheme offering quality healthcare services to ex-servicemen and their families.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover-lift hover-glow group transition-all duration-300 hover:from-blue-100 hover:to-blue-200">
              <Award className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">Bhamasha</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">State-run health insurance scheme providing cashless healthcare services to eligible families in Rajasthan.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover-lift hover-glow group transition-all duration-300 hover:from-blue-100 hover:to-blue-200">
              <Heart className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">TPA</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Third Party Administrator services facilitating seamless healthcare claims processing and insurance coverage.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover-lift hover-glow group transition-all duration-300 hover:from-blue-100 hover:to-blue-200">
              <Stethoscope className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">MAA Yojna</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Mother and Child healthcare scheme ensuring comprehensive maternal and infant care services.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover-lift hover-glow group transition-all duration-300 hover:from-blue-100 hover:to-blue-200">
              <Award className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">All available medical prosidures.</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Our hospital offers comprehensive care with all available medical procedures, from advanced diagnostics to specialized surgery. We provide cutting-edge treatment delivered by expert healthcare professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in">Why Choose RR Hospital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              { number: '3+', text: 'Years of Excellence' },
              { number: '15+', text: 'Specialist Doctors' },
              { number: '20,000+', text: 'Patients Treated Annually' },
              { number: '7+', text: 'Specialty Departments' },
            ].map((stat, index) => (
              <div key={index} className="text-center hover-lift hover-glow p-6 rounded-lg bg-white">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;