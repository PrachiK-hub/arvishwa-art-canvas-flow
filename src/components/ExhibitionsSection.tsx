
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ExhibitionsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const exhibitions = [
    {
      id: 1,
      title: "Colors of the Soul",
      date: "2024-07-15",
      time: "6:00 PM - 9:00 PM",
      location: "Downtown Art Gallery",
      address: "123 Art Street, Creative District",
      theme: "Spiritual Expression Through Abstract Art",
      description: "An immersive experience exploring the connection between spirituality and color",
      image: "https://images.unsplash.com/photo-1544967882-6abec256ace3?w=600&h=400&fit=crop",
      status: "upcoming",
      rsvpCount: 87,
      capacity: 150
    },
    {
      id: 2,
      title: "Emerging Visions",
      date: "2024-08-22",
      time: "7:00 PM - 10:00 PM", 
      location: "Modern Art Space",
      address: "456 Gallery Ave, Arts Quarter",
      theme: "Contemporary Interpretations of Ancient Wisdom",
      description: "Where traditional meets modern in a celebration of artistic evolution",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      status: "upcoming",
      rsvpCount: 52,
      capacity: 100
    },
    {
      id: 3,
      title: "Harmony in Chaos",
      date: "2024-05-10",
      time: "6:00 PM - 9:00 PM",
      location: "Cultural Center",
      address: "789 Culture Blvd, Heritage District", 
      theme: "Finding Peace in Life's Turbulence",
      description: "A retrospective look at artworks that find beauty in disorder",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      status: "past",
      attendees: 134,
      capacity: 120
    }
  ];

  const currentExhibition = exhibitions[selectedEvent];
  const nextExhibition = exhibitions.find(ex => ex.status === 'upcoming');

  const calculateTimeLeft = (dateString) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      return { days, hours, isPast: false };
    }
    return { days: 0, hours: 0, isPast: true };
  };

  const timeLeft = nextExhibition ? calculateTimeLeft(nextExhibition.date) : null;

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Exhibitions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join us for immersive art experiences where paintings come alive and stories unfold. 
            Each exhibition is carefully curated to create an emotional journey.
          </p>
        </div>

        {/* Live Countdown for Next Exhibition */}
        {nextExhibition && timeLeft && !timeLeft.isPast && (
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">🎨 Next Exhibition Starting Soon!</h3>
            <h4 className="text-xl mb-4">{nextExhibition.title}</h4>
            <div className="flex justify-center space-x-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold">{timeLeft.days}</div>
                <div className="text-purple-200">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{timeLeft.hours}</div>
                <div className="text-purple-200">Hours</div>
              </div>
            </div>
            <Button className="bg-white text-purple-600 hover:bg-purple-50 font-semibold">
              RSVP Now - {nextExhibition.capacity - nextExhibition.rsvpCount} spots left!
            </Button>
          </div>
        )}

        {/* Exhibition Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Exhibition Timeline</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            {exhibitions.map((exhibition, index) => (
              <Card 
                key={exhibition.id}
                className={`cursor-pointer transition-all duration-300 p-4 ${
                  selectedEvent === index 
                    ? 'ring-4 ring-purple-500 bg-purple-50 scale-105' 
                    : 'hover:shadow-lg hover:scale-102'
                } ${exhibition.status === 'past' ? 'opacity-70' : ''}`}
                onClick={() => setSelectedEvent(index)}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold ${
                    exhibition.status === 'upcoming' ? 'bg-green-500' : 'bg-gray-500'
                  }`}>
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">{exhibition.title}</h4>
                  <p className="text-sm text-slate-600">{new Date(exhibition.date).toLocaleDateString()}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                    exhibition.status === 'upcoming' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {exhibition.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Exhibition Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <Card className="p-8 bg-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-4 h-4 rounded-full ${
                  currentExhibition.status === 'upcoming' ? 'bg-green-500' : 'bg-gray-500'
                }`}></div>
                <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  {currentExhibition.status === 'upcoming' ? 'Upcoming Exhibition' : 'Past Exhibition'}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-slate-800 mb-4">{currentExhibition.title}</h3>
              <p className="text-lg text-purple-600 font-medium mb-6">{currentExhibition.theme}</p>
              <p className="text-slate-600 leading-relaxed mb-8">{currentExhibition.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <div className="font-medium text-slate-800">{new Date(currentExhibition.date).toLocaleDateString()}</div>
                    <div className="text-slate-600">{currentExhibition.time}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-medium text-slate-800">{currentExhibition.location}</div>
                    <div className="text-slate-600">{currentExhibition.address}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <div className="font-medium text-slate-800">
                      {currentExhibition.status === 'upcoming' 
                        ? `${currentExhibition.rsvpCount} RSVPs` 
                        : `${currentExhibition.attendees} Attended`
                      }
                    </div>
                    <div className="text-slate-600">Capacity: {currentExhibition.capacity}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {currentExhibition.status === 'upcoming' ? (
                  <>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                      RSVP for Free
                    </Button>
                    <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                      📍 Get Directions
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 flex-1">
                      📸 View Gallery
                    </Button>
                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                      🎥 Watch Highlights
                    </Button>
                  </>
                )}
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={currentExhibition.image}
                alt={currentExhibition.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">{currentExhibition.title}</h4>
                <p className="text-white/90">{currentExhibition.theme}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Walkthrough Option */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">📱 Can't Make It in Person?</h3>
          <p className="text-slate-600 mb-6">
            Experience our exhibitions virtually with our mobile-friendly 360° walkthrough technology. 
            Get the full gallery experience from anywhere in the world.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full"
          >
            🕶️ Start Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;
