import React from 'react';
import { Circle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function BrowserHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between p-2 md:p-4">
      <div className="flex space-x-2">
        <Circle size={12} className="text-red-500 fill-current" />
        <Circle size={12} className="text-yellow-500 fill-current" />
        <Circle size={12} className="text-green-500 fill-current" />
      </div>
      <button
        onClick={toggleTheme}
        className="p-1 rounded-full hover:bg-white/10 transition-colors"
      >
        {theme === 'dark' ? (
          <Sun size={16} className="text-purple-100" />
        ) : (
          <Moon size={16} className="text-purple-900" />
        )}
      </button>
    </div>
  );
}