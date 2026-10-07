import React, { useState } from 'react';
import { Language } from '../../types';
import { Modal } from '../ui/Modal';
import { Icon } from '../ui/Icon';

interface FactoryVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const FactoryVideoModal: React.FC<FactoryVideoModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeStage, setActiveStage] = useState<'intake' | 'tunnel' | 'optical' | 'loading'>('tunnel');

  const stages = [
    {
      id: 'intake' as const,
      title: lang === 'ar' ? 'استلام المحاصيل والفحص' : 'Harvest Intake & Screening',
      time: '0:00 - 0:04',
      desc: 'Nile Delta farms fresh harvest inspection with pesticide residue and ripeness tests.',
    },
    {
      id: 'tunnel' as const,
      title: lang === 'ar' ? 'نفق التجميد السريع -40°C' : '-40°C IQF Freezing Tunnel',
      time: '0:04 - 0:10',
      desc: 'Fluidized individual flash-freezing in cryogenic high-velocity airflow in minutes.',
    },
    {
      id: 'optical' as const,
      title: lang === 'ar' ? 'الفرز البصري بالليزر' : 'Optical Laser Sorting',
      time: '0:10 - 0:15',
      desc: 'Automated defect expulsion and X-ray metal detection before sterile cleanroom packing.',
    },
    {
      id: 'loading' as const,
      title: lang === 'ar' ? 'تحميل الحاويات 40ft' : '40ft Reefer Loading',
      time: '0:15 - 0:20',
      desc: 'Direct -18°C cold dock transfer into marine reefer containers dispatched to ports.',
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={lang === 'ar' ? 'جولة مرئية: خطوط معالجة وتجميد الخضروات والفواكه IQF' : 'Visual Tour: GoFrosts IQF Processing & Freezing Lines'}
      subtitle="Samanoud Factory, Gharbia Governorate, Egypt"
      maxWidth="4xl"
    >
      <div className="space-y-5">
        {/* Cinema Video Player Container */}
        <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-2xl flex items-center justify-center group">
          {/* Animated Ambient Factory Simulation Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/80 via-black to-neutral-900" />
          
          <div className="relative z-10 text-center space-y-3 p-6 max-w-lg">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
              <Icon name="Play" size={28} className="translate-x-0.5 text-emerald-400" />
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                Full-HD 60FPS Video Ready
              </span>
              <h4 className="text-lg font-extrabold text-white mt-1">
                GoFrosts Automated IQF Line Tour (Samanoud Plant)
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mt-1">
                {lang === 'ar'
                  ? 'يمكنك وضع ملف الفيديو الخاص بك مباشرة في المجلد العام `public/factory-hero-video.mp4` وسيعمل تلقائياً كخلفية سينمائية!'
                  : 'You can drop your video file directly into `public/factory-hero-video.mp4` to replace this with your motion graphics loop!'}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Current Stage: {stages.find((s) => s.id === activeStage)?.title}</span>
            </div>
          </div>
        </div>

        {/* Video Chapters Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {stages.map((st) => (
            <button
              key={st.id}
              onClick={() => setActiveStage(st.id)}
              className={`p-3 rounded-xl border text-start transition-all cursor-pointer ${
                activeStage === st.id
                  ? 'bg-neutral-900 text-white border-emerald-500 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="text-[10px] font-mono text-emerald-600 font-bold">{st.time}</div>
              <div className="text-xs font-bold mt-0.5 line-clamp-1">{st.title}</div>
            </button>
          ))}
        </div>

        {/* Technical specs note for the user */}
        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-950 flex items-start gap-2.5">
          <Icon name="Info" size={16} className="text-emerald-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>مواصفات تجهيز الفيديو الموصى بها:</strong> فيديو بصيغة MP4/WebM، أبعاد 1920x1080، مدة 15-20 ثانية، بدون صوت، حجم خفيف (أقل من 5 ميجابايت) ليتم تحميله فورياً بدون أي تأخير على سرعة الموقع!
          </div>
        </div>
      </div>
    </Modal>
  );
};
