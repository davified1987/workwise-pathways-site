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
  cta = "Läs mer", 
  ctaLink = "/contact",
  image = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  fullHeight = false 
}: HeroProps) => {
  return (
    <div className={`relative ${fullHeight ? 'min-h-[100vh]' : 'min-h-[70vh]'} flex items-center geometric-bg overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/60 z-10"></div>
        <img 
          src={image} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 z-5 opacity-30">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg className="absolute top-0 right-0 h-full w-full opacity-20" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="200" fill="none" stroke="rgba(255,138,0,0.3)" strokeWidth="4" />
            <path d="M200,400 L600,400" stroke="rgba(255,61,97,0.4)" strokeWidth="4" />
            <path d="M400,200 L400,600" stroke="rgba(255,61,97,0.4)" strokeWidth="4" />
            <path d="M300,300 L500,500" stroke="rgba(255,138,0,0.3)" strokeWidth="4" />
            <path d="M500,300 L300,500" stroke="rgba(255,138,0,0.3)" strokeWidth="4" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full">
          <svg className="absolute bottom-0 left-0 h-1/2 w-1/2 opacity-20" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="300" height="300" fill="none" stroke="rgba(255,138,0,0.3)" strokeWidth="4" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(255,61,97,0.4)" strokeWidth="4" />
            <polygon points="200,100 250,175 325,175 275,250 300,325 200,275 100,325 125,250 75,175 150,175" fill="none" stroke="rgba(255,138,0,0.3)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      
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
              <Button 
                variant="default" 
                className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-8 py-6 text-lg shadow-lg"
              >
                <span className="flex items-center">
                  {cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 text-lg border-2 border-white/50 hover:bg-white/10 text-white"
            >
              <span className="flex items-center">Utforska mer</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </div>
  );
};

export default Hero;
