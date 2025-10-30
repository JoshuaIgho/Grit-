import React, { useEffect, useRef, useState } from 'react';
import { reflections } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

const Reflections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="reflections"
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0a] px-6 md:px-12 py-32 relative"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#E25822] to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#333]" />
          <span className="text-[#666] text-xs uppercase tracking-[0.4em]" style={{ fontFamily: '"Inter", sans-serif' }}>
            Thoughts from the Grind
          </span>
          <div className="w-8 h-px bg-[#333]" />
        </div>

        <h2 
          className="text-4xl md:text-5xl font-black text-white mb-20 tracking-[0.2em] uppercase text-center"
          style={{ fontFamily: '"Bebas Neue", sans-serif' }}
        >
          Reflections
        </h2>

        <div className="space-y-1">
          {reflections.map((reflection, index) => (
            <div
              key={reflection.id}
              className={`border-l-2 border-[#1a1a1a] hover:border-[#E25822] pl-8 py-10 group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[#666] text-xs uppercase tracking-wider">
                      {reflection.date}
                    </span>
                    <div className="w-4 h-px bg-[#333]" />
                  </div>
                  
                  <h3 
                    className="text-2xl md:text-3xl font-black text-white mb-4 tracking-wide group-hover:text-[#E25822] transition-colors"
                    style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                  >
                    {reflection.title}
                  </h3>
                  
                  <p className="text-[#EAEAEA] text-base leading-relaxed font-light">
                    {reflection.excerpt}
                  </p>
                </div>
                
                <ArrowUpRight 
                  className="w-5 h-5 text-[#E25822] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reflections;