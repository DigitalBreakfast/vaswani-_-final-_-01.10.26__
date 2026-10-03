import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ExternalLink, 
  Plus, 
  Minus,
  Building2
} from 'lucide-react';
import { useCursor } from '../context/CursorContext';

interface OfficeLocation {
  id: string;
  city: string;
  label: string;
  address: string;
  coords: string;
  phone: string;
  email: string;
  mapQuery: string;
  mapEmbedUrl: string;
}

const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'bengaluru',
    city: 'Bengaluru',
    label: 'Global Headquarters & Design Studio',
    address: 'Vaswani Victoria, 3rd Floor, Victoria Road, Bengaluru 560047',
    coords: '12.9698° N, 77.6146° E',
    phone: '+91 80 4911 0000',
    email: 'advisory@vaswanigroup.com',
    mapQuery: 'Vaswani+Victoria+Victoria+Road+Bengaluru',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001602417765!2d77.61461937584488!3d12.969838087345324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681283d5a2b%3A0x6b8ce901bc0935da!2sVictoria%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711538920102!5m2!1sen!2sin',
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    label: 'Private Client Suite',
    address: 'Kalpak Optimus, 601, Turner Rd, Bandra West, Maharashtra 400050',
    coords: '19.0584° N, 72.8315° E',
    phone: '+91 22 6124 5500',
    email: 'mumbai@vaswanigroup.com',
    mapQuery: 'Kalpak+Optimus+Turner+Road+Bandra+West+Mumbai+400050',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2952865918737!2d72.82914187597092!3d19.058392182142273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c938c5b8e9b9%3A0x6a0a811c76899478!2sTurner%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1711539400000!5m2!1sen!2sin',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    label: 'Middle East Representative Office',
    address: 'DIFF Gate Precinct 4, Level 5, Dubai, UAE',
    coords: '25.2048° N, 55.2708° E',
    phone: '+971 4 362 7000',
    email: 'dubai@vaswanigroup.com',
    mapQuery: 'DIFC+Gate+Precinct+4+Dubai',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786506306646!2d55.27854617613768!3d25.204781477708573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4281896a30c5%3A0x6b105d1fb1b97063!2sGate%20Precinct%204!5e0!3m2!1sen!2sin!4v1711539112450!5m2!1sen!2sin',
  },
];

export const ContactPage: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();
  const formRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [zoomLevel, setZoomLevel] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const activeOffice = OFFICE_LOCATIONS.find((o) => o.id === 'mumbai') || OFFICE_LOCATIONS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta * 0.15, 0.85), 1.45));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#FAF8F5] text-[#1A1C1E] select-none"
    >
      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. HERO HEADER WITH ARCHITECTURAL FACADE BACKGROUND          */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden flex items-center">
        {/* Background Building Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/ds5s7shuo/video/upload/so_0/v1788734901/Create_luxury_real_estate_film_202609070416_ruwg5u.jpg"
            alt="Modern Architecture Facade"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Moody Architectural Dusk Contrast Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#12181F]/95 via-[#182028]/85 to-[#1F2730]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12181F]/90 via-transparent to-[#12181F]/70" />
        </div>

        {/* Hero Title */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[720px]"
          >
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. THREE COMPACT FLOATING CONTACT INFO CARDS                  */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative z-20 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 -mt-10 sm:-mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          
          {/* Card 1: Office Location */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-xl p-4 sm:p-5 border border-[#EBE7DF] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(181,130,99,0.1)] hover:border-[#B58263]/30 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-lg border border-[#B58263]/25 bg-[#B58263]/8 flex items-center justify-center text-[#B58263] shrink-0 group-hover:scale-105 group-hover:bg-[#B58263] group-hover:text-white transition-all duration-300">
              <MapPin className="w-5 h-5 stroke-[1.5]" />
            </div>

            <div className="min-w-0 flex-1">
              <span className="block font-sans text-[11px] font-semibold text-[#B58263] uppercase tracking-wider mb-0.5">
                Office Location
              </span>
              <h3 className="font-sans font-semibold text-sm sm:text-[15px] text-[#1A1C1E] leading-snug truncate">
                Kalpak Optimus, Bandra West
              </h3>
              <p className="font-sans text-xs text-[#6B7280] truncate mt-0.5">
                601, Turner Rd, Mumbai 400050
              </p>
            </div>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-xl p-4 sm:p-5 border border-[#EBE7DF] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(181,130,99,0.1)] hover:border-[#B58263]/30 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-lg border border-[#B58263]/25 bg-[#B58263]/8 flex items-center justify-center text-[#B58263] shrink-0 group-hover:scale-105 group-hover:bg-[#B58263] group-hover:text-white transition-all duration-300">
              <Mail className="w-5 h-5 stroke-[1.5]" />
            </div>

            <div className="min-w-0 flex-1">
              <span className="block font-sans text-[11px] font-semibold text-[#B58263] uppercase tracking-wider mb-0.5">
                Email Address
              </span>
              <h3 className="font-sans font-semibold text-sm sm:text-[15px] text-[#1A1C1E] leading-snug truncate">
                <a 
                  href={`mailto:${activeOffice.email}`}
                  className="hover:text-[#B58263] transition-colors"
                >
                  {activeOffice.email}
                </a>
              </h3>
              <p className="font-sans text-xs text-[#6B7280] truncate mt-0.5">
                Direct Advisory & Support
              </p>
            </div>
          </motion.div>

          {/* Card 3: Phone Hotline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-xl p-4 sm:p-5 border border-[#EBE7DF] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(181,130,99,0.1)] hover:border-[#B58263]/30 transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-lg border border-[#B58263]/25 bg-[#B58263]/8 flex items-center justify-center text-[#B58263] shrink-0 group-hover:scale-105 group-hover:bg-[#B58263] group-hover:text-white transition-all duration-300">
              <Phone className="w-5 h-5 stroke-[1.5]" />
            </div>

            <div className="min-w-0 flex-1">
              <span className="block font-sans text-[11px] font-semibold text-[#B58263] uppercase tracking-wider mb-0.5">
                Hotline
              </span>
              <h3 className="font-sans font-semibold text-sm sm:text-[15px] text-[#1A1C1E] leading-snug truncate">
                <a 
                  href={`tel:${activeOffice.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#B58263] transition-colors"
                >
                  {activeOffice.phone}
                </a>
              </h3>
              <p className="font-sans text-xs text-[#6B7280] truncate mt-0.5">
                Mon – Sat: 09:30 – 19:00 IST
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3. MAIN SECTION: MAP & GET IN TOUCH FORM                      */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
        <div className="w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT: MAP PRESENTATION (6 COLS) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Map Frame Container */}
            <div className="relative w-full h-[460px] sm:h-[520px] lg:h-full min-h-[480px] rounded-2xl overflow-hidden border border-[#E5DAC8] shadow-[0_12px_36px_rgba(0,0,0,0.06)] bg-[#E8E6E1]">
              
              {/* Google Map iframe */}
              <div 
                className="w-full h-full transition-transform duration-300 origin-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <iframe
                  title={`${activeOffice.city} Map`}
                  src={activeOffice.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.02) saturate(0.95)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Floating Architectural Location Badge on Map */}
              <div className="absolute top-5 left-5 z-10 max-w-[280px] sm:max-w-[320px] bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#135A5C]/15 shadow-xl space-y-1.5">
                <div className="flex items-center gap-2 text-[#B58263]">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider truncate">
                    {activeOffice.city} Office
                  </span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#1A1C1E] leading-snug">
                  {activeOffice.label}
                </h4>
                <p className="font-sans text-xs text-[#555E68] leading-relaxed">
                  {activeOffice.address}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[#F0EBE1] text-[11px]">
                  <span className="text-[#889098]">{activeOffice.coords}</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${activeOffice.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B58263] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Minimal Zoom Controls (Matching Screenshot + / -) */}
              <div className="absolute bottom-5 right-5 z-10 flex flex-col rounded-lg overflow-hidden bg-white/95 backdrop-blur-md border border-[#E5DAC8] shadow-lg">
                <button
                  onClick={() => handleZoom(1)}
                  aria-label="Zoom in"
                  className="w-9 h-9 flex items-center justify-center text-[#555E68] hover:text-[#1A1C1E] hover:bg-[#FAF8F5] border-b border-[#E5DAC8] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleZoom(-1)}
                  aria-label="Zoom out"
                  className="w-9 h-9 flex items-center justify-center text-[#555E68] hover:text-[#1A1C1E] hover:bg-[#FAF8F5] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT: GET IN TOUCH FORM (6 COLS) */}
          <div ref={formRef} className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Header: Eyebrow + Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#B58263]">
                {/* Decorative Double Horizontal Line */}
                <div className="flex flex-col gap-[3px] w-5">
                  <div className="w-full h-[2px] bg-[#B58263]" />
                  <div className="w-full h-[2px] bg-[#B58263]" />
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest">
                  Contact Us
                </span>
              </div>

              <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#1A1C1E] tracking-tight leading-tight">
                Get in Touch
              </h2>
            </div>

            {/* Submission Status or Clean Form */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-[#B58263]/20 shadow-xl text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#B58263]/10 text-[#B58263] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-2xl text-[#1A1C1E]">
                    Request Received
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#555E68] max-w-[420px] mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#1A1C1E]">{formData.fullName}</span>. A senior advisory partner from Vaswani Group will reach out to you within 2 business hours.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', company: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-lg border border-[#B58263] text-[#B58263] hover:bg-[#B58263] hover:text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Full name + Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full-name" className="sr-only">Full name</label>
                    <input
                      id="full-name"
                      ref={nameInputRef}
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-lg bg-[#F8F8F8] border border-[#ECEAE4] text-[#1A1C1E] placeholder-[#889098] font-sans text-sm sm:text-[15px] focus:outline-none focus:border-[#B58263] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-address" className="sr-only">Email Address</label>
                    <input
                      id="email-address"
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-lg bg-[#F8F8F8] border border-[#ECEAE4] text-[#1A1C1E] placeholder-[#889098] font-sans text-sm sm:text-[15px] focus:outline-none focus:border-[#B58263] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone-number" className="sr-only">Phone</label>
                    <input
                      id="phone-number"
                      type="tel"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-lg bg-[#F8F8F8] border border-[#ECEAE4] text-[#1A1C1E] placeholder-[#889098] font-sans text-sm sm:text-[15px] focus:outline-none focus:border-[#B58263] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="company-name" className="sr-only">Company</label>
                    <input
                      id="company-name"
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-lg bg-[#F8F8F8] border border-[#ECEAE4] text-[#1A1C1E] placeholder-[#889098] font-sans text-sm sm:text-[15px] focus:outline-none focus:border-[#B58263] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <label htmlFor="message-box" className="sr-only">Message</label>
                  <textarea
                    id="message-box"
                    required
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4.5 py-3.5 rounded-lg bg-[#F8F8F8] border border-[#ECEAE4] text-[#1A1C1E] placeholder-[#889098] font-sans text-sm sm:text-[15px] focus:outline-none focus:border-[#B58263] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={resetCursor}
                  className="w-full py-4 px-8 rounded-lg bg-[#2D1B16] hover:bg-[#3D251F] active:bg-[#20130F] text-white font-sans text-base font-semibold tracking-wide shadow-md hover:shadow-[0_8px_24px_rgba(45,27,22,0.28)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <span>Submit Request</span>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

    </motion.div>
  );
};
