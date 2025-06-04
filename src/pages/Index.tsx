
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import CustomOrderSection from '@/components/CustomOrderSection';
import ArtistSection from '@/components/ArtistSection';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif font-semibold text-gradient">
              Arvishwa Studio
            </div>
            <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
              <a href="#home" className="hover:text-blue-600 transition-colors duration-300">Home</a>
              <a href="#gallery" className="hover:text-blue-600 transition-colors duration-300">Gallery</a>
              <a href="#custom" className="hover:text-blue-600 transition-colors duration-300">Custom Orders</a>
              <a href="#artist" className="hover:text-blue-600 transition-colors duration-300">Artist</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <GallerySection />
        </section>

        {/* Custom Order Section */}
        <section id="custom">
          <CustomOrderSection />
        </section>

        {/* Artist Section */}
        <section id="artist">
          <ArtistSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-semibold text-gray-900 mb-6">
              Let's Create <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to bring your artistic vision to life? Get in touch and let's start your custom art journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">hello@arvishwastudio.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Studio</h3>
                <p className="text-gray-600">Downtown Art District</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-3xl text-gray-600 hover:text-blue-600 transition-colors duration-300">
                📸
              </a>
              <a href="#" className="text-3xl text-gray-600 hover:text-blue-600 transition-colors duration-300">
                📘
              </a>
              <a href="#" className="text-3xl text-gray-600 hover:text-blue-600 transition-colors duration-300">
                🎵
              </a>
              <a href="#" className="text-3xl text-gray-600 hover:text-blue-600 transition-colors duration-300">
                📌
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-serif font-semibold text-gradient mb-4">
              Arvishwa Studio
            </div>
            <p className="text-gray-300 mb-6">Creating art that transforms spaces and touches souls</p>
            <div className="flex justify-center space-x-6 mb-8">
              <span className="text-gray-400">Mon-Fri: 9AM-6PM</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Weekends: By Appointment</span>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Arvishwa Studio. All rights reserved. | Made with ❤️ and lots of paint
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
