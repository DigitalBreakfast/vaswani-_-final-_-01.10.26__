import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

/**
 * 1. Category Chip
 */
export const CategoryChip: React.FC<{
  label: string;
  variant?: 'ivory' | 'charcoal' | 'green';
  className?: string;
}> = ({ label, variant = 'ivory', className = '' }) => {
  const styles = {
    ivory: 'bg-white border-[#EAE4D6] text-[#1A1C1E]',
    charcoal: 'bg-[#1A1C1E] border-[#2E3138] text-[#FAF8F5]',
    green: 'bg-[#1E5E45]/10 border-[#1E5E45]/30 text-[#1E5E45]',
  }[variant];

  return (
    <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-[16px] md:text-[17px] lg:text-[18px] uppercase font-sans tracking-wide font-semibold border ${styles} ${className}`}>
      {label}
    </span>
  );
};

/**
 * 2. Status Pill (e.g. Ready for Possession, Under Construction, Sold Out)
 */
export const StatusPill: React.FC<{
  status: 'Ready' | 'Ongoing' | 'Upcoming' | 'Completed';
  className?: string;
}> = ({ status, className = '' }) => {
  const dotColor = {
    Ready: 'bg-[#1E5E45]',
    Ongoing: 'bg-[#D97706]',
    Upcoming: 'bg-[#3B82F6]',
    Completed: 'bg-[#6B7280]',
  }[status];

  const labels = {
    Ready: 'Ready for Possession',
    Ongoing: 'Under Construction',
    Upcoming: 'Upcoming Launch',
    Completed: 'Delivered',
  }[status];

  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EAE4D6] text-[16px] md:text-[17px] lg:text-[18px] uppercase font-sans tracking-wide text-[#1A1C1E] font-medium shadow-2xs ${className}`}>
      <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      <span>{labels}</span>
    </span>
  );
};

/**
 * 3. Location Tag
 */
export const LocationTag: React.FC<{
  location: string;
  className?: string;
}> = ({ location, className = '' }) => (
  <span className={`inline-flex items-center gap-2 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#6C7382] ${className}`}>
    <MapPin className="w-4 h-4 text-[#1E5E45]" />
    <span>{location}</span>
  </span>
);

/**
 * 4. Date Stamp
 */
export const DateStamp: React.FC<{
  date: string;
  className?: string;
}> = ({ date, className = '' }) => (
  <span className={`inline-flex items-center gap-2 text-[16px] md:text-[17px] lg:text-[18px] font-sans text-[#6C7382] ${className}`}>
    <Calendar className="w-4 h-4 text-[#1E5E45]" />
    <span>{date}</span>
  </span>
);
