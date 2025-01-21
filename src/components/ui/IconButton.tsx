import React from 'react';
import { cn } from '../../utils/cn';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export function IconButton({ icon, className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        'p-2 rounded-full text-amber-300 hover:text-amber-100 transition-colors',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}