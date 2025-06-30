
import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "text-physio-blue"
    },
    {
      icon: Users,
      number: "500+",
      label: "Patients Treated",
      color: "text-physio-green"
    },
    {
      icon: Clock,
      number: "98%",
      label: "Success Rate",
      color: "text-physio-teal"
    },
    {
      icon: MapPin,
      number: "3",
      label: "Clinic Locations",
      color: "text-physio-blue"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-physio-green/10 text-physio-green rounded-full text-sm font-medium">
                About PhysioHeal
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold leading-tight">
                Dedicated to Your
                <span className="text-gradient block">Complete Recovery</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At PhysioHeal, we combine cutting-edge physiotherapy techniques with 
                compassionate care to help you achieve optimal health and mobility. Our 
                team of certified professionals is committed to providing personalized 
                treatment plans that address your unique needs.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience, we've helped hundreds of patients 
                recover from injuries, manage chronic pain, and improve their quality 
                of life through evidence-based physiotherapy practices.
              </p>
            </div>

            {/* Team Member Highlight */}
            <div className="bg-gradient-to-r from-physio-blue/5 to-physio-green/5 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Dr. Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Dr. Sarah Johnson</h4>
                  <p className="text-physio-blue font-medium">Lead Physiotherapist</p>
                  <p className="text-gray-600 text-sm mt-1">
                    "Every patient deserves personalized care that addresses not just symptoms, but the root cause of their condition."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern physiotherapy clinic"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-12 -left-8 right-8">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={achievement.label}
                      className="bg-white p-4 rounded-xl shadow-xl animate-scale-in"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${achievement.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center`}>
                          <achievement.icon className={`${achievement.color} w-5 h-5`} />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900">{achievement.number}</div>
                          <div className="text-xs text-gray-600">{achievement.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
