import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
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

  const [activeTab, setActiveTab] =
    useState<PortfolioCategory>('Completed Portfolio');
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const TABS: PortfolioCategory[] = [
    'Completed Portfolio',
    'Recently Delivered',
    'Ongoing & Upcoming',
  ];

  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  // Sync project modal if project query param is provided in URL
  useEffect(() => {
    const projectParam = searchParams.get('project');
    if (projectParam) {
      const match = ALL_PROJECTS.find(
        (p) => p.id === projectParam || p.id.toLowerCase() === projectParam.toLowerCase()
      );
      if (match) {
        setSelectedProject(match);
        setActiveTab(match.category);
      }
    }
  }, [searchParams]);

  const displayedProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.category === activeTab
  );

  const handleCardClick = (project: PortfolioProject) => {
    if (project.externalUrl) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <div className="w-full bg-transparent text-[#152E28] pt-24 sm:pt-28 pb-20 select-none">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (PANORAMIC ASYMMETRIC BANNER)                             */}
        {/* ========================================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="relative w-full rounded-[28px] sm:rounded-[36px] bg-[#FAF8F5] border border-[#152E28]/10 overflow-hidden shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[480px]">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative z-10">
              <div className="space-y-6 max-w-[620px]">
                <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#152E28]/70 font-semibold block">
                  VASWANI PORTFOLIO
                </span>
                <h1 className="font-editorial text-[48px] md:text-[68px] lg:text-[84px] font-light leading-[1.02] tracking-tight text-[#152E28]">
                  Curated <br />
                  <span className="italic font-normal text-[#8E6B47]">Masterworks</span>
                </h1>
                <p className="font-sans text-[18px] md:text-[20px] lg:text-[22px] text-[#152E28]/75 font-light leading-[1.5]">
                  Explore a carefully curated collection of current developments, recently delivered residences and landmark projects that have shaped the Vaswani legacy over four decades.
                </p>
              </div>
            </div>

            {/* Right Architectural Image Stage */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-[#152E28]">
              <img
                src="https://res.cloudinary.com/ds5s7shuo/image/upload/v1779550159/Make_setting_night_time_202605232058_w4cpyk.jpg"
                alt="Vaswani Architecture"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#FAF8F5] via-transparent to-transparent opacity-80 lg:opacity-60 pointer-events-none" />
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. PORTFOLIO SHOWCASE & CATEGORY TABS                                     */}
        {/* ========================================================================= */}
        <section className="w-full space-y-8 sm:space-y-10">
          {/* Header Strip with Category Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#152E28]/10 pb-6">
            <div>
              <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block mb-1">
                PORTFOLIO DIRECTORY
              </span>
              <h2 className="font-editorial text-[36px] md:text-[44px] lg:text-[54px] font-light text-[#152E28] tracking-tight leading-[1.1]">
                Our Projects
              </h2>
            </div>

            {/* Three Categories Preserved */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={resetCursor}
                    className={`relative px-4 sm:px-5 py-2.5 rounded-full font-sans text-[13px] sm:text-[14px] md:text-[15px] tracking-wide uppercase font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#152E28] text-[#d7c2a3] shadow-md'
                        : 'text-[#152E28]/70 hover:text-[#152E28] hover:bg-[#152E28]/5'
                    }`}
                  >
                    {tab}
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
                className="group rounded-[24px] sm:rounded-[28px] bg-[#FAF8F5] border border-[#152E28]/10 p-4 sm:p-5 hover:bg-white hover:border-[#152E28]/30 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Stage */}
                <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#152E28] mb-4">
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
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-[#152E28] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#152E28] group-hover:text-white transition-all duration-300">
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
                    <h3 className="font-editorial text-[26px] sm:text-[30px] lg:text-[34px] font-light text-[#152E28] group-hover:text-[#8E6B47] transition-colors leading-[1.15] tracking-tight">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[14px] font-sans text-[#152E28]/70 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8E6B47] shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Completed Portfolio Specific Info */}
                  {project.category === 'Completed Portfolio' && (
                    <div className="space-y-1 pt-3 border-t border-[#152E28]/10 text-[13px] font-sans text-[#152E28]/80">
                      {project.configuration && (
                        <div>
                          <span className="text-[#152E28]/60">Configuration: </span>
                          <span className="font-medium text-[#152E28]">{project.configuration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 text-[12px] text-[#152E28]/70 pt-0.5">
                        <span>Start: <strong>{project.constructionStart}</strong></span>
                        <span>•</span>
                        <span>Possession: <strong>{project.possessionDate}</strong></span>
                      </div>
                    </div>
                  )}

                  {/* Recently Delivered Specific Info */}
                  {project.category === 'Recently Delivered' && (
                    <div className="space-y-1 pt-3 border-t border-[#152E28]/10 text-[13px] font-sans text-[#152E28]/80">
                      {project.buildingHeight && (
                        <div className="font-medium text-[#152E28]">
                          Building Height: {project.buildingHeight}
                        </div>
                      )}
                      {project.completedYear && (
                        <div>
                          Completed: <span className="font-medium">{project.completedYear}</span>
                        </div>
                      )}
                      {project.occupancyCertificate && (
                        <div className="text-[12px] text-[#152E28]/70">
                          Occupancy Certificate: {project.occupancyCertificate}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Click Action Indicator */}
                  <div className="pt-2 text-[13px] font-sans font-medium text-[#152E28] group-hover:text-[#8E6B47] flex items-center gap-1.5 transition-colors">
                    <span>
                      {project.externalUrl
                        ? 'Visit Seascape Website →'
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
              className="absolute inset-0 bg-[#152E28]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] text-[#152E28] rounded-[28px] shadow-2xl p-6 sm:p-9 z-10 border border-[#152E28]/15"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#152E28]/70 hover:text-[#152E28] hover:bg-[#152E28]/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tag & Title */}
              <div className="space-y-2 mb-5 pr-8">
                <span className="font-sans text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8E6B47] font-semibold block">
                  {selectedProject.category} • {selectedProject.status}
                </span>
                <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[50px] font-light text-[#152E28] leading-[1.1] tracking-tight">
                  {selectedProject.name}
                </h3>
                <p className="font-sans text-[15px] sm:text-[16px] text-[#152E28]/70">
                  {selectedProject.location}
                </p>
              </div>

              {/* Large Image Banner */}
              <div className="w-full h-60 sm:h-72 rounded-[20px] overflow-hidden mb-6 bg-[#152E28]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Minimal Clean Details (No Long Marketing Copy) */}
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-2xl bg-white border border-[#152E28]/10 space-y-3 font-sans">
                  <div className="flex items-center justify-between py-1 border-b border-[#152E28]/10 text-[14px]">
                    <span className="text-[#152E28]/70">Project Name:</span>
                    <span className="font-semibold text-[#152E28]">{selectedProject.name}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-[#152E28]/10 text-[14px]">
                    <span className="text-[#152E28]/70">Location:</span>
                    <span className="font-semibold text-[#152E28]">{selectedProject.location}</span>
                  </div>

                  {selectedProject.category === 'Completed Portfolio' && (
                    <>
                      {selectedProject.configuration && (
                        <div className="flex items-center justify-between py-1 border-b border-[#152E28]/10 text-[14px]">
                          <span className="text-[#152E28]/70">Configuration:</span>
                          <span className="font-semibold text-[#152E28]">{selectedProject.configuration}</span>
                        </div>
                      )}
                      {selectedProject.constructionStart && (
                        <div className="flex items-center justify-between py-1 border-b border-[#152E28]/10 text-[14px]">
                          <span className="text-[#152E28]/70">Construction Start:</span>
                          <span className="font-semibold text-[#152E28]">{selectedProject.constructionStart}</span>
                        </div>
                      )}
                      {selectedProject.possessionDate && (
                        <div className="flex items-center justify-between py-1 text-[14px]">
                          <span className="text-[#152E28]/70">Possession Date:</span>
                          <span className="font-semibold text-[#152E28]">{selectedProject.possessionDate}</span>
                        </div>
                      )}
                    </>
                  )}

                  {selectedProject.category === 'Recently Delivered' && (
                    <>
                      {selectedProject.buildingHeight && (
                        <div className="flex items-center justify-between py-1 border-b border-[#152E28]/10 text-[14px]">
                          <span className="text-[#152E28]/70">Building Height:</span>
                          <span className="font-semibold text-[#152E28]">{selectedProject.buildingHeight}</span>
                        </div>
                      )}
                      {selectedProject.completedYear && (
                        <div className="flex items-center justify-between py-1 border-b border-[#152E28]/10 text-[14px]">
                          <span className="text-[#152E28]/70">Completed:</span>
                          <span className="font-semibold text-[#152E28]">{selectedProject.completedYear}</span>
                        </div>
                      )}
                      {selectedProject.occupancyCertificate && (
                        <div className="flex items-center justify-between py-1 text-[14px]">
                          <span className="text-[#152E28]/70">Occupancy Certificate:</span>
                          <span className="font-semibold text-[#152E28]">{selectedProject.occupancyCertificate}</span>
                        </div>
                      )}
                    </>
                  )}

                  {selectedProject.category === 'Ongoing & Upcoming' && (
                    <>
                      <div className="flex items-center justify-between py-1 border-b border-[#152E28]/10 text-[14px]">
                        <span className="text-[#152E28]/70">Status:</span>
                        <span className="font-semibold text-[#152E28]">{selectedProject.status}</span>
                      </div>
                      {selectedProject.bedrooms && (
                        <div className="flex items-center justify-between py-1 text-[14px]">
                          <span className="text-[#152E28]/70">Configuration:</span>
                          <span className="font-semibold text-[#152E28]">{selectedProject.bedrooms}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#152E28]/15">
                {selectedProject.externalUrl ? (
                  <a
                    href={selectedProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#152E28] hover:bg-[#1C3D35] text-white font-sans text-[14px] sm:text-[15px] tracking-wide uppercase font-semibold transition-all cursor-pointer shadow-sm"
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
                    className="px-7 py-3.5 rounded-full bg-[#152E28] hover:bg-[#1C3D35] text-white font-sans text-[14px] sm:text-[15px] tracking-wide uppercase font-semibold transition-all cursor-pointer shadow-sm"
                  >
                    Enquire About {selectedProject.name}
                  </button>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="font-sans text-[14px] tracking-wide uppercase text-[#152E28]/70 hover:text-[#152E28] transition-colors cursor-pointer"
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
