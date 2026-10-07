import React, { useState } from 'react';
import { CHROMA_PRODUCE_SPECS } from '../../data/chromaGuide';
import { TimelineStationItem } from '../../types/timeline';
import { ChromaAutoTool } from './ChromaAutoTool';
import { Modal } from '../ui/Modal';
import { Icon } from '../ui/Icon';

interface ChromaDesignStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  stations: TimelineStationItem[];
  preSelectedStationId?: string;
  onApplyStationImage: (stationId: string, dataUrl: string) => void;
  onClearStationImage: (stationId: string) => void;
}

export const ChromaDesignStudioModal: React.FC<ChromaDesignStudioModalProps> = ({
  isOpen,
  onClose,
  stations,
  preSelectedStationId,
  onApplyStationImage,
  onClearStationImage,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPrompt = (id: string, promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="استوديو التصميم 3D، دليل الكروما وتفريغ الخلفيات التلقائي"
      maxWidth="4xl"
    >
      <div className="space-y-6 text-sm">
        {/* Chroma Rules Banner */}
        <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Icon name="Lightbulb" size={17} />
            <span>قواعد ألوان الكروما المعتمدة علمياً للتفريغ النظيف:</span>
          </div>
          <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside leading-relaxed">
            <li>
              <strong className="text-blue-400">الفواكه الحمراء (فراولة، رمان):</strong> خلفية زرقاء ملكية كروما (<code className="bg-black px-1.5 py-0.5 rounded text-blue-300">#0044FF</code>). يُمنع الأخضر لأن عنق الفراولة أخضر.
            </li>
            <li>
              <strong className="text-pink-400">الخضروات والمحاصيل الخضراء (بامية، خرشوف، فاصوليا):</strong> خلفية ماجنتا فوشيا كروما (<code className="bg-black px-1.5 py-0.5 rounded text-pink-300">#FF00FF</code>). تعطي تفريغاً فورياً دون فقدان أي شعيرة خضراء.
            </li>
            <li>
              <strong className="text-amber-400">الفواكه الصفراء والبرتقالية (مانجو، مشمش):</strong> خلفية كروما زرقاء كوبالت (<code className="bg-black px-1.5 py-0.5 rounded text-sky-300">#0033EE</code>).
            </li>
          </ul>
        </div>

        {/* In-Browser Auto Chroma Remover */}
        <ChromaAutoTool
          stations={stations}
          selectedStationId={preSelectedStationId}
          onApplyToStation={(stationId, dataUrl) => {
            onApplyStationImage(stationId, dataUrl);
          }}
        />

        {/* Ready-to-Copy 3D Prompts Catalog */}
        <div className="space-y-3">
          <h4 className="font-extrabold text-black text-base flex items-center gap-2">
            <Icon name="Copy" size={16} className="text-emerald-600" />
            <span>أوصاف وبرومبتات التوليد والتصميم 3D (جاهزة للنسخ بنقرة واحدة):</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
            {CHROMA_PRODUCE_SPECS.map((spec) => (
              <div
                key={spec.id}
                className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/60 hover:bg-white transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-black text-xs">{spec.produceNameAr}</span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-xs"
                      style={{ backgroundColor: spec.chromaHex }}
                    >
                      {spec.chromaNameAr}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 line-clamp-2">
                    {spec.colorReasonAr}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-200/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400">
                    {spec.itemCount === 'single' ? '1x Single' : spec.itemCount === 'pair' ? '2x Pair' : '3x Trio'}
                  </span>
                  <button
                    onClick={() => handleCopyPrompt(spec.id, spec.promptDescription)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    <Icon name={copiedId === spec.id ? 'Check' : 'Copy'} size={12} className={copiedId === spec.id ? 'text-emerald-400' : ''} />
                    <span>{copiedId === spec.id ? 'تم النسخ!' : 'نسخ البرومبت'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Active Station Custom Slots */}
        <div className="pt-2 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
          <span>
            المحطات المخصصة حالياً:{' '}
            <strong className="text-black">
              {stations.filter((s) => Boolean(s.customImageDataUrl)).length} من {stations.length}
            </strong>
          </span>
          <div className="flex gap-2">
            {stations
              .filter((s) => Boolean(s.customImageDataUrl))
              .map((s) => (
                <button
                  key={s.id}
                  onClick={() => onClearStationImage(s.id)}
                  className="px-2 py-1 rounded bg-neutral-100 hover:bg-rose-100 text-rose-700 font-bold text-[10px] transition-colors flex items-center gap-1 cursor-pointer"
                  title="استعادة العرض الافتراضي لهذه المحطة"
                >
                  <Icon name="Trash2" size={10} />
                  <span>محطة {s.stationNumber}</span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
