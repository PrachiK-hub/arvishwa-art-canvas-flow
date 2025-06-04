
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MoodGallerySection = () => {
  const [selectedMood, setSelectedMood] = useState('joy');

  const moods = [
    {
      id: 'joy',
      name: 'Joy',
      icon: '😊',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      description: 'Bright, energetic pieces that celebrate life',
      music: 'Uplifting classical melodies'
    },
    {
      id: 'calm',
      name: 'Calm',
      icon: '🧘‍♀️',
      color: 'from-blue-400 to-teal-500',
      bgColor: 'bg-blue-50',
      description: 'Serene landscapes and peaceful abstracts',
      music: 'Gentle ambient sounds'
    },
    {
      id: 'passion',
      name: 'Passion',
      icon: '🔥',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      description: 'Bold, dramatic works full of emotion',
      music: 'Intense orchestral pieces'
    },
    {
      id: 'mystery',
      name: 'Mystery',
      icon: '🌙',
      color: 'from-purple-600 to-indigo-700',
      bgColor: 'bg-purple-50',
      description: 'Dark, contemplative pieces that intrigue',
      music: 'Mysterious ambient tones'
    }
  ];

  const moodPaintings = {
    joy: [
      { title: "Summer Bloom", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=400&fit=crop" },
      { title: "Golden Dance", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop" },
      { title: "Light Symphony", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=400&fit=crop" }
    ],
    calm: [
      { title: "Ocean Whispers", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=400&fit=crop" },
      { title: "Meditation", image: "https://images.unsplash.com/photo-1544967882-6abec256ace3?w=300&h=400&fit=crop" },
      { title: "Peaceful Dawn", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=400&fit=crop" }
    ],
    passion: [
      { title: "Fire Within", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop" },
      { title: "Crimson Dreams", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=400&fit=crop" },
      { title: "Bold Expression", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop" }
    ],
    mystery: [
      { title: "Midnight Thoughts", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=400&fit=crop" },
      { title: "Hidden Depths", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop" },
      { title: "Enigma", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop" }
    ]
  };

  const currentMood = moods.find(m => m.id === selectedMood);
  const currentPaintings = moodPaintings[selectedMood] || [];

  return (
    <section className={`py-20 transition-all duration-1000 ${currentMood?.bgColor || 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
            Art by <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentMood?.color}`}>Mood</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            How are you feeling today? Let your emotions guide you to the perfect piece of art 
            that resonates with your current state of mind.
          </p>
        </div>

        {/* Mood Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {moods.map((mood) => (
            <Card 
              key={mood.id}
              className={`cursor-pointer transition-all duration-500 overflow-hidden transform hover:scale-105 ${
                selectedMood === mood.id 
                  ? `bg-gradient-to-br ${mood.color} text-white shadow-2xl scale-105` 
                  : 'bg-white hover:shadow-lg text-slate-700'
              }`}
              onClick={() => setSelectedMood(mood.id)}
            >
              <div className="p-8 text-center">
                <div className="text-4xl mb-4">{mood.icon}</div>
                <h3 className="text-xl font-bold mb-2">{mood.name}</h3>
                <p className={`text-sm ${selectedMood === mood.id ? 'text-white/90' : 'text-slate-600'}`}>
                  {mood.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Current Mood Display */}
        <div className={`bg-gradient-to-r ${currentMood?.color} rounded-2xl p-8 mb-12 text-white`}>
          <div className="text-center">
            <div className="text-6xl mb-4">{currentMood?.icon}</div>
            <h3 className="text-3xl font-bold mb-4">Feeling {currentMood?.name} Today?</h3>
            <p className="text-xl text-white/90 mb-4">{currentMood?.description}</p>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <span>🎵</span>
              <span>Now playing: {currentMood?.music}</span>
            </div>
          </div>
        </div>

        {/* Mood-Based Paintings */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentPaintings.map((painting, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white/90 text-slate-800 hover:bg-white">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-800 mb-2">{painting.title}</h4>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${currentMood?.color} text-white`}>
                    {currentMood?.name} Collection
                  </span>
                  <span className="text-slate-600">$1,299</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mood Quiz CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Not sure how you're feeling? 
          </h3>
          <p className="text-slate-600 mb-6">
            Take our "What Color Are You Today?" quiz to discover the perfect artwork for your current mood.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full"
          >
            🎨 Take the Mood Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MoodGallerySection;
