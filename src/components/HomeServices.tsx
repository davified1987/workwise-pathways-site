
import React from 'react';
import { Users, Briefcase, LineChart, FileQuestion } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const HomeServices = () => {
  const services = [
    {
      title: "Karriärväxling",
      description: "Omfattande stöd för att förbereda arbetssökande för anställning och matcha med lämpliga möjligheter.",
      icon: <Users size={32} />,
      link: "/transition",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
    },
    {
      title: "Marknadsprojekt",
      description: "Skräddarsydda program utformade för att hantera specifika arbetskraftsbehov och arbetsmarknadsutmaningar.",
      icon: <Briefcase size={32} />,
      link: "/transition",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
    },
    {
      title: "Karriärvägledning",
      description: "Expertråd för att hjälpa individer navigera karriärval och professionella utvecklingsvägar.",
      icon: <LineChart size={32} />,
      link: "/transition",
      imageUrl: "https://images.unsplash.com/photo-1452457750107-cd084dce177d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Outplacement",
      description: "Stödjande övergångstjänster för organisationer och anställda under personalförändringar.",
      icon: <FileQuestion size={32} />,
      link: "/transition",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pattern-dots"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-orange-600 font-medium mb-2 inline-block uppercase tracking-wider text-sm">Vår expertis</span>
          <h2 className="mb-6 text-gradient">Tjänster som omdefinerar framgång</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Vår omfattande serie övergångstjänster utformade för att möta de utvecklande behoven hos både arbetssökande och arbetsgivare 2025 och framöver.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
