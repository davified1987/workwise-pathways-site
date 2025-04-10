
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Transition', path: '/transition' },
    { name: 'Our Offices', path: '/offices' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`py-4 fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-brand-600">WorkWise</Link>
        
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
              <div className="fixed inset-0 top-[65px] bg-white/95 backdrop-blur-md z-40 p-6 animate-fade-in">
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.path}
                      className={`py-2 text-lg font-medium ${isActive(item.path) ? 'text-brand-600' : 'text-gray-800'}`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link to="/contact" onClick={closeMenu}>
                    <Button className="btn-primary w-full mt-6">Contact Us</Button>
                  </Link>
                </nav>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`py-2 relative font-medium group ${isActive(item.path) ? 'text-brand-600' : isScrolled ? 'text-gray-800' : 'text-white'}`}
                >
                  {item.name}
                  <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full ${isActive(item.path) ? 'w-full' : 'w-0'}`}></span>
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
