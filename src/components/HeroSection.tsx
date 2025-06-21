
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Canvas Textures */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
          }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating SVG Brush Strokes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 text-white/10 animate-bounce" viewBox="0 0 100 100">
          <path d="M10,50 Q30,10 50,50 T90,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-10 w-40 h-40 text-white/10 animate-pulse" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-5xl">
          {/* Glassmorphism Card */}
          <div className={`backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Artist Name with Magic Typography */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                <span className="block font-serif bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  AR Vishwa
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl font-light text-white/90 mt-2">
                  Art Studio
                </span>
              </h1>
            </div>
            
            {/* Magic Tagline */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-xl md:text-3xl text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text font-serif mb-2">
                "Where Colors Speak"
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-8 font-light">
                Discover the magic of handcrafted art that transforms spaces and touches souls
              </p>
            </div>

            {/* CTA Buttons with Glassmorphism */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm w-full sm:w-auto group"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">🔎</span>
                Explore Portfolio
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </Button>
              
              <Button 
                size="lg" 
                className="backdrop-blur-sm bg-white/20 border-2 border-white/30 text-white hover:bg-white/30 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto group"
                onClick={() => document.getElementById('custom')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">👩‍🎨</span>
                About the Artist
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </Button>
              
              <Button 
                size="lg" 
                className="backdrop-blur-sm bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-2 border-emerald-400/30 text-white hover:bg-emerald-500/30 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">📩</span>
                Contact Now
                <div className="absolute inset-0 rounded-full bg-emerald-400/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </Button>
            </div>
          </div>

          {/* Magic Scroll Indicator */}
          <div className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col items-center">
              <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
                <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mt-2 animate-bounce"></div>
              </div>
              <p className="text-white/60 text-sm mt-4 font-light">Scroll to discover magic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Paint Palette Animation */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-pink-400 animate-spin-slow opacity-60"></div>
          <div className="absolute top-2 left-2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-pulse"></div>
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
