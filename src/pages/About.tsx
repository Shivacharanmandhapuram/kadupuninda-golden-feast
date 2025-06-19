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
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-green-900 to-green-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
<div className="text-center mb-20">
  <h1 className="text-5xl md:text-6xl font-serif font-bold text-yellow-500 mb-4">
    Our Story
  </h1>
  <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
  <p className="text-xl text-yellow-300 max-w-3xl mx-auto leading-relaxed">
    A journey rooted in tradition, flavored with love, and served with pride
  </p>
</div>

{/* Story Section */}
<div className="grid md:grid-cols-2 gap-16 items-center mb-24">
  <div className="relative">
    <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-yellow-500/20 rounded-full z-0"></div>
    <div className="relative z-10">
      <h2 className="text-4xl font-serif font-bold text-yellow-500 mb-8">
        From Kitchen to Heart
      </h2>
      <div className="space-y-6">
        <p className="text-lg text-white leading-relaxed">
          Kadupuninda began in the heart of a traditional South Indian home, where our founder's 
          grandmother would prepare elaborate meals for family gatherings. The name "Kadupuninda" 
          itself means "from the kitchen" in Telugu, reflecting our core belief that the best 
          food comes from the heart of the home.
        </p>
        <p className="text-lg text-white leading-relaxed">
          Every recipe in our kitchen has been carefully preserved and passed down through 
          generations. We believe in the purity of ingredients, the authenticity of traditional 
          cooking methods, and the warmth of South Indian hospitality.
        </p>
        <p className="text-lg text-white leading-relaxed">
          Today, as we expand our presence across India, our commitment remains unchanged: 
          to serve food that connects people to their roots and creates new memories around 
          the dining table.
        </p>
      </div>
    </div>
  </div>
  
  <div className="relative group">
    <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-yellow-500/20 rounded-full z-0 animate-pulse"></div>
    <div className="relative z-10 text-center">
      <img 
        src="/owner/n.jpg" 
        alt="Nikhil Gunda" 
        className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-yellow-500/30 shadow-xl transform transition duration-500 group-hover:scale-105"
      />
      <div className="mt-8 p-6 bg-green-900/80 backdrop-blur-sm rounded-lg border border-yellow-500/20 max-w-md mx-auto">
        <blockquote className="text-white italic text-xl leading-relaxed">
          "Cooking is an act of love, and every meal is a celebration"
        </blockquote>
        <p className="text-yellow-500 font-semibold mt-4">
          — Founder, Kadupuninda
        </p>
      </div>
    </div>
  </div>
</div>
        {/* Chef's Vision */}
        <div className="bg-green-900 rounded-lg p-8 mb-16 border border-yellow-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-yellow-500 mb-4">
              Chef's Vision
            </h2>
           
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif font-semibold text-yellow-500 text-xl mb-3">
                Authenticity First
              </h3>
              <p className="text-white">
                We source our spices directly from traditional farms and use only time-tested 
                cooking techniques to ensure every dish maintains its authentic flavor profile.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-yellow-500 text-xl mb-3">
                Pure Vegetarian
              </h3>
              <p className="text-white">
                Our commitment to pure vegetarian cuisine reflects our respect for tradition 
                and our belief in serving food that nourishes both body and soul.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-yellow-500 text-xl mb-3">
                Seasonal Ingredients
              </h3>
              <p className="text-white">
                We adapt our menu based on seasonal availability, ensuring freshness and 
                maintaining the natural rhythm of traditional cooking.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-yellow-500 text-xl mb-3">
                Cultural Heritage
              </h3>
              <p className="text-white">
                Each dish tells a story of South Indian culture, bringing together flavors 
                from different regions while honoring their unique characteristics.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-yellow-500 text-center mb-12">
            Our Journey Through Time
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="bg-green-900 border border-yellow-500/20 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-20">
                      <span className="text-2xl font-serif font-bold text-yellow-500">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-yellow-500 text-xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-yellow-500 mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
             
              <h3 className="font-serif font-semibold text-yellow-500 text-xl mb-2">
                Tradition
              </h3>
              <p className="text-white">
                Honoring age-old recipes and cooking methods passed down through generations
              </p>
            </div>
            <div className="text-center">
              
              <h3 className="font-serif font-semibold text-yellow-500 text-xl mb-2">
                Love
              </h3>
              <p className="text-white">
                Every dish is prepared with care, attention, and genuine affection
              </p>
            </div>
            <div className="text-center">
            
              <h3 className="font-serif font-semibold text-yellow-500 text-xl mb-2">
                Purity
              </h3>
              <p className="text-white">
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