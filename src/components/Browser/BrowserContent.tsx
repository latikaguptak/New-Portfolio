import React from 'react';
import { LoadingOverlay } from './LoadingOverlay';
import { useLoading } from '../../contexts/LoadingContext';

interface BrowserContentProps {
  children: React.ReactNode;
}

export function BrowserContent({ children }: BrowserContentProps) {
  const { isLoading } = useLoading();

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200 relative overflow-x-hidden">
      <LoadingOverlay isLoading={isLoading} />
      <div className="min-w-0">
        {children}
      </div>
    </div>
  );
}