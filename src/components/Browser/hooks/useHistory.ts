import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoading } from '../../../contexts/LoadingContext';

interface HistoryEntry {
  path: string;
  title: string;
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const location = useLocation();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

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

  useEffect(() => {
    const initialEntry = { path: location.pathname, title: getTabFromPath(location.pathname) };
    setHistory([initialEntry]);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    const newEntry = { path: location.pathname, title: getTabFromPath(location.pathname) };
    
    if (history[currentIndex]?.path !== location.pathname) {
      const newHistory = [...history.slice(0, currentIndex + 1), newEntry];
      setHistory(newHistory);
      setCurrentIndex(newHistory.length - 1);
    }
  }, [location, currentIndex, history]);

  const navigateWithLoading = (path: string) => {
    startLoading();
    navigate(path);
    setTimeout(stopLoading, 800);
  };

  const goBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      navigateWithLoading(history[newIndex].path);
    }
  };

  const goForward = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      navigateWithLoading(history[newIndex].path);
    }
  };

  const reload = () => {
    startLoading();
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const goHome = () => {
    navigateWithLoading('/');
  };

  return {
    history,
    currentIndex,
    canGoBack: currentIndex > 0,
    canGoForward: currentIndex < history.length - 1,
    goBack,
    goForward,
    reload,
    goHome,
    getTabFromPath,
  };
}