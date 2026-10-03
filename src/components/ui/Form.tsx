import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, X, FileText } from 'lucide-react';

// ==========================================
// 1. TEXT INPUT
// ==========================================
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  success?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, success, className = '', ...props }, ref) => {
    return (
      <div className="space-y-2 w-full font-sans">
        {label && (
          <label className="block text-[16px] md:text-[17px] lg:text-[18px] font-semibold uppercase tracking-wide text-[#1A1C1E]">
            {label}
            {props.required && <span className="text-[#1E5E45] ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`w-full px-5 py-3.5 bg-white text-[#1A1C1E] placeholder:text-[#8990A0] border rounded-xl text-[16px] md:text-[17px] lg:text-[18px] transition-all duration-200 outline-none ${
              error
                ? 'border-red-500/70 focus:border-red-500 focus:ring-2 focus:ring-red-500/10'
                : success
                ? 'border-[#1E5E45] focus:border-[#1E5E45] focus:ring-2 focus:ring-[#1E5E45]/10'
                : 'border-[#EAE4D6] hover:border-[#1A1C1E]/30 focus:border-[#1E5E45] focus:ring-2 focus:ring-[#1E5E45]/15'
            } ${className}`}
            {...props}
          />
          {success && (
            <CheckCircle2 className="w-5 h-5 text-[#1E5E45] absolute right-4 top-1/2 -translate-y-1/2" />
          )}
        </div>
        {error && <p className="text-[16px] text-red-600 flex items-center gap-1.5 mt-1"><AlertCircle className="w-4 h-4 shrink-0" />{error}</p>}
        {hint && !error && <p className="text-[16px] text-[#6C7382] mt-1">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

// ==========================================
// 2. TEXTAREA
// ==========================================
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', rows = 4, ...props }, ref) => {
    return (
      <div className="space-y-2 w-full font-sans">
        {label && (
          <label className="block text-[16px] md:text-[17px] lg:text-[18px] font-semibold uppercase tracking-wide text-[#1A1C1E]">
            {label}
            {props.required && <span className="text-[#1E5E45] ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={`w-full px-5 py-3.5 bg-white text-[#1A1C1E] placeholder:text-[#8990A0] border rounded-xl text-[16px] md:text-[17px] lg:text-[18px] transition-all duration-200 outline-none resize-none ${
            error
              ? 'border-red-500/70 focus:border-red-500 focus:ring-2 focus:ring-red-500/10'
              : 'border-[#EAE4D6] hover:border-[#1A1C1E]/30 focus:border-[#1E5E45] focus:ring-2 focus:ring-[#1E5E45]/15'
          } ${className}`}
          {...props}
        />
        {error && <p className="text-[16px] text-red-600 flex items-center gap-1.5 mt-1"><AlertCircle className="w-4 h-4 shrink-0" />{error}</p>}
        {hint && !error && <p className="text-[16px] text-[#6C7382] mt-1">{hint}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

// ==========================================
// 3. DROPDOWN / SELECT
// ==========================================
export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  error,
  placeholder = 'Select an option',
}) => {
  return (
    <div className="space-y-2 w-full font-sans">
      {label && (
        <label className="block text-[16px] md:text-[17px] lg:text-[18px] font-semibold uppercase tracking-wide text-[#1A1C1E]">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none px-5 py-3.5 bg-white text-[#1A1C1E] border rounded-xl text-[16px] md:text-[17px] lg:text-[18px] transition-all duration-200 outline-none cursor-pointer ${
            error
              ? 'border-red-500/70 focus:border-red-500'
              : 'border-[#EAE4D6] hover:border-[#1A1C1E]/30 focus:border-[#1E5E45] focus:ring-2 focus:ring-[#1E5E45]/15'
          }`}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white text-[#1A1C1E]">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#6C7382]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <p className="text-[16px] text-red-600 flex items-center gap-1.5 mt-1"><AlertCircle className="w-4 h-4 shrink-0" />{error}</p>}
    </div>
  );
};

// ==========================================
// 4. PHONE INPUT (with country dial code)
// ==========================================
export const PhoneInput: React.FC<{
  label?: string;
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneNumberChange: (phone: string) => void;
  error?: string;
}> = ({
  label = 'Phone Number',
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  error,
}) => {
  const countryCodes = [
    { code: '+91', country: 'IN (+91)' },
    { code: '+971', country: 'UAE (+971)' },
    { code: '+1', country: 'US (+1)' },
    { code: '+44', country: 'UK (+44)' },
    { code: '+65', country: 'SG (+65)' },
  ];

  return (
    <div className="space-y-2 w-full font-sans">
      {label && (
        <label className="block text-[16px] md:text-[17px] lg:text-[18px] font-semibold uppercase tracking-wide text-[#1A1C1E]">
          {label}
        </label>
      )}
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className="w-32 px-4 py-3.5 bg-white text-[#1A1C1E] border border-[#EAE4D6] rounded-xl text-[16px] md:text-[17px] lg:text-[18px] outline-none focus:border-[#1E5E45] cursor-pointer"
        >
          {countryCodes.map((c) => (
            <option key={c.code} value={c.code}>{c.country}</option>
          ))}
        </select>
        <div className="relative flex-1">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => onPhoneNumberChange(e.target.value)}
            placeholder="98765 43210"
            className={`w-full px-5 py-3.5 bg-white text-[#1A1C1E] placeholder:text-[#8990A0] border rounded-xl text-[16px] md:text-[17px] lg:text-[18px] outline-none transition-all ${
              error
                ? 'border-red-500/70 focus:border-red-500'
                : 'border-[#EAE4D6] hover:border-[#1A1C1E]/30 focus:border-[#1E5E45] focus:ring-2 focus:ring-[#1E5E45]/15'
            }`}
          />
        </div>
      </div>
      {error && <p className="text-[16px] text-red-600 flex items-center gap-1.5 mt-1"><AlertCircle className="w-4 h-4 shrink-0" />{error}</p>}
    </div>
  );
};

// ==========================================
// 5. FILE UPLOAD (Drag & Drop + Click)
// ==========================================
export const FileUpload: React.FC<{
  label?: string;
  onFileSelect: (file: File) => void;
  acceptedTypes?: string;
  maxSizeMB?: number;
}> = ({
  label = 'Architectural Brief / Document (Optional)',
  onFileSelect,
  acceptedTypes = '.pdf,.doc,.docx,.png,.jpg',
  maxSizeMB = 10,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <div className="space-y-2 w-full font-sans">
      {label && (
        <label className="block text-[16px] md:text-[17px] lg:text-[18px] font-semibold uppercase tracking-wide text-[#1A1C1E]">
          {label}
        </label>
      )}

      {!selectedFile ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`p-6 rounded-xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer ${
            dragOver
              ? 'border-[#1E5E45] bg-[#1E5E45]/5'
              : 'border-[#EAE4D6] hover:border-[#1E5E45]/50 bg-white'
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept={acceptedTypes}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EAE4D6] flex items-center justify-center text-[#1E5E45]">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-[16px] md:text-[17px] lg:text-[18px] font-medium text-[#1A1C1E]">
              <span className="text-[#1E5E45] underline font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-[16px] text-[#6C7382]">
              PDF, DOC, PNG up to {maxSizeMB}MB
            </p>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE4D6] flex items-center justify-between font-sans text-[16px] md:text-[17px] lg:text-[18px]">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#1E5E45] shrink-0" />
            <div>
              <p className="font-semibold text-[#1A1C1E]">{selectedFile.name}</p>
              <p className="text-[#6C7382]">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedFile(null)}
            className="p-2 text-[#6C7382] hover:text-red-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 6. CHECKBOX
// ==========================================
export const Checkbox: React.FC<{
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}> = ({ label, checked, onChange, id }) => {
  return (
    <label className="flex items-start gap-3 cursor-pointer select-none group font-sans text-[16px] md:text-[17px] lg:text-[18px]">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <div
        className={`w-5 h-5 mt-1 rounded border transition-colors flex items-center justify-center shrink-0 ${
          checked
            ? 'bg-[#1E5E45] border-[#1E5E45] text-white'
            : 'border-[#EAE4D6] bg-white group-hover:border-[#1E5E45]'
        }`}
      >
        {checked && (
          <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-[#525866] leading-relaxed">
        {label}
      </span>
    </label>
  );
};

// ==========================================
// 7. RADIO GROUP
// ==========================================
export const RadioGroup: React.FC<{
  label?: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string; description?: string }[];
}> = ({ label, name, value, onChange, options }) => {
  return (
    <div className="space-y-2 font-sans">
      {label && (
        <span className="block text-[16px] md:text-[17px] lg:text-[18px] font-semibold uppercase tracking-wide text-[#1A1C1E]">
          {label}
        </span>
      )}
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
              value === opt.value
                ? 'bg-[#FAF8F5] border-[#1E5E45] shadow-xs'
                : 'bg-white border-[#EAE4D6] hover:border-[#DCD7CA]'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 mt-0.5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                value === opt.value
                  ? 'border-[#1E5E45] bg-[#1E5E45]'
                  : 'border-[#EAE4D6] bg-white'
              }`}
            >
              {value === opt.value && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
            <div>
              <span className="text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#1A1C1E] block">
                {opt.label}
              </span>
              {opt.description && (
                <span className="text-[16px] text-[#6C7382] block mt-0.5">
                  {opt.description}
                </span>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 8. FORM FEEDBACK BANNERS (Success / Error)
// ==========================================
export const FormSuccessBanner: React.FC<{
  title?: string;
  message?: string;
  onReset?: () => void;
}> = ({
  title = 'Enquiry Registered Successfully',
  message = 'A senior private wealth concierge will contact you within 24 hours.',
  onReset,
}) => {
  return (
    <div className="p-6 rounded-xl bg-[#1E5E45]/10 border border-[#1E5E45]/30 space-y-3 font-sans">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-6 h-6 text-[#1E5E45]" />
        <h4 className="text-[16px] md:text-[17px] lg:text-[18px] font-semibold uppercase tracking-wide text-[#1E5E45]">{title}</h4>
      </div>
      <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#525866] leading-relaxed">{message}</p>
      {onReset && (
        <button
          onClick={onReset}
          className="text-[16px] text-[#1E5E45] underline font-semibold cursor-pointer"
        >
          Submit another request
        </button>
      )}
    </div>
  );
};
