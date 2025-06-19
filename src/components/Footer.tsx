import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-deep-green border-t border-gold/20 text-warm-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src="/logo/logo1.png" 
                alt="Kadupuninda Logo"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gold">
                  Kadupuninda
                </h3>
                <p className="text-sm md:text-base text-warm-gold mt-1">
                  South Indian & Andhra Homestyle Cuisine
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base mb-8 max-w-lg leading-relaxed">
              Experience authentic South Indian vegetarian cuisine crafted with traditional recipes 
              and the warmth of home-style cooking. Every dish tells a story of heritage and flavor.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="font-playfair font-semibold text-lg text-gold mb-4">Join Our Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input 
                  placeholder="Your email address" 
                  className="bg-forest-green/70 border-gold/30 text-warm-gold placeholder-warm-gold/70 h-12"
                />
                <Button className="bg-gold hover:bg-warm-gold text-forest-green h-12 px-6 font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg text-gold mb-6 pb-2 border-b border-gold/20">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/menu" className="hover:text-gold transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="hover:text-gold transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Franchise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg text-gold mb-6 pb-2 border-b border-gold/20">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>123 Heritage Street</p>
                  <p>Hyderabad, Telangana 500001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">contact@kadupuninda.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">Open: 8AM - 10PM Daily</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-playfair font-semibold text-lg text-gold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gold hover:text-warm-gold transition-colors bg-green-900/50 p-2 rounded-full">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gold hover:text-warm-gold transition-colors bg-green-900/50 p-2 rounded-full">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gold hover:text-warm-gold transition-colors bg-green-900/50 p-2 rounded-full">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-warm-gold/80">
            &copy; {new Date().getFullYear()} Kadupuninda Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;