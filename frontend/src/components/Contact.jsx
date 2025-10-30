import React, { useEffect, useRef, useState } from 'react';
import { contactInfo } from '../data/mockData';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center px-6 py-32 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#E25822] to-transparent" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      <div 
        className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#333]" />
          <span className="text-[#666] text-xs uppercase tracking-[0.4em]" style={{ fontFamily: '"Inter", sans-serif' }}>
            Get In Touch
          </span>
          <div className="w-8 h-px bg-[#333]" />
        </div>

        <h2 
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-[0.15em] uppercase leading-tight"
          style={{ fontFamily: '"Bebas Neue", sans-serif' }}
        >
          {contactInfo.message}
        </h2>

        <p className="text-[#999] text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Ready to collaborate on something exceptional? Let's create systems that endure.
        </p>

        <a 
          href={`mailto:${contactInfo.email}`}
          className="inline-block group"
        >
          <Button
            className="bg-transparent border-2 border-[#E25822] hover:bg-[#E25822] text-white font-bold text-base px-10 py-7 uppercase tracking-[0.25em] transition-all duration-300 hover:shadow-[0_0_50px_rgba(226,88,34,0.4)] relative overflow-hidden group"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            <span className="flex items-center gap-3 relative z-10">
              <Mail className="w-5 h-5" />
              {contactInfo.email}
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </span>
          </Button>
        </a>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-[#1a1a1a]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[#666] text-xs uppercase tracking-[0.3em]">
            <div className="flex items-center gap-4">
              <span>Built with Discipline</span>
              <div className="w-1 h-1 bg-[#E25822] rounded-full" />
              <span>Powered by Grit</span>
            </div>
            <div>
              <span>© 2025 All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;