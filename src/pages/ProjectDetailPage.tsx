import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  FileCheck,
  Compass,
  Shield,
  Layers,
  Sparkles,
  PhoneCall,
  Download,
  Share2,
  ExternalLink,
  ChevronRight,
  Maximize2,
  X,
} from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { useNavigation } from '../context/NavigationContext';
import {
  ALL_PROJECTS,
  PORTFOLIO_PROJECTS,
  PortfolioProject,
} from '../data/portfolioData';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();

  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [activeSpecTab, setActiveSpecTab] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find project by ID (case-insensitive)
  const project = ALL_PROJECTS.find(
    (p) => p.id.toLowerCase() === id?.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  // Sibling projects in Recently handed over for easy discovery
  const recentlyHandedOverProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.category === 'Recently handed over' && p.id !== project?.id
  );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${project?.name} | Vaswani Group`,
          text: project?.tagline || `Explore ${project?.name} in ${project?.location}`,
          url: window.location.href,
        });
      } catch {
        // Ignored
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-32 pb-20 select-none">
        <div className="max-w-md space-y-5">
          <span className="font-sans text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
            VASWANI PORTFOLIO
          </span>
          <h1 className="font-editorial text-[36px] sm:text-[44px] font-light text-[#1C443B]">
            Project Not Found
          </h1>
          <p className="font-sans text-[16px] text-[#1C443B]/70 leading-relaxed">
            The project showcase you are seeking could not be found or has been relocated.
          </p>
          <div className="pt-4">
            <Link
              to="/projects?tab=recently-handed-over"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C443B] text-white font-sans text-[14px] uppercase tracking-wider font-medium hover:bg-[#1C3D35] transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const galleryItems = project.gallery || [
    { src: project.image, caption: `${project.name} Architectural Facade` },
  ];

  return (
    <div className="w-full bg-transparent text-[#1C443B] select-none pt-28 sm:pt-32 pb-24">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. TOP BREADCRUMB & STICKY ACTION BAR                          */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#1C443B]/10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[13px] sm:text-[14px] font-sans text-[#1C443B]/70">
            <button
              onClick={() => navigate('/projects?tab=recently-handed-over')}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-1.5 hover:text-[#1C443B] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">All Projects</span>
            </button>
            <span className="text-[#1C443B]/30">/</span>
            <span className="text-[#8E6B47] uppercase tracking-wider text-[11px] sm:text-[12px] font-semibold">
              {project.category}
            </span>
            <span className="text-[#1C443B]/30 hidden sm:inline">/</span>
            <span className="font-medium text-[#1C443B] hidden sm:inline">
              {project.name}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#1C443B]/15 bg-white/70 hover:bg-white text-[#1C443B] text-[12px] font-sans font-medium transition-all cursor-pointer shadow-sm"
              title="Share project"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={openEnquiryDrawer}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1C443B] hover:bg-[#1C3D35] text-[#FAF8F5] text-[12px] sm:text-[13px] font-sans font-medium tracking-wide uppercase transition-all cursor-pointer shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Schedule Private Tour</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* ───────────────────────────────────────────────────────────── */}
        {/* 2. HERO SHOWCASE STAGE                                         */}
        {/* ───────────────────────────────────────────────────────────── */}
        <section className="space-y-8">
          {/* Main Hero Visual Card */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[24px] sm:rounded-[36px] overflow-hidden bg-[#1C443B] shadow-[0_25px_70px_-20px_rgba(28,68,59,0.25)] border border-[#1C443B]/15">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-center"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-5 sm:top-8 left-5 sm:left-8 z-10 flex flex-wrap items-center gap-2.5">
              <span className="font-sans text-[11px] sm:text-[12px] tracking-widest uppercase text-white font-medium px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                {project.badge || project.category}
              </span>
              {project.occupancyCertificate && (
                <span className="inline-flex items-center gap-1.5 font-sans text-[11px] sm:text-[12px] tracking-wider uppercase text-[#E8DFD1] font-medium px-3.5 py-1.5 rounded-full bg-[#8E6B47]/80 backdrop-blur-md border border-white/20">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>OC: {project.occupancyCertificate}</span>
                </span>
              )}
            </div>

            {/* Bottom Hero Typography */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10 text-white space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-white/80 font-sans text-[13px] sm:text-[15px]">
                <MapPin className="w-4 h-4 text-[#E8DFD1]" />
                <span>{project.location}</span>
                {project.completedYear && (
                  <>
                    <span className="text-white/40">•</span>
                    <span>Handed Over {project.completedYear}</span>
                  </>
                )}
              </div>

              <h1 className="font-editorial text-[38px] sm:text-[54px] lg:text-[72px] font-light leading-[1.05] tracking-tight text-[#FAF8F5]">
                {project.name}
              </h1>

              {project.tagline && (
                <p className="font-sans text-[16px] sm:text-[19px] lg:text-[21px] text-[#E8DFD1] font-light max-w-3xl leading-relaxed">
                  {project.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 p-4 sm:p-6 rounded-[24px] bg-[#FAF8F5] border border-[#1C443B]/10 shadow-sm">
            {(project.keyStats || [
              { label: 'Completion', value: project.completedYear || 'Delivered' },
              { label: 'Status', value: project.status || 'Handed Over' },
              { label: 'Location', value: project.location },
              { label: 'Bedrooms', value: project.bedrooms || '2 & 3 BHK' },
              { label: 'Carpet Area', value: project.area || 'Spacious Layouts' },
              { label: 'Height', value: project.buildingHeight || 'High Rise' },
            ]).map((stat, i) => (
              <div
                key={i}
                className="space-y-1 border-l-2 border-[#8E6B47]/40 pl-3.5 py-1"
              >
                <span className="block font-sans text-[11px] sm:text-[12px] uppercase tracking-wider text-[#1C443B]/60 font-medium">
                  {stat.label}
                </span>
                <span className="block font-sans text-[14px] sm:text-[15px] font-semibold text-[#1C443B] leading-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 3. ARCHITECTURAL OVERVIEW & NARRATIVE                          */}
        {/* ───────────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
              ARCHITECTURAL NARRATIVE
            </span>
            <h2 className="font-editorial text-[32px] sm:text-[42px] lg:text-[48px] font-light leading-[1.12] text-[#1C443B] tracking-tight">
              Crafted with restraint. <br />
              <span className="italic font-normal text-[#8E6B47]">
                Delivered without compromise.
              </span>
            </h2>
            <div className="w-16 h-[1.5px] bg-[#8E6B47]/40 pt-1" />

            {/* Project Credentials Table */}
            <div className="pt-6 space-y-3 font-sans text-[13px] sm:text-[14px]">
              {project.architect && (
                <div className="flex items-center justify-between py-2 border-b border-[#1C443B]/10">
                  <span className="text-[#1C443B]/60">Design Architect:</span>
                  <span className="font-medium text-[#1C443B]">{project.architect}</span>
                </div>
              )}
              {project.structuralEngineer && (
                <div className="flex items-center justify-between py-2 border-b border-[#1C443B]/10">
                  <span className="text-[#1C443B]/60">Structural Engineering:</span>
                  <span className="font-medium text-[#1C443B]">{project.structuralEngineer}</span>
                </div>
              )}
              {project.reraNumber && (
                <div className="flex items-center justify-between py-2 border-b border-[#1C443B]/10">
                  <span className="text-[#1C443B]/60">MahaRERA Registration:</span>
                  <span className="font-mono font-medium text-[#1C443B]">{project.reraNumber}</span>
                </div>
              )}
              {project.occupancyCertificate && (
                <div className="flex items-center justify-between py-2 border-b border-[#1C443B]/10">
                  <span className="text-[#1C443B]/60">Occupancy Status:</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{project.occupancyCertificate}</span>
                  </span>
                </div>
              )}
              {project.totalResidences && (
                <div className="flex items-center justify-between py-2 border-b border-[#1C443B]/10">
                  <span className="text-[#1C443B]/60">Total Residences:</span>
                  <span className="font-medium text-[#1C443B]">{project.totalResidences}</span>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 font-sans text-[16px] sm:text-[18px] text-[#1C443B]/85 leading-[1.8] font-light">
            {(project.overview || [
              `${project.name} is a premier residential development situated in ${project.location}, developed by the Vaswani Group. Built with uncompromising structural principles, this signature address has been fully handed over to homeowners.`,
              'Every square foot reflects the developer’s four-decade dedication to honest construction, clarity in paperwork, and long-term livability.',
            ]).map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Direct Brochure & Site Visit Actions */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={openEnquiryDrawer}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1C443B] hover:bg-[#1C3D35] text-white font-sans text-[14px] uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-md"
              >
                <span>Request Detailed Brochure</span>
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={openEnquiryDrawer}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#1C443B]/25 hover:border-[#1C443B] bg-white/70 hover:bg-white text-[#1C443B] font-sans text-[14px] uppercase tracking-wider font-semibold transition-all cursor-pointer"
              >
                <span>Book Site Tour</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 4. KEY HIGHLIGHTS & ARCHITECTURAL AMENITIES                    */}
        {/* ───────────────────────────────────────────────────────────── */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C443B]/10 pb-5">
              <div>
                <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
                  DISTINCTIVE ADVANTAGES
                </span>
                <h2 className="font-editorial text-[32px] sm:text-[42px] font-light text-[#1C443B] leading-tight tracking-tight mt-1">
                  Living at {project.name}
                </h2>
              </div>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1C443B]/70 max-w-md">
                Thoughtfully planned amenities and engineering features built to ensure lasting security, health, and comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.highlights.map((h, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: luxuryEase }}
                  className="rounded-[24px] bg-[#FAF8F5] border border-[#1C443B]/10 p-6 sm:p-7 hover:bg-white hover:border-[#1C443B]/30 hover:shadow-lg transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1C443B]/[0.06] text-[#8E6B47] flex items-center justify-center font-mono text-[13px] font-semibold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-editorial text-[22px] sm:text-[24px] font-normal text-[#1C443B] leading-snug">
                    {h.title}
                  </h3>
                  <p className="font-sans text-[14px] sm:text-[15px] text-[#1C443B]/75 leading-relaxed font-light">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 5. ARCHITECTURAL SPECIFICATIONS                                */}
        {/* ───────────────────────────────────────────────────────────── */}
        {project.specifications && project.specifications.length > 0 && (
          <section className="space-y-8 rounded-[32px] bg-[#FAF8F5] border border-[#1C443B]/12 p-6 sm:p-10 lg:p-12">
            <div className="max-w-2xl space-y-2">
              <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
                TECHNICAL RIGOR
              </span>
              <h2 className="font-editorial text-[32px] sm:text-[42px] font-light text-[#1C443B] tracking-tight">
                Architectural Specifications
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#1C443B]/70">
                Finishes, joinery, and structural fixtures installed at {project.name}.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#1C443B]/10 pb-4">
              {project.specifications.map((spec, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveSpecTab(sIdx)}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className={`px-4 sm:px-5 py-2 rounded-full font-sans text-[13px] sm:text-[14px] tracking-wide transition-all cursor-pointer font-medium ${
                    activeSpecTab === sIdx
                      ? 'bg-[#1C443B] text-white shadow-sm'
                      : 'bg-white/60 text-[#1C443B]/70 hover:text-[#1C443B] hover:bg-white'
                  }`}
                >
                  {spec.title}
                </button>
              ))}
            </div>

            {/* Active Spec Tab Content */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {project.specifications[activeSpecTab]?.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#1C443B]/8"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#8E6B47] shrink-0 mt-0.5" />
                      <span className="font-sans text-[14px] sm:text-[15px] text-[#1C443B]/85 font-light leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 6. VISUAL GALLERY SHOWCASE                                    */}
        {/* ───────────────────────────────────────────────────────────── */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1C443B]/10 pb-5">
            <div>
              <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
                PHOTOGRAPHY & SPATIAL VISTAS
              </span>
              <h2 className="font-editorial text-[32px] sm:text-[42px] font-light text-[#1C443B] tracking-tight mt-1">
                Visual Gallery
              </h2>
            </div>
            <span className="font-sans text-[13px] text-[#1C443B]/60">
              Click any image to enlarge
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryItems.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveGalleryIndex(idx)}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group relative aspect-[4/3] rounded-[20px] overflow-hidden bg-[#1C443B] cursor-pointer shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <span className="text-[12px] font-sans text-white/90 font-light line-clamp-2">
                    {img.caption}
                  </span>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 7. NEIGHBORHOOD & CONNECTIVITY ADVANTAGES                     */}
        {/* ───────────────────────────────────────────────────────────── */}
        {project.locationAdvantages && project.locationAdvantages.length > 0 && (
          <section className="space-y-8">
            <div className="border-b border-[#1C443B]/10 pb-5">
              <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
                LOCATION ADVANTAGE
              </span>
              <h2 className="font-editorial text-[32px] sm:text-[42px] font-light text-[#1C443B] tracking-tight mt-1">
                Connected to Mumbai’s Lifelines
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#1C443B]/70 mt-1">
                Strategically positioned in {project.location} with immediate access to business districts, schools, and cultural destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.locationAdvantages.map((loc, lIdx) => (
                <div
                  key={lIdx}
                  className="p-6 rounded-[24px] bg-[#FAF8F5] border border-[#1C443B]/10 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#8E6B47]/15 text-[#8E6B47] font-semibold">
                      {loc.distance}
                    </span>
                  </div>
                  <h4 className="font-sans text-[16px] font-semibold text-[#1C443B]">
                    {loc.category}
                  </h4>
                  <ul className="space-y-1.5 pt-1 text-[13px] sm:text-[14px] text-[#1C443B]/75 font-light">
                    {loc.places.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#8E6B47]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 8. SCHEDULE PRIVATE ADVISORY / SITE CONSULTATION               */}
        {/* ───────────────────────────────────────────────────────────── */}
        <section className="rounded-[32px] sm:rounded-[40px] bg-[#1C443B] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#E8DFD1] font-semibold block">
              PRIVATE CONSULTATION
            </span>
            <h2 className="font-editorial text-[36px] sm:text-[48px] lg:text-[56px] font-light leading-[1.08] tracking-tight text-[#FAF8F5]">
              Experience {project.name} in person.
            </h2>
            <p className="font-sans text-[16px] sm:text-[18px] text-[#D8E6E0] font-light leading-relaxed">
              Residences at {project.name} have been handed over. Schedule a private walkthrough of available opportunities or consult with our advisory team.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={openEnquiryDrawer}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="px-8 py-4 rounded-full bg-[#FAF8F5] hover:bg-white text-[#1C443B] font-sans text-[14px] uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
              >
                Schedule Private Viewing
              </button>

              <button
                onClick={() => navigate('/projects?tab=recently-handed-over')}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="px-8 py-4 rounded-full border border-white/30 hover:border-white text-white font-sans text-[14px] uppercase tracking-wider font-semibold transition-all cursor-pointer hover:bg-white/10"
              >
                Explore Other Projects
              </button>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* 9. EXPLORE OTHER RECENTLY HANDED OVER PROJECTS                */}
        {/* ───────────────────────────────────────────────────────────── */}
        {recentlyHandedOverProjects.length > 0 && (
          <section className="space-y-8 pt-6 border-t border-[#1C443B]/10">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
                  CONTINUE EXPLORING
                </span>
                <h3 className="font-editorial text-[28px] sm:text-[36px] font-light text-[#1C443B] tracking-tight mt-1">
                  Other Recently Handed Over Projects
                </h3>
              </div>
              <Link
                to="/projects?tab=recently-handed-over"
                className="hidden sm:inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-[#1C443B] hover:text-[#8E6B47] transition-colors"
              >
                <span>View All (3)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentlyHandedOverProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/projects/${p.id}`)}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className="group rounded-[24px] bg-[#FAF8F5] border border-[#1C443B]/10 p-5 hover:bg-white hover:border-[#1C443B]/30 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-5 items-center"
                >
                  <div className="w-full sm:w-44 h-40 sm:h-36 rounded-[18px] overflow-hidden bg-[#1C443B] shrink-0">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2 flex-1 w-full">
                    <span className="font-sans text-[11px] tracking-wider uppercase text-[#8E6B47] font-semibold">
                      {p.location} • Handed Over {p.completedYear || p.year}
                    </span>
                    <h4 className="font-editorial text-[26px] sm:text-[28px] font-light text-[#1C443B] group-hover:text-[#8E6B47] transition-colors leading-tight">
                      {p.name}
                    </h4>
                    <p className="font-sans text-[13px] text-[#1C443B]/70 line-clamp-2">
                      {p.tagline || p.bedrooms}
                    </p>
                    <div className="pt-1 text-[13px] font-sans font-medium text-[#1C443B] group-hover:text-[#8E6B47] flex items-center gap-1">
                      <span>Open Landing Page →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 10. LIGHTBOX PREVIEW MODAL                                    */}
      {/* ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeGalleryIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md">
            <button
              onClick={() => setActiveGalleryIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={galleryItems[activeGalleryIndex]?.src}
                alt={galleryItems[activeGalleryIndex]?.caption}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              />
              <p className="mt-4 font-sans text-[15px] text-white/90 text-center font-light">
                {galleryItems[activeGalleryIndex]?.caption}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
