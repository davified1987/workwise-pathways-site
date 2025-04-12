
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Transition = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Omställningstjänster"
          subtitle="Omfattande lösningar för att navigera anställningsövergångar för både individer och organisationer."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        
        {/* Intro Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Vår metod för omställningar</h2>
              <p className="text-gray-600 text-lg mb-8">
                På RE:SHIFT förstår vi att övergångar på arbetsmarknaden kräver skräddarsydda lösningar. 
                Våra omfattande tjänster är utformade för att möta de unika behoven hos både individer som 
                söker anställning och organisationer som navigerar genom personalförändringar.
              </p>
            </div>
          </div>
        </section>
        
        {/* Rusta & Matcha */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Rusta & Matcha</h2>
                <p className="text-gray-600 mb-4">
                  Våra Rusta & Matcha-tjänster förbereder arbetssökande för arbetsmarknaden och 
                  kopplar dem till lämpliga jobbmöjligheter. Denna dubbla strategi säkerställer 
                  att individer inte bara är redo för arbete utan också matchas med positioner 
                  som stämmer överens med deras kompetens och ambitioner.
                </p>
                <h3 className="text-xl font-bold mb-3">Huvudkomponenter:</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Kompetensbedömning och utveckling</li>
                  <li>Jobbsökningsstrategier och verktyg</li>
                  <li>Intervjuförberedelse</li>
                  <li>CV- och personligt brev-optimering</li>
                  <li>Arbetsgivarmatchning baserad på kompetens och preferenser</li>
                  <li>Löpande stöd under ansökningsprocessen</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group">
                  Läs mer om Rusta & Matcha 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Rusta & Matcha" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Labor Market Projects */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Arbetsmarknadsprojekt" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-4">Arbetsmarknadsprojekt</h2>
                <p className="text-gray-600 mb-4">
                  Våra arbetsmarknadsprojekt adresserar specifika utmaningar i arbetsmarknaden genom 
                  riktade initiativ. Vi samarbetar med offentliga och privata aktörer för att utveckla 
                  och implementera projekt som skapar hållbara anställningslösningar.
                </p>
                <h3 className="text-xl font-bold mb-3">Våra projekt inkluderar:</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Branschspecifika utbildningsprogram</li>
                  <li>Integrationsinitiativ för underrepresenterade grupper</li>
                  <li>Regional sysselsättningsutveckling</li>
                  <li>Kompetensgapsanalys och riktad utbildning</li>
                  <li>Offentlig-privata partnerskapsprogram</li>
                  <li>Karriärutveckling för specifika populationer</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group">
                  Utforska våra arbetsmarknadsprojekt
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Career and Vocational Guidance */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Karriär- och yrkesvägledning</h2>
                <p className="text-gray-600 mb-4">
                  Våra karriärvägledningstjänster hjälper individer att fatta välgrundade beslut om sina professionella vägar. 
                  Vi ger personligt stöd som tar hänsyn till varje persons unika färdigheter, intressen och förutsättningar.
                </p>
                <h3 className="text-xl font-bold mb-3">Vår vägledning inkluderar:</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Karriärbedömning och utforskning</li>
                  <li>Utbildningsplanering och vägledning</li>
                  <li>Navigering vid karriärbyte</li>
                  <li>Planering av professionell utveckling</li>
                  <li>Balans mellan arbete och privatliv</li>
                  <li>Långsiktig karriärplaneringsbana</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group">
                  Läs mer om våra karriärvägledningstjänster 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Karriär- och yrkesvägledning" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Outplacement */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Outplacement" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-4">Outplacement</h2>
                <p className="text-gray-600 mb-4">
                  Våra outplacement-tjänster stöder både organisationer och anställda under personalomställningar. 
                  Vi ger medkännande och effektiv hjälp för att hjälpa individer hitta nya möjligheter och 
                  organisationer att hantera förändringar på ett ansvarsfullt sätt.
                </p>
                <h3 className="text-xl font-bold mb-3">Våra outplacement-tjänster inkluderar:</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Övergångsrådgivning och emotionellt stöd</li>
                  <li>Personlig karriärcoaching</li>
                  <li>Jobbsökningsstrategiutveckling</li>
                  <li>CV och online-profiloptimering</li>
                  <li>Nätverkande och intervjuförberedelse</li>
                  <li>Tillgång till vårt arbetsgivarnätverk</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group">
                  Utforska våra outplacement-tjänster 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-brand-600 text-white py-16">
          <div className="container-custom text-center">
            <h2 className="mb-6">Behöver du hjälp med anställningsövergångar?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Kontakta oss idag för att diskutera hur våra omställningstjänster kan stödja dig eller din organisation.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Kontakta oss
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Transition;
