
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const themes = [
    { name: 'light', label: '☀️', color: 'bg-white' },
    { name: 'dark', label: '🌙', color: 'bg-slate-800' }
  ];

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-white/20 p-2">
        <div className="flex space-x-1">
          {themes.map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                theme === themeOption.name ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              } ${themeOption.color}`}
              title={`${themeOption.name} theme`}
            >
              <span className="text-lg">{themeOption.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
