
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Painting {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
  style: string;
  medium: string;
  featured: boolean;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: "Mystic Sunset",
    artist: "Arvishwa",
    price: 1299,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
    style: "Abstract",
    medium: "Oil",
    featured: true
  },
  {
    id: 2,
    title: "Digital Dreams",
    artist: "Arvishwa",
    price: 899,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    style: "Modern",
    medium: "Digital",
    featured: false
  },
  {
    id: 3,
    title: "Ocean Depths",
    artist: "Arvishwa",
    price: 1599,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    style: "Realism",
    medium: "Watercolor",
    featured: true
  },
  {
    id: 4,
    title: "Tech Harmony",
    artist: "Arvishwa",
    price: 799,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    style: "Modern",
    medium: "Digital",
    featured: false
  },
  {
    id: 5,
    title: "Creative Vision",
    artist: "Arvishwa",
    price: 999,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    style: "Abstract",
    medium: "Oil",
    featured: false
  },
  {
    id: 6,
    title: "Artistic Focus",
    artist: "Arvishwa",
    price: 1199,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    style: "Realism",
    medium: "Watercolor",
    featured: true
  }
];

const GallerySection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  const filteredPaintings = filter === 'All' 
    ? paintings 
    : paintings.filter(painting => painting.style === filter || painting.medium === filter);

  const styles = ['All', 'Abstract', 'Realism', 'Modern'];
  const mediums = ['Oil', 'Watercolor', 'Digital'];

  return (
    <section className="py-20 bg-gradient-to-b from-canvas-50 to-canvas-100 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-purple-900 mb-6">
            Our <span className="text-gradient font-brush">Gallery</span>
          </h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Discover our collection of stunning artwork, each piece crafted with passion and precision
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {styles.map((style) => (
            <Button
              key={style}
              variant={filter === style ? "default" : "outline"}
              onClick={() => setFilter(style)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === style 
                  ? 'bg-gradient-to-r from-purple-600 to-saffron-500 text-white shadow-lg transform scale-105' 
                  : 'border-purple-300 text-purple-700 hover:bg-purple-50 hover:scale-105'
              }`}
            >
              {style}
            </Button>
          ))}
        </div>

        {/* Featured Banner */}
        <div className="mb-12 bg-gradient-to-r from-purple-600 to-saffron-500 rounded-2xl p-6 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">✨ Featured Artist Picks</h3>
          <p className="text-purple-100">Hand-selected masterpieces from our latest collection</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaintings.map((painting) => (
            <div
              key={painting.id}
              className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover-tilt cursor-pointer ${
                painting.featured ? 'ring-4 ring-saffron-400 ring-opacity-50' : ''
              }`}
              onClick={() => setSelectedPainting(painting)}
            >
              {painting.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  Featured ⭐
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white/90 text-purple-900 hover:bg-white transform scale-95 hover:scale-100 transition-all duration-200">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-purple-900 group-hover:text-saffron-600 transition-colors duration-300">
                    {painting.title}
                  </h3>
                  <span className="text-2xl font-bold text-saffron-600">${painting.price}</span>
                </div>
                
                <p className="text-purple-600 font-medium mb-3">by {painting.artist}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {painting.style}
                    </span>
                    <span className="px-3 py-1 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium">
                      {painting.medium}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-saffron-500 hover:from-purple-700 hover:to-saffron-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View Complete Collection
          </Button>
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedPainting && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPainting(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedPainting.image}
                alt={selectedPainting.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                onClick={() => setSelectedPainting(null)}
              >
                ✕
              </Button>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-purple-900 mb-2">{selectedPainting.title}</h3>
              <p className="text-purple-600 font-medium mb-4">by {selectedPainting.artist}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
                  {selectedPainting.style}
                </span>
                <span className="px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full font-medium">
                  {selectedPainting.medium}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <span className="text-3xl font-bold text-saffron-600">${selectedPainting.price}</span>
                <div className="flex gap-3">
                  <Button className="bg-gradient-to-r from-purple-600 to-saffron-500 hover:from-purple-700 hover:to-saffron-600 text-white">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
