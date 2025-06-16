
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Menu as MenuIcon } from 'lucide-react';

const MobileBottomBar = () => {
  const location = useLocation();

  const bottomNavItems = [
    { name: 'Menu', path: '/menu', icon: MenuIcon },
    { name: 'Location', path: '/contact', icon: MapPin },
    { name: 'Call', path: 'tel:+919876543210', icon: Phone, external: true },
    { name: 'Franchise', path: '/franchise', icon: '🏪' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-deep-green/95 backdrop-blur-sm border-t border-gold/20 z-40 safe-area-pb">
      <div className="grid grid-cols-4 h-16">
        {bottomNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          const content = (
            <div className={`flex flex-col items-center justify-center h-full transition-all duration-200 active:scale-95 ${
              isActive 
                ? 'text-gold transform scale-105' 
                : 'text-warm-gold hover:text-gold'
            }`}>
              {typeof item.icon === 'string' ? (
                <span className="text-lg mb-1">{item.icon}</span>
              ) : (
                <item.icon className="h-5 w-5 mb-1" />
              )}
              <span className="text-xs font-medium">{item.name}</span>
              {isActive && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gold rounded-t-full"></div>
              )}
            </div>
          );

          if (item.external) {
            return (
              <a 
                key={item.name} 
                href={item.path} 
                className="block relative active:bg-gold/10 transition-colors duration-200"
              >
                {content}
              </a>
            );
          }

          return (
            <Link 
              key={item.name} 
              to={item.path} 
              className="block relative active:bg-gold/10 transition-colors duration-200"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomBar;
