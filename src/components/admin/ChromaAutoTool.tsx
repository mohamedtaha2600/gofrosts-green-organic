import React, { useState, useRef } from 'react';
import { removeChromaBackground, hexToRgb } from '../../utils/chromaKeyRemover';
import { TimelineStationItem } from '../../types/timeline';
import { Icon } from '../ui/Icon';

interface ChromaAutoToolProps {
  stations: TimelineStationItem[];
  selectedStationId?: string;
  onApplyToStation: (stationId: string, dataUrl: string) => void;
}

export const ChromaAutoTool: React.FC<ChromaAutoToolProps> = ({
  stations,
  selectedStationId,
  onApplyToStation,
}) => {
  const [fileDataUrl, setFileDataUrl] = useState<string | null>(null);
  const [resultDataUrl, setResultDataUrl] = useState<string | null>(null);
  const [selectedHex, setSelectedHex] = useState('#0044FF');
  const [tolerance, setTolerance] = useState(48);
  const [feather, setFeather] = useState(14);
  const [isProcessing, setIsProcessing] = useState(false);
  const [targetStation, setTargetStation] = useState(selectedStationId || (stations[0]?.id ?? ''));

  const fileInputRef = useRef<HTMLInputElement>(null);

  const processImage = async (sourceUrl: string, hex: string, tol: number, fea: number) => {
    setIsProcessing(true);
    try {
      const rgb = hexToRgb(hex);
      const res = await removeChromaBackground(sourceUrl, {
        keyColor: rgb,
        tolerance: tol,
        feather: fea,
      });
      setResultDataUrl(res);
    } catch {
      // ignore
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const url = ev.target?.result as string;
      setFileDataUrl(url);
      processImage(url, selectedHex, tolerance, feather);
    };
    reader.readAsDataURL(file);
  };

  const handleApply = () => {
    if (resultDataUrl && targetStation) {
      onApplyToStation(targetStation, resultDataUrl);
    }
  };

  return (
    <div className="space-y-4 p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-white">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold flex items-center gap-2 text-emerald-400">
          <Icon name="Sliders" size={16} />
          <span>مُفرّغ الكروما التلقائي بالذكاء الداخلي (Auto Chroma Remover)</span>
        </h4>
        <span className="text-[11px] font-mono text-neutral-400">Client-Side Canvas Engine</span>
      </div>

      {/* Preset Chroma Buttons */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs text-neutral-400 font-bold">لون الكروما المطلوب تفريغه:</span>
        {[
          { hex: '#0044FF', name: 'أزرق فراولة / فواكه' },
          { hex: '#FF00FF', name: 'ماجنتا بامية / خضار' },
          { hex: '#0033EE', name: 'كوبالت مانجو' },
          { hex: '#0055FF', name: 'أزرق مجفف' },
        ].map((c) => (
          <button
            key={c.hex}
            onClick={() => {
              setSelectedHex(c.hex);
              if (fileDataUrl) processImage(fileDataUrl, c.hex, tolerance, feather);
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              selectedHex === c.hex ? 'ring-2 ring-white text-white' : 'opacity-70 hover:opacity-100 text-neutral-300'
            }`}
            style={{ backgroundColor: c.hex }}
          >
            <span className="drop-shadow">{c.name}</span>
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <div>
          <div className="flex justify-between text-xs text-neutral-400 mb-1">
            <span>حساسية اللون (Tolerance):</span>
            <span className="font-mono text-emerald-400">{tolerance}</span>
          </div>
          <input
            type="range"
            min="10"
            max="110"
            value={tolerance}
            onChange={(e) => {
              const val = Number(e.target.value);
              setTolerance(val);
              if (fileDataUrl) processImage(fileDataUrl, selectedHex, val, feather);
            }}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs text-neutral-400 mb-1">
            <span>تنعيم الحواف (Feather / Smooth):</span>
            <span className="font-mono text-emerald-400">{feather}px</span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={feather}
            onChange={(e) => {
              const val = Number(e.target.value);
              setFeather(val);
              if (fileDataUrl) processImage(fileDataUrl, selectedHex, tolerance, val);
            }}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Upload Zone & Result Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Upload Box */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-neutral-700 hover:border-emerald-500 rounded-xl p-4 flex flex-col items-center justify-center min-h-[160px] cursor-pointer bg-neutral-950 transition-all text-center"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileSelect}
            className="hidden"
          />
          {fileDataUrl ? (
            <img src={fileDataUrl} alt="Original JPG" className="max-h-32 object-contain rounded" />
          ) : (
            <>
              <Icon name="UploadCloud" size={28} className="text-neutral-500 mb-1.5" />
              <span className="text-xs font-bold text-neutral-300">اضغط لرفع صورة JPG مع الكروما</span>
              <span className="text-[10px] text-neutral-500">خلفية زرقاء أو ماجنتا</span>
            </>
          )}
        </div>

        {/* Transparent Preview Box */}
        <div className="rounded-xl p-3 flex flex-col items-center justify-center min-h-[160px] bg-[repeating-conic-gradient(#1f1f1f_0%_25%,#121212_0%_50%)] [background-size:16px_16px] border border-neutral-800 text-center relative overflow-hidden">
          {isProcessing && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-2 text-xs font-bold text-emerald-400">
              <Icon name="Loader2" size={16} className="animate-spin" />
              <span>جاري التفريغ اللحظي...</span>
            </div>
          )}

          {resultDataUrl ? (
            <img src={resultDataUrl} alt="Transparent Result" className="max-h-32 object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]" />
          ) : (
            <span className="text-xs text-neutral-500">معاينة النتيجة المفرغة تظهر هنا فور الرفع</span>
          )}
        </div>
      </div>

      {/* Assignment Bar */}
      {resultDataUrl && (
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-neutral-400">تطبيق على المحطة:</span>
            <select
              value={targetStation}
              onChange={(e) => setTargetStation(e.target.value)}
              className="bg-neutral-800 text-white text-xs font-bold rounded-lg px-2.5 py-1.5 border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              {stations.map((s) => (
                <option key={s.id} value={s.id}>
                  محطة #{s.stationNumber}: {s.produceNameAr}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleApply}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
            >
              <Icon name="Check" size={14} />
              <span>تثبيت في التايم لاين</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
