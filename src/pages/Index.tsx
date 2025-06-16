
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Star } from 'lucide-react';

const Index = () => {
  const signatureDishes = [
    {
      name: 'Ghee Roast Dosa',
      description: 'Crispy dosa roasted in pure ghee with traditional spices',
      image: '🥞',
      price: '₹180'
    },
    {
      name: 'Bisi Bele Bath',
      description: 'Traditional Karnataka rice dish with lentils and vegetables',
      image: '🍚',
      price: '₹150'
    },
    {
      name: 'Mysore Pak',
      description: 'Authentic sweet made with pure ghee and gram flour',
      image: '🍯',
      price: '₹120'
    },
    {
      name: 'Sambar Vada',
      description: 'Crispy lentil donuts served in aromatic sambar',
      image: '🍘',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gradient mb-6 ornamental-border">
              Kadupuninda
            </h1>
            <p className="text-xl md:text-2xl text-warm-gold mb-4 font-light">
              Homestyle Vegetarian Cuisine
            </p>
            <p className="text-lg text-warm-gold/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the authentic flavors of South India with our traditional recipes, 
              crafted with love and served with the warmth of home.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link to="/menu">
                <Button className="bg-gold text-forest-green hover:bg-warm-gold font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover-lift">
                  View Our Menu
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/franchise">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-forest-green font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover-lift">
                  Franchise Opportunity
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-forest-green to-deep-green">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
            About Kadupuninda
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-warm-gold mb-6 leading-relaxed">
                Rooted in tradition and steeped in the rich culinary heritage of South India, 
                Kadupuninda brings you the authentic taste of homestyle vegetarian cuisine. 
                Our recipes have been passed down through generations, each dish telling a 
                story of love, tradition, and the purest ingredients.
              </p>
              <p className="text-lg text-warm-gold mb-6 leading-relaxed">
                From the aromatic spices of Andhra Pradesh to the subtle flavors of Karnataka, 
                we celebrate the diversity of South Indian cuisine while maintaining the 
                authenticity that makes each meal a memorable experience.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-forest-green hover-lift">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4 animate-pulse">🏺</div>
              <p className="text-warm-gold italic text-lg">"Food is our language of love"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold text-center mb-12">
            Signature Dishes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureDishes.map((dish, index) => (
              <Card key={dish.name} className="bg-deep-green border-gold/20 hover:border-gold transition-all duration-300 hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{dish.image}</div>
                  <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-warm-gold text-sm mb-3">
                    {dish.description}
                  </p>
                  <div className="text-gold font-semibold text-lg">
                    {dish.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button className="bg-gold text-forest-green hover:bg-warm-gold font-semibold px-8 py-3 rounded-full hover-lift">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-b from-deep-green to-forest-green">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold text-center mb-12">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-deep-green border-gold/20 hover-lift">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-warm-gold italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="text-gold font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-warm-gold/70 text-sm">
                    {testimonial.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
            Join the Kadupuninda Family
          </h2>
          <p className="text-xl text-warm-gold mb-8 leading-relaxed">
            Bring authentic South Indian cuisine to your city. 
            Discover our franchise opportunities and be part of our growing legacy.
          </p>
          <Link to="/franchise">
            <Button className="bg-gold text-forest-green hover:bg-warm-gold font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover-lift">
              Explore Franchise Opportunities
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Add bottom padding for mobile bottom bar */}
      <div className="md:hidden h-16"></div>
    </div>
  );
};

export default Index;
