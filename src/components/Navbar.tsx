import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const logoSize = 45;

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-deep-green border-b border-gold/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center ">
            <img 
              src="/logo/logo1.png" 
              alt="Kadupuninda Logo" 
              className={`h-${logoSize} w-${100} object-contain`}
              style={{ height: `${logoSize * 4}px`, width: `${120}px` }}
            />
            <div>
              <h1 className="text-2xl font-playfair font-bold text-gold">
                Kadupuninda
              </h1>
              <p className="text-xs text-warm-gold -mt-1">
                South Indian Homestyle Cuisine
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  isActive(item.path) ? 'text-gold' : 'text-warm-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Franchise CTA */}
            <Link to="/franchise">
              <Button className="bg-gold text-forest-green hover:bg-warm-gold font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                Enquire Franchise
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gold">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-deep-green border-gold/20">
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors duration-200 hover:text-gold ${
                      isActive(item.path) ? 'text-gold' : 'text-warm-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/franchise" onClick={() => setIsOpen(false)}>
                  <Button className="bg-gold text-forest-green hover:bg-warm-gold font-semibold w-full mt-4">
                    Enquire Franchise
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;