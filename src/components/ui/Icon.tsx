import React from 'react';
import * as Icons from 'lucide-react';

export type IconName = keyof typeof Icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
}

/**
 * Unified Icon component conforming to Rule 6 (Standard Icon Wrapper)
 * Excludes emojis and renders standard Lucide vector icons
 */
export const Icon: React.FC<IconProps> = ({ name, size = 18, className = '', ...props }) => {
  const IconComponent = (Icons[name] as React.ComponentType<{ size?: number | string; className?: string }>) || Icons.HelpCircle;
  return <IconComponent size={size} className={className} {...props} />;
};
