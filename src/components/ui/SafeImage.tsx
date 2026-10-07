import React, { useState } from 'react';
import { Icon } from './Icon';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = '',
  fallbackTitle = 'GoFrosts IQF Produce',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-800 text-slate-400 p-4 select-none ${className}`}>
        <Icon name="Snowflake" size={28} className="text-emerald-500 mb-2 opacity-80" />
        <span className="text-xs font-medium text-slate-300 text-center px-2 line-clamp-1">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};
