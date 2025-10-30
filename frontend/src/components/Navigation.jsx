import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#1a1a1a] z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#E25822] to-[#B33C2E] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black tracking-[0.3em] text-white hover:text-[#E25822] transition-colors z-50 relative"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            GRIT
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['manifesto', 'work', 'reflections', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm uppercase tracking-[0.2em] text-[#EAEAEA] hover:text-[#E25822] transition-all duration-300 relative group"
                style={{ fontFamily: '"Bebas Neue", sans-serif' }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E25822] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#E25822] transition-colors z-50 relative"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/98 backdrop-blur-lg transition-all duration-500 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ top: '0' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {['manifesto', 'work', 'reflections', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-3xl uppercase tracking-[0.3em] text-white hover:text-[#E25822] transition-all duration-300 transform hover:scale-110"
                style={{ 
                  fontFamily: '"Bebas Neue", sans-serif',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;