
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand-300">WorkWise</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We help people and organizations navigate transitions and find sustainable paths forward.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-300 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-300 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-300 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/transition" className="text-gray-300 hover:text-brand-300 transition-colors inline-block pb-1">Rusta & Matcha</Link></li>
              <li><Link to="/transition" className="text-gray-300 hover:text-brand-300 transition-colors inline-block pb-1">Labor Market Projects</Link></li>
              <li><Link to="/transition" className="text-gray-300 hover:text-brand-300 transition-colors inline-block pb-1">Career Guidance</Link></li>
              <li><Link to="/transition" className="text-gray-300 hover:text-brand-300 transition-colors inline-block pb-1">Outplacement</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-brand-300 transition-colors inline-block pb-1">About Us</Link></li>
              <li><Link to="/offices" className="text-gray-300 hover:text-brand-300 transition-colors inline-block pb-1">Our Offices</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-brand-300 transition-colors inline-block pb-1">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-300 transition-colors inline-block pb-1">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-brand-300" />
                <span className="text-gray-300">123 Work Street, Stockholm, Sweden</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-brand-300" />
                <span className="text-gray-300">+46 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-brand-300" />
                <span className="text-gray-300">info@workwise.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center md:text-left md:flex md:justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} WorkWise. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8 justify-center md:justify-end">
              <li><a href="#" className="text-gray-400 text-sm hover:text-brand-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-brand-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
