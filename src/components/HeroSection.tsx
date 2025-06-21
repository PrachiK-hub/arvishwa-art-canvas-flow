
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, User, Mail } from 'lucide-react';

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
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Animated Canvas Textures */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
          }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/20 to-pink-500/20 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 dark:from-teal-500/20 dark:to-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating SVG Brush Strokes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 text-orange-300/20 dark:text-white/10 animate-bounce" viewBox="0 0 100 100">
          <path d="M10,50 Q30,10 50,50 T90,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-10 w-40 h-40 text-red-300/20 dark:text-white/10 animate-pulse" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-5xl">
          {/* Glassmorphism Card */}
          <div className={`backdrop-blur-lg bg-white/20 dark:bg-black/20 rounded-3xl p-6 md:p-8 lg:p-12 border border-orange-200/30 dark:border-white/20 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Artist Name with Magic Typography */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
                <span className="block font-serif bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  AR Vishwa
                </span>
                <span className="block text-2xl md:text-4xl lg:text-6xl font-light text-slate-700 dark:text-white/90 mt-2">
                  Art Studio
                </span>
              </h1>
            </div>
            
            {/* Magic Tagline */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-lg md:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-orange-600 to-red-600 dark:from-yellow-400 dark:via-orange-400 dark:to-red-400 bg-clip-text font-serif mb-2">
                "Where Colors Speak"
              </p>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-white/80 mb-8 font-light">
                Discover the magic of handcrafted art that transforms spaces and touches souls
              </p>
            </div>

            {/* CTA Buttons with Glassmorphism */}
            <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 dark:from-purple-600 dark:to-blue-600 dark:hover:from-purple-700 dark:hover:to-blue-700 text-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm w-full sm:w-auto group"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Explore Portfolio
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </Button>
              
              <Button 
                size="lg" 
                className="backdrop-blur-sm bg-white/30 dark:bg-black/30 border-2 border-orange-300/50 dark:border-white/30 text-slate-700 dark:text-white hover:bg-white/40 dark:hover:bg-black/40 px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <User className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                About the Artist
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 dark:from-purple-500/20 dark:to-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </Button>
              
              <Button 
                size="lg" 
                className="backdrop-blur-sm bg-gradient-to-r from-green-500/30 to-teal-500/30 dark:from-emerald-500/20 dark:to-teal-500/20 border-2 border-green-400/40 dark:border-emerald-400/30 text-slate-700 dark:text-white hover:bg-green-500/40 dark:hover:bg-emerald-500/30 px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Contact Now
                <div className="absolute inset-0 rounded-full bg-green-400/20 dark:bg-emerald-400/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </Button>
            </div>
          </div>

          {/* Magic Scroll Indicator */}
          <div className={`mt-12 md:mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col items-center">
              <div className="w-6 md:w-8 h-10 md:h-12 border-2 border-slate-400/60 dark:border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/20 dark:bg-white/10">
                <div className="w-1 h-3 md:h-4 bg-gradient-to-b from-orange-600 to-red-600 dark:from-purple-400 dark:to-blue-400 rounded-full mt-2 animate-bounce"></div>
              </div>
              <p className="text-slate-500 dark:text-white/60 text-xs md:text-sm mt-4 font-light">Scroll to discover magic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Paint Palette Animation */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <div className="relative">
          <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-400 dark:from-red-400 dark:to-pink-400 animate-spin-slow opacity-60"></div>
          <div className="absolute top-1 md:top-2 left-1 md:left-2 w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br from-red-400 to-pink-400 dark:from-blue-400 dark:to-purple-400 animate-pulse"></div>
          <div className="absolute top-2 md:top-4 left-2 md:left-4 w-8 md:w-12 h-8 md:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 dark:from-yellow-400 dark:to-orange-400 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
