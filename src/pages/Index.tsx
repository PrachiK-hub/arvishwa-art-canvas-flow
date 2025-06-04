
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import CustomOrderSection from '@/components/CustomOrderSection';
import ArtistSection from '@/components/ArtistSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Parallax effect for background elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-canvas-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-effect backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-brush font-bold text-gradient">
              Arvishwa Studio
            </div>
            <div className="hidden md:flex space-x-8 text-white font-medium">
              <a href="#home" className="hover:text-saffron-400 transition-colors duration-300">Home</a>
              <a href="#gallery" className="hover:text-saffron-400 transition-colors duration-300">Gallery</a>
              <a href="#custom" className="hover:text-saffron-400 transition-colors duration-300">Custom Orders</a>
              <a href="#artist" className="hover:text-saffron-400 transition-colors duration-300">Artist</a>
              <a href="#contact" className="hover:text-saffron-400 transition-colors duration-300">Contact</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-saffron-400 transition-colors duration-300">
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
        <section id="contact" className="py-20 bg-gradient-to-b from-purple-50 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-elegant font-bold text-purple-900 mb-6">
              Let's Create <span className="text-gradient font-brush">Together</span>
            </h2>
            <p className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto">
              Ready to bring your artistic vision to life? Get in touch and let's start your custom art journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-tilt">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Email</h3>
                <p className="text-purple-600">hello@arvishwastudio.com</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-tilt">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Phone</h3>
                <p className="text-purple-600">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover-tilt">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Studio</h3>
                <p className="text-purple-600">Downtown Art District</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-3xl text-purple-600 hover:text-saffron-500 transition-colors duration-300 hover:scale-110 transform">
                📸
              </a>
              <a href="#" className="text-3xl text-purple-600 hover:text-saffron-500 transition-colors duration-300 hover:scale-110 transform">
                📘
              </a>
              <a href="#" className="text-3xl text-purple-600 hover:text-saffron-500 transition-colors duration-300 hover:scale-110 transform">
                🎵
              </a>
              <a href="#" className="text-3xl text-purple-600 hover:text-saffron-500 transition-colors duration-300 hover:scale-110 transform">
                📌
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-brush font-bold text-gradient mb-4">
              Arvishwa Studio
            </div>
            <p className="text-purple-200 mb-6">Creating art that transforms spaces and touches souls</p>
            <div className="flex justify-center space-x-6 mb-8">
              <span className="text-purple-300">Mon-Fri: 9AM-6PM</span>
              <span className="text-purple-300">•</span>
              <span className="text-purple-300">Weekends: By Appointment</span>
            </div>
            <div className="border-t border-purple-800 pt-6">
              <p className="text-purple-400 text-sm">
                © 2024 Arvishwa Studio. All rights reserved. | Made with ❤️ and lots of paint
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Paint Drops */}
      <div className="fixed bottom-0 left-0 w-full h-32 paint-drip pointer-events-none opacity-30"></div>
    </div>
  );
};

export default Index;
