
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: '',
    experience: '',
    message: ''
  });
  
  const { toast } = useToast();

  const benefits = [
    {
      title: 'Proven Business Model',
      description: 'Join a successful restaurant chain with established systems and processes',
      icon: '📈'
    },
    {
      title: 'Brand Recognition',
      description: 'Leverage the trust and loyalty built by Kadupuninda brand',
      icon: '🏆'
    },
    {
      title: 'Complete Training',
      description: 'Comprehensive training program covering operations, cooking, and management',
      icon: '🎓'
    },
    {
      title: 'Marketing Support',
      description: 'National advertising campaigns and local marketing assistance',
      icon: '📢'
    },
    {
      title: 'Quality Assurance',
      description: 'Standardized recipes and quality control measures',
      icon: '✅'
    },
    {
      title: 'Ongoing Support',
      description: '24/7 support from our experienced franchise team',
      icon: '🤝'
    }
  ];

  const investments = [
    {
      type: 'Express Outlet',
      size: '800-1200 sq ft',
      investment: '₹15-25 Lakhs',
      features: ['Quick service format', 'Limited seating', 'High footfall locations']
    },
    {
      type: 'Standard Restaurant',
      size: '1500-2500 sq ft',
      investment: '₹35-50 Lakhs',
      features: ['Full service dining', 'Complete menu', 'Family dining experience']
    },
    {
      type: 'Premium Outlet',
      size: '3000+ sq ft',
      investment: '₹60-80 Lakhs',
      features: ['Premium ambiance', 'Private dining', 'Event hosting capability']
    }
  ];

  const faqs = [
    {
      question: 'What is the franchise fee?',
      answer: 'The franchise fee varies based on the outlet type and location. It ranges from ₹3-8 lakhs depending on the format you choose.'
    },
    {
      question: 'How long is the franchise agreement?',
      answer: 'Our franchise agreement is typically for 5 years with an option to renew for additional terms.'
    },
    {
      question: 'Do you provide location assistance?',
      answer: 'Yes, our team helps with site selection and provides guidelines for optimal location selection based on demographics and footfall.'
    },
    {
      question: 'What kind of training is provided?',
      answer: 'We provide 2-3 weeks of comprehensive training covering cooking techniques, operations, customer service, and business management.'
    },
    {
      question: 'What is the ROI timeline?',
      answer: 'Based on our existing franchises, most outlets achieve break-even within 18-24 months with proper execution.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.city) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log('Franchise inquiry submitted:', formData);
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Thank you for your interest. Our franchise team will contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      budget: '',
      experience: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 ornamental-border">
            Franchise Opportunity
          </h1>
          <p className="text-xl text-warm-gold max-w-3xl mx-auto">
            Join the Kadupuninda family and bring authentic South Indian cuisine to your city. 
            Partner with us to build a successful business rooted in tradition.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold text-gold text-center mb-12">
            Why Choose Kadupuninda Franchise?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-deep-green border-gold/20 hover:border-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-playfair font-semibold text-gold text-xl mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-warm-gold">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold text-gold text-center mb-12">
            Investment Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {investments.map((option, index) => (
              <Card key={index} className="bg-deep-green border-gold/20 hover:border-gold transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-gold text-2xl mb-2">
                    {option.type}
                  </h3>
                  <div className="mb-4">
                    <p className="text-warm-gold mb-1">Size: {option.size}</p>
                    <p className="text-gold font-semibold text-xl">{option.investment}</p>
                  </div>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="text-warm-gold text-sm flex items-center">
                        <span className="text-gold mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
              Start Your Journey
            </h2>
            <p className="text-warm-gold mb-8">
              Fill out the form to receive detailed information about our franchise opportunities. 
              Our team will contact you to discuss the next steps.
            </p>
            
            {/* Downloadable Brochure */}
            <Card className="bg-deep-green border-gold/20 p-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="font-playfair font-semibold text-gold text-xl mb-2">
                  Download Franchise Brochure
                </h3>
                <p className="text-warm-gold mb-4">
                  Get detailed information about investment, returns, and support.
                </p>
                <Button className="bg-gold text-forest-green hover:bg-warm-gold">
                  Download PDF
                </Button>
              </div>
            </Card>
          </div>

          <Card className="bg-deep-green border-gold/20">
            <CardContent className="p-6">
              <h3 className="font-playfair font-semibold text-gold text-2xl mb-6">
                Franchise Inquiry Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-forest-green border-gold/30 text-warm-gold"
                    required
                  />
                  <Input
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-forest-green border-gold/30 text-warm-gold"
                    required
                  />
                </div>
                
                <Input
                  placeholder="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-forest-green border-gold/30 text-warm-gold"
                  required
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Preferred City *"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="bg-forest-green border-gold/30 text-warm-gold"
                    required
                  />
                  <Select onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="bg-forest-green border-gold/30 text-warm-gold">
                      <SelectValue placeholder="Budget Range" />
                    </SelectTrigger>
                    <SelectContent className="bg-deep-green border-gold/20">
                      <SelectItem value="15-25">₹15-25 Lakhs</SelectItem>
                      <SelectItem value="25-40">₹25-40 Lakhs</SelectItem>
                      <SelectItem value="40-60">₹40-60 Lakhs</SelectItem>
                      <SelectItem value="60+">₹60+ Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Select onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger className="bg-forest-green border-gold/30 text-warm-gold">
                    <SelectValue placeholder="Business Experience" />
                  </SelectTrigger>
                  <SelectContent className="bg-deep-green border-gold/20">
                    <SelectItem value="none">No Business Experience</SelectItem>
                    <SelectItem value="retail">Retail Experience</SelectItem>
                    <SelectItem value="restaurant">Restaurant Experience</SelectItem>
                    <SelectItem value="franchise">Franchise Experience</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea
                  placeholder="Additional Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-forest-green border-gold/30 text-warm-gold"
                  rows={4}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold text-forest-green hover:bg-warm-gold font-semibold py-3"
                >
                  Submit Inquiry
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-playfair font-bold text-gold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-deep-green border-gold/20">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-gold text-xl mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-warm-gold">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add bottom padding for mobile */}
        <div className="md:hidden h-16"></div>
      </div>
    </div>
  );
};

export default Franchise;
