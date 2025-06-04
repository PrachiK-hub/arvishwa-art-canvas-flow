
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineSteps = [
    {
      year: "2010",
      title: "First Sketches",
      description: "Started with simple pencil drawings, capturing emotions on paper",
      icon: "✏️"
    },
    {
      year: "2015", 
      title: "Oil Painting Journey",
      description: "Discovered the depth and richness of oil paints",
      icon: "🎨"
    },
    {
      year: "2018",
      title: "First Exhibition",
      description: "Showcased work at local gallery, found my artistic voice",
      icon: "🖼️"
    },
    {
      year: "2021",
      title: "Arvishwa Studio Born",
      description: "Established studio with mission: Spiritual meets Colorful",
      icon: "🏛️"
    },
    {
      year: "2024",
      title: "International Recognition",
      description: "Art collectors worldwide, touching souls through colors",
      icon: "🌍"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            The Artist's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Where spirituality meets artistry, every brushstroke tells a story of passion, 
            growth, and the eternal quest to capture the soul's deepest emotions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Studio Story */}
          <div className="space-y-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Studio Philosophy</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                "Art is not just about what you see, but what you make others see. At Arvishwa Studio, 
                we believe every painting should be a window to the soul - a bridge between the spiritual 
                and the tangible, the emotional and the visual."
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">Paintings Created</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="text-2xl font-bold text-purple-600">200+</div>
                  <div className="text-sm text-slate-600">Happy Collectors</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Mission Statement</h3>
              <p className="text-slate-700 leading-relaxed">
                "To create art that doesn't just decorate spaces, but transforms them into 
                sanctuaries of emotion, beauty, and spiritual connection. Every piece is crafted 
                to resonate with the viewer's inner world."
              </p>
            </Card>
          </div>

          {/* Animated Timeline */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Artistic Evolution</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {timelineSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-8 cursor-pointer transition-all duration-300 ${
                    activeTimeline === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveTimeline(index)}
                >
                  {/* Timeline dot */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                    activeTimeline === index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'bg-white border-4 border-slate-200 text-slate-600'
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Timeline content */}
                  <Card className={`ml-6 p-6 flex-1 transition-all duration-300 ${
                    activeTimeline === index 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg' 
                      : 'bg-white hover:shadow-md'
                  }`}>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {step.year}
                      </span>
                      <h4 className="text-xl font-bold text-slate-800">{step.title}</h4>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
