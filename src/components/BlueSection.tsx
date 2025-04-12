
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BlueSection = () => {
  const benefits = [
    "Expertis inom moderna karriärövergångar",
    "Personligt anpassad vägledning",
    "Branschledande nätverk av arbetsgivare",
    "Datadrivna matchningsmetoder",
    "Kontinuerligt stöd genom hela processen",
    "Framtidssäkrade karriärstrategier"
  ];

  return (
    <section className="dark-blue-section">
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
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-400 font-medium mb-2 inline-block uppercase tracking-wider text-sm">Varför RE:SHIFT</span>
            <h2 className="mb-6 text-white">Framtidssäkra din karriärresa med oss</h2>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Navigera genom 2025 års arbetsmarknad med förtroende. Vårt expertteam är dedikerat till att hjälpa dig identifiera och utnyttja nya möjligheter genom en personligt anpassad strategi för karriärövergång.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3 text-orange-400">
                    <Check size={20} />
                  </div>
                  <p className="text-white/90">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Link to="/transition">
              <Button variant="outline" className="rounded-full px-6 py-3 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10">
                Utforska våra tjänster <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-white">Career 2025 Program</h3>
              <p className="text-white/80 mb-6">
                Vårt Premium Career 2025 Program hjälper dig att navigera i det ständigt föränderliga arbetslandskapet med expertvägledning och moderna verktyg.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="mr-3 text-orange-400">
                    <Check size={20} />
                  </div>
                  <p className="text-white/90">Djupgående karriäranalys</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-orange-400">
                    <Check size={20} />
                  </div>
                  <p className="text-white/90">1-på-1 coachning med experter</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-orange-400">
                    <Check size={20} />
                  </div>
                  <p className="text-white/90">Personliga matchningstjänster</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-orange-400">
                    <Check size={20} />
                  </div>
                  <p className="text-white/90">Exklusiva karriärevenemang</p>
                </div>
              </div>
              
              <Link to="/contact" className="block">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                  Boka konsultation
                </Button>
              </Link>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-orange-500/20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-orange-500/10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueSection;
