import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  return (
    <header className="bg-white shadow-md fixed w-full z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center hover-grow">
            <img 
              src="https://i.postimg.cc/pX6RYmLQ/Adobe-Express-file.png" 
              alt="RR Hospital Logo" 
              className="h-12 w-auto"
            />
            <span className="ml-2 text-2xl font-bold text-gray-800">RR Hospital</span>
          </Link>
          
          <nav className={`
            md:flex md:space-x-8
            ${isMenuOpen ? 'block' : 'hidden'}
            absolute md:relative
            top-20 md:top-0
            left-0 md:left-auto
            right-0 md:right-auto
            bg-white md:bg-transparent
            shadow-lg md:shadow-none
            p-4 md:p-0
            z-50
          `}>
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block md:inline-block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-all duration-300 hover-lift ${location.pathname === '/' ? 'text-blue-600' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className={`block md:inline-block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-all duration-300 hover-lift ${location.pathname === '/services' ? 'text-blue-600' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/doctors" 
              onClick={() => setIsMenuOpen(false)}
              className={`block md:inline-block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-all duration-300 hover-lift ${location.pathname === '/doctors' ? 'text-blue-600' : ''}`}
            >
              Doctors
            </Link>
            <Link 
              to="/appointments" 
              onClick={() => setIsMenuOpen(false)}
              className={`block md:inline-block py-2 md:py-0 text-gray-600 hover:text-blue-600 transition-all duration-300 hover-lift ${location.pathname === '/appointments' ? 'text-blue-600' : ''}`}
            >
              Appointments
            </Link>
            {user && (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="block md:inline-block py-2 md:py-0 text-red-600 hover:text-red-700 transition-all duration-300 hover-lift"
              >
                <span className="flex items-center">
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </span>
              </button>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center hover-grow">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="ml-2 text-blue-600 font-semibold">(+91) 9116609223</span>
            </div>

            <button 
              className="md:hidden hover-grow p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;