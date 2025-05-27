
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '📸' },
    { id: 'dishes', name: 'Dishes', icon: '🍽️' },
    { id: 'ambiance', name: 'Ambiance', icon: '🏪' },
    { id: 'preparation', name: 'Preparation', icon: '👨‍🍳' },
    { id: 'events', name: 'Events', icon: '🎉' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'dishes',
      title: 'Traditional Thali',
      description: 'Complete South Indian meal served on banana leaf',
      image: '🍽️',
      type: 'image'
    },
    {
      id: 2,
      category: 'dishes',
      title: 'Ghee Roast Dosa',
      description: 'Golden crispy dosa with aromatic ghee',
      image: '🥞',
      type: 'image'
    },
    {
      id: 3,
      category: 'ambiance',
      title: 'Traditional Interiors',
      description: 'Warm and inviting restaurant atmosphere',
      image: '🏮',
      type: 'image'
    },
    {
      id: 4,
      category: 'preparation',
      title: 'Fresh Dosa Making',
      description: 'Live dosa preparation in our open kitchen',
      image: '🎬',
      type: 'video'
    },
    {
      id: 5,
      category: 'dishes',
      title: 'Idli Sambar',
      description: 'Soft steamed idlis with aromatic sambar',
      image: '🍘',
      type: 'image'
    },
    {
      id: 6,
      category: 'ambiance',
      title: 'Dining Hall',
      description: 'Spacious seating with traditional decor',
      image: '🪑',
      type: 'image'
    },
    {
      id: 7,
      category: 'events',
      title: 'Festival Celebration',
      description: 'Diwali special menu launch event',
      image: '🎆',
      type: 'image'
    },
    {
      id: 8,
      category: 'preparation',
      title: 'Spice Grinding',
      description: 'Traditional spice preparation methods',
      image: '🌶️',
      type: 'image'
    },
    {
      id: 9,
      category: 'dishes',
      title: 'Mysore Pak',
      description: 'Authentic sweet made with pure ghee',
      image: '🍯',
      type: 'image'
    },
    {
      id: 10,
      category: 'ambiance',
      title: 'Prayer Corner',
      description: 'Traditional prayer area in restaurant',
      image: '🙏',
      type: 'image'
    },
    {
      id: 11,
      category: 'preparation',
      title: 'Coconut Chutney',
      description: 'Fresh chutney preparation process',
      image: '🥥',
      type: 'image'
    },
    {
      id: 12,
      category: 'events',
      title: 'Customer Appreciation',
      description: 'Special event for loyal customers',
      image: '🏆',
      type: 'image'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 ornamental-border">
            Gallery
          </h1>
          <p className="text-xl text-warm-gold max-w-3xl mx-auto">
            Explore the visual journey of our culinary heritage and dining experience
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                selectedCategory === category.id
                  ? 'bg-gold text-forest-green'
                  : 'border border-gold text-gold hover:bg-gold hover:text-forest-green'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="bg-deep-green border-gold/20 hover:border-gold transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-forest-green to-deep-green">
                        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                          {item.image}
                        </span>
                        {item.type === 'video' && (
                          <div className="absolute top-2 right-2 bg-gold text-forest-green rounded-full p-1">
                            <span className="text-xs font-semibold">VIDEO</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-playfair font-semibold text-gold text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-warm-gold text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl bg-deep-green border-gold/20">
                <div className="text-center">
                  <div className="mb-6">
                    <span className="text-8xl">{item.image}</span>
                    {item.type === 'video' && (
                      <div className="mt-4 p-4 bg-forest-green rounded-lg">
                        <p className="text-warm-gold">🎬 Video content would be displayed here</p>
                        <p className="text-sm text-warm-gold/70 mt-2">
                          In a real implementation, this would show the actual video player
                        </p>
                      </div>
                    )}
                  </div>
                  <h2 className="text-2xl font-playfair font-bold text-gold mb-4">
                    {item.title}
                  </h2>
                  <p className="text-warm-gold text-lg">
                    {item.description}
                  </p>
                  
                  {/* Social Share Buttons */}
                  <div className="mt-6 flex justify-center space-x-4">
                    <button className="bg-gold text-forest-green px-4 py-2 rounded-full text-sm font-semibold hover:bg-warm-gold transition-colors">
                      Share on Facebook
                    </button>
                    <button className="bg-gold text-forest-green px-4 py-2 rounded-full text-sm font-semibold hover:bg-warm-gold transition-colors">
                      Share on Instagram
                    </button>
                    <button className="bg-gold text-forest-green px-4 py-2 rounded-full text-sm font-semibold hover:bg-warm-gold transition-colors">
                      Download Image
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Video Showcase Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-playfair font-bold text-gold mb-8">
            Featured Videos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-deep-green border-gold/20">
              <CardContent className="p-6">
                <div className="aspect-video bg-forest-green rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <span className="text-4xl block mb-2">🎬</span>
                    <p className="text-warm-gold">Behind the Scenes: Kitchen Stories</p>
                  </div>
                </div>
                <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                  Traditional Cooking Methods
                </h3>
                <p className="text-warm-gold">
                  Watch our master chefs demonstrate traditional South Indian cooking techniques 
                  passed down through generations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-deep-green border-gold/20">
              <CardContent className="p-6">
                <div className="aspect-video bg-forest-green rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <span className="text-4xl block mb-2">🎭</span>
                    <p className="text-warm-gold">Customer Experience Stories</p>
                  </div>
                </div>
                <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                  Happy Customers
                </h3>
                <p className="text-warm-gold">
                  Hear from our valued customers about their memorable dining experiences 
                  and favorite dishes at Kadupuninda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Add bottom padding for mobile */}
        <div className="md:hidden h-16"></div>
      </div>
    </div>
  );
};

export default Gallery;
