
import React, { useState, useEffect } from 'react';
import { Search, X, Upload, Eye, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Artwork {
  id: number;
  title: string;
  section: string;
  image: string;
  description: string;
  price: number;
  medium: string;
  size: string;
  artist?: string;
}

const artworkSections = [
  'Acrylic', 'Oil', 'Portrait', 'Landscape', 'Mix Media', 'Pencil', 
  'Stripping', 'Fluid', 'Stitching Work', 'Printmaking', 'Texture', 
  'Visual', 'Buddha', 'Black and White', 'Spiritual'
];

const generateArtworks = (): Artwork[] => {
  const images = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1544967882-1f6ab219ac64?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=500&fit=crop"
  ];

  const artworks: Artwork[] = [];
  let id = 1;

  artworkSections.forEach(section => {
    for (let i = 0; i < 6; i++) {
      const imageIndex = (id - 1) % images.length;
      let title = '';
      let description = '';
      
      switch (section) {
        case 'Spiritual':
          const spiritualTitles = ['Mahadev Meditation', 'Divine Light', 'Sacred Geometry', 'Cosmic Dance', 'Inner Peace', 'Eternal Wisdom'];
          title = spiritualTitles[i];
          description = i === 0 ? 'A powerful depiction of Lord Shiva in deep meditation' : `Spiritual artwork exploring ${spiritualTitles[i].toLowerCase()}`;
          break;
        case 'Buddha':
          const buddhaTitles = ['Buddha Serenity', 'Enlightenment', 'Lotus Meditation', 'Dharma Wheel', 'Peaceful Mind', 'Awakening'];
          title = buddhaTitles[i];
          description = `Buddhist art depicting ${buddhaTitles[i].toLowerCase()}`;
          break;
        case 'Portrait':
          title = `Portrait Study ${i + 1}`;
          description = 'Realistic portrait with emotional depth';
          break;
        case 'Landscape':
          const landscapeTitles = ['Mountain Vista', 'Serene Lake', 'Forest Path', 'Ocean Sunset', 'Desert Dunes', 'Valley Mist'];
          title = landscapeTitles[i];
          description = `Beautiful landscape featuring ${landscapeTitles[i].toLowerCase()}`;
          break;
        default:
          title = `${section} Art ${i + 1}`;
          description = `Beautiful ${section.toLowerCase()} artwork`;
      }

      artworks.push({
        id,
        title,
        section,
        image: images[imageIndex],
        description,
        price: Math.floor(Math.random() * 20000) + 5000,
        medium: section === 'Oil' ? 'Oil on Canvas' : section === 'Acrylic' ? 'Acrylic Paint' : section === 'Pencil' ? 'Graphite' : 'Mixed Media',
        size: `${16 + Math.floor(Math.random() * 20)}x${20 + Math.floor(Math.random() * 20)} inches`,
        artist: 'AR Vishwa'
      });
      id++;
    }
  });

  return artworks;
};

const allArtworks = generateArtworks();

const VirtualGallerySection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filteredArtworks, setFilteredArtworks] = useState(allArtworks);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const filtered = allArtworks.filter(artwork =>
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArtworks(filtered);
    
    // Set active section based on search
    if (searchQuery && filtered.length > 0) {
      setActiveSection(filtered[0].section);
    } else {
      setActiveSection('');
    }
  }, [searchQuery]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const getSectionArtworks = (section: string) => {
    return allArtworks.filter(artwork => artwork.section === section);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(`section-${section.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 tech-grid-bg opacity-30 pointer-events-none"></div>
      
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav-bar">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-handwritten text-2xl font-bold">AR Vishwa Studio</div>
          
          <div className="hidden md:flex items-center space-x-6">
            {artworkSections.map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="font-handwritten text-sm hover:text-primary transition-colors duration-300"
              >
                {section}
              </button>
            ))}
          </div>
          
          <div className="glass-search-nav">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search Mahadev, Buddha, Portrait..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-input-nav pl-10 pr-4 py-2 text-sm w-64"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20 px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-handwritten mb-6 animate-magic-text">
            Premium Art Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience 15 unique art categories through immersive 3D carousel galleries
          </p>
        </div>

        {/* Art Sections */}
        {artworkSections.map((section, sectionIndex) => {
          const sectionArtworks = getSectionArtworks(section);
          const isHighlighted = activeSection === section;
          
          return (
            <div
              key={section}
              id={`section-${section.toLowerCase().replace(/\s+/g, '-')}`}
              className={`mb-32 px-4 transition-all duration-500 ${isHighlighted ? 'transform scale-105' : ''}`}
            >
              <div className="container mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-4 animate-magic-text">
                    {section} Collection
                  </h2>
                  <p className="text-muted-foreground">
                    {section === 'Spiritual' ? 'Sacred artworks including Mahadev and divine imagery' :
                     section === 'Buddha' ? 'Peaceful Buddhist art and meditation themes' :
                     section === 'Portrait' ? 'Expressive human portraits with emotional depth' :
                     section === 'Landscape' ? 'Beautiful natural vistas and scenic compositions' :
                     `Explore our ${section.toLowerCase()} art collection`}
                  </p>
                </div>

                {/* 3D Carousel for each section */}
                <div className="section-carousel-container relative h-[500px] md:h-[600px]">
                  <div className="carousel-wrapper-section">
                    <div 
                      className={`carousel-3d-section ${isHighlighted ? 'carousel-highlighted' : ''}`}
                      style={{
                        animationPlayState: isHighlighted ? 'paused' : 'running',
                        animationDelay: `${sectionIndex * 2}s`
                      }}
                    >
                      {sectionArtworks.map((artwork, index) => (
                        <div
                          key={artwork.id}
                          className="carousel-item-section glass-artwork-card"
                          style={{
                            transform: `rotateY(${index * 60}deg) translateZ(350px)`,
                            opacity: isHighlighted ? 1 : 0.8
                          }}
                          onClick={() => openModal(artwork)}
                        >
                          <div className="artwork-card-modern">
                            <img
                              src={artwork.image}
                              alt={artwork.title}
                              className="artwork-image-modern"
                            />
                            <div className="artwork-overlay-modern">
                              <Eye className="w-6 h-6 text-white" />
                              <p className="text-white text-sm font-medium mt-2">View Details</p>
                            </div>
                            <div className="artwork-info-modern">
                              <h3 className="font-handwritten font-bold text-sm mb-1">{artwork.title}</h3>
                              <p className="text-xs text-muted-foreground">{artwork.medium}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Custom Art Orders Section */}
        <div className="container mx-auto px-4 mb-20" id="custom-orders">
          <div className="glass-panel-premium max-w-5xl mx-auto p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-6 animate-magic-text">
                Custom Art Orders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your vision into reality. Upload reference images and collaborate with our artist to create your perfect piece.
              </p>
            </div>

            <div className="upload-zone-premium glass-upload-area p-8 md:p-12 text-center mb-8">
              <input
                type="file"
                id="file-upload-premium"
                multiple
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label htmlFor="file-upload-premium" className="cursor-pointer block">
                <Upload className="w-20 h-20 mx-auto mb-6 text-muted-foreground animate-floating" />
                <h3 className="text-2xl font-handwritten font-bold mb-4">Drop Your Reference Files</h3>
                <p className="text-lg font-medium mb-2">Click to browse or drag files here</p>
                <p className="text-sm text-muted-foreground">Supports JPG, PNG, PDF files • Max 10MB each</p>
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="uploaded-preview-grid grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="glass-file-card p-4 relative group">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Upload className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-medium truncate mb-1">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeFile(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center space-y-4">
              <Button className="glass-button-premium font-handwritten text-xl px-12 py-4">
                Submit Custom Order Request
              </Button>
              <p className="text-sm text-muted-foreground">
                We'll contact you within 24 hours to discuss your custom artwork
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Artwork Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glass-modal-premium max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArtwork && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-handwritten font-bold">
                  {selectedArtwork.title}
                </DialogTitle>
                <p className="text-lg text-muted-foreground">{selectedArtwork.section} Collection</p>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="artwork-modal-image-container">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-80 md:h-96 object-cover rounded-xl shadow-2xl"
                  />
                </div>
                <div className="artwork-details-premium space-y-6">
                  <div>
                    <h4 className="font-handwritten text-lg font-bold text-muted-foreground mb-2">Description</h4>
                    <p className="text-base leading-relaxed">{selectedArtwork.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-handwritten font-bold text-muted-foreground mb-1">Medium</h4>
                      <p>{selectedArtwork.medium}</p>
                    </div>
                    <div>
                      <h4 className="font-handwritten font-bold text-muted-foreground mb-1">Size</h4>
                      <p>{selectedArtwork.size}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-handwritten font-bold text-muted-foreground mb-1">Artist</h4>
                    <p>{selectedArtwork.artist || 'AR Vishwa'}</p>
                  </div>
                  <div>
                    <h4 className="font-handwritten text-lg font-bold text-muted-foreground mb-2">Price</h4>
                    <p className="text-3xl font-bold text-primary">₹{selectedArtwork.price.toLocaleString()}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-6">
                    <Button className="flex-1 glass-button-premium font-handwritten text-lg">
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1 glass-button-outline font-handwritten text-lg">
                      Contact Artist
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VirtualGallerySection;
