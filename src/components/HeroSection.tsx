
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 overflow-hidden brush-cursor">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Brushes */}
        <div 
          className="absolute w-8 h-8 bg-saffron-400 rounded-full opacity-70 animate-float"
          style={{
            left: '10%',
            top: '20%',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-float"
          style={{
            left: '80%',
            top: '30%',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-10 h-10 bg-canvas-300 rounded-full opacity-50 animate-float"
          style={{
            left: '70%',
            top: '70%',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-12 h-12 bg-saffron-300 rounded-full opacity-40 animate-float"
          style={{
            left: '20%',
            top: '80%',
            animationDelay: '3s'
          }}
        />

        {/* Paint Splashes */}
        <div className="absolute w-20 h-20 bg-gradient-to-br from-purple-500 to-transparent rounded-full blur-xl opacity-30" 
             style={{ left: '15%', top: '40%' }} />
        <div className="absolute w-32 h-32 bg-gradient-to-br from-saffron-400 to-transparent rounded-full blur-xl opacity-20" 
             style={{ left: '60%', top: '10%' }} />
        <div className="absolute w-24 h-24 bg-gradient-to-br from-canvas-400 to-transparent rounded-full blur-xl opacity-25" 
             style={{ left: '80%', top: '60%' }} />
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-4 h-4 bg-saffron-400 rounded-full pointer-events-none z-50 opacity-70 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x && mousePosition.y ? 1 : 0})`
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-elegant font-bold mb-6 text-white">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Welcome to
              </span>
              <span className="block text-gradient animate-fade-in-up font-brush text-6xl md:text-8xl lg:text-9xl" 
                    style={{ animationDelay: '0.4s' }}>
                Arvishwa Studio
              </span>
            </h1>
          </div>
          
          <p className={`text-xl md:text-2xl text-canvas-100 mb-8 leading-relaxed transition-all duration-1000 delay-600 ${
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
              className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-glow"
            >
              Explore Gallery
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-canvas-200 text-canvas-100 hover:bg-canvas-200 hover:text-purple-900 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
            >
              Order Custom Art
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-canvas-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-canvas-200 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-canvas-200 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Canvas Texture Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
