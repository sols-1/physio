
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
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
      color: "text-physio-blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(123) 456-7890", "Emergency: (123) 456-7891"],
      color: "text-physio-green"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@physioheal.com", "appointments@physioheal.com"],
      color: "text-physio-teal"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"],
      color: "text-physio-blue"
    }
  ];

  return (
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
              <Card key={info.title} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-')}/10 rounded-xl flex items-center justify-center`}>
                      <info.icon className={`${info.color} w-6 h-6`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-gray-900">
                  Book Your Consultation
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-physio-blue"
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your condition or any specific concerns..."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-physio hover:opacity-90 transition-all transform hover:scale-105 h-12"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-r from-physio-blue/20 to-physio-green/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-physio-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Map integration would be implemented here</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
