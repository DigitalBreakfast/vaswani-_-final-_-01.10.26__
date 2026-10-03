import React, { useState } from 'react';
import { 
  ArrowRight, 
  Compass, 
  Sparkles, 
  Send, 
  Eye, 
  Award, 
  Quote, 
  Layers, 
  Layers2, 
  Sliders, 
  FileText, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '../ui/Button';
import { 
  ProjectCard, 
  ArticleCard, 
  TestimonialCard, 
  AwardCard, 
  LeadershipCard, 
  CSRCard,
  CSRCardData
} from '../ui/Cards';
import { 
  Input, 
  Select, 
  Textarea, 
  Checkbox, 
  RadioGroup, 
  PhoneInput, 
  FileUpload, 
  FormSuccessBanner 
} from '../ui/Form';
import { 
  AnimatedCounter, 
  StatBlock, 
  StatGrid, 
  StatCard, 
  StatItem 
} from '../ui/Stats';
import { 
  EditorialPullQuote, 
  BlockQuote, 
  PhilosophyStatementQuote 
} from '../ui/Quotes';
import { 
  SingleFeatureTestimonial, 
  TestimonialCarousel, 
  TestimonialGrid 
} from '../ui/Testimonials';
import { 
  Breadcrumbs, 
  BackButton, 
  Pagination, 
  PrevNextProjectNav 
} from '../ui/NavigationControls';
import { 
  EditorialSplitCTA, 
  FullscreenCTA, 
  ImageBannerCTA, 
  MinimalEditorialCTA 
} from '../ui/CTA';
import { 
  HairlineDivider, 
  GradientDivider, 
  TextDivider, 
  NumberDivider 
} from '../ui/Dividers';
import { 
  CategoryChip, 
  StatusPill, 
  LocationTag, 
  DateStamp 
} from '../ui/Labels';
import { 
  GridGallery, 
  BeforeAfterSlider, 
  FullscreenLightbox,
  GalleryItem
} from '../ui/Gallery';
import { 
  EmptyState, 
  SkeletonCard, 
  SkeletonText, 
  ArchitecturalProgressRing 
} from '../ui/Feedback';
import { CinematicImage, CinematicVideo } from '../ui/Media';
import { HeadingLarge, HeadingMedium, HeadingSmall, Eyebrow, BodyLarge } from '../ui/Typography';
import { ProjectCardData, ArticleCardData, TestimonialCardData, AwardCardData, LeadershipCardData } from '../../types';

type CategoryTab = 
  | 'buttons' 
  | 'cards' 
  | 'stats' 
  | 'quotes' 
  | 'forms' 
  | 'navigation' 
  | 'cta' 
  | 'dividers_labels' 
  | 'gallery' 
  | 'feedback';

export const ComponentLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('buttons');

  // Button interactive states
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnGlow, setBtnGlow] = useState(false);

  // Form interactive states
  const [formName, setFormName] = useState('Eleanor Vance');
  const [formEmail, setFormEmail] = useState('');
  const [formCategory, setFormCategory] = useState('residential');
  const [formTimeline, setFormTimeline] = useState('immediate');
  const [formChecked, setFormChecked] = useState(true);
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('98450 12345');
  const [formSuccess, setFormSuccess] = useState(false);

  // Navigation interactive states
  const [currentPage, setCurrentPage] = useState(2);

  // Gallery & Lightbox interactive states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Sample data definitions
  const sampleProject: ProjectCardData = {
    id: 'p-1',
    title: 'The Vaswani Pinnacle',
    subtitle: 'Private Sky Mansions commanding uninterrupted panoramas of the city skyline and botanical canopy.',
    location: 'Victoria Cross, Bengaluru',
    category: 'Residential',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    stats: {
      area: '8,500 - 14,000 SQ.FT',
      architect: 'Vaswani Architectural Studio',
      units: '18 Signature Mansions',
    },
  };

  const sampleArticle: ArticleCardData = {
    id: 'a-1',
    title: 'Architectural Restraint: The Art of Knowing What to Leave Out',
    excerpt: 'Examining why the most enduring residential landmarks prioritize spatial generosity over ornamental complexity.',
    category: 'Philosophy & Essays',
    readTime: '4 Min Read',
    date: 'OCT 2025',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Kailash Vaswani',
      role: 'Principal Architect',
    },
  };

  const sampleTestimonials: TestimonialCardData[] = [
    {
      id: 't-1',
      quote: 'The acoustic stillness and natural cross-ventilation in our residence feels less like an urban apartment and more like a private pavilion in the hills.',
      clientName: 'Sanjay & Ananya Mehta',
      role: 'Private Office Partners',
      residence: 'Vaswani Reserve Penthouse',
      rating: 5,
    },
    {
      id: 't-2',
      quote: 'Four decades of architectural mastery is evident in every tactile surface, from the honed Italian travertine to the recessed floor-to-ceiling glazing.',
      clientName: 'Dr. Alistair Ross',
      role: 'Consulting Surgeon & Collector',
      residence: 'Vaswani Victoria Sky Suite',
      rating: 5,
    },
    {
      id: 't-3',
      quote: 'The Vaswani Group creates communities that age gracefully. Our property value and quality of daily life have both exceeded every expectation.',
      clientName: 'Rohit & Natasha Goenka',
      role: 'Founders, Veloce Global',
      residence: 'The Vaswani Sanctuary Villa',
      rating: 5,
    },
  ];

  const sampleAward: AwardCardData = {
    id: 'aw-1',
    title: 'Excellence in Sustainable Luxury Architecture',
    organization: 'World Architecture Council',
    year: '2025',
    category: 'Residential Landmark of the Year',
    project: 'Vaswani Victoria Sky Suites',
  };

  const sampleLeader: LeadershipCardData = {
    id: 'l-1',
    name: 'Vikram Vaswani',
    title: 'Managing Director & Chief Architect',
    bio: 'Guiding four decades of architectural integrity, overseeing signature masterplans across south Asia and the Middle East.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  };

  const sampleCSR: CSRCardData = {
    id: 'csr-1',
    title: 'Urban Reforestation & Rainwater Sanctuaries',
    description: 'Restoring native flora, preserving perennial water bodies, and fostering biodiversity in our surrounding neighborhoods.',
    metric: '42,000+',
    metricLabel: 'Trees Planted & Maintained',
    category: 'Environmental Stewardship',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
  };

  const sampleStats: StatItem[] = [
    { number: 40, suffix: '+', label: 'Years of Legacy', description: 'Continuous excellence in southern India & UAE' },
    { number: 12500, suffix: '+', label: 'Distinguished Families', description: 'Across bespoke residences' },
    { number: 14, suffix: 'M+', label: 'Square Feet Delivered', description: 'Grade-A residential & commercial' },
    { number: 85, suffix: '+', label: 'Architecture Awards', description: 'Global design & sustainability merits' },
  ];

  const sampleGalleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Exterior Grand Courtyard',
      caption: 'The Vaswani Pinnacle • Exterior Grand Courtyard',
      category: 'Architecture',
    },
    {
      id: 'g-2',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sky Lounge Living Area',
      caption: 'Floor-to-Ceiling Light Infusion',
      category: 'Interiors',
    },
    {
      id: 'g-3',
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Private Terrace Pavilion',
      caption: 'Private Infinity Pool & Cantilevered Deck',
      category: 'Landscape',
    },
  ];

  const categoryTabs = [
    { id: 'buttons', label: '01. Buttons & Controls' },
    { id: 'cards', label: '02. Luxury Cards Matrix' },
    { id: 'stats', label: '03. Agency Statistics' },
    { id: 'quotes', label: '04. Editorial Quotes' },
    { id: 'navigation', label: '05. Navigation & Breadcrumbs' },
    { id: 'forms', label: '06. Luxury Forms Suite' },
    { id: 'cta', label: '07. Editorial CTAs' },
    { id: 'dividers_labels', label: '08. Dividers & Labels' },
    { id: 'gallery', label: '09. Galleries & Lightbox' },
    { id: 'feedback', label: '10. Feedback & Skeletons' },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <Eyebrow dot>Global Component Library & Production UI System</Eyebrow>
        <HeadingLarge>Bespoke Architectural Primitives</HeadingLarge>
        <BodyLarge>
          Every component encapsulates quiet luxury, magnetic cursor physics, high-contrast typography, and strict mathematical padding on the Warm Ivory paper canvas.
        </BodyLarge>
      </div>

      {/* Category Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 border-b border-[#EAE4D6]">
        {categoryTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as CategoryTab)}
            className={`px-4 py-2 rounded-full font-futura text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#1E5E45] text-[#FAF8F5] shadow-sm font-semibold'
                : 'bg-white text-[#525866] hover:text-[#1A1C1E] border border-[#EAE4D6]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 1. BUTTONS & CONTROLS */}
      {/* ========================================================================= */}
      {activeTab === 'buttons' && (
        <div className="space-y-8">
          <div className="p-4 rounded-xl bg-white border border-[#EAE4D6] shadow-architectural-sm flex flex-wrap items-center justify-between gap-4 text-xs font-futura">
            <span className="text-[#6C7382]">State Toggles:</span>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer text-[#1A1C1E]">
                <input
                  type="checkbox"
                  checked={btnLoading}
                  onChange={(e) => setBtnLoading(e.target.checked)}
                />
                <span>Loading State</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-[#1A1C1E]">
                <input
                  type="checkbox"
                  checked={btnDisabled}
                  onChange={(e) => setBtnDisabled(e.target.checked)}
                />
                <span>Disabled State</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-[#1A1C1E]">
                <input
                  type="checkbox"
                  checked={btnGlow}
                  onChange={(e) => setBtnGlow(e.target.checked)}
                />
                <span>Emerald Glow</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary */}
            <div className="p-6 rounded-xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-4 flex flex-col justify-between">
              <div>
                <Eyebrow color="seaGreen">Primary Button</Eyebrow>
                <p className="text-xs text-[#525866] mt-1 font-futura">Solid Sea Green with magnetic pull and arrow motion.</p>
              </div>
              <div className="space-y-3 pt-4">
                <Button variant="primary" size="lg" loading={btnLoading} disabled={btnDisabled} glow={btnGlow} showArrow>
                  Explore Portfolio
                </Button>
                <Button variant="primary" size="md" loading={btnLoading} disabled={btnDisabled} glow={btnGlow}>
                  Enquire Now
                </Button>
                <Button variant="primary" size="sm" loading={btnLoading} disabled={btnDisabled} glow={btnGlow}>
                  Reserve
                </Button>
              </div>
            </div>

            {/* Secondary */}
            <div className="p-6 rounded-xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-4 flex flex-col justify-between">
              <div>
                <Eyebrow color="charcoal">Secondary Button</Eyebrow>
                <p className="text-xs text-[#525866] mt-1 font-futura">Minimal outline with subtle fill sweep.</p>
              </div>
              <div className="space-y-3 pt-4">
                <Button variant="secondary" size="lg" loading={btnLoading} disabled={btnDisabled}>
                  Download Dossier
                </Button>
                <Button variant="secondary" size="md" loading={btnLoading} disabled={btnDisabled} icon={<Compass className="w-4 h-4" />}>
                  View Floorplans
                </Button>
                <Button variant="secondary" size="sm" loading={btnLoading} disabled={btnDisabled}>
                  Overview
                </Button>
              </div>
            </div>

            {/* Text Button */}
            <div className="p-6 rounded-xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-4 flex flex-col justify-between">
              <div>
                <Eyebrow>Text Button</Eyebrow>
                <p className="text-xs text-[#525866] mt-1 font-futura">No border, animated underline, editorial kinetic style.</p>
              </div>
              <div className="space-y-4 pt-4">
                <Button variant="text" size="lg" disabled={btnDisabled} showArrow>
                  Read Monograph
                </Button>
                <Button variant="text" size="md" disabled={btnDisabled} showArrow>
                  View Specifications
                </Button>
                <Button variant="text" size="sm" disabled={btnDisabled}>
                  Architectural Notes
                </Button>
              </div>
            </div>

            {/* Icon Button */}
            <div className="p-6 rounded-xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-4 flex flex-col justify-between">
              <div>
                <Eyebrow>Icon Button</Eyebrow>
                <p className="text-xs text-[#525866] mt-1 font-futura">Circular controls in Solid, Glass, and Outline looks.</p>
              </div>
              <div className="flex items-center gap-3 pt-4">
                <Button variant="icon" size="md" iconLook="solid" disabled={btnDisabled}>
                  <Compass className="w-4 h-4" />
                </Button>
                <Button variant="icon" size="md" iconLook="glass" disabled={btnDisabled}>
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="icon" size="md" iconLook="outline" disabled={btnDisabled}>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. CARDS MATRIX */}
      {/* ========================================================================= */}
      {activeTab === 'cards' && (
        <div className="space-y-12">
          {/* Horizon Card */}
          <div className="space-y-3">
            <Eyebrow dot>01. Project Card (Horizon / Wide Format)</Eyebrow>
            <ProjectCard project={sampleProject} layout="horizon" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Eyebrow dot>02. Project Card (Standard Portrait)</Eyebrow>
              <ProjectCard project={sampleProject} />
            </div>

            <div className="space-y-3">
              <Eyebrow dot>03. Article Card (Editorial Journal)</Eyebrow>
              <ArticleCard article={sampleArticle} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Eyebrow dot>04. Testimonial Card</Eyebrow>
              <TestimonialCard testimonial={sampleTestimonials[0]} />
            </div>

            <div className="space-y-3">
              <Eyebrow dot>05. Award Card</Eyebrow>
              <AwardCard award={sampleAward} />
            </div>

            <div className="space-y-3">
              <Eyebrow dot>06. Leadership Card</Eyebrow>
              <LeadershipCard leader={sampleLeader} />
            </div>
          </div>

          {/* CSR Initiative Card */}
          <div className="space-y-3">
            <Eyebrow dot>07. CSR Initiative Card (Vaswani Foundation)</Eyebrow>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CSRCard initiative={sampleCSR} />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. AGENCY STATISTICS */}
      {/* ========================================================================= */}
      {activeTab === 'stats' && (
        <div className="space-y-12">
          <div className="space-y-4">
            <Eyebrow dot>Agency FB Number Suite</Eyebrow>
            <h3 className="font-futura text-2xl font-light text-[#1A1C1E]">
              Animated Counting & Statistical Rhythms
            </h3>
            <p className="text-sm font-futura text-[#525866] max-w-2xl">
              Numbers are rendered exclusively in Agency FB / Barlow Condensed, pairing numerical impact with minimal Futura labels.
            </p>
          </div>

          {/* Stat Grid */}
          <StatGrid stats={sampleStats} columns={4} />

          {/* Stat Cards Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleStats.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. EDITORIAL QUOTES & TESTIMONIALS */}
      {/* ========================================================================= */}
      {activeTab === 'quotes' && (
        <div className="space-y-12">
          {/* Editorial Pull Quote */}
          <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm">
            <Eyebrow dot>01. Editorial Pull Quote (Caladea Serif)</Eyebrow>
            <EditorialPullQuote
              quote="True luxury in architecture is not what is added, but what is protected: space, silence, and natural light."
              author="Kailash Vaswani"
              title="Founder & Chairman"
              affiliation="Vaswani Group"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
            />
          </div>

          {/* Philosophy Statement */}
          <PhilosophyStatementQuote
            statement="We design spaces that quietly elevate everyday rituals, where architecture dissolves into an effortless dialogue with light, proportion, and nature."
          />

          {/* Single Feature Testimonial */}
          <div className="space-y-4">
            <Eyebrow dot>02. Single Feature Testimonial</Eyebrow>
            <SingleFeatureTestimonial testimonial={sampleTestimonials[0]} />
          </div>

          {/* Testimonial Carousel */}
          <div className="space-y-4">
            <Eyebrow dot>03. Interactive Testimonial Carousel</Eyebrow>
            <TestimonialCarousel testimonials={sampleTestimonials} />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. NAVIGATION & BREADCRUMBS */}
      {/* ========================================================================= */}
      {activeTab === 'navigation' && (
        <div className="space-y-10 p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm">
          {/* Breadcrumbs */}
          <div className="space-y-3">
            <Eyebrow dot>01. Editorial Breadcrumb Path</Eyebrow>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Residences', href: '#' },
                { label: 'Bengaluru', href: '#' },
                { label: 'The Vaswani Pinnacle' },
              ]}
            />
          </div>

          <HairlineDivider />

          {/* Back Button */}
          <div className="space-y-3">
            <Eyebrow dot>02. Contextual Back Action</Eyebrow>
            <BackButton label="Back to Residential Portfolio" />
          </div>

          <HairlineDivider />

          {/* Pagination */}
          <div className="space-y-3">
            <Eyebrow dot>03. Editorial Numerals Pagination</Eyebrow>
            <Pagination
              currentPage={currentPage}
              totalPages={5}
              onPageChange={setCurrentPage}
            />
          </div>

          <HairlineDivider />

          {/* Previous / Next Project Navigation */}
          <div className="space-y-3">
            <Eyebrow dot>04. Project Navigation with Hover Preview</Eyebrow>
            <PrevNextProjectNav
              prevProject={{
                title: 'Vaswani Victoria Suites',
                category: 'Sky Residences',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
                href: '#',
              }}
              nextProject={{
                title: 'The Vaswani Sanctuary',
                category: 'Private Mansions',
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
                href: '#',
              }}
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. LUXURY FORMS SUITE */}
      {/* ========================================================================= */}
      {activeTab === 'forms' && (
        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-8">
          <div>
            <Eyebrow dot>Private Advisory & Registration Suite</Eyebrow>
            <h3 className="font-futura text-2xl font-light text-[#1A1C1E] mt-1">Form Elements & Interactive States</h3>
          </div>

          {formSuccess ? (
            <FormSuccessBanner onReset={() => setFormSuccess(false)} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Input
                  label="Full Name"
                  placeholder="e.g. Eleanor Vance"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  success={formName.length > 3}
                  required
                />

                <Input
                  label="Direct Email"
                  type="email"
                  placeholder="eleanor@vance-holdings.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  hint="We never share confidential client communications."
                  required
                />

                <PhoneInput
                  countryCode={countryCode}
                  phoneNumber={phoneNumber}
                  onCountryCodeChange={setCountryCode}
                  onPhoneNumberChange={setPhoneNumber}
                />

                <Select
                  label="Preferred Portfolio Tier"
                  value={formCategory}
                  onChange={setFormCategory}
                  options={[
                    { value: 'residential', label: 'Bespoke Private Villa ($3M+)' },
                    { value: 'penthouse', label: 'Signature Sky Mansion ($5M+)' },
                    { value: 'commercial', label: 'Grade-A Commercial Masterplan' },
                  ]}
                />
              </div>

              <div className="space-y-6">
                <RadioGroup
                  name="timeline"
                  label="Acquisition Horizon"
                  value={formTimeline}
                  onChange={setFormTimeline}
                  options={[
                    { value: 'immediate', label: 'Immediate Acquisition', description: 'Move-in ready residences' },
                    { value: 'future', label: 'Pre-launch Development', description: 'Under design & construction' },
                  ]}
                />

                <FileUpload onFileSelect={(file) => console.log('File attached:', file.name)} />

                <Textarea
                  label="Architectural Preferences"
                  placeholder="Orientation, ceiling heights, private pools, or acoustic isolation..."
                  rows={3}
                />

                <Checkbox
                  checked={formChecked}
                  onChange={setFormChecked}
                  label="I request private concierge transport for on-site architectural tour."
                />

                <Button
                  variant="primary"
                  size="md"
                  icon={<Send className="w-4 h-4" />}
                  onClick={() => setFormSuccess(true)}
                  showArrow
                >
                  Submit Consultation Request
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. EDITORIAL CTAS */}
      {/* ========================================================================= */}
      {activeTab === 'cta' && (
        <div className="space-y-12">
          {/* Editorial Split CTA */}
          <div className="space-y-3">
            <Eyebrow dot>01. Editorial Split CTA</Eyebrow>
            <EditorialSplitCTA />
          </div>

          {/* Fullscreen CTA */}
          <div className="space-y-3">
            <Eyebrow dot>02. Fullscreen Minimalist CTA</Eyebrow>
            <FullscreenCTA />
          </div>

          {/* Image Banner CTA */}
          <div className="space-y-3">
            <Eyebrow dot>03. Image Banner CTA (Dark Luxury)</Eyebrow>
            <ImageBannerCTA />
          </div>

          {/* Minimal Line CTA */}
          <div className="space-y-3">
            <Eyebrow dot>04. Minimal Line CTA</Eyebrow>
            <MinimalEditorialCTA />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. DIVIDERS & LABELS */}
      {/* ========================================================================= */}
      {activeTab === 'dividers_labels' && (
        <div className="p-8 rounded-2xl bg-white border border-[#EAE4D6] shadow-architectural-sm space-y-10">
          {/* Labels & Chips */}
          <div className="space-y-4">
            <Eyebrow dot>01. Badges, Category Chips & Status Indicators</Eyebrow>
            <div className="flex flex-wrap items-center gap-3">
              <CategoryChip label="Residential" variant="ivory" />
              <CategoryChip label="Commercial" variant="charcoal" />
              <CategoryChip label="Hospitality" variant="green" />
              <StatusPill status="Ready" />
              <StatusPill status="Ongoing" />
              <StatusPill status="Upcoming" />
              <LocationTag location="Victoria Cross, Bengaluru" />
              <DateStamp date="Q4 2025" />
            </div>
          </div>

          <HairlineDivider />

          {/* Dividers */}
          <div className="space-y-6">
            <Eyebrow dot>02. Architectural Dividers</Eyebrow>
            
            <div className="space-y-2">
              <span className="text-xs text-[#6C7382] font-futura">Hairline Divider</span>
              <HairlineDivider />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-[#6C7382] font-futura">Gradient Fade Divider</span>
              <GradientDivider />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-[#6C7382] font-futura">Text Centered Divider</span>
              <TextDivider label="ARCHITECTURAL HERITAGE" />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-[#6C7382] font-futura">Numbered Section Divider</span>
              <NumberDivider number="01" title="STRUCTURAL INTEGRITY" />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 9. GALLERIES & LIGHTBOX */}
      {/* ========================================================================= */}
      {activeTab === 'gallery' && (
        <div className="space-y-12">
          {/* Before / After Slider */}
          <div className="space-y-4">
            <Eyebrow dot>01. Before / After Interactive Architectural Slider</Eyebrow>
            <p className="text-xs font-futura text-[#6C7382]">Drag the center divider to compare architectural concept with realized construction.</p>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              afterImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
              beforeLabel="Architectural 3D Render"
              afterLabel="Completed Living Space"
            />
          </div>

          {/* Grid Gallery with Lightbox Trigger */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Eyebrow dot>02. Grid Gallery (Click for Fullscreen Lightbox)</Eyebrow>
              <Button
                variant="secondary"
                size="sm"
                icon={<ImageIcon className="w-3.5 h-3.5" />}
                onClick={() => {
                  setLightboxIndex(0);
                  setLightboxOpen(true);
                }}
              >
                Open Lightbox
              </Button>
            </div>
            <GridGallery
              items={sampleGalleryItems}
              columns={3}
              onItemClick={(item, index) => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            />
          </div>

          {/* Fullscreen Lightbox */}
          <FullscreenLightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            items={sampleGalleryItems}
            initialIndex={lightboxIndex}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* 10. FEEDBACK & SKELETONS */}
      {/* ========================================================================= */}
      {activeTab === 'feedback' && (
        <div className="space-y-12">
          {/* Empty State */}
          <div className="space-y-4">
            <Eyebrow dot>01. Architectural Empty State</Eyebrow>
            <EmptyState
              title="No Residences Matching Selected Filter"
              description="Please adjust your square footage parameters, bedroom configuration, or location filter."
              actionText="Clear All Filters"
              onAction={() => console.log('Reset filters')}
            />
          </div>

          {/* Skeletons */}
          <div className="space-y-4">
            <Eyebrow dot>02. Shimmering Skeleton Placeholders</Eyebrow>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkeletonCard />
              <SkeletonCard />
              <div className="p-6 rounded-xl bg-white border border-[#EAE4D6] space-y-6">
                <SkeletonText lines={4} />
                <HairlineDivider />
                <div className="flex items-center justify-center py-4">
                  <ArchitecturalProgressRing progress={72} label="Structural Load" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
