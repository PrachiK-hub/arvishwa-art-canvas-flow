
import React from 'react';

interface StudioPhoto {
  id: number;
  image: string;
  caption: string;
  description: string;
}

const studioPhotos: StudioPhoto[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
    caption: "Workspace",
    description: "Where creativity flows and masterpieces are born"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    caption: "Drying Rack",
    description: "Fresh paintings taking their first breath"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
    caption: "Color Palette",
    description: "The heart of every artistic creation"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca4?w=600&h=400&fit=crop",
    caption: "Wall Display",
    description: "Completed works waiting for their forever homes"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    caption: "Inspiration Corner",
    description: "Books, sketches, and moments of reflection"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop",
    caption: "Natural Light",
    description: "The perfect illumination for true colors"
  }
];

const StudioPhotosSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Inside the <span className="text-orange-500">Studio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step into the creative sanctuary where imagination meets canvas
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studioPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{photo.caption}</h3>
                  <p className="text-gray-200 text-sm">{photo.description}</p>
                </div>
              </div>

              {/* Static Caption for Mobile */}
              <div className="p-4 md:hidden">
                <h3 className="text-lg font-bold text-gray-800">{photo.caption}</h3>
                <p className="text-gray-600 text-sm">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Studio CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Visit Our Studio</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Experience the creative energy in person. Schedule a visit to see works in progress and meet the artist.
            </p>
            <button 
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
              onClick={() => window.open('https://maps.google.com?q=Art+Studio+Mumbai', '_blank')}
            >
              Book Studio Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioPhotosSection;
