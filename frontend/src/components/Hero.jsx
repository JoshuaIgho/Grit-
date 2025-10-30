import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;
  const opacity = Math.max(1 - scrollY / 700, 0);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Portrait Image with Better Positioning */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${1 + scrollY * 0.0002})`,
          opacity: opacity
        }}
      >
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
        
        {/* Grain Texture */}
        <div 
          className="absolute inset-0 z-20 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Desktop: Show full image with max constraints */}
        <img 
          src="https://customer-assets.emergentagent.com/job_minimal-strength/artifacts/8zogpeu9_ChatGPT%20Image%20Jul%209%2C%202025%2C%2009_26_10%20PM.png"
          alt="GRIT Portrait"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />

        {/* Mobile/Tablet: Cover with better positioning */}
        <img 
          src="https://customer-assets.emergentagent.com/job_minimal-strength/artifacts/8zogpeu9_ChatGPT%20Image%20Jul%209%2C%202025%2C%2009_26_10%20PM.png"
          alt="GRIT Portrait"
          className="md:hidden w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
      </div>

      {/* Content Overlay - More Refined */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center px-4">
        {/* Accent Line */}
        <div className="w-16 h-0.5 bg-[#E25822] mb-8 animate-pulse" />
        
        <h1 
          className="text-[80px] md:text-[120px] lg:text-[140px] font-black tracking-[0.25em] text-white leading-none"
          style={{ 
            fontFamily: '"Bebas Neue", sans-serif',
            textShadow: '0 4px 60px rgba(0,0,0,0.9), 0 0 100px rgba(0,0,0,0.7)'
          }}
        >
          GRIT
        </h1>
        
        <div className="flex items-center gap-3 md:gap-4 mt-8">
          <div className="w-8 md:w-12 h-px bg-[#E25822]" />
          <p 
            className="text-[#EAEAEA] text-sm md:text-base lg:text-lg tracking-[0.4em] uppercase font-light"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Endurance · Focus · Creation
          </p>
          <div className="w-8 md:w-12 h-px bg-[#E25822]" />
        </div>
      </div>

      {/* Scroll Indicator - More Elegant */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-3"
        style={{ opacity: opacity }}
      >
        <span className="text-[#666] text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6 text-[#E25822] animate-bounce" />
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E25822] to-transparent z-30" />
    </section>
  );
};

export default Hero;
