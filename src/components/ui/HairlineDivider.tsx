import React from 'react';

interface HairlineDividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const HairlineDivider: React.FC<HairlineDividerProps> = ({
  className = '',
  orientation = 'horizontal',
}) => {
  if (orientation === 'vertical') {
    return <div className={`w-[1px] bg-slate-200 h-full ${className}`} aria-hidden="true" />;
  }
  return <div className={`h-[1px] w-full bg-slate-200 ${className}`} aria-hidden="true" />;
};
