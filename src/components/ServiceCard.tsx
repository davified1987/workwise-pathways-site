
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      {/* Geometric accent */}
      <div className="service-card-highlight"></div>
      
      {/* Pattern background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img 
          src="public/lovable-uploads/845f639d-dba8-4eea-abb0-48844e038e8b.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="service-icon">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 relative z-10">{title}</h3>
      <p className="text-gray-600 mb-5 relative z-10">{description}</p>
      
      <Link 
        to={link} 
        className="link-underline group"
      >
        <span className="relative">
          Explore
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
        </span>
        <ArrowRight size={16} className="link-arrow" />
      </Link>
    </div>
  );
};

export default ServiceCard;
