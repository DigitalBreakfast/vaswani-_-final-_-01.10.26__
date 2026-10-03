import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface InsightArticle {
  id: string;
  category: string;
  title: string;
  readTime: string;
  image: string;
  excerpt: string;
  date: string;
  fullContent: string[];
}

const ARTICLES: InsightArticle[] = [
  {
    id: 'design-spaces',
    category: 'DESIGN & ARCHITECTURE',
    title: 'Designing spaces that stand the test of time',
    readTime: '4 MIN READ',
    date: 'AUGUST 2026',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'How biophilic master planning, honest materiality, and spatial clarity define timeless residential sanctuaries.',
    fullContent: [
      'Architecture is at its most potent when it transcends temporary trends and embraces permanent human needs.',
      'At Vaswani, every residential project begins with an exploration of natural daylight, honest natural materials like honed marble and teak, and intuitive circulation that makes daily living feel effortless.',
      'By prioritizing generous ceiling heights, cross-ventilation, and private outdoor gardens, we create residences where families thrive for generations.',
    ],
  },
  {
    id: 'legacy-trust',
    category: 'CRAFT & HERITAGE',
    title: 'Vaswani Group strengthens its legacy of trust',
    readTime: '3 MIN READ',
    date: 'JULY 2026',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Four decades of delivery excellence, clear title assurances, and generational community building across South Asia.',
    fullContent: [
      'Trust is not an accident—it is the direct outcome of four decades of delivering on every promise.',
      'With over 72 completed landmark developments and 11.3M square feet developed across South Asia, our focus remains squarely on enduring customer satisfaction and material longevity.',
    ],
  },
  {
    id: 'market-outlook',
    category: 'PERSPECTIVES',
    title: 'The evolution of quiet luxury in contemporary residences',
    readTime: '5 MIN READ',
    date: 'JUNE 2026',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Why discerning homebuyers are prioritizing generous open greens, low density, acoustic isolation, and architectural permanence.',
    fullContent: [
      'The modern luxury buyer is seeking calm, acoustic isolation, and spacious layouts that foster wellness and family privacy.',
      'Bengaluru continues to be a magnet for discerning innovators and families who appreciate architectural distinction and biophilic landscapes.',
    ],
  },
];

export const InsightsNews: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section
      id="insights-news"
      className="relative w-full bg-[#FAF8F5] text-[#135A5C] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 select-none overflow-hidden border-t border-[#135A5C]/10"
      aria-label="Vaswani Insights & News"
    >
      <div className="w-full max-w-[1440px] mx-auto space-y-10 sm:space-y-12">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: Compact, Clean Eyebrow & Title                            */}
        {/* ========================================================================= */}
        <div className="pb-6 border-b border-[#135A5C]/12">
          <h2 className="font-editorial text-[34px] sm:text-[42px] lg:text-[48px] font-light leading-[1.1] tracking-tight text-[#135A5C]">
            Stories Worth{' '}
            <span className="italic font-editorial text-[#C4A265]">
              Following.
            </span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT 3-COLUMN EDITORIAL JOURNAL GRID                                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedArticle(article)}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="group flex flex-col justify-between bg-white border border-[#135A5C]/10 rounded-2xl p-5 sm:p-6 hover:border-[#135A5C]/30 hover:shadow-[0_12px_36px_rgba(19,90,92,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Headline & Excerpt */}
                <div className="space-y-2">
                  <h3 className="font-editorial text-[20px] sm:text-[22px] lg:text-[24px] text-[#135A5C] font-normal leading-[1.25] tracking-tight group-hover:text-[#0A2F28] transition-colors">
                    {article.title}
                  </h3>

                  <p className="font-sans text-[13px] text-[#135A5C]/65 font-light leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Action Line */}
              <div className="pt-4 mt-4 border-t border-[#135A5C]/8 flex items-center justify-between text-[#135A5C]">
                <span className="font-sans text-[12px] uppercase tracking-wider font-medium group-hover:text-[#C4A265] transition-colors">
                  Read Dispatch
                </span>
                <div className="w-7 h-7 rounded-full border border-[#135A5C]/15 group-hover:border-[#135A5C] group-hover:bg-[#135A5C] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* ARTICLE READER MODAL                                                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#135A5C]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#F8F6F2] rounded-[32px] overflow-hidden p-8 sm:p-12 shadow-2xl text-[#135A5C] space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full border border-[#135A5C]/20 hover:border-[#135A5C] text-[#135A5C] cursor-pointer transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="font-sans text-[13px] md:text-[14px] tracking-wide uppercase text-[#152E28] font-semibold">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <h3 className="font-editorial text-[26px] md:text-[32px] lg:text-[36px] text-[#135A5C] leading-[1.15] tracking-tight font-light">
                  {selectedArticle.title}
                </h3>
              </div>

              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#4A6358] font-light leading-relaxed">
                {selectedArticle.fullContent.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#135A5C]/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-7 py-3 rounded-full bg-[#152E28] text-white font-sans text-[16px] md:text-[17px] lg:text-[18px] tracking-wide uppercase cursor-pointer hover:bg-[#1C3D35] transition-colors"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
