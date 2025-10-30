import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { projects } from '../data/mockData';
import { X, ExternalLink } from 'lucide-react';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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
      id="work"
      ref={sectionRef}
      className="min-h-screen bg-black px-6 md:px-12 py-32 relative"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#E25822] to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#333]" />
          <span className="text-[#666] text-xs uppercase tracking-[0.4em]" style={{ fontFamily: '"Inter", sans-serif' }}>
            Selected Projects
          </span>
          <div className="w-8 h-px bg-[#333]" />
        </div>

        <h2 
          className="text-4xl md:text-5xl font-black text-white mb-20 tracking-[0.2em] uppercase text-center"
          style={{ fontFamily: '"Bebas Neue", sans-serif' }}
        >
          Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`bg-[#0a0a0a] border border-[#1a1a1a] p-10 cursor-pointer group hover:border-[#E25822] transition-all duration-500 hover:shadow-[0_0_40px_rgba(226,88,34,0.2)] hover:-translate-y-2 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#1a1a1a] group-hover:border-[#E25822] transition-colors duration-500" />
              
              {/* Number */}
              <span className="text-6xl font-black text-[#0a0a0a] group-hover:text-[#1a1a1a] transition-colors absolute top-4 left-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="relative z-10">
                <h3 
                  className="text-3xl font-black text-white mb-4 tracking-[0.15em] group-hover:text-[#E25822] transition-colors"
                  style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-[#EAEAEA] text-sm mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-[10px] uppercase tracking-wider text-[#E25822] border border-[#E25822]/30 px-3 py-1.5 hover:bg-[#E25822]/10 transition-colors"
                      style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View More */}
                <div className="flex items-center gap-2 mt-6 text-[#666] group-hover:text-[#E25822] transition-colors">
                  <span className="text-xs uppercase tracking-wider">View Details</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/97 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0a0a0a] border-2 border-[#E25822] max-w-3xl w-full p-16 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#E25822]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E25822]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E25822]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#E25822]" />
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 text-[#EAEAEA] hover:text-[#E25822] transition-colors"
            >
              <X size={28} />
            </button>
            
            <h3 
              className="text-5xl font-black text-white mb-8 tracking-[0.2em]"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              {selectedProject.title}
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {selectedProject.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="text-xs uppercase tracking-wider text-[#E25822] border border-[#E25822] px-4 py-2 bg-[#E25822]/10"
                  style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-[#EAEAEA] text-lg leading-relaxed font-light">
              {selectedProject.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;