
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: string;
  ctaLink?: string;
  image?: string;
  fullHeight?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  cta = "Learn More", 
  ctaLink = "/contact",
  image = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  fullHeight = false 
}: HeroProps) => {
  return (
    <div className={`relative ${fullHeight ? 'min-h-[90vh]' : 'min-h-[60vh]'} flex items-center`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img 
          src={image} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white py-16">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-6 font-bold">{title}</h1>
          <p className="text-xl mb-10 text-gray-100 leading-relaxed">
            {subtitle}
          </p>
          <Link to={ctaLink}>
            <Button className="group btn-primary text-lg">
              {cta}
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
