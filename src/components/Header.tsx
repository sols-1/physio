
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from './BookingModal';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-physio rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
              <span className="text-white font-bold text-lg sm:text-xl">P</span>
            </div>
            <span className="text-xl sm:text-2xl font-playfair font-bold text-physio-blue hover:text-physio-green transition-colors duration-300">
              PhysioHeal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-physio-blue transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-physio-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/admin"
              className="flex items-center space-x-2 text-gray-600 hover:text-physio-blue transition-all duration-300 transform hover:scale-105"
            >
              <Database size={16} />
              <span className="font-medium">Admin</span>
            </Link>
            <a 
              href="tel:+1234567890" 
              className="flex items-center space-x-2 text-physio-blue hover:text-physio-green transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={16} />
              <span className="font-medium">(123) 456-7890</span>
            </a>
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-physio hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Calendar size={16} className="mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Book Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button 
              onClick={() => setIsBookingOpen(true)}
              size="sm"
              className="bg-gradient-physio hover:opacity-90 text-xs px-3 py-2"
            >
              <Calendar size={14} className="mr-1" />
              Book
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-physio-blue transition-colors py-3 hover:bg-gray-50 rounded-lg px-3 text-lg touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link 
                  to="/admin"
                  className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 rounded-lg p-3 transition-colors text-lg touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Database size={20} />
                  <span>Admin Panel</span>
                </Link>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center space-x-3 text-physio-blue hover:bg-gray-50 rounded-lg p-3 transition-colors text-lg touch-manipulation"
                >
                  <Phone size={20} />
                  <span>(123) 456-7890</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Header;
