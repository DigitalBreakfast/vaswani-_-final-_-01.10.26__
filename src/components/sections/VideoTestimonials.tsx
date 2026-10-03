import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ExternalLink, X, MapPin } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export interface VideoTestimonialItem {
  id: string;
  resident: string;
  project: string;
  location: string;
  quote: string;
  youtubeUrl: string;
  duration?: string;
  customThumbnail?: string;
}

// ─────────────────────────────────────────────────────────────
// CONFIGURABLE VIDEO TESTIMONIALS
// You can replace the youtubeUrl with your own YouTube video links.
// Supported formats:
//   - https://www.youtube.com/watch?v=VIDEO_ID
//   - https://youtu.be/VIDEO_ID
//   - https://www.youtube.com/embed/VIDEO_ID
// ─────────────────────────────────────────────────────────────
export const VIDEO_TESTIMONIALS: VideoTestimonialItem[] = [
  {
    id: 'video-1',
    resident: 'Vikram & Radhika Singhal',
    project: 'Vaswani Seascape',
    location: 'Juhu, Mumbai',
    quote:
      'The quiet acoustic quality and natural sea breeze in our sky villa exceeded every expectation. It is truly a generational sanctuary.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    duration: '2:40 MIN',
    customThumbnail:
      'https://res.cloudinary.com/ds5s7shuo/image/upload/v1779550159/Make_setting_night_time_202605232058_w4cpyk.jpg',
  },
  {
    id: 'video-2',
    resident: 'Dr. Naresh & Kavita Iyer',
    project: 'Vaswani Vista One',
    location: 'Kandivali West, Mumbai',
    quote:
      'From clear title approvals to handover on the exact promised date, the transparency of the Vaswani team was exemplary.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    duration: '3:15 MIN',
    customThumbnail:
      'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975654/vista_one_vaswani_d8lkkw.jpg',
  },
  {
    id: 'video-3',
    resident: 'Tara & Vikram Mehra',
    project: 'Vaswani Bel Air',
    location: 'Bandra West, Mumbai',
    quote:
      'Living here feels like stepping into timeless calm. There is an unspoken reverence in the way the spaces and proportions flow.',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    duration: '2:55 MIN',
    customThumbnail:
      'https://res.cloudinary.com/ds5s7shuo/image/upload/v1790975653/Vaswani_Bel_Air.png_20261003022620_cwxncm.jpg',
  },
];

/**
 * Extracts standard 11-char YouTube video ID from various URL formats
 */
export const getYouTubeVideoId = (url: string): string => {
  if (!url) return '';
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
};

export const VideoTestimonials: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [activeVideo, setActiveVideo] = useState<VideoTestimonialItem | null>(null);

  const handleOpenVideo = (item: VideoTestimonialItem) => {
    setActiveVideo(item);
  };

  const handleDirectYouTubeLink = (
    e: React.MouseEvent,
    url: string
  ) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="video-testimonials"
      className="relative w-full bg-[#0B1E1A] text-white py-28 sm:py-36 lg:py-44 select-none overflow-hidden"
      aria-label="Homeowner Video Testimonials"
    >
      {/* Subtle ambient glow in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#135A5C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-white/10">
          <div className="max-w-[760px] space-y-3">
            <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#C4A265] font-semibold block">
              VOICES OF OUR RESIDENTS
            </span>
            <h2 className="font-editorial text-[38px] sm:text-[50px] lg:text-[62px] font-light leading-[1.08] text-white tracking-tight">
              VIDEO TESTIMONIALS
            </h2>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-[13px] font-sans text-white/70 uppercase tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C4A265] animate-pulse" />
            <span>Watch Resident Stories</span>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {VIDEO_TESTIMONIALS.map((item, idx) => {
            const videoId = getYouTubeVideoId(item.youtubeUrl);
            const thumbUrl =
              item.customThumbnail ||
              `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col rounded-[24px] bg-white/[0.04] border border-white/10 overflow-hidden hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_24px_55px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer"
                onClick={() => handleOpenVideo(item)}
                onMouseEnter={() => setCursorVariant('play')}
                onMouseLeave={resetCursor}
              >
                {/* 1. Video Preview Thumbnail Stage */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={thumbUrl}
                    alt={`${item.resident} testimonial`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay for Crisp Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 group-hover:opacity-90 transition-opacity" />

                  {/* Duration Tag */}
                  {item.duration && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-sans text-[11px] font-medium tracking-wider uppercase text-white px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                        {item.duration}
                      </span>
                    </div>
                  )}

                  {/* Direct YouTube Link Button */}
                  <button
                    onClick={(e) => handleDirectYouTubeLink(e, item.youtubeUrl)}
                    title="Open directly on YouTube"
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-[#FF0000] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 group-hover:border-white group-hover:bg-[#C4A265] text-white group-hover:text-[#0B1E1A] flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current ml-1 transition-colors" />
                    </div>
                  </div>

                  {/* Bottom Project Tag on Preview */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white/90">
                    <span className="font-sans text-[12px] uppercase tracking-[0.18em] font-medium text-[#C4A265]">
                      {item.project}
                    </span>
                    <span className="text-[11px] font-sans text-white/60 uppercase tracking-wider">
                      YouTube Video
                    </span>
                  </div>
                </div>

                {/* 2. Resident Details */}
                <div className="p-5 sm:p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans text-[15px] font-semibold text-white tracking-tight">
                      {item.resident}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[12px] font-sans text-white/60 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#C4A265] shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <span className="font-sans text-[12px] uppercase tracking-wider text-white/80 font-medium group-hover:text-[#C4A265] flex items-center gap-1 transition-colors">
                    <span>Watch</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* LUXURY YOUTUBE PLAYER MODAL                                    */}
      {/* ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#152E28] rounded-[24px] overflow-hidden border border-white/20 shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/30">
                <div>
                  <h3 className="font-editorial text-[20px] sm:text-[22px] font-light text-white leading-tight">
                    {activeVideo.resident}
                  </h3>
                  <p className="font-sans text-[12px] uppercase tracking-wider text-[#d7c2a3]">
                    {activeVideo.project} — {activeVideo.location}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      window.open(
                        activeVideo.youtubeUrl,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#FF0000] text-white text-[12px] font-sans tracking-wide transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveVideo(null)}
                    aria-label="Close video"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* YouTube Video iFrame Container (Responsive 16:9) */}
              <div className="relative w-full aspect-[16/9] bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    activeVideo.youtubeUrl
                  )}?autoplay=1&rel=0`}
                  title={`${activeVideo.resident} - Vaswani Testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
