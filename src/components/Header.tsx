
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Transition', path: '/transition' },
    { name: 'Our Offices', path: '/offices' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-brand-700">WorkWise</Link>
        
        {isMobile ? (
          <div className="flex items-center">
            <button 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-[65px] bg-white z-40 p-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.path}
                      className="py-2 text-lg border-b border-gray-100"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="btn-primary w-full mt-4">Contact Us</Button>
                </nav>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-6">
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="py-2 hover:text-brand-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Link to="/contact">
              <Button className="btn-primary">Contact Us</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
