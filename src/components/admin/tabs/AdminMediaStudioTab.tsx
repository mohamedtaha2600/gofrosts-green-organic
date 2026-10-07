import React, { useRef } from 'react';
import { useProduceMedia } from '../../../hooks/useProduceMedia';
import { ChromaAutoTool } from '../ChromaAutoTool';
import { TimelineStationItem } from '../../../types/timeline';
import { Icon } from '../../ui/Icon';

interface AdminMediaStudioTabProps {
  stations: TimelineStationItem[];
  onApplyStationImage: (stationId: string, dataUrl: string) => void;
}

export const AdminMediaStudioTab: React.FC<AdminMediaStudioTabProps> = ({
  stations,
  onApplyStationImage,
}) => {
  const {
    config,
    toggleMotion,
    setMotionSpeed,
    setHeroVideoUrl,
    updateFruitSlotImage,
    clearSlotImage,
    resetAllMedia,
  } = useProduceMedia();

  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleFileUpload = (slotId: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) updateFruitSlotImage(slotId, result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8">
      {/* 1. Motion & Physics Toggle Bar (Exact match for image 2) */}
      <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-white space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMotion}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                config.motionEnabled
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'bg-neutral-800 text-neutral-400'
              }`}
            >
              <Icon name="Activity" size={13} />
              <span>{config.motionEnabled ? 'Enabled (ON)' : 'Disabled (OFF)'}</span>
            </button>
            <div>
              <h4 className="text-sm font-bold flex items-center gap-1.5 text-white">
                <span>IQF Produce Parallax & Cryo Effects</span>
                <Icon name="Sparkles" size={14} className="text-emerald-400" />
              </h4>
              <p className="text-xs text-neutral-400">
                Multi-layer scroll velocity physics with 3D mouse perspective tracking
              </p>
            </div>
          </div>

          <button
            onClick={resetAllMedia}
            className="text-xs text-neutral-400 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Icon name="RotateCcw" size={13} />
            <span>Reset Settings</span>
          </button>
        </div>

        {/* Speed Slider */}
        <div className="pt-2 border-t border-neutral-800">
          <div className="flex justify-between text-xs text-neutral-400 mb-1.5 font-bold">
            <span className="text-emerald-400 font-mono">{config.motionSpeed}x</span>
            <span>Float & Parallax Speed Multiplier</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="2.5"
            step="0.1"
            value={config.motionSpeed}
            onChange={(e) => setMotionSpeed(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>
      </div>

      {/* 2. 5 Isolated Fruit Image Slots (Image 2) */}
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-extrabold text-black flex items-center gap-2">
            <Icon name="Camera" size={17} className="text-rose-600" />
            <span>خانات الفراولة والمحاصيل المفرغة (Your 5 Isolated Fruit Slots)</span>
          </h4>
          <p className="text-xs text-neutral-500">
            ارفع صور PNG مفرغة بدقة عالية، أو استخدم أداة الكروما أدناه لتفريغ خلفيات صور الـ JPG فورياً.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.customSlots.map((slot, index) => (
            <div
              key={slot.id}
              className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600 text-[10px] font-mono font-bold">
                  Slot {index + 1}
                </span>
                <span className="text-[11px] font-bold text-neutral-400 truncate max-w-[140px]">
                  {slot.name}
                </span>
              </div>

              {/* Preview Box with Checkerboard Background */}
              <div className="h-32 rounded-xl bg-[repeating-conic-gradient(#f3f4f6_0%_25%,#ffffff_0%_50%)] [background-size:14px_14px] border border-neutral-200 flex items-center justify-center relative overflow-hidden">
                {slot.dataUrl ? (
                  <img
                    src={slot.dataUrl}
                    alt={slot.name}
                    className="max-h-24 max-w-full object-contain filter drop-shadow-md"
                  />
                ) : (
                  <div className="text-center text-neutral-400">
                    <Icon name="Image" size={24} className="mx-auto mb-1 opacity-50" />
                    <span className="text-[10px] font-bold block">Ready for PNG / WebP</span>
                  </div>
                )}
              </div>

              {/* Upload & Action Buttons */}
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="image/png,image/webp,image/jpeg"
                  ref={(el) => {
                    fileInputRefs.current[slot.id] = el;
                  }}
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFileUpload(slot.id, f);
                  }}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRefs.current[slot.id]?.click()}
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Icon name="Upload" size={13} />
                  <span>{slot.dataUrl ? 'تغيير الصورة' : 'Upload PNG'}</span>
                </button>
                {slot.dataUrl && (
                  <button
                    onClick={() => clearSlotImage(slot.id)}
                    className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                    title="حذف واستعادة الافتراضي"
                  >
                    <Icon name="Trash2" size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. In-Browser Auto-Chroma Remover Engine */}
      <div className="space-y-3 pt-4 border-t border-neutral-200">
        <div>
          <h4 className="text-base font-extrabold text-black flex items-center gap-2">
            <Icon name="Sliders" size={17} className="text-emerald-600" />
            <span>مُفرغ الكروما الذاتي (In-Browser Chroma Remover)</span>
          </h4>
          <p className="text-xs text-neutral-500">
            ارفع أي صورة JPG مصممة بخلفية زرقاء كروما (#0044FF) أو ماجنتا (#FF00FF)، وفرغها بضغطة زر وطبقها على محطات التايم لاين.
          </p>
        </div>

        <ChromaAutoTool
          stations={stations}
          onApplyToStation={onApplyStationImage}
        />
      </div>

      {/* 4. Hero Video Reel Configuration */}
      <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs space-y-3">
        <h4 className="text-sm font-extrabold text-black flex items-center gap-2">
          <Icon name="Video" size={16} className="text-neutral-700" />
          <span>رابط فيديو الهيدر الترويجي (Hero Video / Motion Reel URL)</span>
        </h4>
        <input
          type="url"
          value={config.heroVideoUrl}
          onChange={(e) => setHeroVideoUrl(e.target.value)}
          placeholder="https://example.com/plant-harvest-reel.mp4"
          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs text-neutral-900 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <p className="text-[11px] text-neutral-500">
          يمكنك إدخال رابط فيديو MP4 عالي الجودة لمعاينة مصنع التجميد في بداية الصفحة، أو تركه فارغاً لعرض الشعار النقي.
        </p>
      </div>
    </div>
  );
};
