import React, { useRef, useState } from 'react';
import { useProduceMedia } from '../../hooks/useProduceMedia';
import { Icon } from '../ui/Icon';

interface HeroVideoReelProps {
  onOpenMediaStudio: () => void;
}

export const HeroVideoReel: React.FC<HeroVideoReelProps> = ({ onOpenMediaStudio }) => {
  const { config } = useProduceMedia();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  if (!config.heroVideoUrl) {
    return null;
  }

  return (
    <div className="relative mt-10 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group max-w-4xl mx-auto aspect-16/9">
      <video
        ref={videoRef}
        src={config.heroVideoUrl}
        poster={config.heroVideoPoster}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Dark gradient overlay for typography preservation */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

      {/* Video controls bottom bar */}
      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlayback}
            className="p-2 rounded-xl bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            <Icon name={isPlaying ? 'Pause' : 'Play'} size={16} />
          </button>
          <span className="text-xs font-mono font-bold text-neutral-300 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-xs border border-white/5">
            Factory Processing Reel
          </span>
        </div>

        <button
          onClick={onOpenMediaStudio}
          className="px-3 py-1.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs backdrop-blur-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
        >
          <Icon name="Settings" size={13} />
          <span>Media Settings</span>
        </button>
      </div>
    </div>
  );
};
