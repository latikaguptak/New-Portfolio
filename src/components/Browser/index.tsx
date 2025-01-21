import React from 'react';
import { useHistory } from './hooks/useHistory';
import { BrowserHeader } from './BrowserHeader';
import { BrowserNavigation } from './BrowserNavigation';
import { BrowserContent } from './BrowserContent';
import { TabBar } from '../TabBar';

interface BrowserProps {
  children: React.ReactNode;
  url?: string;
}

export function Browser({ children, url = 'portfolio.dev' }: BrowserProps) {
  const [activeTab, setActiveTab] = React.useState('Home');
  const {
    canGoBack,
    canGoForward,
    goBack,
    goForward,
    reload,
    goHome,
  } = useHistory();

  const scrollToSection = (tabName: string) => {
    const element = document.getElementById(tabName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(tabName);
  };

  return (
    <div className="rounded-lg shadow-2xl bg-white dark:bg-gray-900 overflow-hidden border border-purple-200 dark:border-purple-700 transition-colors duration-200">
      <div className="bg-gradient-to-r from-purple-400 to-purple-500 dark:from-purple-700 dark:to-purple-800 transition-colors duration-200">
        <BrowserHeader />
        <BrowserNavigation
          url={url}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
          onBack={goBack}
          onForward={goForward}
          onReload={reload}
          onHome={goHome}
        />
        <TabBar activeTab={activeTab} onTabChange={scrollToSection} />
      </div>
      
      <BrowserContent>
        {children}
      </BrowserContent>
    </div>
  );
}