import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock Link component for demonstration

const Index = () => {
  const signatureDishes = [
    {
      name: 'Ghee Roast Dosa',
      description: 'Crispy dosa roasted in pure ghee with traditional spices',
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop&auto=format',
      price: '₹180'
    },
    {
      name: 'Bisi Bele Bath',
      description: 'Traditional Karnataka rice dish with lentils and vegetables',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop&auto=format',
      price: '₹150'
    },
    {
      name: 'Mysore Pak',
      description: 'Authentic sweet made with pure ghee and gram flour',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&auto=format',
      price: '₹120'
    },
    {
      name: 'Sambar Vada',
      description: 'Crispy lentil donuts served in aromatic sambar',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop&auto=format',
      price: '₹140'
    }
  ];

  const testimonials = [
    {
      text: "The taste reminds me of my grandmother's cooking. Absolutely authentic!",
      author: "Priya Sharma",
      location: "Bangalore",
      rating: 5
    },
    {
      text: "Best South Indian food outside of Tamil Nadu. The ambiance is perfect.",
      author: "Rajesh Kumar",
      location: "Hyderabad",
      rating: 5
    },
    {
      text: "Every dish is prepared with such care and attention to tradition.",
      author: "Meera Iyer",
      location: "Chennai",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 text-yellow-200">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-6">
              Kadupuninda
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 font-light">
              Homestyle Vegetarian Cuisine
            </p>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the authentic flavors of South India with our traditional recipes, 
              crafted with love and served with the warmth of home.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link to="/menu">
                <button className="bg-yellow-500 text-green-900 hover:bg-yellow-400 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  View Our Menu
                  <ChevronRight className="ml-2 h-4 w-4 inline" />
                </button>
              </Link>
              <Link to="/franchise">
                <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-green-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Franchise Opportunity
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-800 to-green-900">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-yellow-500 mb-4">
        About Kadupuninda
      </h2>
      <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <p className="text-lg text-white mb-6 leading-relaxed">
          Rooted in tradition and steeped in the rich culinary heritage of South India, 
          Kadupuninda brings you the authentic taste of homestyle vegetarian cuisine. 
          Our recipes have been passed down through generations, each dish telling a 
          story of love, tradition, and the purest ingredients.
        </p>
        <p className="text-lg text-white mb-8 leading-relaxed">
          From the aromatic spices of Andhra Pradesh to the subtle flavors of Karnataka, 
          we celebrate the diversity of South Indian cuisine while maintaining the 
          authenticity that makes each meal a memorable experience.
        </p>
        <Link to="/about">
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-green-900 px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg">
            Learn More About Us
          </button>
        </Link>
      </div>
      
      <div className="relative">
        {/* Main Logo Image */}
        <div className="relative group">
          <img 
            src="/logo/logo1.png" 
            alt="Kadupuninda" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full object-cover border-4 border-yellow-500/30 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-yellow-500/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-yellow-500/30 rounded-full animate-pulse delay-300"></div>
        </div>
        
        {/* Quote with decorative elements */}
        <div className="mt-8 relative">
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-yellow-500 text-4xl">“</div>
          <p className="text-white italic text-xl md:text-2xl text-center px-8 font-serif">
            "Food is our language of love"
          </p>
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-yellow-500 text-4xl">”</div>
        </div>
        
        {/* Small decorative elements */}
        <div className="hidden md:block absolute -bottom-8 -left-8 w-16 h-16 bg-yellow-500/10 rounded-full"></div>
        <div className="hidden md:block absolute -top-8 -right-8 w-12 h-12 bg-yellow-500/10 rounded-full"></div>
      </div>
    </div>
  </div>
</section>

      {/* Signature Dishes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-yellow-500 text-center mb-12">
            Signature Dishes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureDishes.map((dish, index) => (
              <div key={dish.name} className="bg-green-900 border border-yellow-500/20 hover:border-yellow-500 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden">
                <div className="h-40 w-full">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif font-semibold text-white text-xl mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-white text-sm mb-3">
                    {dish.description}
                  </p>
                  <div className="text-yellow-500 font-semibold text-lg">
                    {dish.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <button className="bg-yellow-500 text-green-900 hover:bg-yellow-400 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Full Menu
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-b from-green-900 to-green-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-yellow-500 text-center mb-12">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-green-900 border border-yellow-500/20 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-white italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="text-yellow-500 font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-white text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-yellow-500 mb-6">
            Join the Kadupuninda Family
          </h2>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Bring authentic South Indian cuisine to your city. 
            Discover our franchise opportunities and be part of our growing legacy.
          </p>
          <Link to="/franchise">
            <button className="bg-yellow-500 text-green-900 hover:bg-yellow-400 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Franchise Opportunities
              <ChevronRight className="ml-2 h-5 w-5 inline" />
            </button>
          </Link>
        </div>
      </section>

      {/* Add bottom padding for mobile bottom bar */}
      <div className="md:hidden h-16"></div>
    </div>
  );
};

export default Index;