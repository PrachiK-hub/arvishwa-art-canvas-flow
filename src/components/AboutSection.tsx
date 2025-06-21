
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineSteps = [
    {
      year: "2010",
      title: "First Sketches",
      description: "Started with simple pencil drawings, capturing emotions on paper",
      icon: "✏️",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
    },
    {
      year: "2015", 
      title: "Oil Painting Journey",
      description: "Discovered the depth and richness of oil paints",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1562088287-d8b6b8cf6b8d?w=400&h=300&fit=crop"
    },
    {
      year: "2018",
      title: "First Exhibition",
      description: "Showcased work at local gallery, found my artistic voice",
      icon: "🖼️",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop"
    },
    {
      year: "2021",
      title: "AR Vishwa Studio Born",
      description: "Established studio with mission: Spiritual meets Colorful",
      icon: "🏛️",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
      year: "2024",
      title: "International Recognition",
      description: "Art collectors worldwide, touching souls through colors",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca4?w=400&h=300&fit=crop"
    }
  ];

  const recentWorks = [
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Floating 3D Paintbrush */}
      <div 
        className="absolute top-20 right-20 hidden lg:block animate-palette-orbit opacity-60"
        style={{
          transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.2}deg)`
        }}
      >
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Animated Resume Button */}
      <Button
        onClick={() => setShowResume(!showResume)}
        className="fixed bottom-20 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-16 h-16 shadow-2xl animate-glow-pulse hover:scale-110 transition-all duration-300"
      >
        📄
      </Button>

      {/* Resume Popup */}
      {showResume && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowResume(false)}>
          <Card className="bg-white dark:bg-slate-800 p-8 max-w-md w-full transform animate-scale-in" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4 text-center">Artist Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">Download my complete portfolio</p>
            <div className="flex gap-4">
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600">
                📱 View Online
              </Button>
              <Button variant="outline" className="flex-1">
                📥 Download PDF
              </Button>
            </div>
          </Card>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Magic Ink Reveal Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 magic-ink-text">
            About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Artist</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto magic-ink-text">
            Where spirituality meets artistry, every brushstroke tells a story of passion, 
            growth, and the eternal quest to capture the soul's deepest emotions.
          </p>
        </div>

        {/* Recent Works Continuous Movie */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 magic-ink-text">Recent Masterpieces</h3>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-x space-x-6">
              {[...recentWorks, ...recentWorks].map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-80 h-60 group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Recent work ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                    <span className="text-white font-bold">View Details</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Studio Story */}
          <div className="space-y-8">
            <Card className="p-8 glass-card shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:rotate-1">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 magic-ink-text">Studio Philosophy</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 magic-ink-text">
                "Art is not just about what you see, but what you make others see. At AR Vishwa Studio, 
                we believe every painting should be a window to the soul - a bridge between the spiritual 
                and the tangible, the emotional and the visual."
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Paintings Created</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="text-2xl font-bold text-purple-600">200+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Happy Collectors</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 transform hover:scale-105 hover:rotate-1 transition-all duration-500">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 magic-ink-text">Mission Statement</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed magic-ink-text">
                "To create art that doesn't just decorate spaces, but transforms them into 
                sanctuaries of emotion, beauty, and spiritual connection. Every piece is crafted 
                to resonate with the viewer's inner world."
              </p>
            </Card>
          </div>

          {/* Interactive Flipbook Timeline */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center magic-ink-text">Artistic Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {timelineSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-8 cursor-pointer transition-all duration-500 ${
                    activeTimeline === index ? 'scale-105 z-10' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveTimeline(index)}
                >
                  {/* Timeline dot */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                    activeTimeline === index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl animate-pulse' 
                      : 'bg-white dark:bg-slate-700 border-4 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Flipbook Card */}
                  <Card className={`ml-6 p-6 flex-1 transition-all duration-500 overflow-hidden ${
                    activeTimeline === index 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200 shadow-2xl transform rotate-1 scale-105' 
                      : 'bg-white dark:bg-slate-800 hover:shadow-lg hover:rotate-1'
                  }`}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                        {step.year}
                      </span>
                      <h4 className="text-xl font-bold text-slate-800 dark:text-white magic-ink-text">{step.title}</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 magic-ink-text">{step.description}</p>
                    {activeTimeline === index && (
                      <div className="mt-4 animate-fade-in">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-32 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    )}
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
