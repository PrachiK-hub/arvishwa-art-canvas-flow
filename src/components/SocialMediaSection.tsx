
import React from 'react';
import { Button } from '@/components/ui/button';

interface SocialPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  type: 'image' | 'reel';
}

const socialPosts: SocialPost[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
    caption: "Work in progress... 🎨 #arvishwastudio #painting",
    likes: 124,
    type: 'image'
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    caption: "New abstract series launching soon! ✨",
    likes: 89,
    type: 'reel'
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
    caption: "Color mixing session 🌈 #artistlife",
    likes: 156,
    type: 'image'
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca4?w=300&h=300&fit=crop",
    caption: "Commission completed for a beautiful home 🏡",
    likes: 203,
    type: 'image'
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
    caption: "Studio vibes this morning ☀️ #motivation",
    likes: 78,
    type: 'reel'
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300&h=300&fit=crop",
    caption: "Behind the scenes: creating magic ✨",
    likes: 142,
    type: 'image'
  }
];

const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Follow Our <span className="text-orange-500">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Stay updated with our latest creations, behind-the-scenes moments, and artistic inspiration
          </p>
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold"
            onClick={() => window.open('https://instagram.com/arvishwastudio', '_blank')}
          >
            Follow @arvishwastudio
          </Button>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => window.open('https://instagram.com/arvishwastudio', '_blank')}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Reel Indicator */}
                {post.type === 'reel' && (
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    📹 Reel
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <span className="text-lg font-bold">❤️ {post.likes}</span>
                  </div>
                </div>
              </div>

              {/* Caption (Mobile Only) */}
              <div className="p-3 md:hidden">
                <p className="text-sm text-gray-600 truncate">{post.caption}</p>
                <p className="text-xs text-gray-500 mt-1">❤️ {post.likes} likes</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <div className="flex justify-center space-x-6 mb-6">
            <button 
              onClick={() => window.open('https://instagram.com/arvishwastudio', '_blank')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <span className="text-2xl">📸</span>
            </button>
            <button 
              onClick={() => window.open('https://facebook.com/arvishwastudio', '_blank')}
              className="bg-blue-600 text-white p-4 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <span className="text-2xl">📘</span>
            </button>
            <button 
              onClick={() => window.open('https://youtube.com/arvishwastudio', '_blank')}
              className="bg-red-600 text-white p-4 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <span className="text-2xl">📺</span>
            </button>
            <button 
              onClick={() => window.open('https://pinterest.com/arvishwastudio', '_blank')}
              className="bg-red-500 text-white p-4 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <span className="text-2xl">📌</span>
            </button>
          </div>

          <p className="text-gray-600">
            Join our community of art lovers and get daily inspiration!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
