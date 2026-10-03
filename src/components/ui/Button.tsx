import React from 'react';
import { motion } from 'motion/react';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useCursor } from '../../context/CursorContext';
import { ArrowRight } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonLook = 'solid' | 'glass' | 'outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconLook?: IconButtonLook;
  loading?: boolean;
  magnetic?: boolean;
  glow?: boolean;
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      iconLook = 'outline',
      loading = false,
      magnetic = true,
      glow = false,
      showArrow = false,
      disabled = false,
      className = '',
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    forwardedRef
  ) => {
    const prefersReduced = usePrefersReducedMotion();
    const isIconButton = variant === 'icon';

    const { ref: magneticRef, position, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLButtonElement>({
      strength: isIconButton ? 0.4 : 0.22,
      radius: 80,
    });
    const { setCursorVariant, resetCursor } = useCursor();

    const handleHoverStart = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading) {
        setCursorVariant(isIconButton ? 'magnetic' : 'pointer');
      }
      onMouseEnter?.(e);
    };

    const handleHoverEnd = (e: React.MouseEvent<HTMLButtonElement>) => {
      resetCursor();
      handleMouseLeave();
      onMouseLeave?.(e);
    };

    // Size specs for standard buttons - strictly Level 04 text sizes
    const sizeClasses = {
      sm: 'px-5 py-2.5 text-[16px] md:text-[17px] lg:text-[18px] tracking-wide gap-2 min-h-[44px]',
      md: 'px-7 py-3.5 text-[16px] md:text-[17px] lg:text-[18px] tracking-wide gap-2.5 min-h-[50px]',
      lg: 'px-9 py-4 text-[16px] md:text-[17px] lg:text-[18px] tracking-wide gap-3 min-h-[56px]',
    }[size];

    // Size specs for circular icon buttons
    const iconSizeClasses = {
      sm: 'w-10 h-10',
      md: 'w-12 h-12',
      lg: 'w-14 h-14',
    }[size];

    const baseShared =
      'relative inline-flex items-center justify-center font-sans uppercase font-semibold select-none outline-none transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-[#152E28] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5] cursor-pointer';

    // 1. Primary: Solid #152E28 background
    const primaryStyle = `rounded-full bg-[#152E28] hover:bg-[#1C3D35] active:bg-[#0E201C] text-[#FAF8F5] border border-[#234A41]/50 shadow-md shadow-[#0E201C]/25 group overflow-hidden ${sizeClasses}`;

    // 2. Secondary: Minimal outline
    const secondaryStyle = `rounded-full bg-[#1A1C1E]/[0.03] hover:bg-[#1A1C1E]/[0.08] active:bg-[#1A1C1E]/[0.12] text-[#1A1C1E] border border-[#1A1C1E]/15 hover:border-[#152E28]/40 backdrop-blur-sm group overflow-hidden ${sizeClasses}`;

    // 3. Text Button: No border, animated underline, arrow movement, editorial style
    const textStyle = `bg-transparent hover:text-[#152E28] active:text-[#0E201C] text-[#1A1C1E] p-0 border-b-2 border-transparent hover:border-[#152E28] rounded-none group tracking-wide gap-2 text-[16px] md:text-[17px] lg:text-[18px]`;

    // 4. Icon Button: Circular with glass, solid, and outline variants
    const iconLooks = {
      solid: 'bg-[#152E28] text-[#FAF8F5] hover:bg-[#1C3D35] border border-[#234A41]/50 shadow-sm',
      glass: 'bg-white/70 hover:bg-white text-[#1A1C1E] hover:text-[#152E28] border border-white/40 backdrop-blur-md shadow-sm',
      outline: 'bg-transparent hover:bg-[#152E28] text-[#1A1C1E] hover:text-[#FAF8F5] border border-[#1A1C1E]/20 hover:border-[#152E28]',
    }[iconLook];

    const iconStyle = `rounded-full ${iconLooks} flex items-center justify-center transition-all ${iconSizeClasses}`;

    const variantStyles = {
      primary: primaryStyle,
      secondary: secondaryStyle,
      text: textStyle,
      icon: iconStyle,
    }[variant];

    return (
      <motion.button
        ref={(node) => {
          magneticRef.current = node;
          if (typeof forwardedRef === 'function') forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        disabled={disabled || loading}
        animate={magnetic && !prefersReduced ? { x: position.x, y: position.y } : undefined}
        transition={{ type: 'spring', damping: 22, stiffness: 260, mass: 0.45 }}
        onMouseMove={magnetic && !prefersReduced ? handleMouseMove : undefined}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className={`${baseShared} ${variantStyles} ${glow ? 'shadow-[0_0_25px_rgba(21,46,40,0.4)]' : ''} ${className}`}
        {...(props as any)}
      >
        {/* Subtle light sweep on primary & secondary hover */}
        {(variant === 'primary' || variant === 'secondary') && (
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
        )}

        {loading ? (
          <div className="flex items-center gap-2 font-sans text-[16px] md:text-[17px] lg:text-[18px]">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Processing</span>
          </div>
        ) : isIconButton ? (
          <span className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            {children || icon}
          </span>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="inline-flex transition-transform duration-300 group-hover:-translate-x-0.5">
                {icon}
              </span>
            )}
            <span className="relative z-10 whitespace-nowrap">{children}</span>
            {showArrow && !icon && (
              <ArrowRight className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
            )}
            {icon && iconPosition === 'right' && (
              <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
                {icon}
              </span>
            )}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
