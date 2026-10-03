import React from 'react';
import { Quote } from 'lucide-react';

export interface QuoteProps {
  quote: string;
  author?: string;
  title?: string;
  affiliation?: string;
  image?: string;
  className?: string;
}

/**
 * 1. Editorial Pull Quote — Grand editorial callout with Cormorant Garamond
 */
export const EditorialPullQuote: React.FC<QuoteProps & { largeMark?: boolean }> = ({
  quote,
  author,
  title,
  affiliation,
  image,
  largeMark = true,
  className = '',
}) => {
  return (
    <div className={`relative max-w-4xl mx-auto py-12 px-4 sm:px-8 space-y-8 ${className}`}>
      {largeMark && (
        <span className="font-editorial text-8xl text-[#1E5E45]/20 leading-none block -mb-10 select-none pointer-events-none">
          “
        </span>
      )}

      <blockquote className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1] italic">
        {quote}
      </blockquote>

      {(author || title || image) && (
        <div className="flex items-center gap-4 pt-6 border-t border-[#EAE4D6]">
          {image && (
            <img
              src={image}
              alt={author || 'Quote author'}
              className="w-14 h-14 rounded-full object-cover border border-[#EAE4D6] shrink-0"
            />
          )}
          <div className="space-y-0.5 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
            {author && <p className="font-semibold uppercase tracking-wide text-[#1A1C1E]">{author}</p>}
            {title && <p className="text-[#1E5E45] font-medium">{title}</p>}
            {affiliation && <p className="text-[#6C7382]">{affiliation}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * 2. BlockQuote — Architectural container quote with Level 03 lead typography
 */
export const BlockQuote: React.FC<QuoteProps> = ({
  quote,
  author,
  title,
  className = '',
}) => {
  return (
    <div className={`p-8 sm:p-10 rounded-xl bg-white border border-[#EAE4D6] shadow-sm space-y-6 ${className}`}>
      <div className="w-10 h-10 rounded-full bg-[#1E5E45]/10 flex items-center justify-center text-[#1E5E45]">
        <Quote className="w-5 h-5" />
      </div>
      <blockquote className="font-sans text-[20px] md:text-[22px] lg:text-[24px] font-light text-[#1A1C1E] leading-[1.5] max-w-[700px]">
        "{quote}"
      </blockquote>
      {author && (
        <div className="pt-4 border-t border-[#EAE4D6] font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          <p className="font-semibold text-[#1A1C1E]">{author}</p>
          {title && <p className="text-[#6C7382]">{title}</p>}
        </div>
      )}
    </div>
  );
};

/**
 * 3. Philosophy Statement Quote — Minimalist architectural declaration
 */
export const PhilosophyStatementQuote: React.FC<{
  statement: string;
  topic?: string;
  className?: string;
}> = ({ statement, topic = 'Vaswani Design Philosophy', className = '' }) => {
  return (
    <div className={`py-12 border-y border-[#EAE4D6] space-y-4 ${className}`}>
      <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#1E5E45] font-semibold block">
        {topic}
      </span>
      <p className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] text-[#1A1C1E] italic leading-[1.1] max-w-4xl font-light">
        {statement}
      </p>
    </div>
  );
};
