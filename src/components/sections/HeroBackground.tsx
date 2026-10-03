import React, { useRef } from 'react';

export interface HeroBackgroundProps {
  /**
   * Dedicated Editable Media Source:
   * Supports MP4 video URL or JPG/PNG/WebP image URL.
   * Can be replaced at any time without touching Hero layout or typography.
   */
  mediaUrl?: string;
  mediaType?: 'video' | 'image' | 'auto';
  posterUrl?: string;
}

/**
 * HeroBackground: Independent Editable Media Layer
 * - Object Fit: cover
 * - Position: absolute (inset-0)
 * - Width / Height: 100%
 * - z-index: 0
 * - Does not contain upload UI, fake graphics, or layout wrappers
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  mediaUrl = 'https://res.cloudinary.com/ds5s7shuo/video/upload/v1787995629/Architectural_sketch_converging___202608291456_jw5qjn.mp4',
  mediaType = 'auto',
  posterUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!mediaUrl) {
    return <div className="absolute inset-0 w-full h-full bg-[#135A5C]" style={{ zIndex: 0 }} />;
  }

  const isVideo =
    mediaType === 'video' ||
    (mediaType === 'auto' &&
      (mediaUrl.endsWith('.mp4') || mediaUrl.includes('/video/upload/') || mediaUrl.includes('video')));

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={mediaUrl}
          poster={posterUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <img
          src={mediaUrl}
          alt="Vaswani Luxury Architectural Residence"
          className="w-full h-full object-cover object-center"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          loading="eager"
          fetchPriority="high"
        />
      )}
    </div>
  );
};
