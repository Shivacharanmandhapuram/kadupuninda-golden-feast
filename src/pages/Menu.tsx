import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

 const categories = [
  { 
    id: 'breakfast', 
    name: 'Breakfast', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ) 
  },
  { 
    id: 'lunch', 
    name: 'Lunch', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ) 
  },
  { 
    id: 'dinner', 
    name: 'Dinner', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ) 
  },
  { 
    id: 'tiffins', 
    name: 'Tiffins', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ) 
  },
  { 
    id: 'specials', 
    name: 'Specials', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ) 
  },
  { 
    id: 'sweets', 
    name: 'Sweets', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ) 
  }
];
  const menuItems = {
    breakfast: [
      { name: 'Idli Sambar', price: '₹80', description: 'Soft steamed rice cakes with aromatic sambar and chutneys', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop' },
      { name: 'Masala Dosa', price: '₹120', description: 'Crispy crepe with spiced potato filling', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1694749204463-7befd8c01736?w=400&h=300&fit=crop' },
      { name: 'Medu Vada', price: '₹90', description: 'Crispy lentil donuts served with sambar and chutney', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop' },
      { name: 'Upma', price: '₹70', description: 'Savory semolina porridge with vegetables and spices', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop' },
      { name: 'Poha', price: '₹65', description: 'Flattened rice with onions, turmeric, and peanuts', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop' },
      { name: 'Pesarattu', price: '₹110', description: 'Green gram crepe with ginger and green chilies', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1694749204463-7befd8c01736?w=400&h=300&fit=crop' }
    ],
    lunch: [
      { name: 'South Indian Thali', price: '₹250', description: 'Complete meal with rice, sambar, rasam, vegetables, and curd', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { name: 'Bisi Bele Bath', price: '₹180', description: 'Traditional Karnataka rice dish with lentils and vegetables', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop' },
      { name: 'Lemon Rice', price: '₹140', description: 'Tangy rice with curry leaves, mustard seeds, and peanuts', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop' },
      { name: 'Curd Rice', price: '₹120', description: 'Cooling rice with yogurt, curry leaves, and ginger', dietary: ['Vegetarian', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop' },
      { name: 'Vegetable Pulao', price: '₹160', description: 'Fragrant basmati rice with seasonal vegetables', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop' },
      { name: 'Rasam Rice', price: '₹150', description: 'Tangy tomato and tamarind soup with steamed rice', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop' }
    ],
    dinner: [
      { name: 'Akki Roti', price: '₹90', description: 'Rice flour flatbread with onions and herbs', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { name: 'Ragi Mudde', price: '₹110', description: 'Finger millet balls served with sambar or curry', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop' },
      { name: 'Chapati with Curry', price: '₹130', description: 'Whole wheat flatbread with seasonal vegetable curry', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { name: 'Puliyogare', price: '₹140', description: 'Tangy tamarind rice with spices and peanuts', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop' },
      { name: 'Coconut Rice', price: '₹130', description: 'Fragrant rice with fresh coconut and curry leaves', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop' },
      { name: 'Mixed Vegetable Curry', price: '₹120', description: 'Seasonal vegetables in traditional South Indian spices', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' }
    ],
    tiffins: [
      { name: 'Rava Idli', price: '₹85', description: 'Steamed semolina cakes with vegetables', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop' },
      { name: 'Set Dosa', price: '₹100', description: 'Soft, thick pancakes served in sets of three', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1694749204463-7befd8c01736?w=400&h=300&fit=crop' },
      { name: 'Uttapam', price: '₹110', description: 'Thick pancake topped with onions and tomatoes', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1694749204463-7befd8c01736?w=400&h=300&fit=crop' },
      { name: 'Paniyaram', price: '₹95', description: 'Round steamed dumplings made from fermented batter', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop' },
      { name: 'Adai', price: '₹105', description: 'Protein-rich crepe made from mixed lentils', dietary: ['Vegan', 'Gluten-Free'], image: 'https://images.unsplash.com/photo-1694749204463-7befd8c01736?w=400&h=300&fit=crop' },
      { name: 'Appam', price: '₹90', description: 'Bowl-shaped fermented rice pancakes', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop' }
    ],
    specials: [
      { name: 'Ghee Roast Dosa', price: '₹180', description: 'Crispy dosa roasted in pure ghee with traditional spices', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1694749204463-7befd8c01736?w=400&h=300&fit=crop' },
      { name: 'Andhra Meals', price: '₹300', description: 'Authentic Andhra feast with spicy curries and pickles', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { name: 'Karnataka Special Thali', price: '₹280', description: 'Regional specialties from Karnataka cuisine', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { name: 'Festival Special Meal', price: '₹350', description: 'Traditional feast served during festivals', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { name: 'Bamboo Shoot Curry', price: '₹220', description: 'Seasonal delicacy with traditional spices', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
      { name: 'Jackfruit Curry', price: '₹190', description: 'Tender jackfruit in coconut-based curry', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' }
    ],
    sweets: [
      { name: 'Mysore Pak', price: '₹120', description: 'Traditional sweet made with ghee and gram flour', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      { name: 'Rava Kesari', price: '₹90', description: 'Semolina sweet flavored with cardamom and saffron', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      { name: 'Payasam', price: '₹100', description: 'Traditional rice pudding with jaggery and coconut milk', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      { name: 'Holige/Puran Poli', price: '₹80', description: 'Sweet flatbread stuffed with lentil and jaggery', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      { name: 'Coconut Laddu', price: '₹70', description: 'Sweet coconut balls with cardamom', dietary: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      { name: 'Banana Chips', price: '₹60', description: 'Crispy banana chips fried in coconut oil', dietary: ['Vegan'], image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' }
    ]
  };

  const getDietaryColor = (dietary: string) => {
    switch (dietary) {
      case 'Vegan': return 'bg-green-600';
      case 'Vegetarian': return 'bg-orange-600';
      case 'Gluten-Free': return 'bg-blue-600';
      case 'Jain': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  const handleItemClick = (itemName: string) => {
    window.open('https://kadupuninda.in/buy', '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 ornamental-border">
            Our Menu
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Authentic South Indian flavors crafted with traditional recipes and pure ingredients
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold text-forest-green hover:bg-warm-gold'
                  : 'border-gold text-gold hover:bg-gold hover:text-forest-green'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-semibold">{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <Card 
              key={item.name} 
              className="bg-gradient-to-br from-green-900 to-green-800 border-gold/30 hover:border-gold transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden shadow-2xl hover:shadow-gold/20"
              onClick={() => handleItemClick(item.name)}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="text-2xl font-playfair font-bold text-gold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.price}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                    {item.name}
                  </h3>
                  
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.dietary.map((diet) => (
                      <span
                        key={diet}
                        className={`px-3 py-1 rounded-full text-xs text-white font-medium ${getDietaryColor(diet)} shadow-lg`}
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dietary Legend */}
        <div className="mt-12 p-6 bg-gradient-to-r from-green-900 to-green-800 rounded-lg border border-gold/20 shadow-xl">
          <h3 className="font-playfair font-semibold text-gold text-xl mb-4 text-center">
            Dietary Information
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-600 rounded-full shadow-sm"></span>
              <span className="text-white text-sm">Vegan</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-orange-600 rounded-full shadow-sm"></span>
              <span className="text-white text-sm">Vegetarian</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full shadow-sm"></span>
              <span className="text-white text-sm">Gluten-Free</span>
            </div>
          </div>
        </div>

        {/* Add bottom padding for mobile */}
        <div className="md:hidden h-16"></div>
      </div>
    </div>
  );
};

export default Menu;