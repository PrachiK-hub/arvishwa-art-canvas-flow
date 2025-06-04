
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in Arvishwa Studio's artwork.

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Inquiry from Arvishwa Studio Website');
    const body = encodeURIComponent(`Hello,

I'm interested in your artwork.

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

Best regards,
${formData.name}`);

    window.location.href = `mailto:hello@arvishwastudio.com?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Instantly send to both WhatsApp and Email
    handleWhatsAppClick();
    handleEmailClick();
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring art into your life? Get in touch and let's create something beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your interest in our artwork..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg rounded-lg font-semibold"
              >
                Send Message Instantly
              </Button>
            </form>
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            
            <div className="grid gap-4">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">📱</span>
                  <h4 className="text-lg font-bold text-gray-800">WhatsApp</h4>
                </div>
                <p className="text-gray-600 mb-4">Get instant responses via WhatsApp</p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white w-full"
                >
                  Chat on WhatsApp
                </Button>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">📧</span>
                  <h4 className="text-lg font-bold text-gray-800">Email</h4>
                </div>
                <p className="text-gray-600 mb-4">hello@arvishwastudio.com</p>
                <Button 
                  onClick={handleEmailClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full"
                >
                  Send Email
                </Button>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">📍</span>
                  <h4 className="text-lg font-bold text-gray-800">Visit Studio</h4>
                </div>
                <p className="text-gray-600 mb-4">Downtown Art District, Mumbai</p>
                <Button 
                  onClick={() => window.open('https://maps.google.com?q=Art+Studio+Mumbai', '_blank')}
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                >
                  View on Map
                </Button>
              </div>
            </div>

            {/* Quick Response Note */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">⚡ Quick Response:</span> We typically respond within 2-4 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
