import React from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Home } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { BrowserUrlBar } from './BrowserUrlBar';

interface BrowserNavigationProps {
  url: string;
  canGoBack: boolean;
  canGoForward: boolean;
  onBack: () => void;
  onForward: () => void;
  onReload: () => void;
  onHome: () => void;
}

export function BrowserNavigation({
  url,
  canGoBack,
  canGoForward,
  onBack,
  onForward,
  onReload,
  onHome,
}: BrowserNavigationProps) {
  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-4 px-2 md:px-4 pb-2">
      <div className="flex items-center space-x-1 md:space-x-2">
        <button 
          onClick={onBack}
          disabled={!canGoBack}
          className={`text-purple-900 dark:text-purple-100 p-1 rounded ${
            !canGoBack 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-white/10'
          }`}
        >
          <ArrowLeft size={16} />
        </button>
        <button 
          onClick={onForward}
          disabled={!canGoForward}
          className={`text-purple-900 dark:text-purple-100 p-1 rounded ${
            !canGoForward
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-white/10'
          }`}
        >
          <ArrowRight size={16} />
        </button>
        <button 
          onClick={onReload}
          className="text-purple-900 dark:text-purple-100 hover:bg-white/10 p-1 rounded"
        >
          <RotateCw size={16} />
        </button>
        <button 
          onClick={onHome}
          className="text-purple-900 dark:text-purple-100 hover:bg-white/10 p-1 rounded"
        >
          <Home size={16} />
        </button>
      </div>
      
      <BrowserUrlBar url={url} pathname={location.pathname} />
    </div>
  );
}