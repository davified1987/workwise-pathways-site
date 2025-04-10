
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
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="text-brand-600 mb-5 bg-brand-50 p-4 inline-block rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group"
      >
        Learn more 
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default ServiceCard;
