
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Floating brush animation elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-5xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 text-slate-800">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Art That
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in-up text-6xl md:text-8xl lg:text-9xl" 
                    style={{ animationDelay: '0.4s' }}>
                Breathes
              </span>
            </h1>
          </div>
          
          <p className={`text-xl md:text-3xl text-slate-600 mb-12 leading-relaxed font-light transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Colors That Speak. Stories That Touch Souls.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Gallery
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-6 text-xl font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Commission a Painting
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-slate-500 text-sm mt-2">Discover the journey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
