
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import CustomOrderSection from '@/components/CustomOrderSection';
import VisualJourneySection from '@/components/VisualJourneySection';
import StudioPhotosSection from '@/components/StudioPhotosSection';
import ExhibitionsSection from '@/components/ExhibitionsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation Bar */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-lg rounded-full shadow-xl border border-gray-200 px-6 py-3">
          <div className="flex space-x-4">
            <a href="#home" className="p-3 rounded-full hover:bg-orange-100 transition-colors duration-300">
              <span className="text-xl">🏠</span>
            </a>
            <a href="#gallery" className="p-3 rounded-full hover:bg-orange-100 transition-colors duration-300">
              <span className="text-xl">🖼️</span>
            </a>
            <a href="#custom" className="p-3 rounded-full hover:bg-orange-100 transition-colors duration-300">
              <span className="text-xl">🎨</span>
            </a>
            <a href="#journey" className="p-3 rounded-full hover:bg-orange-100 transition-colors duration-300">
              <span className="text-xl">✨</span>
            </a>
            <a href="#contact" className="p-3 rounded-full hover:bg-orange-100 transition-colors duration-300">
              <span className="text-xl">💬</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>

        <section id="custom">
          <CustomOrderSection />
        </section>

        <section id="journey">
          <VisualJourneySection />
        </section>

        <section id="studio">
          <StudioPhotosSection />
        </section>

        <section id="exhibitions">
          <ExhibitionsSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section id="social">
          <SocialMediaSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold text-orange-400 mb-4">
            Arvishwa Studio
          </div>
          <p className="text-gray-300 mb-6">Creating art that transforms spaces and touches souls</p>
          <div className="flex justify-center space-x-6 mb-8">
            <span className="text-gray-400">Mon-Fri: 9AM-6PM</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Weekends: By Appointment</span>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Arvishwa Studio. All rights reserved. | Made with ❤️ and lots of paint
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
