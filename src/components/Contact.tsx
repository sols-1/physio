
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import BookingModal from './BookingModal';

const Contact = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      details: ["123 Health Street", "Medical District", "New York, NY 10001"],
      color: "text-physio-blue",
      bgColor: "bg-physio-blue/10"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(123) 456-7890", "Emergency: (123) 456-7891"],
      color: "text-physio-green",
      bgColor: "bg-physio-green/10"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@physioheal.com", "appointments@physioheal.com"],
      color: "text-physio-teal",
      bgColor: "bg-physio-teal/10"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"],
      color: "text-physio-blue",
      bgColor: "bg-physio-blue/10"
    }
  ];

  return (
    <>
      <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to start your healing journey? Contact us today to schedule your consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`${info.color} w-6 h-6 group-hover:animate-pulse`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-physio-blue transition-colors duration-300">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Book Button */}
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2 bg-gradient-physio">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-white mb-2">Need Immediate Care?</h3>
                  <p className="text-white/90 text-sm mb-4">Book your appointment in under 2 minutes</p>
                  <Button 
                    onClick={() => setIsBookingOpen(true)}
                    variant="outline" 
                    className="bg-white text-physio-blue hover:bg-gray-100 border-white group-hover:scale-105 transition-all duration-300"
                  >
                    Quick Book
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold mb-6 text-gray-900">
                    Send Us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-physio-blue transition-colors duration-300">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="h-12 focus:ring-physio-blue focus:border-physio-blue hover:border-physio-blue/50 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-physio-blue transition-colors duration-300">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="h-12 focus:ring-physio-blue focus:border-physio-blue hover:border-physio-blue/50 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-physio-blue transition-colors duration-300">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="h-12 focus:ring-physio-blue focus:border-physio-blue hover:border-physio-blue/50 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-physio-blue transition-colors duration-300">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physio-blue hover:border-physio-blue/50 transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          <option value="sports-injury">Sports Injury Recovery</option>
                          <option value="pain-management">Pain Management</option>
                          <option value="manual-therapy">Manual Therapy</option>
                          <option value="injury-prevention">Injury Prevention</option>
                          <option value="group-sessions">Group Sessions</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-physio-blue transition-colors duration-300">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your condition or any specific concerns..."
                        className="min-h-[120px] resize-none focus:ring-physio-blue focus:border-physio-blue hover:border-physio-blue/50 transition-all duration-300"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-physio hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-12 group"
                    >
                      <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
              <div className="h-96 bg-gradient-to-r from-physio-blue/20 to-physio-green/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-physio-blue/10 to-physio-green/10 group-hover:from-physio-blue/20 group-hover:to-physio-green/20 transition-all duration-500"></div>
                <div className="text-center relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-16 h-16 text-physio-blue mx-auto mb-4 group-hover:animate-bounce" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Us Here</h3>
                  <p className="text-gray-600">123 Health Street, Medical District, New York</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 hover:bg-physio-blue hover:text-white transition-all duration-300"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Contact;
