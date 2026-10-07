import React from 'react';

interface SpecsGradesTableProps {
  gradesTitle: string;
  grades: { name: string; detail: string }[];
  brixLabel: string;
  brixValue: string;
}

export const SpecsGradesTable: React.FC<SpecsGradesTableProps> = ({
  gradesTitle,
  grades,
  brixLabel,
  brixValue,
}) => {
  return (
    <div className="rounded-2xl p-3 bg-white/95 border border-white/70 shadow-xs hover:bg-white transition-all text-start">
      <h4 className="text-xs font-bold text-stone-900 mb-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#00a86b]" />
        <span>{gradesTitle}</span>
      </h4>
      <div className="grid grid-cols-2 gap-2 text-[11px]">
        {grades.map((g, idx) => (
          <div key={idx} className="p-2 bg-stone-50 rounded-xl border border-stone-200/70">
            <span className="font-bold text-stone-900 block truncate">{g.name}</span>
            <span className="text-stone-600 truncate block">{g.detail}</span>
          </div>
        ))}
        <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200">
          <span className="font-bold text-emerald-900 block truncate">{brixLabel}</span>
          <span className="text-emerald-700 font-extrabold truncate block">{brixValue}</span>
        </div>
      </div>
    </div>
  );
};
