import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  sineOffset: number;
  sineSpeed: number;
  color: string;
}

export const AmbientParticles: React.FC<{
  count?: number;
  className?: string;
  intensity?: number;
}> = ({ count = 35, className = '', intensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Warm ivory, subtle emerald, and soft sunlight particles
    const particleColors = [
      '234, 228, 214', // Warm Ivory (#EAE4D6)
      '30, 94, 69',    // Deep Sea Green (#1E5E45)
      '104, 194, 159', // Mint Accent (#68C29F)
      '255, 250, 240', // Sunlight White
    ];

    const particles: Particle[] = [];
    const effectiveCount = Math.floor(count * intensity);

    for (let i = 0; i < effectiveCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.35 + 0.1,
        alpha: Math.random() * 0.35 + 0.1,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.05, // gentle upward drift
        sineOffset: Math.random() * Math.PI * 2,
        sineSpeed: Math.random() * 0.008 + 0.003,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Harmonic sine wave oscillation
        p.x += p.vx + Math.sin(time * p.sineSpeed + p.sineOffset) * 0.2;
        p.y += p.vy;

        // Subtle repulsion from cursor
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 0.4;
          p.y += (dy / dist) * force * 0.4;
        }

        // Breathing opacity
        p.alpha = p.baseAlpha + Math.sin(time * 0.02 + p.sineOffset) * 0.12;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw soft glowing particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        gradient.addColorStop(0, `rgba(${p.color}, ${Math.max(0, p.alpha)})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, intensity, prefersReduced]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-10 w-full h-full opacity-60 ${className}`}
      aria-hidden="true"
    />
  );
};
