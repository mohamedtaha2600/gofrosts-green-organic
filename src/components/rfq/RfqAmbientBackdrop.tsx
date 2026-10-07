import React from 'react';

export const RfqAmbientBackdrop: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      <div className="floating-orb-1 absolute -top-28 end-8 w-[540px] h-[540px] bg-gradient-to-br from-rose-200/40 via-pink-300/25 to-purple-900/10 rounded-full blur-3xl" />
      <div className="floating-orb-2 absolute top-1/3 -start-28 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/45 via-teal-100/35 to-emerald-500/15 rounded-full blur-3xl" />
      <div className="floating-orb-3 absolute -bottom-24 end-1/4 w-[420px] h-[420px] bg-gradient-to-tr from-amber-100/40 via-emerald-100/30 to-rose-100/20 rounded-full blur-3xl" />
    </div>
  );
};
