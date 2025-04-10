
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ChevronRight, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-8 geometric-bottom relative overflow-hidden">
      {/* Geometric accent pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="public/lovable-uploads/a1701179-cdfc-490e-8f25-b9bba10417b9.png" 
          alt="" 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="font-bold text-3xl flex items-center mb-6 group">
              <span className="mr-2 bg-orange-600 text-white p-1 rounded-md">RE:</span>
              <span className="text-gradient">SHIFT</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Helping people and organizations navigate transitions and find meaningful paths forward in a rapidly changing job market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 p-2 bg-gray-800/50 rounded-full hover:bg-gray-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 p-2 bg-gray-800/50 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 p-2 bg-gray-800/50 rounded-full hover:bg-gray-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 p-2 bg-gray-800/50 rounded-full hover:bg-gray-700 transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-flex">
              Services
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-orange-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Career Transition', path: '/transition' },
                { name: 'Market Projects', path: '/transition' },
                { name: 'Career Guidance', path: '/transition' },
                { name: 'Outplacement', path: '/transition' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-300 hover:text-orange-400 transition-colors inline-block pb-1 relative group flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-flex">
              Company
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-orange-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Locations', path: '/offices' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-300 hover:text-orange-400 transition-colors inline-block pb-1 relative group flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-flex">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-orange-500"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-orange-400" />
                <span className="text-gray-300">123 Innovation Street, Stockholm, Sweden</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-orange-400" />
                <span className="text-gray-300">+46 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-orange-400" />
                <span className="text-gray-300">info@reshift.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} RE:SHIFT. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8 justify-center md:justify-end">
              <li><a href="#" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
