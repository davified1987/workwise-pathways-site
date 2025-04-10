
import { MapPin, Phone, Mail } from 'lucide-react';

interface OfficeLocationProps {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  imageUrl: string;
}

const OfficeLocation = ({ 
  name, 
  address, 
  city, 
  phone, 
  email, 
  imageUrl 
}: OfficeLocationProps) => {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${name} office`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        
        <div className="space-y-3 text-gray-600">
          <div className="flex items-start">
            <MapPin size={18} className="mt-1 mr-3 text-brand-600 flex-shrink-0" />
            <div>
              <p>{address}</p>
              <p>{city}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Phone size={18} className="mr-3 text-brand-600 flex-shrink-0" />
            <p>{phone}</p>
          </div>
          
          <div className="flex items-center">
            <Mail size={18} className="mr-3 text-brand-600 flex-shrink-0" />
            <p className="text-brand-600 hover:underline">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;
