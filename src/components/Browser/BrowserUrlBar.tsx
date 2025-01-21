import React from 'react';

interface BrowserUrlBarProps {
  url: string;
  pathname: string;
}

export function BrowserUrlBar({ url, pathname }: BrowserUrlBarProps) {
  return (
    <div className="flex-1 bg-white/20 dark:bg-black/20 rounded-md px-3 py-1.5 text-sm text-purple-900 dark:text-purple-100 flex items-center overflow-hidden">
      <span className="mr-2 flex-shrink-0">🔒</span>
      <span className="truncate">{url}</span>
      <span className="ml-2 text-purple-900/60 dark:text-purple-100/60 truncate">
        {pathname === '/' ? '/home' : pathname}
      </span>
    </div>
  );
}