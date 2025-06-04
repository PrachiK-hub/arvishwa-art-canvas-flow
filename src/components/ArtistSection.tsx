
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ArtistSection = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    paintings: 0,
    exhibitions: 0,
    clients: 0
  });

  const finalCounts = {
    experience: 15,
    paintings: 200,
    exhibitions: 25,
    clients: 150
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;

    const increments = {
      experience: finalCounts.experience / steps,
      paintings: finalCounts.paintings / steps,
      exhibitions: finalCounts.exhibitions / steps,
      clients: finalCounts.clients / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters(prev => ({
        experience: Math.min(Math.floor(increments.experience * currentStep), finalCounts.experience),
        paintings: Math.min(Math.floor(increments.paintings * currentStep), finalCounts.paintings),
        exhibitions: Math.min(Math.floor(increments.exhibitions * currentStep), finalCounts.exhibitions),
        clients: Math.min(Math.floor(increments.clients * currentStep), finalCounts.clients)
      }));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalCounts);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const timelineEvents = [
    {
      year: "2009",
      title: "Artistic Journey Begins",
      description: "Started with traditional painting techniques and classical training",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
    },
    {
      year: "2014",
      title: "First Solo Exhibition",
      description: "Breakthrough exhibition featuring abstract expressionist works",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    },
    {
      year: "2018",
      title: "Digital Art Integration",
      description: "Embraced digital mediums while maintaining traditional foundations",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop"
    },
    {
      year: "2024",
      title: "Arvishwa Studio Founded",
      description: "Established studio for custom commissions and art education",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-canvas-100 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-purple-900 mb-6">
            Meet the <span className="text-gradient font-brush">Artist</span>
          </h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Behind every masterpiece is a story of passion, dedication, and artistic evolution
          </p>
        </div>

        {/* Artist Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-2xl border-0 hover-tilt">
              <h3 className="text-3xl font-bold text-purple-900 mb-6">Arvishwa's Journey</h3>
              <div className="space-y-4 text-purple-700 leading-relaxed">
                <p>
                  With over 15 years of artistic experience, Arvishwa has developed a unique style that 
                  seamlessly blends traditional techniques with contemporary vision. Her work explores 
                  the intersection of emotion and color, creating pieces that speak to the soul.
                </p>
                <p>
                  Trained in classical painting methods and constantly evolving with modern artistic 
                  trends, she specializes in custom commissions that capture the essence of her clients' 
                  dreams and visions.
                </p>
                <p>
                  "Every canvas tells a story, and every color carries emotion. My goal is to create 
                  art that not only decorates spaces but transforms them into windows to other worlds."
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Oil Painting
                </span>
                <span className="px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium">
                  Watercolor
                </span>
                <span className="px-4 py-2 bg-canvas-200 text-canvas-800 rounded-full text-sm font-medium">
                  Digital Art
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Mixed Media
                </span>
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="Artist Arvishwa"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Arvishwa</p>
                <p className="text-purple-200">Founder & Lead Artist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="p-6 text-center bg-gradient-to-br from-purple-600 to-purple-700 text-white hover-tilt">
            <div className="text-4xl font-bold mb-2 animate-pulse">{counters.experience}+</div>
            <div className="text-purple-200">Years Experience</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-saffron-500 to-saffron-600 text-white hover-tilt">
            <div className="text-4xl font-bold mb-2 animate-pulse">{counters.paintings}+</div>
            <div className="text-saffron-100">Paintings Created</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-canvas-600 to-canvas-700 text-white hover-tilt">
            <div className="text-4xl font-bold mb-2 animate-pulse">{counters.exhibitions}+</div>
            <div className="text-canvas-200">Exhibitions</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-purple-500 to-saffron-500 text-white hover-tilt">
            <div className="text-4xl font-bold mb-2 animate-pulse">{counters.clients}+</div>
            <div className="text-purple-100">Happy Clients</div>
          </Card>
        </div>

        {/* Evolution Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-purple-900 text-center mb-12">Artistic Evolution</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-saffron-500 h-full"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg hover-tilt">
                      <div className="text-2xl font-bold text-saffron-600 mb-2">{event.year}</div>
                      <h4 className="text-xl font-bold text-purple-900 mb-3">{event.title}</h4>
                      <p className="text-purple-700">{event.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-purple-600 to-saffron-500 rounded-full shadow-lg flex-shrink-0 animate-pulse"></div>
                  
                  <div className="w-full lg:w-1/2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-xl shadow-lg hover-tilt"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <Card className="p-8 bg-gradient-to-r from-purple-600 to-saffron-500 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Behind the Scenes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-2">🎨</div>
              <p className="text-lg font-semibold">Favorite Medium</p>
              <p className="text-purple-100">Oil paints for their rich texture and blendability</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-2">⏰</div>
              <p className="text-lg font-semibold">Studio Hours</p>
              <p className="text-purple-100">Early morning painter - best creativity at sunrise</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl mb-2">🌟</div>
              <p className="text-lg font-semibold">Inspiration</p>
              <p className="text-purple-100">Nature, emotions, and human connections</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ArtistSection;
