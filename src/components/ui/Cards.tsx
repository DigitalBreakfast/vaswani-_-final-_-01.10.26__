import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Award, Quote, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { ProjectCardData, ArticleCardData, TestimonialCardData, AwardCardData, LeadershipCardData } from '../../types';

// ==========================================
// 1. PROJECT CARD (Architectural Masterpiece)
// ==========================================
export const ProjectCard: React.FC<{
  project: ProjectCardData;
  onClick?: () => void;
  className?: string;
  layout?: 'standard' | 'compact' | 'featured' | 'horizon';
}> = ({ project, onClick, className = '', layout = 'standard' }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  if (layout === 'horizon') {
    return (
      <motion.article
        onClick={onClick}
        onMouseEnter={() => setCursorVariant('view', 'VIEW')}
        onMouseLeave={resetCursor}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`group grid grid-cols-1 md:grid-cols-12 rounded-xl bg-white border border-[#EAE4D6] hover:border-[#1E5E45]/40 shadow-sm hover:shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${className}`}
      >
        <div className="md:col-span-6 relative h-64 md:h-full min-h-[260px] overflow-hidden bg-[#F5F2EA]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A1C1E]/80 backdrop-blur-md border border-white/10 font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#FAF8F5]">
            {project.category}
          </span>
        </div>

        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-sans font-semibold text-[16px] md:text-[17px] lg:text-[18px] text-[#1E5E45] tracking-wide uppercase">
                COMPLETION {project.year}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE4D6] flex items-center justify-center text-[#1A1C1E] group-hover:bg-[#1E5E45] group-hover:text-[#FAF8F5] group-hover:border-[#1E5E45] transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] group-hover:text-[#1E5E45] transition-colors duration-300 leading-[1.1]">
              {project.title}
            </h3>

            <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1E5E45] shrink-0" />
              {project.location}
            </p>

            <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] line-clamp-3 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {project.stats && (
            <div className="pt-4 border-t border-[#EAE4D6] grid grid-cols-2 gap-4 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
              {project.stats.area && (
                <div>
                  <span className="text-[#8990A0] block uppercase tracking-wide font-medium">Total Scale</span>
                  <span className="text-[#1A1C1E] font-semibold">{project.stats.area}</span>
                </div>
              )}
              {project.stats.architect && (
                <div>
                  <span className="text-[#8990A0] block uppercase tracking-wide font-medium">Design Architect</span>
                  <span className="text-[#1A1C1E] truncate block">{project.stats.architect}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      onClick={onClick}
      onMouseEnter={() => setCursorVariant('view', 'VIEW')}
      onMouseLeave={resetCursor}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-xl bg-white border border-[#EAE4D6] hover:border-[#1E5E45]/40 shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer ${className}`}
    >
      <div className={`relative w-full overflow-hidden bg-[#F5F2EA] ${layout === 'featured' ? 'h-96 md:h-[460px]' : 'h-72 sm:h-80'}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-[#1A1C1E]/80 backdrop-blur-md border border-white/10 font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#FAF8F5]">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#1A1C1E]/80 backdrop-blur-md border border-white/10 font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#FAF8F5]/90">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] group-hover:text-[#1E5E45] transition-colors duration-300 leading-[1.1]">
              {project.title}
            </h3>
            <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1E5E45] shrink-0" />
              {project.location}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE4D6] flex items-center justify-center text-[#1A1C1E] group-hover:bg-[#1E5E45] group-hover:text-[#FAF8F5] group-hover:border-[#1E5E45] transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] line-clamp-2 leading-relaxed">
          {project.subtitle}
        </p>

        {project.stats && (
          <div className="pt-3 border-t border-[#EAE4D6] grid grid-cols-2 gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
            {project.stats.area && (
              <div>
                <span className="text-[#8990A0] block uppercase tracking-wide font-medium">Scale</span>
                <span className="text-[#1A1C1E] font-semibold">{project.stats.area}</span>
              </div>
            )}
            {project.stats.architect && (
              <div>
                <span className="text-[#8990A0] block uppercase tracking-wide font-medium">Architect</span>
                <span className="text-[#1A1C1E] truncate block">{project.stats.architect}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

// ==========================================
// 2. ARTICLE CARD (Editorial Journal)
// ==========================================
export const ArticleCard: React.FC<{
  article: ArticleCardData;
  onClick?: () => void;
  className?: string;
}> = ({ article, onClick, className = '' }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <motion.article
      onClick={onClick}
      onMouseEnter={() => setCursorVariant('pointer')}
      onMouseLeave={resetCursor}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className={`group relative flex flex-col justify-between rounded-xl bg-white border border-[#EAE4D6] hover:border-[#1E5E45]/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer ${className}`}
    >
      <div className="relative h-56 w-full overflow-hidden bg-[#F5F2EA]">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A1C1E]/80 backdrop-blur-sm border border-white/10 font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#FAF8F5]">
          {article.category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382]">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#1E5E45]" /> {article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
          </div>
          <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] group-hover:text-[#1E5E45] transition-colors leading-[1.1]">
            {article.title}
          </h3>
          <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-[#EAE4D6] flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382]">
          <span className="font-semibold text-[#1A1C1E]">{article.author.name}</span>
          <span className="inline-flex items-center gap-1 text-[#1E5E45] uppercase tracking-wide font-semibold">
            Read Journal <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};

// ==========================================
// 3. TESTIMONIAL CARD
// ==========================================
export const TestimonialCard: React.FC<{
  testimonial: TestimonialCardData;
  className?: string;
}> = ({ testimonial, className = '' }) => {
  return (
    <div
      className={`relative p-8 rounded-xl bg-white border border-[#EAE4D6] hover:border-[#1E5E45]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-full bg-[#1E5E45]/10 border border-[#1E5E45]/20 flex items-center justify-center text-[#1E5E45]">
          <Quote className="w-5 h-5" />
        </div>
        <span className="font-sans font-semibold text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#6C7382]">
          VERIFIED RESIDENT
        </span>
      </div>

      <blockquote className="font-sans text-[20px] md:text-[22px] lg:text-[24px] font-light text-[#1A1C1E] leading-[1.5] max-w-[700px]">
        "{testimonial.quote}"
      </blockquote>

      <div className="pt-4 border-t border-[#EAE4D6] flex flex-col font-sans text-[16px] md:text-[17px] lg:text-[18px]">
        <span className="font-semibold text-[#1A1C1E]">{testimonial.clientName}</span>
        <span className="text-[#1E5E45] tracking-wide uppercase font-semibold">{testimonial.residence}</span>
        <span className="text-[#6C7382]">{testimonial.role}</span>
      </div>
    </div>
  );
};

// ==========================================
// 4. AWARD CARD (Recognition & Merit)
// ==========================================
export const AwardCard: React.FC<{
  award: AwardCardData;
  className?: string;
}> = ({ award, className = '' }) => {
  return (
    <div
      className={`p-6 rounded-xl bg-white border border-[#EAE4D6] hover:border-[#1E5E45]/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5 ${className}`}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E5E45]/15 to-[#FAF8F5] border border-[#1E5E45]/30 flex items-center justify-center text-[#1E5E45] shrink-0">
        <Award className="w-6 h-6" />
      </div>
      <div className="space-y-2 flex-1">
        <div className="flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          <span className="uppercase tracking-wide font-semibold text-[#1E5E45]">{award.organization}</span>
          <span className="font-semibold text-[#1A1C1E] bg-[#FAF8F5] px-2.5 py-0.5 rounded border border-[#EAE4D6]">
            {award.year}
          </span>
        </div>
        <h4 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1]">
          {award.title}
        </h4>
        <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382]">
          Project: <span className="text-[#1A1C1E] font-semibold">{award.project}</span>
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 5. LEADERSHIP CARD (Executive & Architect)
// ==========================================
export const LeadershipCard: React.FC<{
  leader: LeadershipCardData;
  className?: string;
}> = ({ leader, className = '' }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <div
      onMouseEnter={() => setCursorVariant('pointer')}
      onMouseLeave={resetCursor}
      className={`group rounded-xl bg-white border border-[#EAE4D6] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md hover:border-[#1E5E45]/30 ${className}`}
    >
      <div className="relative h-80 w-full overflow-hidden bg-[#F5F2EA]">
        <img
          src={leader.image}
          alt={leader.name}
          loading="lazy"
          className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="p-6 space-y-2">
        <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#1E5E45] block">
          {leader.title}
        </span>
        <h4 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1]">
          {leader.name}
        </h4>
        <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed line-clamp-3">
          {leader.bio}
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 6. CSR INITIATIVE CARD (Vaswani Foundation)
// ==========================================
export interface CSRCardData {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  category: string;
  image: string;
}

export const CSRCard: React.FC<{
  initiative: CSRCardData;
  className?: string;
}> = ({ initiative, className = '' }) => {
  return (
    <div className={`group rounded-xl bg-white border border-[#EAE4D6] hover:border-[#1E5E45]/40 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 flex flex-col justify-between ${className}`}>
      <div className="relative h-48 w-full overflow-hidden bg-[#F5F2EA]">
        <img
          src={initiative.image}
          alt={initiative.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1A1C1E]/80 backdrop-blur-sm border border-white/10 font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide font-semibold text-[#FAF8F5]">
          {initiative.category}
        </span>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h4 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] group-hover:text-[#1E5E45] transition-colors leading-[1.1]">
            {initiative.title}
          </h4>
          <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed line-clamp-3">
            {initiative.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#EAE4D6] flex items-baseline justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          <span className="uppercase tracking-wide font-medium text-[#6C7382]">
            {initiative.metricLabel}
          </span>
          <span className="font-editorial text-[36px] md:text-[44px] font-light text-[#1E5E45]">
            {initiative.metric}
          </span>
        </div>
      </div>
    </div>
  );
};
