
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Menu',
    path: '/menu'
  }, {
    name: 'Subscription',
    path: '/subscription'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <nav className="bg-primary-green border-b border-secondary-green/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm font-medium transition-colors duration-200 hover:text-light-gray ${
                  isActive(item.path) ? 'text-light-gray' : 'text-light-gray/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Franchise CTA */}
            <Link to="/franchise">
              <Button className="bg-light-gray text-primary-green hover:bg-light-gray/90 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                Enquire Franchise
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-light-gray">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary-green border-secondary-green/20">
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map(item => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    onClick={() => setIsOpen(false)} 
                    className={`text-lg font-medium transition-colors duration-200 hover:text-light-gray ${
                      isActive(item.path) ? 'text-light-gray' : 'text-light-gray/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/franchise" onClick={() => setIsOpen(false)}>
                  <Button className="bg-light-gray text-primary-green hover:bg-light-gray/90 font-semibold w-full mt-4">
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
