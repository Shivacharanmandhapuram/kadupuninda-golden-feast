
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const categories = [
    { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
    { id: 'lunch', name: 'Lunch', icon: '☀️' },
    { id: 'dinner', name: 'Dinner', icon: '🌙' },
    { id: 'tiffins', name: 'Tiffins', icon: '🥞' },
    { id: 'specials', name: 'Specials', icon: '⭐' },
    { id: 'sweets', name: 'Sweets', icon: '🍯' }
  ];

  const menuItems = {
    breakfast: [
      { name: 'Idli Sambar', price: '₹80', description: 'Soft steamed rice cakes with aromatic sambar and chutneys', dietary: ['Vegan', 'Gluten-Free'], image: '🍘' },
      { name: 'Masala Dosa', price: '₹120', description: 'Crispy crepe with spiced potato filling', dietary: ['Vegan'], image: '🥞' },
      { name: 'Medu Vada', price: '₹90', description: 'Crispy lentil donuts served with sambar and chutney', dietary: ['Vegan'], image: '🍩' },
      { name: 'Upma', price: '₹70', description: 'Savory semolina porridge with vegetables and spices', dietary: ['Vegan'], image: '🥣' },
      { name: 'Poha', price: '₹65', description: 'Flattened rice with onions, turmeric, and peanuts', dietary: ['Vegan', 'Gluten-Free'], image: '🍚' },
      { name: 'Pesarattu', price: '₹110', description: 'Green gram crepe with ginger and green chilies', dietary: ['Vegan', 'Gluten-Free'], image: '🥞' }
    ],
    lunch: [
      { name: 'South Indian Thali', price: '₹250', description: 'Complete meal with rice, sambar, rasam, vegetables, and curd', dietary: ['Vegetarian'], image: '🍽️' },
      { name: 'Bisi Bele Bath', price: '₹180', description: 'Traditional Karnataka rice dish with lentils and vegetables', dietary: ['Vegan'], image: '🍚' },
      { name: 'Lemon Rice', price: '₹140', description: 'Tangy rice with curry leaves, mustard seeds, and peanuts', dietary: ['Vegan', 'Gluten-Free'], image: '🍋' },
      { name: 'Curd Rice', price: '₹120', description: 'Cooling rice with yogurt, curry leaves, and ginger', dietary: ['Vegetarian', 'Gluten-Free'], image: '🍚' },
      { name: 'Vegetable Pulao', price: '₹160', description: 'Fragrant basmati rice with seasonal vegetables', dietary: ['Vegan'], image: '🌾' },
      { name: 'Rasam Rice', price: '₹150', description: 'Tangy tomato and tamarind soup with steamed rice', dietary: ['Vegan', 'Gluten-Free'], image: '🍅' }
    ],
    dinner: [
      { name: 'Akki Roti', price: '₹90', description: 'Rice flour flatbread with onions and herbs', dietary: ['Vegan', 'Gluten-Free'], image: '🫓' },
      { name: 'Ragi Mudde', price: '₹110', description: 'Finger millet balls served with sambar or curry', dietary: ['Vegan', 'Gluten-Free'], image: '⚫' },
      { name: 'Chapati with Curry', price: '₹130', description: 'Whole wheat flatbread with seasonal vegetable curry', dietary: ['Vegan'], image: '🫓' },
      { name: 'Puliyogare', price: '₹140', description: 'Tangy tamarind rice with spices and peanuts', dietary: ['Vegan', 'Gluten-Free'], image: '🍚' },
      { name: 'Coconut Rice', price: '₹130', description: 'Fragrant rice with fresh coconut and curry leaves', dietary: ['Vegan', 'Gluten-Free'], image: '🥥' },
      { name: 'Mixed Vegetable Curry', price: '₹120', description: 'Seasonal vegetables in traditional South Indian spices', dietary: ['Vegan'], image: '🥗' }
    ],
    tiffins: [
      { name: 'Rava Idli', price: '₹85', description: 'Steamed semolina cakes with vegetables', dietary: ['Vegetarian'], image: '🍘' },
      { name: 'Set Dosa', price: '₹100', description: 'Soft, thick pancakes served in sets of three', dietary: ['Vegan'], image: '🥞' },
      { name: 'Uttapam', price: '₹110', description: 'Thick pancake topped with onions and tomatoes', dietary: ['Vegan'], image: '🍕' },
      { name: 'Paniyaram', price: '₹95', description: 'Round steamed dumplings made from fermented batter', dietary: ['Vegan'], image: '⚪' },
      { name: 'Adai', price: '₹105', description: 'Protein-rich crepe made from mixed lentils', dietary: ['Vegan', 'Gluten-Free'], image: '🥞' },
      { name: 'Appam', price: '₹90', description: 'Bowl-shaped fermented rice pancakes', dietary: ['Vegan'], image: '🍽️' }
    ],
    specials: [
      { name: 'Ghee Roast Dosa', price: '₹180', description: 'Crispy dosa roasted in pure ghee with traditional spices', dietary: ['Vegetarian'], image: '🥞' },
      { name: 'Andhra Meals', price: '₹300', description: 'Authentic Andhra feast with spicy curries and pickles', dietary: ['Vegetarian'], image: '🌶️' },
      { name: 'Karnataka Special Thali', price: '₹280', description: 'Regional specialties from Karnataka cuisine', dietary: ['Vegetarian'], image: '🍽️' },
      { name: 'Festival Special Meal', price: '₹350', description: 'Traditional feast served during festivals', dietary: ['Vegetarian'], image: '🎉' },
      { name: 'Bamboo Shoot Curry', price: '₹220', description: 'Seasonal delicacy with traditional spices', dietary: ['Vegan'], image: '🎋' },
      { name: 'Jackfruit Curry', price: '₹190', description: 'Tender jackfruit in coconut-based curry', dietary: ['Vegan'], image: '🥭' }
    ],
    sweets: [
      { name: 'Mysore Pak', price: '₹120', description: 'Traditional sweet made with ghee and gram flour', dietary: ['Vegetarian'], image: '🍯' },
      { name: 'Rava Kesari', price: '₹90', description: 'Semolina sweet flavored with cardamom and saffron', dietary: ['Vegetarian'], image: '🟡' },
      { name: 'Payasam', price: '₹100', description: 'Traditional rice pudding with jaggery and coconut milk', dietary: ['Vegetarian'], image: '🍮' },
      { name: 'Holige/Puran Poli', price: '₹80', description: 'Sweet flatbread stuffed with lentil and jaggery', dietary: ['Vegetarian'], image: '🫓' },
      { name: 'Coconut Laddu', price: '₹70', description: 'Sweet coconut balls with cardamom', dietary: ['Vegetarian'], image: '⚪' },
      { name: 'Banana Chips', price: '₹60', description: 'Crispy banana chips fried in coconut oil', dietary: ['Vegan'], image: '🍌' }
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

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 ornamental-border">
            Our Menu
          </h1>
          <p className="text-xl text-warm-gold max-w-3xl mx-auto">
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
            <Card key={item.name} className="bg-deep-green border-gold/20 hover:border-gold transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className="text-right">
                    <span className="text-2xl font-playfair font-bold text-gold">
                      {item.price}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                  {item.name}
                </h3>
                
                <p className="text-warm-gold text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.dietary.map((diet) => (
                    <span
                      key={diet}
                      className={`px-2 py-1 rounded-full text-xs text-white font-medium ${getDietaryColor(diet)}`}
                    >
                      {diet}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dietary Legend */}
        <div className="mt-12 p-6 bg-deep-green rounded-lg">
          <h3 className="font-playfair font-semibold text-gold text-xl mb-4 text-center">
            Dietary Information
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              <span className="text-warm-gold text-sm">Vegan</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
              <span className="text-warm-gold text-sm">Vegetarian</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              <span className="text-warm-gold text-sm">Gluten-Free</span>
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
