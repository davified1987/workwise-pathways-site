
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
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
  image = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  fullHeight = false 
}: HeroProps) => {
  return (
    <div className={`relative ${fullHeight ? 'min-h-[100vh]' : 'min-h-[70vh]'} flex items-center geometric-bg overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/60 z-10"></div>
        <img 
          src={image} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 z-5 opacity-50">
        <div className="absolute top-0 right-0 w-full h-full">
          <img 
            src="public/lovable-uploads/b720c1ce-c6bd-4e0e-b9e5-cf46d1e5cbd9.png" 
            alt="" 
            className="absolute top-0 right-0 w-1/2 h-full object-contain object-right opacity-20"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full">
          <img 
            src="public/lovable-uploads/326435a3-3dd9-4426-918b-d65e3fc78e2d.png" 
            alt="" 
            className="absolute bottom-0 left-0 w-1/2 h-1/2 object-contain object-left-bottom opacity-20"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-white py-16 mt-12">
        <div className="max-w-3xl space-y-6">
          <div className="fade-up">
            <span className="inline-block px-4 py-1 bg-orange-600/90 rounded-full text-sm font-medium mb-2">RE:SHIFT</span>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="font-bold leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 fade-up reveal-delay-1">{title}</h1>
          </div>
          
          <p className="text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl fade-up reveal-delay-2">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 fade-up reveal-delay-3">
            <Link to={ctaLink}>
              <Button className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg">
                <span className="relative z-10 flex items-center">
                  {cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
                <span className="absolute bg-white/10 inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </Button>
            </Link>
            
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 border-white/20 hover:bg-white/10 text-white">
              <span className="flex items-center">Discover More</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </div>
  );
};

export default Hero;
