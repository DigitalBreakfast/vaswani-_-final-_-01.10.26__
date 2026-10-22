import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUp, Briefcase, Compass, Maximize2, X } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface LeaderProfile {
  id: string;
  name: string;
  designation: string;
  quote: string;
  intro: string;
  readLabel: string;
  hideLabel: string;
  fullMessage: string[];
  image: string;
  altText: string;
}

const LEADERS: LeaderProfile[] = [
  {
    id: 'karan-vaswani',
    name: 'Karan Vaswani',
    designation: 'Managing Director',
    quote: 'Every meaningful development begins with trust.',
    intro:
      'Families place their homes in our hands, and communities count on us to create spaces where life can flourish. Seeing a family step into a home they can proudly call their own is the most rewarding moment of our work.',
    readLabel: 'Read Karan’s message',
    hideLabel: 'Hide Karan’s message',
    fullMessage: [
      'Families place their homes in our hands, and communities count on us to create spaces where life can flourish. Seeing a family step into a home they can proudly call their own is the most rewarding moment of our work.',
      'For me, the journey of Vaswani Group has always been centred around the people who place their trust in us. While real estate is often measured by buildings and skylines, we have always believed that our true purpose lies in creating spaces where families, communities and businesses can flourish.',
      'Every new development is an opportunity to contribute something meaningful. Alongside launching new projects, some of our most rewarding work has come from restoring confidence, fulfilling commitments and helping communities move forward. These experiences continue to reinforce the responsibility that comes with every home we build.',
      'Our philosophy has always extended beyond construction. We strive to create environments that combine thoughtful architecture, disciplined execution and uncompromising craftsmanship with the warmth and comfort that transform buildings into places people are proud to call home.',
      'The relationships we build with homeowners, partners and communities continue to shape our journey. Their trust inspires us to uphold the values of integrity, quality and long-term thinking in everything we do.',
      'For us, success is measured not only by the developments we create, but by the lasting trust we earn and the lives we help enrich. It is this belief that continues to guide Vaswani as we look towards the future.',
    ],
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1792681337/DSC01005_ccqabx.jpg',
    altText: 'Karan Vaswani — Managing Director, Vaswani Group',
  },
  {
    id: 'ajay-vaswani',
    name: 'Ajay Vaswani',
    designation: 'Executive Director',
    quote: 'A home is no longer just a place to live.',
    intro:
      'It is where people work, spend time with family and build their everyday routines. We design around how people truly live today.',
    readLabel: 'Read Ajay’s message',
    hideLabel: 'Hide Ajay’s message',
    fullMessage: [
      'It is where people work, spend time with family and build their everyday routines. We design around how people truly live today.',
      "The expectations of today's homebuyers continue to evolve, and with them, so must the way we design and deliver our developments. A home is no longer simply a place to live—it is where people work, connect, grow and create lasting memories.",
      'Our approach begins with understanding these changing lifestyles. Every project is thoughtfully planned so that the layout, amenities and surrounding environment work together to support the rhythm of everyday life. We believe the best developments are those that feel intuitive, comfortable and meaningful from the moment people experience them.',
      'At the same time, we remain firmly committed to the principles that have guided Vaswani for decades. Quality, transparency and excellence in execution continue to define every project we undertake, ensuring that each development delivers enduring value for homeowners and future generations alike.',
      'As we continue to grow, our focus remains on creating places that combine timeless design with thoughtful planning—homes and communities that simply feel right, today and for years to come.',
    ],
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1792681359/DSC01094_nvxy7r.jpg',
    altText: 'Ajay Vaswani — Executive Director, Vaswani Group',
  },
  {
    id: 'anil-advani',
    name: 'Anil Advani',
    designation: 'Managing Director',
    quote: 'A good building keeps its promises long after the day we hand it over.',
    intro:
      'A home is the largest promise most families will ever ask us to keep. It is made at the very start, on paper and across a table, and it is tested years later, in a quiet room on an ordinary morning.',
    readLabel: 'Read Anil’s message',
    hideLabel: 'Hide Anil’s message',
    fullMessage: [
      'A home is the largest promise most families will ever ask us to keep. It is made at the very start, on paper and across a table, and it is tested years later, in a quiet room on an ordinary morning.',
      'That is why I care most about what happens out of sight. The planning done before a single foundation is laid. The detail checked when no one is watching. The conversation held honestly, even when an easier answer is available.',
      'Over the years I have learned that patience is part of the craft. A building made well takes the time it takes. When we respect that, families feel it the day they move in and long after.',
      'What we hope to leave behind is simple. Homes people are proud of, neighbours who look out for each other, and a name that families are glad to recommend to the people they love.',
    ],
    image: 'https://res.cloudinary.com/ds5s7shuo/image/upload/v1792681398/DSC01230_jxupq2.jpg',
    altText: 'Anil Advani — Managing Director, Vaswani Group',
  },
];

export const Leadership: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="leadership"
      className="relative w-full text-[#135A5C] py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 select-none overflow-hidden border-t border-[#135A5C]/10"
      aria-label="Leadership — The people behind the vision."
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#135A5C]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#E8D6C5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION INTRODUCTION                                                      */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-[0.25em] uppercase text-[#135A5C] font-semibold block">
            LEADERSHIP
          </span>

          {/* Section Heading - Level 02: Cormorant Garamond */}
          <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light leading-[1.1] text-[#135A5C] tracking-tight">
            The people behind <span className="italic font-normal">the vision.</span>
          </h2>
        </motion.div>

        {/* ========================================================================= */}
        {/* EDITORIAL PROFILE CARDS (Alternating Layout, Full Portrait Images)         */}
        {/* ========================================================================= */}
        <div className="space-y-10 sm:space-y-14">
          {LEADERS.map((leader, index) => {
            const isImageLeft = index % 2 === 0;
            const Icon = leader.id === 'ajay-vaswani' ? Compass : Briefcase;

            return (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#2C1E16] rounded-[28px] p-6 sm:p-8 lg:p-12 border border-[#4A3728]/50 shadow-[0_20px_50px_rgba(44,30,22,0.18)] text-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  
                  {/* Portrait Column - Full & Uncropped */}
                  <div
                    className={`lg:col-span-5 xl:col-span-5 ${
                      isImageLeft ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    <div
                      className="relative w-full max-w-[440px] mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-[#1A120D] border border-[#4A3728]/70 shadow-[0_16px_40px_rgba(0,0,0,0.35)] group cursor-pointer"
                      onClick={() => setSelectedLeader(leader)}
                      onMouseEnter={() => setCursorVariant('explore', 'VIEW PHOTO')}
                      onMouseLeave={resetCursor}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedLeader(leader);
                        }
                      }}
                      aria-label={`View full portrait of ${leader.name}`}
                    >
                      <img
                        src={leader.image}
                        alt={leader.altText}
                        className="w-full h-auto object-contain block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                        loading="lazy"
                      />
                      
                      {/* Subtle hover pill for full view */}
                      <div className="absolute top-3.5 right-3.5 flex items-center justify-end pointer-events-none">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/50 shadow-md text-white/95 text-[11px] font-sans tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Maximize2 className="w-3 h-3 text-[#D4AF37]" />
                          <span>Full portrait</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 xl:col-span-7 space-y-5 ${
                      isImageLeft ? 'order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    {/* Leader Name & Designation */}
                    <div className="border-b border-white/20 pb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D4AF37]/35 text-[#D4AF37] mb-2.5">
                        <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="font-sans text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold">
                          {leader.designation}
                        </span>
                      </div>
                      <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[54px] font-light text-white tracking-tight leading-[1.1]">
                        {leader.name}
                      </h3>
                    </div>

                    {/* Featured Quote */}
                    <div className="relative pl-4 sm:pl-5 border-l-2 border-[#D4AF37] py-0.5">
                      <blockquote className="font-sans text-[19px] md:text-[21px] lg:text-[23px] font-normal italic leading-[1.5] text-white/95 max-w-[650px]">
                        “{leader.quote}”
                      </blockquote>
                    </div>

                    {/* Introduction Paragraph */}
                    <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-normal leading-relaxed">
                      {leader.intro}
                    </p>

                    {/* Expandable Leadership Message */}
                    <AnimatePresence initial={false}>
                      {expanded[leader.id] && (
                        <motion.div
                          key={`content-${leader.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-1 space-y-3.5 border-t border-white/20">
                            {leader.fullMessage.slice(1).map((p, i) => (
                              <p
                                key={i}
                                className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-normal leading-relaxed"
                              >
                                {p}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Link / Toggle Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => toggleExpand(leader.id)}
                        onMouseEnter={() => setCursorVariant('pointer')}
                        onMouseLeave={resetCursor}
                        className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/35 hover:border-white hover:bg-white hover:text-[#2C1E16] text-white font-sans text-[15px] sm:text-[16px] md:text-[17px] tracking-wide font-medium transition-all duration-300 cursor-pointer shadow-xs"
                        aria-expanded={Boolean(expanded[leader.id])}
                      >
                        <span>
                          {expanded[leader.id] ? leader.hideLabel : leader.readLabel}
                        </span>
                        {expanded[leader.id] ? (
                          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        ) : (
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        )}
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal for Full Portrait View */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[92vh] flex flex-col items-center bg-[#1A120D] rounded-2xl p-4 sm:p-6 border border-[#4A3728] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative max-h-[76vh] overflow-hidden rounded-xl flex items-center justify-center">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.altText}
                  className="max-h-[76vh] w-auto max-w-full object-contain block"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-editorial text-2xl sm:text-3xl text-white font-light tracking-tight">
                  {selectedLeader.name}
                </h4>
                <p className="font-sans text-xs sm:text-sm uppercase tracking-widest text-[#D4AF37] mt-0.5 font-medium">
                  {selectedLeader.designation}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
