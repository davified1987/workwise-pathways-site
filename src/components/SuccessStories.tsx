
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessStories = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pattern-dots"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-orange-600 font-medium mb-2 inline-block uppercase tracking-wider text-sm">Framgångshistorier</span>
          <h2 className="mb-6 text-gradient">Transformerar karriärer & organisationer</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Se hur vi har hjälpt tusentals individer hitta meningsfullt arbete och organisationer navigera arbetskraftsövergångar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Success Story 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-orange-100 text-orange-600 rounded-bl-2xl p-4">
              <Star className="w-6 h-6" />
            </div>
            <div className="mb-6 text-orange-600">
              <User size={40} />
            </div>
            <blockquote className="mb-6 text-gray-600 relative">
              <span className="text-5xl absolute -top-2 -left-1 text-orange-200">"</span>
              <p className="relative z-10 italic pl-5">Karriärvägledningstjänsterna hos RE:SHIFT hjälpte mig identifiera mina styrkor och hitta ett jobb jag verkligen älskar. Deras personliga metod gjorde hela skillnaden på 2025 års konkurrensutsatta marknad.</p>
            </blockquote>
            <div className="font-semibold text-gray-900">Anna, Mjukvaruutvecklare</div>
            <div className="text-sm text-gray-500">Stockholm, Sverige</div>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-orange-300 to-red-300"></div>
          </div>
          
          {/* Success Story 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-orange-100 text-orange-600 rounded-bl-2xl p-4">
              <Star className="w-6 h-6" />
            </div>
            <div className="mb-6 text-orange-600">
              <User size={40} />
            </div>
            <blockquote className="mb-6 text-gray-600 relative">
              <span className="text-5xl absolute -top-2 -left-1 text-orange-200">"</span>
              <p className="relative z-10 italic pl-5">Efter att ha blivit uppsagd gav RE:SHIFT:s outplacement-tjänster mig det stöd och de verktyg jag behövde för att snabbt övergå till en ny roll som överträffade mina förväntningar.</p>
            </blockquote>
            <div className="font-semibold text-gray-900">Marcus, Marknadsföringschef</div>
            <div className="text-sm text-gray-500">Göteborg, Sverige</div>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-orange-300 to-red-300"></div>
          </div>
          
          {/* Success Story 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-orange-100 text-orange-600 rounded-bl-2xl p-4">
              <Star className="w-6 h-6" />
            </div>
            <div className="mb-6 text-orange-600">
              <Briefcase size={40} />
            </div>
            <blockquote className="mb-6 text-gray-600 relative">
              <span className="text-5xl absolute -top-2 -left-1 text-orange-200">"</span>
              <p className="relative z-10 italic pl-5">Som ett företag som genomgår omstrukturering gav RE:SHIFT ovärderlig vägledning för att stödja våra anställda genom övergången med värdighet och praktisk hjälp.</p>
            </blockquote>
            <div className="font-semibold text-gray-900">Lena, HR-direktör</div>
            <div className="text-sm text-gray-500">Malmö, Sverige</div>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-orange-300 to-red-300"></div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button className="orange-gradient text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all">
              <span className="flex items-center">Starta din framgångssaga <ArrowRight className="ml-2 w-4 h-4" /></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
