
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
    <div className={`relative ${fullHeight ? 'min-h-[90vh]' : 'min-h-[60vh]'} flex items-center geometric-bg overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
        <img 
          src={image} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 z-5 opacity-30">
        <img 
          src="public/lovable-uploads/d950bb48-0e6b-4f48-a1e5-ff1d248028fc.png" 
          alt="" 
          className="absolute top-0 right-0 w-2/3 h-full object-cover object-right"
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white py-16">
        <div className="max-w-2xl animate-fade-in space-y-6">
          <span className="px-4 py-1 bg-brand-600/90 rounded-full text-sm font-medium inline-block mb-2">WorkWise</span>
          <h1 className="font-bold">{title}</h1>
          <p className="text-xl mb-10 text-gray-100 leading-relaxed">
            {subtitle}
          </p>
          <Link to={ctaLink}>
            <Button className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-brand-600 to-coral-500 hover:from-brand-700 hover:to-coral-600 text-white rounded-full text-lg">
              <span className="relative z-10 flex items-center">
                {cta}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </span>
              <span className="absolute bg-white/10 inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
