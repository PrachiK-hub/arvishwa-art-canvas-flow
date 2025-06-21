
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group"
      variant="ghost"
      size="sm"
    >
      <div className="relative">
        {theme === 'light' ? (
          <div className="w-6 h-6 relative">
            {/* Sun Icon */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
              <div className="absolute inset-1 bg-white/20 rounded-full"></div>
            </div>
            {/* Sun Rays */}
            <div className="absolute -inset-2">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
                <div
                  key={rotation}
                  className="absolute w-0.5 h-2 bg-gradient-to-t from-yellow-400 to-orange-500 opacity-60 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: '50% 200%',
                    top: '-4px',
                    left: '50%',
                    marginLeft: '-1px'
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-6 h-6 relative">
            {/* Moon Icon */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full transition-all duration-300 group-hover:scale-110">
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-slate-600/30 rounded-full"></div>
              <div className="absolute top-2.5 right-1.5 w-1 h-1 bg-slate-600/20 rounded-full"></div>
              <div className="absolute bottom-1.5 left-2 w-0.5 h-0.5 bg-slate-600/40 rounded-full"></div>
            </div>
            {/* Stars */}
            <div className="absolute -inset-3">
              {[
                { top: '0px', right: '2px', delay: '0ms' },
                { bottom: '4px', left: '0px', delay: '200ms' },
                { top: '2px', left: '8px', delay: '400ms' }
              ].map((star, index) => (
                <div
                  key={index}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"
                  style={{
                    ...star,
                    transitionDelay: star.delay
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Button>
  );
};

export default ThemeToggle;
