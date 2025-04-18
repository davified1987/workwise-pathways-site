
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeCTA = () => {
  return (
    <section className="dark-blue-gradient text-white py-20 relative overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="500" cy="300" r="200" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
          <circle cx="500" cy="300" r="300" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
        </svg>
      </div>
      
      <div className="container-custom text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">Redo att Re:Shift din framtid?</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Kontakta oss idag för att diskutera hur våra tjänster kan hjälpa dig eller din organisation att navigera sysselsättningsövergångar i 2025 års föränderliga landskap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-darkBlue hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                <span className="flex items-center">Kontakta oss <ArrowRight className="ml-2 w-4 h-4" /></span>
              </Button>
            </Link>
            <Link to="/transition">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full">
                <span className="flex items-center">Visa tjänster <ArrowRight className="ml-2 w-4 h-4" /></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
