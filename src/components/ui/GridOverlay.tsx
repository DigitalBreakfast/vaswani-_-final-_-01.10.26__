import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const GridOverlay: React.FC = () => {
  const { showGridOverlay, toggleGridOverlay } = useTheme();

  if (!showGridOverlay) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none flex justify-center">
      {/* 12-column grid container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`h-full border-x border-red-500/15 bg-red-500/[0.02] flex flex-col justify-between p-1 ${
                i >= 4 ? 'hidden sm:flex' : ''
              } ${i >= 8 ? 'hidden lg:flex' : ''}`}
            >
              <span className="font-sans text-[16px] text-red-400/60">{i + 1}</span>
              <span className="font-sans text-[16px] text-red-400/60 text-right">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid status indicator pill */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto bg-[#0B0C0E]/90 border border-white/20 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        <span className="text-white font-medium">
          12-Col Architectural Grid Active
        </span>
        <button
          onClick={toggleGridOverlay}
          className="text-[#8E95A5] hover:text-white ml-2 underline cursor-pointer"
        >
          Hide
        </button>
      </div>
    </div>
  );
};
