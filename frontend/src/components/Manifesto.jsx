import React, { useEffect, useRef, useState } from 'react';
import { manifestoText } from '../data/mockData';

const Manifesto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="manifesto"
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 md:px-12 py-32 relative"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#E25822] to-transparent" />
      
      <div 
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#333]" />
          <span className="text-[#666] text-xs uppercase tracking-[0.4em]" style={{ fontFamily: '"Inter", sans-serif' }}>
            The Mindset
          </span>
          <div className="w-8 h-px bg-[#333]" />
        </div>

        <h2 
          className="text-4xl md:text-5xl font-black text-white mb-20 tracking-[0.2em] uppercase text-center"
          style={{ fontFamily: '"Bebas Neue", sans-serif' }}
        >
          Manifesto
        </h2>
        
        <div className="space-y-10">
          {manifestoText.split('\n\n').map((paragraph, index) => (
            <div 
              key={index}
              className="relative pl-8 border-l-2 border-[#1a1a1a] hover:border-[#E25822] transition-colors duration-500"
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <p 
                className="text-xl md:text-2xl text-[#EAEAEA] leading-relaxed font-light"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {paragraph.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < paragraph.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;