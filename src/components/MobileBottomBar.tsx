
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Menu as MenuIcon } from 'lucide-react';

const MobileBottomBar = () => {
  const location = useLocation();

  const bottomNavItems = [
    { name: 'Menu', path: '/menu', icon: MenuIcon },
    { name: 'Subscribe', path: '/subscription', icon: '🍽️' },
    { name: 'Location', path: '/contact', icon: MapPin },
    { name: 'Call', path: 'tel:+919876543210', icon: Phone, external: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-green border-t border-gold/20 z-40">
      <div className="grid grid-cols-4 h-16">
        {bottomNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          const content = (
            <div className={`flex flex-col items-center justify-center h-full transition-colors duration-200 ${
              isActive ? 'text-gold' : 'text-gold/70'
            }`}>
              {typeof item.icon === 'string' ? (
                <span className="text-lg mb-1">{item.icon}</span>
              ) : (
                <item.icon className="h-5 w-5 mb-1" />
              )}
              <span className="text-xs font-medium">{item.name}</span>
            </div>
          );

          if (item.external) {
            return (
              <a key={item.name} href={item.path} className="block">
                {content}
              </a>
            );
          }

          return (
            <Link key={item.name} to={item.path} className="block">
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomBar;
