
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import MoodGallerySection from '@/components/MoodGallerySection';
import VirtualGallerySection from '@/components/VirtualGallerySection';
import CustomOrderSection from '@/components/CustomOrderSection';
import ExhibitionsSection from '@/components/ExhibitionsSection';
import ArtistSection from '@/components/ArtistSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@arvishwastudio.com';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/15551234567', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com?q=Downtown+Art+District', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Floating Navigation Bar */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:top-6 md:left-auto md:right-6 md:transform-none">
        <div className="bg-white/90 backdrop-blur-lg rounded-full shadow-2xl border border-white/20">
          <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 p-2">
            <a href="#home" className="p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 group">
              <span className="text-xl">🏠</span>
              <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Home
              </div>
            </a>
            <a href="#about" className="p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 group">
              <span className="text-xl">👨‍🎨</span>
              <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                About
              </div>
            </a>
            <a href="#gallery" className="p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 group">
              <span className="text-xl">🖼️</span>
              <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Gallery
              </div>
            </a>
            <a href="#mood" className="p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 group">
              <span className="text-xl">🎨</span>
              <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Mood Art
              </div>
            </a>
            <a href="#virtual" className="p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 group">
              <span className="text-xl">🕶️</span>
              <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Virtual Tour
              </div>
            </a>
            <a href="#custom" className="p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 group">
              <span className="text-xl">🎯</span>
              <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Custom Orders
              </div>
            </a>
            <a href="#exhibitions" className="p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 group">
              <span className="text-xl">📅</span>
              <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Exhibitions
              </div>
            </a>
            <a href="#contact" className="p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 group">
              <span className="text-xl">💬</span>
              <div className="hidden md:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Contact
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <GallerySection />
        </section>

        {/* Mood Gallery Section */}
        <section id="mood">
          <MoodGallerySection />
        </section>

        {/* Virtual Gallery Section */}
        <section id="virtual">
          <VirtualGallerySection />
        </section>

        {/* Custom Order Section */}
        <section id="custom">
          <CustomOrderSection />
        </section>

        {/* Exhibitions Section */}
        <section id="exhibitions">
          <ExhibitionsSection />
        </section>

        {/* Artist Section */}
        <section id="artist">
          <ArtistSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
              Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Together</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Ready to bring your artistic vision to life? Get in touch and let's start your custom art journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600">hello@arvishwastudio.com</p>
                <button 
                  onClick={handleEmailClick}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Send Email
                </button>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">WhatsApp</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                  Chat Now
                </button>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Studio Visit</h3>
                <p className="text-slate-600">Downtown Art District</p>
                <button 
                  onClick={handleMapClick}
                  className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  Book Visit
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">🎨 Join Our Art Community</h3>
              <p className="text-blue-100 mb-6">Get free digital wallpapers, art tips, and first access to new collections</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-slate-800"
                />
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-3xl text-slate-600 hover:text-blue-600 transition-colors duration-300">
                📸
              </a>
              <a href="#" className="text-3xl text-slate-600 hover:text-blue-600 transition-colors duration-300">
                📘
              </a>
              <a href="#" className="text-3xl text-slate-600 hover:text-blue-600 transition-colors duration-300">
                🎵
              </a>
              <a href="#" className="text-3xl text-slate-600 hover:text-blue-600 transition-colors duration-300">
                📌
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Arvishwa Studio
            </div>
            <p className="text-slate-300 mb-6">Creating art that transforms spaces and touches souls</p>
            <div className="flex justify-center space-x-6 mb-8">
              <span className="text-slate-400">Mon-Fri: 9AM-6PM</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">Weekends: By Appointment</span>
            </div>
            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-500 text-sm">
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
