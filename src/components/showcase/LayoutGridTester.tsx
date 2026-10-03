import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';
import { Grid } from 'lucide-react';

export const LayoutGridTester: React.FC = () => {
  const { showGridOverlay, toggleGridOverlay } = useTheme();
  const [activeCols, setActiveCols] = useState<12 | 8 | 4>(12);

  return (
    <div className="space-y-12 select-none">
      <div className="space-y-4">
        <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wide text-[#1E5E45] font-semibold block">
          Grid System & Spatial Geometry
        </span>
        <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1]">
          Mathematical Rhythm & Responsive Ratios
        </h2>
        <p className="font-sans text-[20px] md:text-[22px] lg:text-[24px] text-[#525866] max-w-[700px] font-light leading-[1.5]">
          All layouts align strictly to a 12-column desktop, 8-column tablet, and 4-column mobile grid with generous gutters and max-width bounds of 1440px on a Warm Ivory White canvas.
        </p>
      </div>

      {/* Grid Overlay Action Banner */}
      <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
        <div className="space-y-1">
          <h4 className="font-editorial text-[24px] sm:text-[28px] font-light text-[#1A1C1E]">Global Viewport Grid Overlay</h4>
          <p className="text-[#525866] leading-relaxed">
            Toggle persistent 12-column architectural alignment lines over the entire application viewport.
          </p>
        </div>
        <Button
          variant={showGridOverlay ? 'primary' : 'secondary'}
          size="md"
          onClick={toggleGridOverlay}
          icon={<Grid className="w-5 h-5" />}
        >
          {showGridOverlay ? 'Hide Viewport Grid' : 'Show Viewport Grid'}
        </Button>
      </div>

      {/* Interactive Responsive Grid Simulator */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          <h3 className="font-editorial text-[28px] font-light text-[#1A1C1E]">Interactive Column Division Simulator</h3>
          <div className="flex items-center gap-2">
            {[
              { count: 12, label: '12 Cols (Desktop)' },
              { count: 8, label: '8 Cols (Tablet)' },
              { count: 4, label: '4 Cols (Mobile)' },
            ].map((col) => (
              <button
                key={col.count}
                onClick={() => setActiveCols(col.count as any)}
                className={`px-4 py-2 rounded-full uppercase tracking-wide cursor-pointer transition-all font-semibold ${
                  activeCols === col.count ? 'bg-[#1E5E45] text-[#FAF8F5] shadow-xs' : 'bg-white text-[#6C7382] border border-[#EAE4D6]'
                }`}
              >
                {col.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Grid visualizer */}
        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm">
          <div
            className={`grid gap-4 sm:gap-6 ${
              activeCols === 12 ? 'grid-cols-12' : activeCols === 8 ? 'grid-cols-8' : 'grid-cols-4'
            }`}
          >
            {Array.from({ length: activeCols }).map((_, i) => (
              <div
                key={i}
                className="h-36 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 flex flex-col items-center justify-between p-3.5 transition-colors font-sans text-[16px]"
              >
                <span className="text-[#1E5E45] font-semibold uppercase tracking-wider">Col {i + 1}</span>
                <span className="font-semibold text-[#6C7382]">
                  {Math.round(100 / activeCols)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mathematical Spatial Hierarchy Rules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-3">
          <span className="uppercase tracking-wide text-[#1E5E45] font-semibold block">Rule 01: Padding Mathematics</span>
          <h4 className="font-editorial text-[24px] sm:text-[28px] font-light text-[#1A1C1E]">Outer Padding ≥ Inner Gap</h4>
          <p className="text-[#525866] leading-relaxed font-light">
            Every container maintains generous breathing space around nested content elements.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-3">
          <span className="uppercase tracking-wide text-[#1E5E45] font-semibold block">Rule 02: Maximum Width Bounds</span>
          <h4 className="font-editorial text-[24px] sm:text-[28px] font-light text-[#1A1C1E]">1440px Architectural Horizon</h4>
          <p className="text-[#525866] leading-relaxed font-light">
            Text line lengths are capped at 700px for optimal editorial reading comfort and cadence.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-sm space-y-3">
          <span className="uppercase tracking-wide text-[#1E5E45] font-semibold block">Rule 03: Vertical Rhythm</span>
          <h4 className="font-editorial text-[24px] sm:text-[28px] font-light text-[#1A1C1E]">Generous Section Stride</h4>
          <p className="text-[#525866] leading-relaxed font-light">
            Sections breathe with ample whitespace (96px to 160px), creating calm visual pacing.
          </p>
        </div>
      </div>
    </div>
  );
};
