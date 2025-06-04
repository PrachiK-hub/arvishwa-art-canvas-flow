
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold mb-6 text-gray-900">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Welcome to
              </span>
              <span className="block text-gradient animate-fade-in-up text-6xl md:text-8xl lg:text-9xl" 
                    style={{ animationDelay: '0.4s' }}>
                Arvishwa Studio
              </span>
            </h1>
          </div>
          
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Where imagination meets artistry. Discover hand-crafted paintings, commission custom masterpieces, 
            and immerse yourself in the world of professional fine art.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
            >
              Explore Gallery
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
            >
              Order Custom Art
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-gray-500 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
