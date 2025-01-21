import React, { useState } from 'react';
import { Circle, ArrowLeft, ArrowRight, RotateCw, Home, Sun, Moon } from 'lucide-react';
import { TabBar } from './TabBar';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';

interface BrowserProps {
  children: React.ReactNode;
  url?: string;
}

interface HistoryEntry {
  path: string;
  title: string;
}

export function Browser({ children, url = 'portfolio.dev' }: BrowserProps) {
  const [activeTab, setActiveTab] = useState('Home');
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { isLoading } = useLoading();

  // Initialize history with current location
  React.useEffect(() => {
    const initialEntry = { path: location.pathname, title: getTabFromPath(location.pathname) };
    setHistory([initialEntry]);
    setCurrentIndex(0);
    setActiveTab(getTabFromPath(location.pathname));
  }, []);

  // Update history when location changes
  React.useEffect(() => {
    const newEntry = { path: location.pathname, title: getTabFromPath(location.pathname) };
    
    // Only add to history if it's a new path
    if (history[currentIndex]?.path !== location.pathname) {
      const newHistory = [...history.slice(0, currentIndex + 1), newEntry];
      setHistory(newHistory);
      setCurrentIndex(newHistory.length - 1);
      setActiveTab(getTabFromPath(location.pathname));
    }
  }, [location]);

  const getTabFromPath = (path: string): string => {
    switch (path) {
      case '/':
        return 'Home';
      case '/projects':
        return 'Projects';
      default:
        if (path.startsWith('/projects/')) {
          return 'Project Details';
        }
        return 'Home';
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      navigate(history[newIndex].path);
    }
  };

  const handleForward = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      navigate(history[newIndex].path);
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleHome = () => {
    navigate('/');
  };

  const scrollToSection = (tabName: string) => {
    const element = document.getElementById(tabName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(tabName);
  };

  return (
    <div className="rounded-lg shadow-2xl bg-white dark:bg-gray-900 overflow-hidden border border-purple-200 dark:border-purple-700 transition-colors duration-200">
      <div className="bg-gradient-to-r from-purple-400 to-purple-500 dark:from-purple-700 dark:to-purple-800 px-4 py-2 transition-colors duration-200">
        {/* Browser Header */}
        <div className="flex items-center justify-between mb-2">
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
        
        {/* Navigation Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-2">
          <div className="flex items-center space-x-1 md:space-x-2">
            <button 
              onClick={handleBack}
              disabled={currentIndex <= 0}
              className={`text-purple-900 dark:text-purple-100 p-1 rounded ${
                currentIndex <= 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-white/10'
              }`}
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={handleForward}
              disabled={currentIndex >= history.length - 1}
              className={`text-purple-900 dark:text-purple-100 p-1 rounded ${
                currentIndex >= history.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-white/10'
              }`}
            >
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={handleReload}
              className="text-purple-900 dark:text-purple-100 hover:bg-white/10 p-1 rounded"
            >
              <RotateCw size={16} />
            </button>
            <button 
              onClick={handleHome}
              className="text-purple-900 dark:text-purple-100 hover:bg-white/10 p-1 rounded"
            >
              <Home size={16} />
            </button>
          </div>
          
          {/* URL Bar */}
          <div className="flex-1 bg-white/20 dark:bg-black/20 rounded-md px-3 py-1.5 text-sm text-purple-900 dark:text-purple-100 flex items-center overflow-hidden">
            <span className="mr-2 flex-shrink-0">🔒</span>
            <span className="truncate">{url}</span>
            <span className="ml-2 text-purple-900/60 dark:text-purple-100/60 truncate">
              {location.pathname === '/' ? '/home' : location.pathname}
            </span>
          </div>
        </div>

        {/* Tab Bar */}
        <TabBar activeTab={activeTab} onTabChange={scrollToSection} />
      </div>
      
      {/* Browser Content */}
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200 relative overflow-x-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-white font-medium text-lg">Loading...</p>
            </div>
          </div>
        )}
        <div className="min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}