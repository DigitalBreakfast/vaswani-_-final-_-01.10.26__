import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  MapPin,
  ArrowUpRight,
  X,
  ExternalLink,
} from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { useNavigation } from '../context/NavigationContext';
import {
  PORTFOLIO_PROJECTS,
  ALL_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
} from '../data/portfolioData';

export const ProductsPage: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const { openEnquiryDrawer } = useNavigation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState<PortfolioCategory>('Rising now');
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const TABS: { id: PortfolioCategory; label: string }[] = [
    { id: 'Rising now', label: 'Rising now' },
    { id: 'Recently handed over', label: 'Recently Handed Over' },
    { id: 'Delivered', label: 'Delivered' },
  ];

  const getCategoryCount = (catId: PortfolioCategory) =>
    PORTFOLIO_PROJECTS.filter((p) => p.category === catId).length;

  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  // Sync tab and project modal if query params are provided in URL
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const normalized = tabParam.toLowerCase().replace(/[-_]/g, ' ');
      if (normalized.includes('recently')) {
        setActiveTab('Recently handed over');
      } else if (normalized.includes('delivered')) {
        setActiveTab('Delivered');
      } else if (normalized.includes('rising')) {
        setActiveTab('Rising now');
      }
    }

    const projectParam = searchParams.get('project');
    if (projectParam) {
      const match = ALL_PROJECTS.find(
        (p) => p.id === projectParam || p.id.toLowerCase() === projectParam.toLowerCase()
      );
      if (match) {
        if (match.category === 'Recently handed over') {
          navigate(`/projects/${match.id}`);
        } else {
          setSelectedProject(match);
          setActiveTab(match.category);
        }
      }
    }
  }, [searchParams, navigate]);

  const displayedProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.category === activeTab
  );

  const handleCardClick = (project: PortfolioProject) => {
    if (project.externalUrl) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (project.category === 'Recently handed over') {
      navigate(`/projects/${project.id}`);
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  return (
    <div className="w-full bg-transparent text-[#1C443B] pt-36 sm:pt-40 lg:pt-48 pb-20 select-none">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ========================================================================= */}
        {/* PORTFOLIO SHOWCASE & CATEGORY TABS                                        */}
        {/* ========================================================================= */}
        <section className="w-full space-y-8 sm:space-y-10">
          {/* Header Strip with Category Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1C443B]/10 pb-6 pt-2 sm:pt-4">
            <div>
              <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[54px] font-light text-[#1C443B] tracking-tight leading-[1.1]">
                Our Projects
              </h2>
            </div>

            {/* Three Categories Preserved in requested order: Rising now / Recently Handed Over / Delivered */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#1C443B]/[0.04] border border-[#1C443B]/10 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(28,68,59,0.04)]">
              {TABS.map(({ id, label }) => {
                const isActive = activeTab === id;
                const count = getCategoryCount(id);
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className={`relative flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.06em] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#FAF8F5]'
                        : 'text-[#1C443B]/70 hover:text-[#1C443B] hover:bg-[#1C443B]/[0.05]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePortfolioTabPill"
                        className="absolute inset-0 rounded-full bg-[#1C443B] shadow-[0_4px_14px_rgba(28,68,59,0.22)] border border-[#8E6B47]/30"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                    <span
                      className={`relative z-10 text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                        isActive
                          ? 'bg-[#8E6B47]/30 text-[#E8DFD1] border border-[#8E6B47]/30'
                          : 'bg-[#1C443B]/[0.07] text-[#1C443B]/60'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: luxuryEase }}
                onClick={() => handleCardClick(project)}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="group rounded-[24px] sm:rounded-[28px] bg-[#FAF8F5] border border-[#1C443B]/10 p-4 sm:p-5 hover:bg-white hover:border-[#1C443B]/30 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Stage */}
                <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#1C443B] mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-sans text-[11px] tracking-wider uppercase text-white font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      {project.badge || project.status}
                    </span>
                  </div>

                  {/* Corner Action Icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-[#1C443B] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#1C443B] group-hover:text-white transition-all duration-300">
                    {project.externalUrl ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-[26px] sm:text-[30px] lg:text-[34px] font-light text-[#1C443B] group-hover:text-[#8E6B47] transition-colors leading-[1.15] tracking-tight">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[14px] font-sans text-[#1C443B]/70 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8E6B47] shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Delivered Specific Info */}
                  {project.category === 'Delivered' && (
                    <div className="space-y-1 pt-3 border-t border-[#1C443B]/10 text-[13px] font-sans text-[#1C443B]/80">
                      {project.configuration && (
                        <div>
                          <span className="text-[#1C443B]/60">Configuration: </span>
                          <span className="font-medium text-[#1C443B]">{project.configuration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 text-[12px] text-[#1C443B]/70 pt-0.5">
                        <span>Start: <strong>{project.constructionStart}</strong></span>
                        <span>•</span>
                        <span>Possession: <strong>{project.possessionDate}</strong></span>
                      </div>
                    </div>
                  )}

                  {/* Recently handed over Specific Info */}
                  {project.category === 'Recently handed over' && (
                    <div className="space-y-1 pt-3 border-t border-[#1C443B]/10 text-[13px] font-sans text-[#1C443B]/80">
                      {project.buildingHeight && (
                        <div className="font-medium text-[#1C443B]">
                          Building Height: {project.buildingHeight}
                        </div>
                      )}
                      {project.completedYear && (
                        <div>
                          Completed: <span className="font-medium">{project.completedYear}</span>
                        </div>
                      )}
                      {project.occupancyCertificate && (
                        <div className="text-[12px] text-[#1C443B]/70">
                          Occupancy Certificate: {project.occupancyCertificate}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Click Action Indicator */}
                  <div className="pt-2 text-[13px] font-sans font-medium text-[#1C443B] group-hover:text-[#8E6B47] flex items-center gap-1.5 transition-colors">
                    <span>
                      {project.externalUrl
                        ? 'Visit Seascape Website →'
                        : project.category === 'Recently handed over'
                        ? 'Explore Project Landing Page →'
                        : 'View Details →'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* DETAILED PROJECT DOSSIER MODAL                                            */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#1C443B]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] text-[#1C443B] rounded-[28px] shadow-2xl p-6 sm:p-9 z-10 border border-[#1C443B]/15"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#1C443B]/70 hover:text-[#1C443B] hover:bg-[#1C443B]/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tag & Title */}
              <div className="space-y-2 mb-5 pr-8">
                <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
                  {selectedProject.category} • {selectedProject.status}
                </span>
                <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[50px] font-light text-[#1C443B] leading-[1.1] tracking-tight">
                  {selectedProject.name}
                </h3>
                <p className="font-sans text-[15px] sm:text-[16px] text-[#1C443B]/70">
                  {selectedProject.location}
                </p>
              </div>

              {/* Large Image Banner */}
              <div className="w-full h-60 sm:h-72 rounded-[20px] overflow-hidden mb-6 bg-[#1C443B]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Minimal Clean Details (No Long Marketing Copy) */}
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-2xl bg-white border border-[#1C443B]/10 space-y-3 font-sans">
                  <div className="flex items-center justify-between py-1 border-b border-[#1C443B]/10 text-[14px]">
                    <span className="text-[#1C443B]/70">Project Name:</span>
                    <span className="font-semibold text-[#1C443B]">{selectedProject.name}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-[#1C443B]/10 text-[14px]">
                    <span className="text-[#1C443B]/70">Location:</span>
                    <span className="font-semibold text-[#1C443B]">{selectedProject.location}</span>
                  </div>

                  {selectedProject.category === 'Delivered' && (
                    <>
                      {selectedProject.configuration && (
                        <div className="flex items-center justify-between py-1 border-b border-[#1C443B]/10 text-[14px]">
                          <span className="text-[#1C443B]/70">Configuration:</span>
                          <span className="font-semibold text-[#1C443B]">{selectedProject.configuration}</span>
                        </div>
                      )}
                      {selectedProject.constructionStart && (
                        <div className="flex items-center justify-between py-1 border-b border-[#1C443B]/10 text-[14px]">
                          <span className="text-[#1C443B]/70">Construction Start:</span>
                          <span className="font-semibold text-[#1C443B]">{selectedProject.constructionStart}</span>
                        </div>
                      )}
                      {selectedProject.possessionDate && (
                        <div className="flex items-center justify-between py-1 text-[14px]">
                          <span className="text-[#1C443B]/70">Possession Date:</span>
                          <span className="font-semibold text-[#1C443B]">{selectedProject.possessionDate}</span>
                        </div>
                      )}
                    </>
                  )}

                  {selectedProject.category === 'Recently handed over' && (
                    <>
                      {selectedProject.buildingHeight && (
                        <div className="flex items-center justify-between py-1 border-b border-[#1C443B]/10 text-[14px]">
                          <span className="text-[#1C443B]/70">Building Height:</span>
                          <span className="font-semibold text-[#1C443B]">{selectedProject.buildingHeight}</span>
                        </div>
                      )}
                      {selectedProject.completedYear && (
                        <div className="flex items-center justify-between py-1 border-b border-[#1C443B]/10 text-[14px]">
                          <span className="text-[#1C443B]/70">Completed:</span>
                          <span className="font-semibold text-[#1C443B]">{selectedProject.completedYear}</span>
                        </div>
                      )}
                      {selectedProject.occupancyCertificate && (
                        <div className="flex items-center justify-between py-1 text-[14px]">
                          <span className="text-[#1C443B]/70">Occupancy Certificate:</span>
                          <span className="font-semibold text-[#1C443B]">{selectedProject.occupancyCertificate}</span>
                        </div>
                      )}
                    </>
                  )}

                  {selectedProject.category === 'Rising now' && (
                    <>
                      <div className="flex items-center justify-between py-1 border-b border-[#1C443B]/10 text-[14px]">
                        <span className="text-[#1C443B]/70">Status:</span>
                        <span className="font-semibold text-[#1C443B]">{selectedProject.status}</span>
                      </div>
                      {selectedProject.bedrooms && (
                        <div className="flex items-center justify-between py-1 text-[14px]">
                          <span className="text-[#1C443B]/70">Configuration:</span>
                          <span className="font-semibold text-[#1C443B]">{selectedProject.bedrooms}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1C443B]/15">
                {selectedProject.externalUrl ? (
                  <a
                    href={selectedProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1C443B] hover:bg-[#1C3D35] text-white font-sans text-[14px] sm:text-[15px] tracking-wide uppercase font-semibold transition-all cursor-pointer shadow-sm"
                  >
                    <span>Visit Official Seascape Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      openEnquiryDrawer();
                    }}
                    className="px-7 py-3.5 rounded-full bg-[#1C443B] hover:bg-[#1C3D35] text-white font-sans text-[14px] sm:text-[15px] tracking-wide uppercase font-semibold transition-all cursor-pointer shadow-sm"
                  >
                    Enquire About {selectedProject.name}
                  </button>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="font-sans text-[14px] tracking-wide uppercase text-[#1C443B]/70 hover:text-[#1C443B] transition-colors cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
