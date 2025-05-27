
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  const signatureDishes = [
    {
      name: 'Ghee Roast Dosa',
      description: 'Crispy dosa roasted in pure ghee with traditional spices',
      image: '🥞'
    },
    {
      name: 'Bisi Bele Bath',
      description: 'Traditional Karnataka rice dish with lentils and vegetables',
      image: '🍚'
    },
    {
      name: 'Mysore Pak',
      description: 'Authentic sweet made with pure ghee and gram flour',
      image: '🍯'
    },
    {
      name: 'Sambar Vada',
      description: 'Crispy lentil donuts served in aromatic sambar',
      image: '🍘'
    }
  ];

  const testimonials = [
    {
      text: "The taste reminds me of my grandmother's cooking. Absolutely authentic!",
      author: "Priya Sharma",
      location: "Bangalore"
    },
    {
      text: "Best South Indian food outside of Tamil Nadu. The ambiance is perfect.",
      author: "Rajesh Kumar",
      location: "Hyderabad"
    },
    {
      text: "Every dish is prepared with such care and attention to tradition.",
      author: "Meera Iyer",
      location: "Chennai"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gold mb-6 ornamental-border">
              Kadupuninda
            </h1>
            <p className="text-xl md:text-2xl text-gold/80 mb-4 font-light">
              Homestyle Vegetarian Cuisine
            </p>
            <p className="text-lg text-gold/70 mb-8 max-w-2xl mx-auto">
              Experience the authentic flavors of South India with our traditional recipes, 
              crafted with love and served with the warmth of home.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link to="/menu">
                <Button className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  View Our Menu
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/franchise">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Franchise Opportunity
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-green to-dark-green">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
            About Kadupuninda
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-gold/80 mb-6 leading-relaxed">
                Rooted in tradition and steeped in the rich culinary heritage of South India, 
                Kadupuninda brings you the authentic taste of homestyle vegetarian cuisine. 
                Our recipes have been passed down through generations, each dish telling a 
                story of love, tradition, and the purest ingredients.
              </p>
              <p className="text-lg text-gold/80 mb-6 leading-relaxed">
                From the aromatic spices of Andhra Pradesh to the subtle flavors of Karnataka, 
                we celebrate the diversity of South Indian cuisine while maintaining the 
                authenticity that makes each meal a memorable experience.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🏺</div>
              <p className="text-gold/80 italic">"Food is our language of love"</p>
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
              <Card key={dish.name} className="bg-dark-green border-gold/20 hover:border-gold transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{dish.image}</div>
                  <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gold/80 text-sm">
                    {dish.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-3 rounded-full">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-b from-dark-green to-green">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold text-center mb-12">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-dark-green border-gold/20">
                <CardContent className="p-6">
                  <p className="text-gold/80 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="text-gold font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-gold/70 text-sm">
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
          <p className="text-xl text-gold/80 mb-8">
            Bring authentic South Indian cuisine to your city. 
            Discover our franchise opportunities and be part of our growing legacy.
          </p>
          <Link to="/franchise">
            <Button className="bg-gold text-black hover:bg-gold/90 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
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
