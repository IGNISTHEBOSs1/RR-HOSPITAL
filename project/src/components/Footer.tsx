import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedinIcon, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
          <div>
            <div className="flex items-center mb-4 hover-grow">
              <img 
                src="https://i.postimg.cc/pX6RYmLQ/Adobe-Express-file.png" 
                alt="RR Hospital Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Providing excellence in healthcare since 2023.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-all duration-300 hover-lift inline-block">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-all duration-300 hover-lift inline-block">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white transition-all duration-300 hover-lift inline-block">Doctors</Link></li>
              <li><Link to="/appointments" className="text-gray-400 hover:text-white transition-all duration-300 hover-lift inline-block">Appointments</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 hover-lift inline-block">(+91) 9116609223</p>
            <p className="text-gray-400 mt-2">Available during business hours</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17dkJMCcNW/" className="text-gray-400 hover:text-white transition-all duration-300 hover-grow">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/colonel_dr_reena_yadav?igsh=Nm5kN3hyZnZ3aXJn" className="text-gray-400 hover:text-white transition-all duration-300 hover-grow">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@doctorreenayadav?si=eZvcBLF8M6EYHWh1" className="text-gray-400 hover:text-white transition-all duration-300 hover-grow">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RR Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;