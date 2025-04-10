
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
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 bg-brand-500 -mr-8 -mt-8 rounded-full"></div>
      
      <div className="text-brand-600 mb-5 p-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 relative z-10">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      
      <Link 
        to={link} 
        className="inline-flex items-center text-brand-600 font-medium group-hover:text-brand-700"
      >
        <span className="relative">
          Learn more
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
        </span>
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default ServiceCard;
