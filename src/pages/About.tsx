
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const milestones = [
    {
      year: '1995',
      title: 'Humble Beginnings',
      description: 'Started as a small family kitchen serving traditional recipes to neighbors'
    },
    {
      year: '2005',
      title: 'First Restaurant',
      description: 'Opened our first restaurant in Hyderabad with 20 seating capacity'
    },
    {
      year: '2015',
      title: 'Regional Expansion',
      description: 'Expanded to 5 locations across Telangana and Andhra Pradesh'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online ordering and delivery services during pandemic'
    },
    {
      year: '2024',
      title: 'Franchise Launch',
      description: 'Opened franchise opportunities to spread authentic flavors nationwide'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 ornamental-border">
            Our Story
          </h1>
          <p className="text-xl text-warm-gold max-w-3xl mx-auto">
            A journey rooted in tradition, flavored with love, and served with pride
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
              From Kitchen to Heart
            </h2>
            <p className="text-lg text-warm-gold mb-6 leading-relaxed">
              Kadupuninda began in the heart of a traditional South Indian home, where our founder's 
              grandmother would prepare elaborate meals for family gatherings. The name "Kadupuninda" 
              itself means "from the kitchen" in Telugu, reflecting our core belief that the best 
              food comes from the heart of the home.
            </p>
            <p className="text-lg text-warm-gold mb-6 leading-relaxed">
              Every recipe in our kitchen has been carefully preserved and passed down through 
              generations. We believe in the purity of ingredients, the authenticity of traditional 
              cooking methods, and the warmth of South Indian hospitality.
            </p>
            <p className="text-lg text-warm-gold leading-relaxed">
              Today, as we expand our presence across India, our commitment remains unchanged: 
              to serve food that connects people to their roots and creates new memories around 
              the dining table.
            </p>
          </div>
          <div className="text-center">
            <div className="text-9xl mb-6">👨‍🍳</div>
            <p className="text-warm-gold italic text-lg">
              "Cooking is an act of love, and every meal is a celebration"
            </p>
            <p className="text-gold font-semibold mt-2">
              - Founder, Kadupuninda
            </p>
          </div>
        </div>

        {/* Chef's Vision */}
        <div className="bg-deep-green rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-gold mb-4">
              Chef's Vision
            </h2>
            <div className="text-6xl mb-4">🍛</div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair font-semibold text-gold text-xl mb-3">
                Authenticity First
              </h3>
              <p className="text-warm-gold">
                We source our spices directly from traditional farms and use only time-tested 
                cooking techniques to ensure every dish maintains its authentic flavor profile.
              </p>
            </div>
            <div>
              <h3 className="font-playfair font-semibold text-gold text-xl mb-3">
                Pure Vegetarian
              </h3>
              <p className="text-warm-gold">
                Our commitment to pure vegetarian cuisine reflects our respect for tradition 
                and our belief in serving food that nourishes both body and soul.
              </p>
            </div>
            <div>
              <h3 className="font-playfair font-semibold text-gold text-xl mb-3">
                Seasonal Ingredients
              </h3>
              <p className="text-warm-gold">
                We adapt our menu based on seasonal availability, ensuring freshness and 
                maintaining the natural rhythm of traditional cooking.
              </p>
            </div>
            <div>
              <h3 className="font-playfair font-semibold text-gold text-xl mb-3">
                Cultural Heritage
              </h3>
              <p className="text-warm-gold">
                Each dish tells a story of South Indian culture, bringing together flavors 
                from different regions while honoring their unique characteristics.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold text-gold text-center mb-12">
            Our Journey Through Time
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className="bg-deep-green border-gold/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-20">
                      <span className="text-2xl font-playfair font-bold text-gold">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-warm-gold">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold text-gold mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                Tradition
              </h3>
              <p className="text-warm-gold">
                Honoring age-old recipes and cooking methods passed down through generations
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                Love
              </h3>
              <p className="text-warm-gold">
                Every dish is prepared with care, attention, and genuine affection
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                Purity
              </h3>
              <p className="text-warm-gold">
                Using only the finest, freshest ingredients with no artificial additives
              </p>
            </div>
          </div>
        </div>

        {/* Add bottom padding for mobile */}
        <div className="md:hidden h-16"></div>
      </div>
    </div>
  );
};

export default About;
