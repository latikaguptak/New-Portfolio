import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = ['Home', 'Skills', 'Experience', 'Education', 'Projects'];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleTabClick = (tab: string) => {
    if (location.pathname !== '/') {
      // Store the target tab before navigation
      const targetTab = tab;
      navigate('/', { replace: true });
      
      // Wait for navigation and DOM update
      requestAnimationFrame(() => {
        const element = document.getElementById(targetTab.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          onTabChange(targetTab);
        }
      });
    } else {
      const element = document.getElementById(tab.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onTabChange(tab);
      }
    }
    setIsMenuOpen(false);
  };

  const getCurrentSection = () => {
    if (location.pathname === '/projects') return 'Projects';
    if (location.pathname.startsWith('/projects/')) return 'Project Details';
    return activeTab;
  };

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center border-b border-purple-600/30 px-4 py-2">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
          <span className="text-purple-100">{getCurrentSection()}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="menu-button text-purple-100 hover:bg-purple-800/50 p-1 rounded-md transition-colors"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden absolute top-full left-0 right-0 bg-purple-500 dark:bg-purple-800 z-50 shadow-lg border-t border-purple-400/20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`
                w-full text-left px-6 py-3 cursor-pointer transition-colors
                ${getCurrentSection() === tab 
                  ? 'bg-white/10 text-white font-medium' 
                  : 'text-purple-100 hover:bg-white/5'
                }
                ${tab !== tabs[tabs.length - 1] ? 'border-b border-purple-400/20' : ''}
              `}
            >
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-purple-300 mr-3"></span>
                {tab}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Desktop Tabs */}
      <div className="hidden md:flex border-b border-purple-600/30">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`
              relative px-6 py-2 flex items-center space-x-2 cursor-pointer
              ${getCurrentSection() === tab 
                ? 'bg-white text-purple-900 border-t border-l border-r border-purple-600/30 rounded-t-md -mb-px' 
                : 'bg-purple-800/30 text-purple-100 hover:bg-purple-800/50 border-r border-purple-600/30'
              }
              group
            `}
          >
            <span className="flex items-center">
              <span className="w-3 h-3 mr-2 rounded-full bg-purple-500"></span>
              {tab}
            </span>
            <X 
              size={14} 
              className={`
                ml-2 opacity-0 group-hover:opacity-100 transition-opacity
                ${getCurrentSection() === tab ? 'text-purple-900' : 'text-purple-200'}
              `}
            />
          </div>
        ))}
        <div className="px-3 py-2 text-purple-300 hover:bg-purple-800/30 cursor-pointer">
          +
        </div>
      </div>
    </div>
  );
}