
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlueSection = () => {
  return (
    <section className="py-24 bg-[#0EA5E9] relative overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="200" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="800" cy="200" r="100" stroke="white" strokeWidth="2" fill="none" />
            <path d="M0,800 L400,600 L800,800" stroke="white" strokeWidth="3" fill="none" />
            <path d="M1200,0 L1000,200 L1200,400" stroke="white" strokeWidth="3" fill="none" />
            <rect x="100" y="100" width="200" height="200" stroke="white" strokeWidth="2" fill="none" transform="rotate(30 200 200)" />
            <rect x="900" y="500" width="150" height="150" stroke="white" strokeWidth="2" fill="none" transform="rotate(-15 975 575)" />
          </svg>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategiskt karriärstöd i en digital era</h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                I dagens snabbt föränderliga arbetsmiljö behöver du en partner som förstår morgondagens krav. Våra digitala verktyg och expertrådgivning hjälper dig att navigera din karriärresa med precision.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full">
                  <span className="flex items-center">Boka konsultation <ArrowRight className="ml-2 w-4 h-4" /></span>
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"></div>
              <div className="glass-card bg-white/10 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden border border-white/20">
                <div className="relative z-10">
                  <h3 className="text-white text-2xl font-semibold mb-4">Digital Omställning</h3>
                  <ul className="space-y-3 text-white/90 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Personliga digitala karriärplaneringsverktyg</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>AI-driven kompetensanalys och utveckling</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Virtuella mentorskapsprogram</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Kontinuerlig uppföljning och stöd</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full -mb-16 -mr-16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueSection;
