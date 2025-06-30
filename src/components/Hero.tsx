
import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-physio-blue/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-physio-green/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-physio-blue/10 text-physio-blue rounded-full text-sm font-medium">
                <CheckCircle size={16} className="mr-2" />
                Expert Care Since 2010
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold leading-tight">
                Restore Your
                <span className="text-gradient block">Movement</span>
                <span className="text-physio-gray">& Health</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Professional physiotherapy services to help you recover from injuries, 
                manage pain, and optimize your physical wellness with personalized treatment plans.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-physio-blue">500+</div>
                <div className="text-gray-600 text-sm">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-physio-green">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-physio-blue">98%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-physio hover:opacity-90 transition-all transform hover:scale-105">
                Book Consultation
                <ArrowRight size={18} className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-physio-blue text-physio-blue hover:bg-physio-blue hover:text-white transition-all"
              >
                <Play size={18} className="mr-2" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional physiotherapist helping patient"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-physio rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Licensed Professionals</div>
                    <div className="text-sm text-gray-600">Certified & Experienced</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg animate-scale-in" style={{ animationDelay: '0.9s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-physio-green">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
