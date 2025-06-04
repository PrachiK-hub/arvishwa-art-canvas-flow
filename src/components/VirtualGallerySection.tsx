
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const VirtualGallerySection = () => {
  const [selectedRoom, setSelectedRoom] = useState('main');

  const galleryRooms = [
    {
      id: 'main',
      name: 'Main Gallery',
      description: 'Our featured collection of spiritual and abstract works',
      image: 'https://images.unsplash.com/photo-1544967882-6abec256ace3?w=800&h=600&fit=crop',
      paintingCount: 12
    },
    {
      id: 'contemporary',
      name: 'Contemporary Room',
      description: 'Modern interpretations of timeless emotions',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
      paintingCount: 8
    },
    {
      id: 'intimate',
      name: 'Intimate Collection',
      description: 'Personal pieces for smaller spaces',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      paintingCount: 15
    }
  ];

  const paintings = [
    {
      id: 1,
      title: "Soul's Awakening",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop",
      room: 'main'
    },
    {
      id: 2,
      title: "Emotional Depths",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=500&fit=crop",
      room: 'main'
    },
    {
      id: 3,
      title: "Modern Harmony",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop",
      room: 'contemporary'
    },
    {
      id: 4,
      title: "Gentle Whispers",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=500&fit=crop",
      room: 'intimate'
    }
  ];

  const currentRoomPaintings = paintings.filter(p => p.room === selectedRoom);

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Gallery Tour</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Step into our digital gallery and explore paintings in an immersive 3D environment. 
            Each room tells a different story, each painting waits to be discovered.
          </p>
        </div>

        {/* Room Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {galleryRooms.map((room) => (
            <Card 
              key={room.id}
              className={`cursor-pointer transition-all duration-300 overflow-hidden ${
                selectedRoom === room.id 
                  ? 'ring-4 ring-blue-500 bg-slate-800' 
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
              onClick={() => setSelectedRoom(room.id)}
            >
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {room.paintingCount} pieces
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{room.name}</h3>
                <p className="text-slate-300 text-sm">{room.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* 3D Gallery Simulation */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Now Viewing: {galleryRooms.find(r => r.id === selectedRoom)?.name}
            </h3>
            <p className="text-slate-300">Use your mouse to explore • Click paintings for details</p>
          </div>

          {/* Simulated 3D Gallery View */}
          <div className="relative h-96 bg-gradient-to-b from-slate-700 to-slate-900 rounded-xl overflow-hidden">
            {/* Floor perspective */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-600/50 to-transparent transform perspective-1000 rotate-x-75"></div>
            
            {/* Gallery walls with paintings */}
            <div className="flex justify-center items-center h-full space-x-8 px-8">
              {currentRoomPaintings.map((painting, index) => (
                <div 
                  key={painting.id}
                  className="group relative transform transition-all duration-500 hover:scale-110 hover:z-10"
                  style={{ 
                    transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '-5' : '5'}deg)`,
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="bg-amber-100 p-4 rounded-lg shadow-2xl">
                    <img 
                      src={painting.image}
                      alt={painting.title}
                      className="w-32 h-40 object-cover rounded shadow-lg cursor-pointer"
                    />
                    <div className="mt-2 text-center">
                      <p className="text-xs text-slate-800 font-medium">{painting.title}</p>
                    </div>
                  </div>
                  
                  {/* Hover details */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <p className="text-sm font-medium">{painting.title}</p>
                    <p className="text-xs text-slate-300">Click to view details</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery lighting effects */}
            <div className="absolute top-8 left-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-8 right-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
          </div>

          {/* Gallery Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              🎮 Enter Full 3D Mode
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              📱 Mobile VR View
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              🔊 Audio Guide
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-slate-300 mb-6">
            Experience the full gallery with VR support and audio commentary
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full">
            Launch Full Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VirtualGallerySection;
