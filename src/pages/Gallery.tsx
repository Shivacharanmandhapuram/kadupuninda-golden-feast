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
    { id: 'all', name: 'All', gradient: 'from-gold to-warm-gold' },
    { id: 'dishes', name: 'Dishes', gradient: 'from-amber-400 to-orange-400' },
    { id: 'ambiance', name: 'Ambiance', gradient: 'from-emerald-400 to-teal-400' },
    { id: 'preparation', name: 'Preparation', gradient: 'from-rose-400 to-pink-400' },
    { id: 'events', name: 'Events', gradient: 'from-purple-400 to-violet-400' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'dishes',
      title: 'Traditional Thali',
      description: 'Complete South Indian meal served on banana leaf',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 2,
      category: 'dishes',
      title: 'Ghee Roast Dosa',
      description: 'Golden crispy dosa with aromatic ghee',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 3,
      category: 'ambiance',
      title: 'Traditional Interiors',
      description: 'Warm and inviting restaurant atmosphere',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 4,
      category: 'preparation',
      title: 'Fresh Dosa Making',
      description: 'Live dosa preparation in our open kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop&crop=center',
      type: 'video'
    },
    {
      id: 5,
      category: 'dishes',
      title: 'Idli Sambar',
      description: 'Soft steamed idlis with aromatic sambar',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 6,
      category: 'ambiance',
      title: 'Dining Hall',
      description: 'Spacious seating with traditional decor',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 7,
      category: 'events',
      title: 'Festival Celebration',
      description: 'Diwali special menu launch event',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 8,
      category: 'preparation',
      title: 'Spice Grinding',
      description: 'Traditional spice preparation methods',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 9,
      category: 'dishes',
      title: 'Mysore Pak',
      description: 'Authentic sweet made with pure ghee',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 10,
      category: 'ambiance',
      title: 'Prayer Corner',
      description: 'Traditional prayer area in restaurant',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 11,
      category: 'preparation',
      title: 'Coconut Chutney',
      description: 'Fresh chutney preparation process',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=500&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 12,
      category: 'events',
      title: 'Customer Appreciation',
      description: 'Special event for loyal customers',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop&crop=center',
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
              className={`relative overflow-hidden px-8 py-4 rounded-full transition-all duration-300 font-semibold ${
                selectedCategory === category.id
                  ? 'bg-gold text-forest-green shadow-lg scale-105'
                  : 'border-2 border-gold text-gold hover:bg-gold hover:text-forest-green hover:scale-105'
              }`}
            >
              {selectedCategory !== category.id && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-20 rounded-full`}></div>
              )}
              <span className="relative z-10 tracking-wide">{category.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="bg-deep-green border-gold/20 hover:border-gold transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-transparent to-transparent"></div>
                        {item.type === 'video' && (
                          <div className="absolute top-3 right-3 bg-gold text-forest-green rounded-full px-2 py-1">
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
                    <div className="w-full max-w-2xl mx-auto aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
                <div className="aspect-video bg-forest-green rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-64b5d0c1b86e?w=600&h=400&fit=crop&crop=center" 
                    alt="Kitchen Stories"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-2">
                        <div className="w-0 h-0 border-l-8 border-l-forest-green border-y-6 border-y-transparent ml-1"></div>
                      </div>
                      <p className="text-warm-gold">Behind the Scenes: Kitchen Stories</p>
                    </div>
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
                <div className="aspect-video bg-forest-green rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center" 
                    alt="Customer Experience"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-2">
                        <div className="w-0 h-0 border-l-8 border-l-forest-green border-y-6 border-y-transparent ml-1"></div>
                      </div>
                      <p className="text-warm-gold">Customer Experience Stories</p>
                    </div>
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