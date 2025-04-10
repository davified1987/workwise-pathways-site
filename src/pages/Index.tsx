
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, LineChart, FileQuestion, ArrowRight, User, Target, Lightbulb, Repeat, Star } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
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
    <>
      <Header />
      
      <main>
        <Hero 
          title="Omdefinierar karriärövergångar för 2025"
          subtitle="Vi hjälper individer och organisationer att navigera övergångar och bygga ljusare framtider genom innovativa sysselsättningslösningar och strategisk vägledning."
          cta="Utforska våra tjänster"
          ctaLink="/transition"
          image="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          fullHeight={true}
        />
        
        {/* Services Section */}
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
        
        {/* About Section */}
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
        
        {/* Success Stories Section */}
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
        
        {/* CTA Section */}
        <section className="orange-gradient text-white py-20 relative overflow-hidden">
          {/* Geometric pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="500" cy="300" r="200" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
            <circle cx="500" cy="300" r="300" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
          </svg>
          
          <div className="container-custom text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-6 text-white">Redo att Re:Shift din framtid?</h2>
              <p className="text-xl mb-10 text-white/90 leading-relaxed">
                Kontakta oss idag för att diskutera hur våra tjänster kan hjälpa dig eller din organisation att navigera sysselsättningsövergångar i 2025 års föränderliga landskap.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
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
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
