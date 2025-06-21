
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Calendar, Award, Users, Palette } from 'lucide-react';

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
      icon: <Palette className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
    },
    {
      year: "2015", 
      title: "Oil Painting Journey",
      description: "Discovered the depth and richness of oil paints",
      icon: <Palette className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1562088287-d8b6b8cf6b8d?w=400&h=300&fit=crop"
    },
    {
      year: "2018",
      title: "First Exhibition",
      description: "Showcased work at local gallery, found my artistic voice",
      icon: <Award className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop"
    },
    {
      year: "2021",
      title: "AR Vishwa Studio Born",
      description: "Established studio with mission: Spiritual meets Colorful",
      icon: <Award className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
      year: "2024",
      title: "International Recognition",
      description: "Art collectors worldwide, touching souls through colors",
      icon: <Users className="w-6 h-6" />,
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
    <section className="py-20 bg-gradient-to-b from-amber-50/30 to-orange-50/20 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Floating 3D Paintbrush */}
      <div 
        className="absolute top-20 right-20 hidden lg:block animate-palette-orbit opacity-40 dark:opacity-60"
        style={{
          transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.2}deg)`
        }}
      >
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-purple-400 dark:to-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 dark:from-blue-400 dark:to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Animated Resume Button */}
      <Button
        onClick={() => setShowResume(!showResume)}
        className="fixed bottom-20 right-4 md:right-6 z-50 bg-gradient-to-r from-orange-600 to-red-600 dark:from-purple-600 dark:to-blue-600 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl animate-glow-pulse hover:scale-110 transition-all duration-300"
      >
        <Download className="w-6 h-6" />
      </Button>

      {/* Resume Popup */}
      {showResume && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowResume(false)}>
          <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-6 md:p-8 max-w-sm md:max-w-md w-full transform animate-scale-in border border-orange-200 dark:border-purple-500/30" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-slate-800 dark:text-white">Artist Portfolio</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-center text-sm md:text-base">Download my complete portfolio</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <Button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 dark:from-purple-600 dark:to-blue-600 text-sm md:text-base">
                <Eye className="w-4 h-4 mr-2" />
                View Online
              </Button>
              <Button variant="outline" className="flex-1 border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-900/20 text-sm md:text-base">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </Card>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Magic Ink Reveal Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold mb-6 magic-ink-text text-slate-800 dark:text-white">
            About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-blue-400 dark:to-purple-400">Artist</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto magic-ink-text">
            Where spirituality meets artistry, every brushstroke tells a story of passion, 
            growth, and the eternal quest to capture the soul's deepest emotions.
          </p>
        </div>

        {/* Recent Works Continuous Movie */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 magic-ink-text text-slate-800 dark:text-white">Recent Masterpieces</h3>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-x space-x-6">
              {[...recentWorks, ...recentWorks].map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-72 md:w-80 h-48 md:h-60 group cursor-pointer relative"
                >
                  <img
                    src={image}
                    alt={`Recent work ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4 md:p-6">
                    <span className="text-white font-bold text-sm md:text-base">View Details</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* 3D Artist Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              {/* Main Artist Image with 3D Effects */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-3 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Vishwa Patel - Artist"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:shadow-orange-500/25 dark:group-hover:shadow-purple-500/25 transition-all duration-700"
                />
                {/* Floating Shadow */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 md:w-64 h-8 bg-orange-500/20 dark:bg-purple-500/20 rounded-full blur-xl transition-all duration-700 group-hover:w-56 md:group-hover:w-72"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 dark:from-blue-400 dark:to-purple-500 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Studio Story */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            <Card className="p-6 md:p-8 glass-card shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:rotate-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4 magic-ink-text">Studio Philosophy</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 magic-ink-text text-sm md:text-base">
                "Art is not just about what you see, but what you make others see. At AR Vishwa Studio, 
                we believe every painting should be a window to the soul - a bridge between the spiritual 
                and the tangible, the emotional and the visual."
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 md:p-4 bg-orange-50/80 dark:bg-blue-900/30 rounded-lg transform hover:scale-105 transition-all duration-300">
                  <Palette className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-orange-600 dark:text-blue-400" />
                  <div className="text-xl md:text-2xl font-bold text-orange-600 dark:text-blue-400">500+</div>
                  <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Paintings Created</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-red-50/80 dark:bg-purple-900/30 rounded-lg transform hover:scale-105 transition-all duration-300">
                  <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-red-600 dark:text-purple-400" />
                  <div className="text-xl md:text-2xl font-bold text-red-600 dark:text-purple-400">200+</div>
                  <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Happy Collectors</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-gradient-to-br from-orange-50/80 to-red-50/60 dark:from-blue-900/20 dark:to-purple-900/20 border-0 transform hover:scale-105 hover:rotate-1 transition-all duration-500 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4 magic-ink-text">Mission Statement</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed magic-ink-text text-sm md:text-base">
                "To create art that doesn't just decorate spaces, but transforms them into 
                sanctuaries of emotion, beauty, and spiritual connection. Every piece is crafted 
                to resonate with the viewer's inner world."
              </p>
            </Card>
          </div>
        </div>

        {/* Interactive Flipbook Timeline */}
        <div className="mt-16 md:mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center magic-ink-text">Artistic Journey</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500 dark:from-blue-500 dark:to-purple-500"></div>
            
            {timelineSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-8 cursor-pointer transition-all duration-500 ${
                  activeTimeline === index ? 'scale-105 z-10' : 'hover:scale-102'
                }`}
                onClick={() => setActiveTimeline(index)}
              >
                {/* Timeline dot */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                  activeTimeline === index 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 dark:from-blue-500 dark:to-purple-500 text-white shadow-2xl animate-pulse' 
                    : 'bg-white dark:bg-slate-700 border-4 border-orange-200 dark:border-slate-600 text-orange-600 dark:text-slate-300'
                }`}>
                  {step.icon}
                </div>
                
                {/* Flipbook Card */}
                <Card className={`ml-4 md:ml-6 p-4 md:p-6 flex-1 transition-all duration-500 overflow-hidden ${
                  activeTimeline === index 
                    ? 'bg-gradient-to-r from-orange-50/90 to-red-50/70 dark:from-blue-900/30 dark:to-purple-900/30 border-orange-200 dark:border-blue-500/30 shadow-2xl transform rotate-1 scale-105' 
                    : 'bg-white/90 dark:bg-slate-800/90 hover:shadow-lg hover:rotate-1 backdrop-blur-sm'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                    <span className="text-xs md:text-sm font-bold text-orange-600 dark:text-blue-400 bg-orange-100 dark:bg-blue-900/50 px-2 md:px-3 py-1 rounded-full w-fit">
                      {step.year}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white magic-ink-text">{step.title}</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 magic-ink-text text-sm md:text-base">{step.description}</p>
                  {activeTimeline === index && (
                    <div className="mt-4 animate-fade-in">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-24 md:h-32 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
