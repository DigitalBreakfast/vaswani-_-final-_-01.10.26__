import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

/**
 * 1. Grid Gallery
 */
export const GridGallery: React.FC<{
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  onItemClick?: (item: GalleryItem, index: number) => void;
  className?: string;
}> = ({ items, columns = 3, onItemClick, className = '' }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${colClass} gap-6 ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.id}
          onClick={() => onItemClick?.(item, index)}
          onMouseEnter={() => setCursorVariant('view', 'VIEW')}
          onMouseLeave={resetCursor}
          className="group relative rounded-xl overflow-hidden bg-[#F5F2EA] border border-[#EAE4D6] aspect-[4/3] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {item.caption && (
            <div className="absolute bottom-3 left-3 right-3 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#FAF8F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold truncate">{item.caption}</p>
              {item.category && <p className="text-[16px] text-[#FAF8F5]/80 uppercase tracking-wide">{item.category}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * 2. Before / After Interactive Slider (Blueprint vs Real Facade)
 */
export const BeforeAfterSlider: React.FC<{
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Architectural Concept',
  afterLabel = 'Completed Residence',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => (isDragging.current = true)}
      onMouseUp={() => (isDragging.current = false)}
      onMouseLeave={() => (isDragging.current = false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={`relative w-full aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#EAE4D6] shadow-md ${className}`}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <span className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#1A1C1E]/80 backdrop-blur-md text-[#FAF8F5] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold">
        {afterLabel}
      </span>

      {/* Before Image (Clipped layer) */}
      <div
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-[#1A1C1E]/80 backdrop-blur-md text-[#FAF8F5] font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold">
          {beforeLabel}
        </span>
      </div>

      {/* Center Divider Handle */}
      <div
        style={{ left: `${sliderPosition}%` }}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg flex items-center justify-center -translate-x-1/2 pointer-events-none"
      >
        <div className="w-10 h-10 rounded-full bg-white text-[#1A1C1E] shadow-xl flex items-center justify-center border border-[#EAE4D6]">
          <Layers className="w-5 h-5 text-[#1E5E45]" />
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Fullscreen Lightbox Modal
 */
export const FullscreenLightbox: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  initialIndex?: number;
}> = ({ isOpen, onClose, items, initialIndex = 0 }) => {
  const [index, setIndex] = useState(initialIndex);

  if (!isOpen || !items.length) return null;

  const current = items[index] || items[0];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#1A1C1E]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8"
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between text-[#FAF8F5]">
          <span className="font-editorial text-[24px] sm:text-[28px] font-light tracking-wider">
            0{index + 1} / 0{items.length}
          </span>
          <button
            onClick={onClose}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center Main Stage */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          <motion.img
            key={current.id}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          />

          {/* Nav arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="text-center font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#FAF8F5]/80">
          <p className="font-semibold text-[#FAF8F5]">{current.caption}</p>
          <p className="text-[#FAF8F5]/70">{current.alt}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
