import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TestimonialCardData } from '../../types';
import { Button } from './Button';
import { TestimonialCard } from './Cards';

export const SingleFeatureTestimonial: React.FC<{
  testimonial: TestimonialCardData;
  image?: string;
  className?: string;
}> = ({
  testimonial,
  image = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm overflow-hidden ${className}`}>
      {/* Left Portrait / Residence Image */}
      <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[320px] bg-[#F5F2EA]">
        <img
          src={image}
          alt={testimonial.clientName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 p-4 rounded-xl bg-[#1A1C1E]/80 backdrop-blur-md text-[#FAF8F5] font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          <p className="font-semibold uppercase tracking-wider">{testimonial.residence}</p>
          <p className="text-[#FAF8F5]/80">Bengaluru, India</p>
        </div>
      </div>

      {/* Right Quote Content */}
      <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#1E5E45]/10 flex items-center justify-center text-[#1E5E45]">
            <Quote className="w-6 h-6" />
          </div>

          <blockquote className="font-sans text-[20px] md:text-[22px] lg:text-[24px] font-light text-[#1A1C1E] leading-[1.5] max-w-[700px]">
            "{testimonial.quote}"
          </blockquote>
        </div>

        <div className="pt-6 border-t border-[#EAE4D6] flex flex-col font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          <h4 className="font-semibold text-[#1A1C1E]">{testimonial.clientName}</h4>
          <span className="text-[#1E5E45] font-semibold tracking-wide uppercase mt-0.5">
            {testimonial.role}
          </span>
          <span className="text-[#6C7382] mt-0.5">Resident since 2018</span>
        </div>
      </div>
    </div>
  );
};

export const TestimonialCarousel: React.FC<{
  testimonials: TestimonialCardData[];
  className?: string;
}> = ({ testimonials, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className={`p-8 sm:p-12 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-8 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#1E5E45] font-semibold">
          Resident Voices & Experiences
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="icon"
            size="sm"
            iconLook="outline"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="icon"
            size="sm"
            iconLook="outline"
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="min-h-[220px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <blockquote className="font-sans text-[20px] md:text-[22px] lg:text-[24px] font-light text-[#1A1C1E] leading-[1.5] max-w-[700px]">
              "{current.quote}"
            </blockquote>

            <div className="pt-6 border-t border-[#EAE4D6] flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px]">
              <div>
                <p className="font-semibold text-[#1A1C1E]">{current.clientName}</p>
                <p className="text-[#1E5E45] font-semibold uppercase tracking-wide mt-0.5">
                  {current.residence}
                </p>
                <p className="text-[#6C7382]">{current.role}</p>
              </div>

              <span className="font-semibold text-[#8990A0]">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const TestimonialGrid: React.FC<{
  testimonials: TestimonialCardData[];
  columns?: 2 | 3;
  className?: string;
}> = ({ testimonials, columns = 3, className = '' }) => {
  const colClass = columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${colClass} gap-6 ${className}`}>
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  );
};
