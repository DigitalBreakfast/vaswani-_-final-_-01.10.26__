import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, Send } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { useCursor } from '../../context/CursorContext';
import { Input, Select, Textarea, Checkbox } from '../ui/Form';
import { Button } from '../ui/Button';

export const EnquiryDrawer: React.FC = () => {
  const { isEnquiryDrawerOpen, closeEnquiryDrawer } = useNavigation();
  const { setCursorVariant, resetCursor } = useCursor();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    preferredTimeline: 'immediate',
    investmentRange: '',
    message: '',
    agreedToPrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) errs.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please provide a valid email';
    if (!formData.agreedToPrivacy) errs.agreedToPrivacy = 'Please accept privacy terms to proceed';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: 'residential',
      preferredTimeline: 'immediate',
      investmentRange: '',
      message: '',
      agreedToPrivacy: false,
    });
    setErrors({});
  };

  return (
    <AnimatePresence>
      {isEnquiryDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEnquiryDrawer}
            className="fixed inset-0 bg-[#1A1C1E]/50 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#FAF8F5] border-l border-[#EAE4D6] shadow-2xl h-full flex flex-col justify-between overflow-y-auto z-10"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-[#EAE4D6] flex items-center justify-between sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-xl z-20">
              <div>
                <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#152E28] font-semibold block">
                  Private Office Advisory
                </span>
                <h3 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] mt-1 leading-[1.1]">
                  Enquire with Vaswani
                </h3>
              </div>

              <button
                onClick={closeEnquiryDrawer}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={resetCursor}
                className="w-10 h-10 rounded-full bg-[#1A1C1E]/[0.04] hover:bg-[#1A1C1E]/[0.08] border border-[#DCD7CA] flex items-center justify-center text-[#525866] hover:text-[#1A1C1E] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex-1">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <div className="w-16 h-16 rounded-full bg-[#152E28]/10 border border-[#152E28] flex items-center justify-center text-[#152E28] animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md">
                    <span className="font-sans text-[16px] md:text-[17px] lg:text-[18px] uppercase tracking-wider text-[#152E28] font-semibold block">
                      Consultation Requested
                    </span>
                    <h4 className="font-editorial text-[36px] md:text-[44px] lg:text-[56px] font-light text-[#1A1C1E] leading-[1.1]">
                      Thank You, {formData.name}
                    </h4>
                    <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">
                      A senior partner from the Vaswani Private Client advisory group will contact you within 24 hours to arrange a confidential discussion.
                    </p>
                  </div>
                  <Button variant="secondary" size="md" onClick={handleReset}>
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">
                    Please share your requirements. Every enquiry is handled with complete discretion by our executive advisory desk.
                  </p>

                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      placeholder="e.g. Eleanor Vance"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      error={errors.name}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="eleanor@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={errors.email}
                      />

                      <Input
                        label="Direct Phone"
                        type="tel"
                        placeholder="+91 98000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <Select
                      label="Portfolio / Property Interest"
                      value={formData.propertyType}
                      onChange={(val) => setFormData({ ...formData, propertyType: val })}
                      options={[
                        { value: 'residential', label: 'Bespoke Luxury Residence / Villa' },
                        { value: 'sky_mansion', label: 'Signature Penthouse / Sky Residence' },
                        { value: 'commercial', label: 'Grade-A Commercial / Corporate HQ' },
                        { value: 'hospitality', label: 'Hospitality / Investment Asset' },
                      ]}
                    />

                    <Select
                      label="Anticipated Timeline"
                      value={formData.preferredTimeline}
                      onChange={(val) => setFormData({ ...formData, preferredTimeline: val })}
                      options={[
                        { value: 'immediate', label: 'Immediate Acquisition (0-3 Months)' },
                        { value: 'medium', label: 'Mid-term Planning (3-6 Months)' },
                        { value: 'long', label: 'Strategic Investment (6-12 Months)' },
                        { value: 'exploratory', label: 'Exploratory Discussion' },
                      ]}
                    />

                    <Textarea
                      label="Specific Requirements / Vision"
                      placeholder="Share details regarding preferred location, square footage, or architectural preferences..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    <div className="pt-2">
                      <Checkbox
                        checked={formData.agreedToPrivacy}
                        onChange={(checked) => setFormData({ ...formData, agreedToPrivacy: checked })}
                        label={
                          <span>
                            I agree to receive confidential correspondence and acknowledge the{' '}
                            <span className="text-[#152E28] underline font-semibold">Privacy Charter</span>.
                          </span>
                        }
                      />
                      {errors.agreedToPrivacy && (
                        <p className="font-sans text-[16px] text-red-500 mt-1">{errors.agreedToPrivacy}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      className="w-full"
                      icon={<Send className="w-5 h-5" />}
                    >
                      Request Consultation
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Line Footer - Level 04 */}
            <div className="p-6 bg-[#F5F2EA] border-t border-[#EAE4D6] flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px] text-[#6C7382]">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#152E28]" /> Concierge Direct
              </span>
              <a href="tel:+918049111000" className="text-[#1A1C1E] hover:text-[#152E28] font-semibold">
                +91 80 4911 1000
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
