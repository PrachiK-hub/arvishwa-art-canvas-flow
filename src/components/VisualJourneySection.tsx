
import React from 'react';

interface JourneyCard {
  id: number;
  title: string;
  image: string;
  caption: string;
  mood: string;
}

const journeyCards: JourneyCard[] = [
  {
    id: 1,
    title: "First Sketch",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop",
    caption: "Where it all began - simple lines with endless possibilities",
    mood: "Beginning"
  },
  {
    id: 2,
    title: "Color Explosion",
    image: "https://images.unsplash.com/photo-1562088287-d8b6b8cf6b8d?w=400&h=500&fit=crop",
    caption: "Discovering the power of vibrant hues and bold strokes",
    mood: "Discovery"
  },
  {
    id: 3,
    title: "Emotional Depth",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=500&fit=crop",
    caption: "Learning to paint feelings, not just forms",
    mood: "Growth"
  },
  {
    id: 4,
    title: "Nature's Whisper",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=500&fit=crop",
    caption: "Finding inspiration in the rustling leaves and flowing water",
    mood: "Inspiration"
  },
  {
    id: 5,
    title: "Abstract Dreams",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop",
    caption: "When reality bends to imagination",
    mood: "Evolution"
  },
  {
    id: 6,
    title: "Portrait Soul",
    image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca4?w=400&h=500&fit=crop",
    caption: "Capturing the essence behind every face",
    mood: "Connection"
  },
  {
    id: 7,
    title: "Urban Energy",
    image: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=400&h=500&fit=crop",
    caption: "The rhythm of city life on canvas",
    mood: "Vibrancy"
  },
  {
    id: 8,
    title: "Peaceful Moments",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
    caption: "Finding stillness in a chaotic world",
    mood: "Serenity"
  },
  {
    id: 9,
    title: "Bold Experiments",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop",
    caption: "Pushing boundaries with fearless creativity",
    mood: "Innovation"
  },
  {
    id: 10,
    title: "Masterpiece",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
    caption: "The culmination of passion, skill, and vision",
    mood: "Mastery"
  }
];

const VisualJourneySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Arvishwa's <span className="text-orange-500">Visual Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Swipe through the evolution of artistry - from first sketches to masterpieces
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 w-max">
            {journeyCards.map((card) => (
              <div
                key={card.id}
                className="flex-none w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {card.mood}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            <span className="mr-2">👆</span>
            Swipe to explore the journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisualJourneySection;
