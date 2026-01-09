'use client';
import { useEffect, useRef } from 'react';

export default function PerformanceOptimizer({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Enable hardware acceleration
    if (containerRef.current) {
      containerRef.current.style.transform = 'translateZ(0)';
      containerRef.current.style.willChange = 'transform';
    }

    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="will-change-transform">
      {children}
    </div>
  );
}