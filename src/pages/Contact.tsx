
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        '123 Heritage Street',
        'Jubilee Hills, Hyderabad',
        'Telangana 500033'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 98765 43210',
        '+91 87654 32109',
        'Available 10 AM - 10 PM'
      ]
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      details: [
        '+91 98765 43210',
        'Quick responses',
        'Order assistance'
      ]
    }
  ];

  const locations = [
    {
      name: 'Jubilee Hills (Main)',
      address: '123 Heritage Street, Jubilee Hills',
      phone: '+91 98765 43210',
      hours: '10:00 AM - 10:30 PM',
      status: 'Open'
    },
    {
      name: 'Banjara Hills',
      address: '456 Garden Plaza, Banjara Hills',
      phone: '+91 87654 32109',
      hours: '10:00 AM - 10:30 PM',
      status: 'Open'
    },
    {
      name: 'HITEC City',
      address: '789 Tech Tower, HITEC City',
      phone: '+91 76543 21098',
      hours: '11:00 AM - 11:00 PM',
      status: 'Opening Soon'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log('Contact form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = "Hello! I would like to know more about Kadupuninda restaurant.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 ornamental-border">
            Contact Us
          </h1>
          <p className="text-xl text-warm-gold max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for reservations, 
            inquiries, or just to share your dining experience.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-deep-green border-gold/20 hover:border-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <info.icon className="h-8 w-8 text-gold mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-gold text-xl mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-warm-gold text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WhatsApp Integration */}
        <div className="text-center mb-16">
          <Card className="bg-deep-green border-gold/20 p-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-playfair font-semibold text-gold text-xl mb-3">
                Quick Chat on WhatsApp
              </h3>
              <p className="text-warm-gold mb-4">
                Get instant responses to your questions about menu, reservations, or catering.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </Card>
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-deep-green border-gold/20">
            <CardContent className="p-6">
              <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-forest-green border-gold/30 text-warm-gold"
                    required
                  />
                  <Input
                    placeholder="Email Address *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-forest-green border-gold/30 text-warm-gold"
                    required
                  />
                </div>
                
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="bg-forest-green border-gold/30 text-warm-gold"
                />
                
                <Textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-forest-green border-gold/30 text-warm-gold"
                  rows={6}
                  required
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold text-forest-green hover:bg-warm-gold font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map Section */}
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gold mb-6">
              Find Us
            </h2>
            
            <Card className="bg-deep-green border-gold/20 mb-6">
              <CardContent className="p-6">
                <div className="aspect-video bg-forest-green rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-warm-gold">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-gold" />
                    <p>Interactive Map</p>
                    <p className="text-sm text-warm-gold/70">
                      Google Maps integration would be embedded here
                    </p>
                  </div>
                </div>
                <Button className="w-full bg-gold text-forest-green hover:bg-warm-gold">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-deep-green border-gold/20">
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-gold text-xl mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gold text-forest-green p-3 rounded-full hover:bg-warm-gold transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gold text-forest-green p-3 rounded-full hover:bg-warm-gold transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gold text-forest-green p-3 rounded-full hover:bg-warm-gold transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-warm-gold text-sm mt-4">
                  Stay updated with our latest dishes, events, and special offers!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Multiple Locations */}
        <div>
          <h2 className="text-3xl font-playfair font-bold text-gold text-center mb-12">
            Our Locations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="bg-deep-green border-gold/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair font-semibold text-gold text-xl">
                      {location.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      location.status === 'Open' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-orange-600 text-white'
                    }`}>
                      {location.status}
                    </span>
                  </div>
                  <p className="text-warm-gold text-sm mb-2">
                    {location.address}
                  </p>
                  <p className="text-warm-gold text-sm mb-2">
                    📞 {location.phone}
                  </p>
                  <p className="text-warm-gold text-sm">
                    🕒 {location.hours}
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

export default Contact;
