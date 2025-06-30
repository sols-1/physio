
import React, { useState } from 'react';
import { ArrowRight, Play, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackgroundSlideshow from './BackgroundSlideshow';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundSlideshow />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Hero Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
                Your Journey to{' '}
                <span className="text-gradient bg-gradient-to-r from-physio-blue to-physio-green bg-clip-text text-transparent">
                  Complete Healing
                </span>{' '}
                Starts Here
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience world-class physiotherapy with personalized treatment plans, 
                cutting-edge technology, and compassionate care that gets you back to your best self.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-gradient-physio hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg px-8 py-4 group"
                >
                  Book Your Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-gray-700 hover:bg-white hover:text-physio-blue transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg px-8 py-4 group backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Our Story
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 bg-physio-blue/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-physio-blue" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg text-gray-800">15+ Years</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 bg-physio-green/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-physio-green" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg text-gray-800">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className="w-12 h-12 bg-physio-teal/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-physio-teal" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg text-gray-800">1000+</div>
                    <div className="text-sm text-gray-600">Happy Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-physio-blue/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-physio-green/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-physio-teal/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-physio-blue/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Hero;
