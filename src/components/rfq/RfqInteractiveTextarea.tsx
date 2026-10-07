import React from 'react';

interface RfqInteractiveTextareaProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  onBlur?: () => void;
}

export const RfqInteractiveTextarea: React.FC<RfqInteractiveTextareaProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  const hasVal = value.trim().length > 0;

  return (
    <div className="space-y-1.5 md:col-span-2">
      <label className="block text-xs sm:text-sm font-bold text-slate-700" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`interactive-textarea w-full px-4 rounded-xl border border-slate-300/90 bg-white text-slate-800 text-sm focus:border-emerald-500 outline-hidden resize-y shadow-xs placeholder:text-slate-400 ${
            hasVal ? 'has-val' : ''
          }`}
        />
      </div>
    </div>
  );
};
