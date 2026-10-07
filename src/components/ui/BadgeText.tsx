import React from 'react';

interface BadgeTextProps {
  items: string[];
  separator?: string;
  className?: string;
}

/**
 * Renders metadata as clean unboxed text separated by typographic marks
 * Conforms strictly to Rule 54 (Zero-Pill & Metadata Discipline)
 */
export const BadgeText: React.FC<BadgeTextProps> = ({
  items,
  separator = '·',
  className = '',
}) => {
  const filtered = items.filter(Boolean);
  if (filtered.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium ${className}`}>
      {filtered.map((item, index) => (
        <React.Fragment key={index}>
          <span>{item}</span>
          {index < filtered.length - 1 && (
            <span aria-hidden="true" className="text-slate-400 select-none">
              {separator}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
