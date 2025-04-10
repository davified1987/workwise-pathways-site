
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeAbout = () => {
  return (
    <section className="section-padding relative bg-gray-50 overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
        <svg className="h-full w-full" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L400,0 L400,800 L200,600 L0,800 Z" fill="rgba(239, 100, 0, 0.2)" />
          <path d="M150,400 L400,150 L400,0 L0,0 L0,150 Z" fill="rgba(255, 61, 97, 0.15)" />
        </svg>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl relative z-10 image-reveal">
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Om RE:SHIFT" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500 rounded-lg z-0 blob-animation"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-orange-300 rounded-lg z-0"></div>
          </div>
          
          <div>
            <span className="text-orange-600 font-medium mb-2 inline-block uppercase tracking-wider text-sm">Om oss</span>
            <h2 className="mb-6 text-gradient">RE:SHIFT Ditt karriärperspektiv</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              I över 15 år har RE:SHIFT varit i framkant med att skapa innovativa lösningar för den moderna arbetsmarknaden. 
              Vi överbryggar klyftan mellan arbetssökande och arbetsgivare, och tillhandahåller specialiserade tjänster som anpassar sig till det ständigt föränderliga anställningslandskapet.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Vårt team av engagerade proffs bidrar med expertis från olika områden för att skapa holistiska metoder för anställningsutmaningar 2025.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-orange-100 rounded-lg text-orange-600">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Syftesstyrd</h4>
                  <p className="text-gray-600">Vi är engagerade i meningsfulla resultat</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-orange-100 rounded-lg text-orange-600">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Innovativ</h4>
                  <p className="text-gray-600">Alltid utvecklande med marknadstrender</p>
                </div>
              </div>
            </div>
            
            <Link to="/about">
              <Button variant="outline" className="rounded-full px-6 py-3 border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
                Läs mer om oss <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
