
import React, { useState, useEffect } from 'react';
import { Search, X, Upload, Eye } from 'lucide-react';
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
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Mahadev Meditation",
    section: "Spiritual",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    description: "A powerful depiction of Lord Shiva in deep meditation",
    price: 15000,
    medium: "Oil on Canvas",
    size: "24x36 inches"
  },
  {
    id: 2,
    title: "Buddha's Serenity",
    section: "Buddha",
    image: "https://images.unsplash.com/photo-1544967882-1f6ab219ac64?w=400&h=500&fit=crop",
    description: "Peaceful Buddha in lotus position",
    price: 12000,
    medium: "Acrylic",
    size: "20x30 inches"
  },
  {
    id: 3,
    title: "Mountain Landscape",
    section: "Landscape",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
    description: "Serene mountain vista at dawn",
    price: 8000,
    medium: "Watercolor",
    size: "18x24 inches"
  },
  {
    id: 4,
    title: "Portrait Study",
    section: "Portrait",
    image: "https://images.unsplash.com/photo-1544967882-1f6ab219ac64?w=400&h=500&fit=crop",
    description: "Realistic portrait with emotional depth",
    price: 10000,
    medium: "Oil",
    size: "16x20 inches"
  },
  {
    id: 5,
    title: "Abstract Flow",
    section: "Acrylic",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop",
    description: "Dynamic acrylic abstract composition",
    price: 6000,
    medium: "Acrylic",
    size: "20x24 inches"
  },
  {
    id: 6,
    title: "Pencil Sketch",
    section: "Pencil",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop",
    description: "Detailed pencil drawing with fine shading",
    price: 3000,
    medium: "Graphite",
    size: "12x16 inches"
  },
  {
    id: 7,
    title: "Textured Waves",
    section: "Texture",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=500&fit=crop",
    description: "Mixed media with rich textures",
    price: 9000,
    medium: "Mixed Media",
    size: "22x28 inches"
  },
  {
    id: 8,
    title: "Monochrome Study",
    section: "Black and White",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop",
    description: "Study in contrast and form",
    price: 7000,
    medium: "Charcoal",
    size: "18x24 inches"
  }
];

const VirtualGallerySection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const filtered = artworks.filter(artwork =>
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArtworks(filtered);
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full grid-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6">
            <span className="magic-ink-text">Virtual Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my artistic journey through an immersive 3D carousel experience
          </p>
        </div>

        {/* Search Bar */}
        <div className="glass-search-container max-w-md mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for Mahadev painting, Buddha, Portrait..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input pl-12 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        {/* 3D Carousel */}
        <div className="carousel-container relative h-[600px] mb-20">
          <div className="carousel-wrapper">
            <div className="carousel-3d">
              {filteredArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="carousel-item glass-card"
                  style={{
                    transform: `rotateY(${index * (360 / filteredArtworks.length)}deg) translateZ(400px)`,
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => openModal(artwork)}
                >
                  <div className="artwork-card">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="artwork-image"
                    />
                    <div className="artwork-overlay">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <div className="artwork-info">
                      <h3 className="font-bold text-sm">{artwork.title}</h3>
                      <p className="text-xs text-muted-foreground">{artwork.section}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Art Orders Section */}
        <div className="glass-panel max-w-4xl mx-auto p-8">
          <h3 className="text-3xl font-bold font-handwritten text-center mb-8">
            Custom Art Orders
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Upload your reference images and let's create something magical together
          </p>

          <div className="upload-area glass-card p-8 text-center mb-6">
            <input
              type="file"
              id="file-upload"
              multiple
              accept="image/*,.pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Drop your files here or click to browse</p>
              <p className="text-sm text-muted-foreground">Supports JPG, PNG, PDF files</p>
            </label>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="uploaded-files grid grid-cols-2 md:grid-cols-4 gap-4">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="glass-card p-4 relative">
                  <div className="text-center">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                    onClick={() => removeFile(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Button className="glass-button font-handwritten text-lg px-8 py-3">
              Submit Custom Order
            </Button>
          </div>
        </div>
      </div>

      {/* Artwork Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glass-modal max-w-2xl">
          {selectedArtwork && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">
                  {selectedArtwork.title}
                </DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="artwork-modal-image">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="artwork-details space-y-4">
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Description</h4>
                    <p>{selectedArtwork.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Medium</h4>
                    <p>{selectedArtwork.medium}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Size</h4>
                    <p>{selectedArtwork.size}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Category</h4>
                    <p>{selectedArtwork.section}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-foreground">Price</h4>
                    <p className="text-2xl font-bold text-primary">₹{selectedArtwork.price.toLocaleString()}</p>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1">Add to Cart</Button>
                    <Button variant="outline" className="flex-1">Contact Artist</Button>
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
