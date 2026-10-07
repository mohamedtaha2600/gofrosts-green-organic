import React from 'react';
import { Icon } from '../ui/Icon';

interface RfqInteractiveFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  onBlur?: () => void;
  type?: string;
  required?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  dir?: 'ltr' | 'rtl';
  helperSub?: string;
}

export const RfqInteractiveField: React.FC<RfqInteractiveFieldProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  type = 'text',
  required = false,
  hasError = false,
  errorMessage,
  dir,
  helperSub,
}) => {
  const hasVal = value.trim().length > 0;

  return (
    <div className="space-y-1.5">
      <label className="block text-xs sm:text-sm font-bold text-slate-700" htmlFor={id}>
        {label}{' '}
        {helperSub && <span className="text-slate-500 font-normal text-xs">{helperSub}</span>}{' '}
        {required && <span className="text-rose-600 font-extrabold">*</span>}
      </label>

      <div className="relative">
        <input
          id={id}
          type={type}
          dir={dir}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`interactive-field w-full px-4 rounded-xl border text-slate-800 text-sm outline-hidden shadow-xs placeholder:text-slate-400 bg-white transition-all ${
            hasVal ? 'has-val' : ''
          } ${
            hasError
              ? 'border-rose-400 field-error-pulse bg-rose-50/20 focus:border-rose-500'
              : 'border-slate-300/90 focus:border-emerald-500'
          }`}
        />
      </div>

      {hasError && errorMessage && (
        <p className="text-[11px] font-medium text-rose-600 leading-snug flex items-center gap-1.5 pt-0.5 animate-in fade-in">
          <Icon name="AlertCircle" size={13} className="shrink-0 text-rose-500" />
          <span>{errorMessage}</span>
        </p>
      )}
    </div>
  );
};
