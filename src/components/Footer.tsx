
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-deep-green border-t border-gold/20 text-warm-gold py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">🍛</div>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-gold">
                  Kadupuninda
                </h3>
                <p className="text-sm text-warm-gold">
                  South Indian & Andhra Homestyle Cuisine
                </p>
              </div>
            </div>
            <p className="text-sm mb-6 max-w-md">
              Experience authentic South Indian vegetarian cuisine crafted with traditional recipes 
              and the warmth of home-style cooking. Every dish tells a story of heritage and flavor.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-playfair font-semibold text-gold mb-3">Subscribe to Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-forest-green border-gold/30 text-warm-gold"
                />
                <Button className="bg-gold text-forest-green hover:bg-warm-gold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/franchise" className="hover:text-gold transition-colors">Franchise</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-gold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <div className="text-sm">
                  <p>123 Heritage Street</p>
                  <p>Hyderabad, Telangana 500001</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-playfair font-semibold text-gold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gold hover:text-warm-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gold hover:text-warm-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gold hover:text-warm-gold transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Kadupuninda Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
