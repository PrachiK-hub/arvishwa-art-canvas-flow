import React, { useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import HeroSection from '@/components/HeroSection';
import VirtualGallerySection from '@/components/VirtualGallerySection';
import CustomOrderSection from '@/components/CustomOrderSection';
import VisualJourneySection from '@/components/VisualJourneySection';
import StudioPhotosSection from '@/components/StudioPhotosSection';
import ExhibitionsSection from '@/components/ExhibitionsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import FAQSection from '@/components/FAQSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Floating Navigation Bar */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="glass-card rounded-full shadow-xl px-6 py-3">
          <div className="flex space-x-4">
            <a href="#home" className="p-3 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300">
              <span className="text-xl">🏠</span>
            </a>
            <a href="#about" className="p-3 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300">
              <span className="text-xl">👤</span>
            </a>
            <a href="#gallery" className="p-3 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300">
              <span className="text-xl">🖼️</span>
            </a>
            <a href="#custom" className="p-3 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300">
              <span className="text-xl">🎨</span>
            </a>
            <a href="#contact" className="p-3 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300">
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

        <section id="about">
          <AboutSection />
        </section>

        <section id="gallery">
          <VirtualGallerySection />
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
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 canvas-texture">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold font-handwritten text-orange-400 mb-4 animate-magic-text">
            AR Vishwa Studio
          </div>
          <p className="text-gray-300 mb-6 font-serif italic">Creating art that transforms spaces and touches souls</p>
          <div className="flex justify-center space-x-6 mb-8">
            <span className="text-gray-400">Mon-Fri: 9AM-6PM</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Weekends: By Appointment</span>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 AR Vishwa Studio. All rights reserved. | Crafted with ❤️ and endless creativity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
