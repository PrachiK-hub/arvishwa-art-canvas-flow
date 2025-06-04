
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
      {/* Background brushstroke elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800">
              <span className="block mb-2">
                Arvishwa Studio
              </span>
              <span className="block text-2xl md:text-4xl text-orange-600 font-light">
                Art That Breathes. Colors That Speak.
              </span>
            </h1>
          </div>
          
          <p className={`text-lg md:text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Discover original paintings that transform your space into a story of colors and emotions
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Gallery
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => document.getElementById('custom')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Custom Order
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-gray-500 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
