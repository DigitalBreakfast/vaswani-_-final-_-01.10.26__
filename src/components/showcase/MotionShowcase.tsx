import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Compass, 
  Move, 
  Layers, 
  ArrowRight, 
  Check, 
  Sliders, 
  Eye, 
  ShieldCheck, 
  Activity, 
  MousePointer, 
  Zap, 
  Maximize2 
} from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { useNavigation } from '../../context/NavigationContext';
import { 
  HeadingLarge, 
  HeadingMedium, 
  HeadingSmall, 
  Eyebrow, 
  BodyLarge, 
  BodyRegular, 
  EditorialQuote, 
  AgencyStat 
} from '../ui/Typography';
import { Button } from '../ui/Button';
import { 
  LUXURY_EASE, 
  SLOW_DECEL, 
  EDITORIAL_EASE, 
  CURTAIN_EASE,
  Reveal, 
  MaskRevealHeading, 
  WordReveal, 
  TrackingReveal, 
  FadeUpText, 
  ScrollTextReveal, 
  StaggerContainer, 
  StaggerItem, 
  Parallax, 
  ParallaxLayer, 
  Magnetic, 
  PerspectiveTiltCard, 
  PageLoadOrchestrator,
  AmbientEnvironmentalLight 
} from '../ui/Motion';
import { CinematicImage, CinematicVideo } from '../ui/Media';

export const MotionShowcase: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const { isSmoothEnabled, setIsSmoothEnabled } = useSmoothScroll();
  const { openEnquiryDrawer, toggleMegaMenu } = useNavigation();

  // Interactive State for Curve Simulator
  const [activeEase, setActiveEase] = useState<'luxury' | 'slowDecel' | 'editorial' | 'curtain'>('luxury');
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  // State for Load Sequence Simulator
  const [loadSimPhase, setLoadSimPhase] = useState<number>(0);
  const [isSimRunning, setIsSimRunning] = useState(false);

  // Easing presets
  const easingOptions = {
    luxury: {
      name: 'Luxury Deceleration (Signature)',
      curve: LUXURY_EASE,
      css: 'cubic-bezier(0.16, 1, 0.3, 1)',
      desc: 'Swift authoritative initial acceleration followed by a long, calm deceleration. Never bounces.',
    },
    slowDecel: {
      name: 'Architectural Weight',
      curve: SLOW_DECEL,
      css: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
      desc: 'Heavy physical mass; ideal for large background shifts and image curtain transitions.',
    },
    editorial: {
      name: 'Editorial Flow',
      curve: EDITORIAL_EASE,
      css: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      desc: 'Balanced ease-in-out for typography crossfades and drawer expansion.',
    },
    curtain: {
      name: 'Curtain Mask Reveal',
      curve: CURTAIN_EASE,
      css: 'cubic-bezier(0.77, 0, 0.175, 1)',
      desc: 'Dramatic geometric reveal curve for high-impact full-screen panels.',
    },
  };

  const handleRunLoadSim = () => {
    setIsSimRunning(true);
    setLoadSimPhase(1);
    const timers = [
      setTimeout(() => setLoadSimPhase(2), 500),
      setTimeout(() => setLoadSimPhase(3), 1000),
      setTimeout(() => setLoadSimPhase(4), 1600),
      setTimeout(() => {
        setLoadSimPhase(5);
        setIsSimRunning(false);
      }, 2300),
    ];
  };

  return (
    <div className="space-y-20">
      {/* ========================================================================= */}
      {/* SECTION HEADER: Motion Philosophy */}
      {/* ========================================================================= */}
      <div className="space-y-4 max-w-4xl">
        <Eyebrow dot>Global Motion Architecture & Physics</Eyebrow>
        <HeadingLarge>
          Cinematic, Effortless & Alive
        </HeadingLarge>
        <BodyLarge>
          Vaswani’s motion language communicates confidence through architectural weight and slow deceleration. No bouncy cartoon effects, no jarring flashes—only purposeful rhythm, seamless smooth scrolling, and magnetic micro-interactions on Warm Ivory.
        </BodyLarge>
      </div>

      {/* ========================================================================= */}
      {/* 1. EASING CURVE & PHYSICS INSPECTOR */}
      {/* ========================================================================= */}
      <section className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE4D6] pb-6">
          <div>
            <Eyebrow>01. Kinetic Physics</Eyebrow>
            <h3 className="font-futura text-2xl font-light text-[#1A1C1E] mt-1">
              Custom Luxury Easing Curves
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAnimationTrigger((prev) => prev + 1)}
              className="px-4 py-2 rounded-full bg-[#1E5E45] hover:bg-[#257355] text-[#FAF8F5] font-futura text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-sm font-semibold"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Trigger Motion Test</span>
            </button>
          </div>
        </div>

        {/* Easing selector pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(Object.keys(easingOptions) as (keyof typeof easingOptions)[]).map((key) => {
            const isSelected = activeEase === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveEase(key);
                  setAnimationTrigger((p) => p + 1);
                }}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer space-y-1.5 ${
                  isSelected
                    ? 'bg-[#FAF8F5] border-[#1E5E45] shadow-xs'
                    : 'bg-white hover:bg-[#FAF8F5] border-[#EAE4D6]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-futura text-xs uppercase tracking-wider font-semibold text-[#1A1C1E]">
                    {key}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#1E5E45]" />}
                </div>
                <p className="font-futura text-[11px] text-[#6C7382] leading-tight line-clamp-2">
                  {easingOptions[key].name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Live Visual Track Arena */}
        <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] space-y-6">
          <div className="flex items-center justify-between text-xs font-futura text-[#6C7382]">
            <span className="font-semibold uppercase tracking-wider text-[#1A1C1E]">
              Current Curve: {easingOptions[activeEase].css}
            </span>
            <span>Duration: {(0.9 * speedMultiplier).toFixed(2)}s</span>
          </div>

          {/* Kinetic Ball Track */}
          <div className="relative h-16 w-full rounded-lg bg-white border border-[#EAE4D6] flex items-center px-4 overflow-hidden">
            {/* Grid ticks */}
            <div className="absolute inset-0 flex justify-between px-6 pointer-events-none opacity-20">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-full w-px bg-[#1A1C1E]" />
              ))}
            </div>

            <motion.div
              key={animationTrigger + activeEase}
              initial={{ x: 0, scale: 0.95 }}
              animate={{ x: 'calc(100% - 48px)', scale: 1 }}
              transition={{
                duration: 1.1 * speedMultiplier,
                ease: easingOptions[activeEase].curve as any,
              }}
              className="w-12 h-12 rounded-xl bg-[#1E5E45] border border-[#2D8966] text-[#FAF8F5] flex items-center justify-center font-agency font-bold text-lg shadow-md shadow-[#143C2E]/20"
            >
              V
            </motion.div>
          </div>

          <p className="text-xs text-[#525866] font-futura leading-relaxed">
            {easingOptions[activeEase].desc}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PAGE LOAD SEQUENCE SIMULATOR */}
      {/* ========================================================================= */}
      <section className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE4D6] pb-6">
          <div>
            <Eyebrow dot>02. Orchestrated Staging</Eyebrow>
            <h3 className="font-futura text-2xl font-light text-[#1A1C1E] mt-1">
              5-Phase Page Load Choreography
            </h3>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={handleRunLoadSim}
            disabled={isSimRunning}
            icon={<RotateCcw className="w-3.5 h-3.5" />}
          >
            {isSimRunning ? 'Choreographing...' : 'Simulate Page Load'}
          </Button>
        </div>

        {/* 5 Phase Progress Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            { phase: 1, title: 'Phase 1', label: 'Logo Reveal', desc: 'Monogram emerges first' },
            { phase: 2, title: 'Phase 2', label: 'Navigation', desc: 'Header & Links fade in' },
            { phase: 3, title: 'Phase 3', label: 'Background Media', desc: 'Cinematic imagery zoom' },
            { phase: 4, title: 'Phase 4', label: 'Mask Typography', desc: 'Headlines rise up' },
            { phase: 5, title: 'Phase 5', label: 'Action CTA', desc: 'Magnetic buttons appear' },
          ].map((step) => {
            const isReached = loadSimPhase >= step.phase;
            const isCurrent = loadSimPhase === step.phase;
            return (
              <div
                key={step.phase}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-[#1E5E45] text-[#FAF8F5] border-[#1E5E45] shadow-sm'
                    : isReached
                    ? 'bg-[#FAF8F5] text-[#1A1C1E] border-[#1E5E45]/30'
                    : 'bg-white text-[#8990A0] border-[#EAE4D6]'
                }`}
              >
                <span className="font-agency font-bold text-xs block">{step.title}</span>
                <p className="font-futura text-sm font-medium mt-1">{step.label}</p>
                <span className="text-[11px] block mt-0.5 opacity-80">{step.desc}</span>
              </div>
            );
          })}
        </div>

        {/* Live Staged Preview Window */}
        <div className="relative h-96 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] overflow-hidden p-8 flex flex-col justify-between">
          {/* Phase 2: Navigation bar mockup */}
          <AnimatePresence>
            {loadSimPhase >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: LUXURY_EASE }}
                className="flex items-center justify-between border-b border-[#EAE4D6] pb-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border border-[#1A1C1E]/20 flex items-center justify-center font-futura text-xs">V</div>
                  <span className="font-futura text-xs uppercase tracking-widest font-medium">VASWANI</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-futura text-[#6C7382]">
                  <span>RESIDENCES</span>
                  <span>COMMERCIAL</span>
                  <span>ABOUT</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 3: Background Media Mockup */}
          <AnimatePresence>
            {loadSimPhase >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: LUXURY_EASE }}
                className="absolute inset-0 z-0 opacity-15 pointer-events-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Architecture"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 1 & 4: Logo & Typography */}
          <div className="relative z-10 space-y-4 my-auto">
            <AnimatePresence>
              {loadSimPhase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: LUXURY_EASE }}
                >
                  <Eyebrow color="seaGreen" dot>Architectural Luxury</Eyebrow>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {loadSimPhase >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.85, ease: LUXURY_EASE }}
                  className="space-y-2"
                >
                  <h3 className="font-futura text-3xl sm:text-4xl font-light text-[#1A1C1E]">
                    Timeless Precision. <br />
                    <span className="font-caladea italic text-[#1E5E45]">Effortless Architecture.</span>
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Phase 5: Action Button */}
          <AnimatePresence>
            {loadSimPhase >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: LUXURY_EASE }}
                className="relative z-10 flex items-center gap-3"
              >
                <Button variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore Portfolio
                </Button>
                <Button variant="secondary" size="sm">
                  Schedule Viewing
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MOUSE-REACTIVE 3D PERSPECTIVE & TILT CHAMBER */}
      {/* ========================================================================= */}
      <section className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-8">
        <div className="space-y-1 border-b border-[#EAE4D6] pb-6">
          <Eyebrow dot>03. Mouse-Reactive Depth</Eyebrow>
          <h3 className="font-futura text-2xl font-light text-[#1A1C1E]">
            Subtle 3D Perspective Tilt & Specular Reflection
          </h3>
          <p className="text-sm text-[#525866] font-futura">
            Move your cursor across cards to experience real-time 3D perspective rotation, dynamic ambient glare, and optical depth without unnatural distortion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <PerspectiveTiltCard maxRotation={8} className="p-6 bg-white border border-[#EAE4D6] shadow-architectural-sm hover:shadow-architectural-md space-y-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Sky Suites"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1A1C1E]/80 text-[#FAF8F5] text-[10px] font-futura uppercase tracking-wider backdrop-blur-xs">
                Residential
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-agency font-bold text-xs text-[#1E5E45] tracking-wider">EST. 2025</span>
              <h4 className="font-futura text-lg text-[#1A1C1E] font-medium">The Vaswani Sanctuary</h4>
              <p className="font-futura text-xs text-[#6C7382]">Tilt cards react seamlessly to cursor proximity.</p>
            </div>
          </PerspectiveTiltCard>

          {/* Card 2 */}
          <PerspectiveTiltCard maxRotation={8} className="p-6 bg-white border border-[#EAE4D6] shadow-architectural-sm hover:shadow-architectural-md space-y-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Sky Suites"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1A1C1E]/80 text-[#FAF8F5] text-[10px] font-futura uppercase tracking-wider backdrop-blur-xs">
                Commercial
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-agency font-bold text-xs text-[#1E5E45] tracking-wider">GRADE A HQ</span>
              <h4 className="font-futura text-lg text-[#1A1C1E] font-medium">Vaswani Matrix Towers</h4>
              <p className="font-futura text-xs text-[#6C7382]">Equipped with specular light reflection.</p>
            </div>
          </PerspectiveTiltCard>

          {/* Card 3 */}
          <PerspectiveTiltCard maxRotation={8} className="p-6 bg-white border border-[#EAE4D6] shadow-architectural-sm hover:shadow-architectural-md space-y-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Sky Suites"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1A1C1E]/80 text-[#FAF8F5] text-[10px] font-futura uppercase tracking-wider backdrop-blur-xs">
                Masterplan
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-agency font-bold text-xs text-[#1E5E45] tracking-wider">120 ACRES</span>
              <h4 className="font-futura text-lg text-[#1A1C1E] font-medium">Vaswani Botanical Crest</h4>
              <p className="font-futura text-xs text-[#6C7382]">Calculated with mathematical perspective.</p>
            </div>
          </PerspectiveTiltCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CURSOR SYSTEM & INTERACTIVE TRIGGER ZONES */}
      {/* ========================================================================= */}
      <section className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-8">
        <div className="space-y-1 border-b border-[#EAE4D6] pb-6">
          <Eyebrow dot>04. Intelligent Cursor System</Eyebrow>
          <h3 className="font-futura text-2xl font-light text-[#1A1C1E]">
            Adaptive Cursor State Matrix
          </h3>
          <p className="text-sm text-[#525866] font-futura">
            Hover over each interactive zone below to observe how the custom cursor seamlessly adapts its shape, scale, badge, and spring physics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Zone 1: Default Pointer */}
          <div
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={resetCursor}
            className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all duration-300"
          >
            <MousePointer className="w-5 h-5 text-[#1E5E45]" />
            <span className="font-futura text-xs uppercase font-semibold text-[#1A1C1E]">Pointer</span>
            <span className="text-[10px] text-[#6C7382] font-futura">Interactive Ring</span>
          </div>

          {/* Zone 2: View Pill */}
          <div
            onMouseEnter={() => setCursorVariant('view', 'VIEW')}
            onMouseLeave={resetCursor}
            className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all duration-300"
          >
            <Eye className="w-5 h-5 text-[#1E5E45]" />
            <span className="font-futura text-xs uppercase font-semibold text-[#1A1C1E]">View</span>
            <span className="text-[10px] text-[#6C7382] font-futura">Editorial Pill</span>
          </div>

          {/* Zone 3: Explore Badge */}
          <div
            onMouseEnter={() => setCursorVariant('explore', 'EXPLORE')}
            onMouseLeave={resetCursor}
            className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all duration-300"
          >
            <Compass className="w-5 h-5 text-[#1E5E45]" />
            <span className="font-futura text-xs uppercase font-semibold text-[#1A1C1E]">Explore</span>
            <span className="text-[10px] text-[#6C7382] font-futura">Compass Halo</span>
          </div>

          {/* Zone 4: Play / Video */}
          <div
            onMouseEnter={() => setCursorVariant('play')}
            onMouseLeave={resetCursor}
            className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all duration-300"
          >
            <Play className="w-5 h-5 text-[#1E5E45] fill-current" />
            <span className="font-futura text-xs uppercase font-semibold text-[#1A1C1E]">Play</span>
            <span className="text-[10px] text-[#6C7382] font-futura">Media Control</span>
          </div>

          {/* Zone 5: Drag */}
          <div
            onMouseEnter={() => setCursorVariant('drag')}
            onMouseLeave={resetCursor}
            className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all duration-300"
          >
            <Move className="w-5 h-5 text-[#1E5E45]" />
            <span className="font-futura text-xs uppercase font-semibold text-[#1A1C1E]">Drag</span>
            <span className="text-[10px] text-[#6C7382] font-futura">Carousel State</span>
          </div>

          {/* Zone 6: Magnetic Snap */}
          <div
            onMouseEnter={() => setCursorVariant('magnetic')}
            onMouseLeave={resetCursor}
            className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] hover:border-[#1E5E45]/40 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all duration-300"
          >
            <Zap className="w-5 h-5 text-[#1E5E45]" />
            <span className="font-futura text-xs uppercase font-semibold text-[#1A1C1E]">Magnetic</span>
            <span className="text-[10px] text-[#6C7382] font-futura">Proximity Pull</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SMOOTH SCROLL & ACCESSIBILITY SYSTEM */}
      {/* ========================================================================= */}
      <section className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <Eyebrow dot>05. Accessibility & Smooth Engine</Eyebrow>
            <h3 className="font-futura text-2xl font-light text-[#1A1C1E]">
              Lenis Smooth Momentum & Reduced Motion Engine
            </h3>
            <p className="text-xs text-[#525866] font-futura">
              Guarantees 60fps performance across desktop, tablet, and mobile with automatic prefers-reduced-motion fallback.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSmoothEnabled(!isSmoothEnabled)}
              className={`px-4 py-2 rounded-full font-futura text-xs uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-2 ${
                isSmoothEnabled
                  ? 'bg-[#1E5E45] text-[#FAF8F5] border-[#1E5E45]'
                  : 'bg-white text-[#1A1C1E] border-[#EAE4D6]'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Smooth Scroll: {isSmoothEnabled ? 'Active' : 'Disabled'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#EAE4D6]">
          <div className="space-y-1">
            <span className="font-futura text-xs font-semibold text-[#1A1C1E] uppercase tracking-wider block">
              Exponential Deceleration
            </span>
            <p className="font-futura text-xs text-[#6C7382]">
              Tuned to a 1.2s lerp curve with 0.9 wheel multiplier for authentic architectural weight.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-futura text-xs font-semibold text-[#1A1C1E] uppercase tracking-wider block">
              GPU Hardware Acceleration
            </span>
            <p className="font-futura text-xs text-[#6C7382]">
              All transform, clip-path, and opacity transitions use CSS hardware-accelerated layers.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-futura text-xs font-semibold text-[#1A1C1E] uppercase tracking-wider block">
              WCAG & OS Accessibility
            </span>
            <p className="font-futura text-xs text-[#6C7382]">
              Respects system-level reduced motion preferences without breaking layout alignment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
