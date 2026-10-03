import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { motion, useScroll, useTransform } from 'motion/react';

export interface CinematicImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '21/9' | '4/3' | '1/1' | '3/4' | 'auto';
  caption?: string;
  credit?: string;
  zoomOnHover?: boolean;
  parallax?: boolean;
  cursorMode?: 'view' | 'explore' | 'none';
  className?: string;
  priority?: boolean;
}

export const CinematicImage: React.FC<CinematicImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  caption,
  credit,
  zoomOnHover = true,
  parallax = false,
  cursorMode = 'view',
  className = '',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorVariant, resetCursor } = useCursor();
  const prefersReduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '21/9': 'aspect-[21/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    'auto': '',
  }[aspectRatio];

  const handleMouseEnter = () => {
    if (cursorMode === 'view') setCursorVariant('view', 'VIEW');
    else if (cursorMode === 'explore') setCursorVariant('explore', 'EXPLORE');
  };

  return (
    <figure
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={resetCursor}
      className={`group relative overflow-hidden rounded-xl bg-[#F5F2EA] border border-[#EAE4D6] shadow-sm ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#EAE4D6] animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#1A1C1E]/15 border-t-[#1E5E45] animate-spin" />
          </div>
        )}

        <motion.div
          style={parallax && !prefersReduced ? { y: parallaxY, scale: 1.08 } : undefined}
          className="w-full h-full"
        >
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
              zoomOnHover ? 'group-hover:scale-105' : ''
            } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      {(caption || credit) && (
        <figcaption className="p-4 bg-white border-t border-[#EAE4D6] flex items-center justify-between text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] font-sans">
          {caption && <span className="font-medium text-[#1A1C1E]">{caption}</span>}
          {credit && <span className="text-[#6C7382] font-light">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
};

export interface CinematicVideoProps {
  src?: string;
  poster?: string;
  caption?: string;
  aspectRatio?: '16/9' | '21/9' | '4/3';
  className?: string;
}

export const CinematicVideo: React.FC<CinematicVideoProps> = ({
  src = 'https://assets.mixkit.co/videos/preview/mixkit-modern-building-architectural-features-42939-large.mp4',
  poster,
  caption,
  aspectRatio = '16/9',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorVariant, resetCursor } = useCursor();

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting && isPlaying) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setCursorVariant('play');
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setCursorVariant('pause');
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '21/9': 'aspect-[21/9]',
    '4/3': 'aspect-[4/3]',
  }[aspectRatio];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setCursorVariant(isPlaying ? 'pause' : 'play')}
      onMouseLeave={resetCursor}
      className={`relative overflow-hidden rounded-xl bg-[#F5F2EA] border border-[#EAE4D6] shadow-sm group cursor-pointer ${className}`}
      onClick={togglePlay}
    >
      <div className={`relative w-full ${aspectClass} overflow-hidden`}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Video Controls Bar */}
        <div 
          className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-[#1A1C1E]/80 hover:bg-[#1E5E45] backdrop-blur-md border border-white/15 text-white transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-[#1A1C1E]/80 hover:bg-[#1E5E45] backdrop-blur-md border border-white/15 text-white transition-colors cursor-pointer"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {caption && (
            <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#FAF8F5] bg-[#1A1C1E]/80 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 font-semibold">
              {caption}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
