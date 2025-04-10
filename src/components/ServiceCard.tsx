
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  imageUrl?: string;
}

const ServiceCard = ({ title, description, icon, link, imageUrl }: ServiceCardProps) => {
  return (
    <div className="service-card group relative flex flex-col h-full">
      {/* Geometric accent */}
      <div className="service-card-highlight"></div>
      
      {/* Background image with overlay */}
      {imageUrl && (
        <div className="absolute inset-0 opacity-10 overflow-hidden rounded-xl">
          <img 
            src={imageUrl} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Pattern background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="w-full h-full pattern-dots"></div>
      </div>
      
      <div className="service-icon">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 relative z-10">{title}</h3>
      <p className="text-gray-600 mb-5 relative z-10">{description}</p>
      
      <div className="mt-auto relative z-10">
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
    </div>
  );
};

export default ServiceCard;
