
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
  size: string;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: "Mystic Sunset",
    artist: "Arvishwa",
    price: 12999,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
    style: "Abstract",
    medium: "Oil",
    size: "24x36 inches"
  },
  {
    id: 2,
    title: "Digital Dreams",
    artist: "Arvishwa",
    price: 8999,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    style: "Modern",
    medium: "Acrylic",
    size: "18x24 inches"
  },
  {
    id: 3,
    title: "Ocean Depths",
    artist: "Arvishwa",
    price: 15999,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    style: "Realism",
    medium: "Watercolor",
    size: "30x40 inches"
  },
  {
    id: 4,
    title: "Urban Harmony",
    artist: "Arvishwa",
    price: 7999,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    style: "Modern",
    medium: "Acrylic",
    size: "16x20 inches"
  },
  {
    id: 5,
    title: "Creative Vision",
    artist: "Arvishwa",
    price: 9999,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    style: "Abstract",
    medium: "Oil",
    size: "20x30 inches"
  },
  {
    id: 6,
    title: "Artistic Focus",
    artist: "Arvishwa",
    price: 11999,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    style: "Realism",
    medium: "Oil",
    size: "24x32 inches"
  }
];

const GallerySection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  const filteredPaintings = filter === 'All' 
    ? paintings 
    : paintings.filter(painting => painting.style === filter || painting.medium === filter);

  const styles = ['All', 'Abstract', 'Realism', 'Modern'];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Original <span className="text-orange-500">Paintings</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each piece is an original creation, crafted with passion and ready to transform your space
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {styles.map((style) => (
            <Button
              key={style}
              variant={filter === style ? "default" : "outline"}
              onClick={() => setFilter(style)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === style 
                  ? 'bg-orange-500 text-white shadow-lg' 
                  : 'border-orange-300 text-orange-600 hover:bg-orange-50'
              }`}
            >
              {style}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPaintings.map((painting) => (
            <div
              key={painting.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedPainting(painting)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white/90 text-gray-900 hover:bg-white transform scale-95 hover:scale-100 transition-all duration-200">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {painting.title}
                </h3>
                <p className="text-gray-600 mb-3">{painting.size}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                      {painting.style}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {painting.medium}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-orange-600">₹{painting.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
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
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedPainting.title}</h3>
              <p className="text-gray-600 mb-4">{selectedPainting.size}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full">
                  {selectedPainting.style}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                  {selectedPainting.medium}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <span className="text-3xl font-bold text-orange-600">₹{selectedPainting.price.toLocaleString()}</span>
                <div className="flex gap-3">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
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
