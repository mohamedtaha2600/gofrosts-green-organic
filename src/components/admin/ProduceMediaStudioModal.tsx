import React, { useRef } from 'react';
import { useProduceMedia } from '../../hooks/useProduceMedia';
import { Modal } from '../ui/Modal';
import { Icon } from '../ui/Icon';

interface ProduceMediaStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProduceMediaStudioModal: React.FC<ProduceMediaStudioModalProps> = ({
  isOpen,
  onClose,
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
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, WebP, JPG).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        updateFruitSlotImage(slotId, result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Produce Media & Motion Studio"
      subtitle="Configure floating IQF produce physics, upload your 5 custom transparent strawberries & link hero video"
      maxWidth="2xl"
    >
      <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-1">
        {/* Section 1: Motion Controls */}
        <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-white space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-bold flex items-center gap-2">
                <Icon name="Sparkles" size={16} className="text-emerald-400" />
                <span>IQF Produce Parallax & Cryo Effects</span>
              </div>
              <p className="text-xs text-neutral-400">
                Multi-layer scroll velocity physics with 3D mouse tracking
              </p>
            </div>
            <button
              onClick={toggleMotion}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                config.motionEnabled
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-neutral-800 text-neutral-400'
              }`}
            >
              {config.motionEnabled ? 'Enabled (ON)' : 'Disabled (OFF)'}
            </button>
          </div>

          {config.motionEnabled && (
            <div className="space-y-2 pt-2 border-t border-neutral-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300">Float & Parallax Speed Multiplier:</span>
                <span className="font-mono text-emerald-400 font-bold">{config.motionSpeed}x</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="2.0"
                step="0.1"
                value={config.motionSpeed}
                onChange={(e) => setMotionSpeed(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
          )}
        </div>

        {/* Section 2: User's 5 Isolated Strawberry Slots */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Icon name="Camera" size={16} className="text-rose-600" />
                <span>Your 5 Isolated Fruit Image Slots (خانات الفراولة المفرغة)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Bring your 5 transparent PNG pictures here. If empty, the app renders our realistic frozen assets.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {config.customSlots.map((slot, idx) => (
              <div
                key={slot.id}
                className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    Slot {idx + 1}
                  </span>
                  {slot.dataUrl ? (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <Icon name="CheckCircle2" size={12} />
                      Custom PNG Active
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400">Default SVG</span>
                  )}
                </div>

                <div className="h-24 rounded-lg bg-slate-50 border border-dashed border-slate-300 flex items-center justify-center p-2 relative overflow-hidden group">
                  {slot.dataUrl ? (
                    <img
                      src={slot.dataUrl}
                      alt={slot.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md"
                    />
                  ) : (
                    <div className="text-center text-xs text-slate-400">
                      <Icon name="Image" size={24} className="mx-auto text-slate-300 mb-1" />
                      <span>Ready for PNG</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-800 truncate" title={slot.name}>
                    {slot.name}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 pt-1">
                  <input
                    type="file"
                    accept="image/png,image/webp"
                    ref={(el) => { fileInputRefs.current[slot.id] = el; }}
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(slot.id, file);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRefs.current[slot.id]?.click()}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <Icon name="Upload" size={12} />
                    <span>Upload PNG</span>
                  </button>

                  {slot.dataUrl && (
                    <button
                      type="button"
                      onClick={() => clearSlotImage(slot.id)}
                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Clear custom image"
                    >
                      <Icon name="Trash2" size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Guidance & Specifications Box (User Guide) */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 space-y-2">
          <div className="text-xs font-bold flex items-center gap-1.5">
            <Icon name="Info" size={15} className="text-amber-700" />
            <span>المواصفات الفنية للصور والفيديو (Media Preparation Guide):</span>
          </div>
          <ul className="text-xs space-y-1.5 list-disc list-inside text-amber-800 leading-relaxed">
            <li>
              <strong>صور الفواكه المفرغة:</strong> صورة واحدة لكل حبة أو شريحة، صيغة <code>.PNG</code> أو <code>.WebP</code> بخلفية شفافة تماماً (Transparent Background)، مقاس 400x400 إلى 600x600 بكسل، حجم الملف أقل من 150KB.
            </li>
            <li>
              <strong>فيديو الموشن جرافيكس للمقدمة:</strong> ملف <code>.MP4</code> (كودك H.264)، مدة 10 إلى 15 ثانية بحلقة تكرار متصلة (Seamless Loop)، دقة 1080p بمعدل 24-30fps، حجم الملف أقل من 8MB، بدون نصوص معقدة لأن الموقع يعرض النصوص المترجمة رسمياً.
            </li>
          </ul>
        </div>

        {/* Section 4: Hero Video Reel Link */}
        <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-white space-y-3">
          <div className="text-sm font-bold flex items-center gap-2">
            <Icon name="Video" size={16} className="text-rose-500" />
            <span>Hero Motion Graphics Reel (رابط فيديو المقدمة)</span>
          </div>
          <p className="text-xs text-neutral-400">
            Paste a direct URL to your hosted promotional factory video (.mp4 or WebM). Leave blank to use the high-contrast interactive layout.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="url"
              placeholder="https://your-domain.com/videos/gofrosts-factory-reel.mp4"
              value={config.heroVideoUrl}
              onChange={(e) => setHeroVideoUrl(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-white focus:outline-none focus:border-emerald-500"
            />
            {config.heroVideoUrl && (
              <button
                type="button"
                onClick={() => setHeroVideoUrl('')}
                className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
          <button
            type="button"
            onClick={resetAllMedia}
            className="text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
          >
            Reset All to Defaults
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-xs shadow-md cursor-pointer"
          >
            Done & Apply
          </button>
        </div>
      </div>
    </Modal>
  );
};
