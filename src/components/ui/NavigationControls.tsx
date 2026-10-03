import React from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

/**
 * 1. Breadcrumbs
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumbs: React.FC<{
  items: BreadcrumbItem[];
  className?: string;
}> = ({ items, className = '' }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382] ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-[#8990A0]">/</span>}
            {isLast ? (
              <span className="text-[#1A1C1E] font-semibold tracking-wide" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href || '#'}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="hover:text-[#1E5E45] transition-colors tracking-wide"
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

/**
 * 2. Back Button
 */
export const BackButton: React.FC<{
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}> = ({ label = 'Back to Portfolio', onClick, href, className = '' }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  const content = (
    <span className="inline-flex items-center gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#6C7382] hover:text-[#1E5E45] transition-colors group font-semibold">
      <ArrowLeft className="w-4 h-4 transform transition-transform group-hover:-translate-x-1" />
      <span>{label}</span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={() => setCursorVariant('pointer')}
        onMouseLeave={resetCursor}
        className={`inline-block ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setCursorVariant('pointer')}
      onMouseLeave={resetCursor}
      className={`inline-block cursor-pointer ${className}`}
    >
      {content}
    </button>
  );
};

/**
 * 3. Pagination
 */
export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}> = ({ currentPage, totalPages, onPageChange, className = '' }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <div className={`flex items-center justify-between py-6 border-t border-[#EAE4D6] font-sans text-[16px] md:text-[17px] lg:text-[18px] ${className}`}>
      {/* Prev */}
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        onMouseEnter={() => setCursorVariant('pointer')}
        onMouseLeave={resetCursor}
        className="flex items-center gap-2 uppercase tracking-wide text-[#1A1C1E] disabled:opacity-30 disabled:pointer-events-none hover:text-[#1E5E45] transition-colors cursor-pointer font-semibold"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Numbers */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className={`w-11 h-11 rounded-full font-sans font-semibold transition-all cursor-pointer flex items-center justify-center ${
                isActive
                  ? 'bg-[#1E5E45] text-[#FAF8F5] shadow-xs'
                  : 'bg-transparent text-[#6C7382] hover:text-[#1A1C1E] hover:bg-[#FAF8F5]'
              }`}
            >
              {page < 10 ? `0${page}` : page}
            </button>
          );
        })}
      </div>

      {/* Next */}
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        onMouseEnter={() => setCursorVariant('pointer')}
        onMouseLeave={resetCursor}
        className="flex items-center gap-2 uppercase tracking-wide text-[#1A1C1E] disabled:opacity-30 disabled:pointer-events-none hover:text-[#1E5E45] transition-colors cursor-pointer font-semibold"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

/**
 * 4. Previous / Next Project Navigation
 */
export interface AdjacentProject {
  title: string;
  category: string;
  image: string;
  href: string;
}

export const PrevNextProjectNav: React.FC<{
  prevProject?: AdjacentProject;
  nextProject?: AdjacentProject;
  className?: string;
}> = ({ prevProject, nextProject, className = '' }) => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-t border-[#EAE4D6] ${className}`}>
      {/* Prev Project */}
      {prevProject ? (
        <a
          href={prevProject.href}
          onMouseEnter={() => setCursorVariant('pointer')}
          onMouseLeave={resetCursor}
          className="group p-6 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 transition-all duration-300 flex items-center gap-4 cursor-pointer"
        >
          <img
            src={prevProject.image}
            alt={prevProject.title}
            className="w-18 h-18 rounded-xl object-cover border border-[#EAE4D6] group-hover:scale-105 transition-transform duration-300"
          />
          <div className="space-y-1 font-sans">
            <span className="text-[16px] uppercase text-[#6C7382] tracking-wider flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-4 h-4 text-[#1E5E45]" /> Previous Project
            </span>
            <h4 className="font-editorial text-[24px] sm:text-[28px] font-normal text-[#1A1C1E] group-hover:text-[#1E5E45] transition-colors leading-snug">
              {prevProject.title}
            </h4>
            <span className="text-[16px] text-[#8990A0]">{prevProject.category}</span>
          </div>
        </a>
      ) : <div />}

      {/* Next Project */}
      {nextProject ? (
        <a
          href={nextProject.href}
          onMouseEnter={() => setCursorVariant('pointer')}
          onMouseLeave={resetCursor}
          className="group p-6 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 transition-all duration-300 flex items-center justify-end text-right gap-4 cursor-pointer"
        >
          <div className="space-y-1 font-sans">
            <span className="text-[16px] uppercase text-[#6C7382] tracking-wider flex items-center justify-end gap-1.5 font-medium">
              Next Project <ArrowRight className="w-4 h-4 text-[#1E5E45]" />
            </span>
            <h4 className="font-editorial text-[24px] sm:text-[28px] font-normal text-[#1A1C1E] group-hover:text-[#1E5E45] transition-colors leading-snug">
              {nextProject.title}
            </h4>
            <span className="text-[16px] text-[#8990A0]">{nextProject.category}</span>
          </div>
          <img
            src={nextProject.image}
            alt={nextProject.title}
            className="w-18 h-18 rounded-xl object-cover border border-[#EAE4D6] group-hover:scale-105 transition-transform duration-300"
          />
        </a>
      ) : <div />}
    </div>
  );
};
