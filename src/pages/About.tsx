
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const About = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Om RE:SHIFT"
          subtitle="Lär dig om vårt uppdrag, våra värderingar och teamet bakom vår framgång."
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        
        {/* Mission and Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Vårt uppdrag & vision</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    <strong className="text-brand-700">Vårt uppdrag:</strong> Att skapa hållbara vägar till anställning genom att koppla ihop individer med meningsfullt arbete och hjälpa organisationer att bygga motståndskraftiga arbetsstyrkor.
                  </p>
                  <p>
                    <strong className="text-brand-700">Vår vision:</strong> En arbetsmarknad där varje person har möjlighet att nå sin fulla potential, och organisationer har tillgång till den talang de behöver för att utvecklas.
                  </p>
                  <p>
                    Sedan vår grundande 2008 har RE:SHIFT varit dedikerade till att ta itu med de komplexa utmaningarna på den moderna arbetsmarknaden. Vi har vuxit från en liten konsultfirma till en nationell leverantör av omfattande sysselsättningslösningar.
                  </p>
                  <p>
                    Vårt tillvägagångssätt kombinerar djup expertis i arbetsmarknadsdynamik med ett genuint engagemang för både individers och organisationers framgång. Vi tror att rätt matchning mellan talang och möjligheter skapar bestående värde för alla inblandade parter.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Vårt uppdrag och vision" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Våra kärnvärden</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Dessa principer vägleder vårt arbete och relationer med klienter, partners och varandra.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Integritet</h3>
                <p className="text-gray-600">
                  Vi upprätthåller de högsta etiska standarderna i alla våra handlingar, prioriterar ärlighet, transparens och rättvisa i varje interaktion.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Egenmakt</h3>
                <p className="text-gray-600">
                  Vi tror på att ge individer de verktyg, kunskaper och det stöd de behöver för att ta kontroll över sin karriärutveckling.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Innovation</h3>
                <p className="text-gray-600">
                  Vi söker kontinuerligt bättre sätt att ta itu med arbetsmarknadsutmaningar och omfamnar nya idéer och metoder för att skapa effektiva lösningar.
                </p>
              </div>
              
              {/* Value 4 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Samarbete</h3>
                <p className="text-gray-600">
                  Vi samarbetar med klienter, partners och samhällen för att utveckla lösningar som adresserar komplexa sysselsättningsutmaningar.
                </p>
              </div>
              
              {/* Value 5 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Inkludering</h3>
                <p className="text-gray-600">
                  Vi är engagerade i att skapa möjligheter för alla individer, oavsett bakgrund eller omständighet, och att fira mångfald på arbetsplatsen.
                </p>
              </div>
              
              {/* Value 6 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Påverkan</h3>
                <p className="text-gray-600">
                  Vi mäter vår framgång genom den positiva skillnad vi gör i individers liv och prestanda hos organisationer vi stödjer.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Vårt ledarteam</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Möt de erfarna proffsen som vägleder vår organisation och driver vårt uppdrag framåt.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Emma Lindberg" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Emma Lindberg</h3>
                <p className="text-brand-700 mb-2">VD & Grundare</p>
                <p className="text-gray-600">
                  Med över 20 års erfarenhet av arbetsmarknadstjänster grundade Emma RE:SHIFT med en vision om en mer effektiv metod för arbetsmarknadsutmaningar.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Johan Svensson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Johan Svensson</h3>
                <p className="text-brand-700 mb-2">Operativ chef</p>
                <p className="text-gray-600">
                  Johan bidrar med expertis inom organisationsutveckling och strategisk planering för att säkerställa att våra tjänster levererar maximal effekt.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Sara Nordström" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Sara Nordström</h3>
                <p className="text-brand-700 mb-2">Chef för arbetsmarknadsinsatser</p>
                <p className="text-gray-600">
                  Sara leder våra sysselsättningsprogram med djup insikt i arbetsmarknadstrender och effektiva jobbmatchningsmetoder.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Marcus Andersson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Marcus Andersson</h3>
                <p className="text-brand-700 mb-2">Chef för företagspartnerskap</p>
                <p className="text-gray-600">
                  Marcus utvecklar och upprätthåller våra relationer med arbetsgivarpartners, vilket skapar vägar för arbetssökande att hitta meningsfullt arbete.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our History */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Vår resa</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Från vår grundande till idag har vi kontinuerligt utvecklats för att möta arbetsmarknadens förändrade behov.
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="md:col-span-1 text-center md:text-right">
                  <span className="text-brand-700 font-bold text-xl">2008</span>
                </div>
                <div className="hidden md:block md:col-span-1 justify-self-center h-full">
                  <div className="h-full w-px bg-brand-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-600"></div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-2">Grundande</h3>
                  <p className="text-gray-600">
                    RE:SHIFT grundades i Stockholm med ett litet team dedikerat till att förbättra arbetsmarknadstjänster genom en mer personlig metod.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="md:col-span-1 text-center md:text-right">
                  <span className="text-brand-700 font-bold text-xl">2012</span>
                </div>
                <div className="hidden md:block md:col-span-1 justify-self-center h-full">
                  <div className="h-full w-px bg-brand-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-600"></div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Vi öppnade kontor i Göteborg och Malmö, vilket utökade vår kapacitet att betjäna arbetssökande och arbetsgivare i hela södra Sverige.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="md:col-span-1 text-center md:text-right">
                  <span className="text-brand-700 font-bold text-xl">2015</span>
                </div>
                <div className="hidden md:block md:col-span-1 justify-self-center h-full">
                  <div className="h-full w-px bg-brand-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-600"></div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Lanserade vårt banbrytande Rusta & Matcha-program, vilket satte en ny standard för arbetsmarknadstjänster i Sverige.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="md:col-span-1 text-center md:text-right">
                  <span className="text-brand-700 font-bold text-xl">2018</span>
                </div>
                <div className="hidden md:block md:col-span-1 justify-self-center h-full">
                  <div className="h-full w-px bg-brand-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-600"></div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-2">Tillväxt</h3>
                  <p className="text-gray-600">
                    Öppnade kontor i Uppsala, Linköping och Umeå, uppnådde nationell täckning och betjänar tusentals klienter årligen.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 5 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="md:col-span-1 text-center md:text-right">
                  <span className="text-brand-700 font-bold text-xl">Idag</span>
                </div>
                <div className="hidden md:block md:col-span-1 justify-self-center h-full">
                  <div className="h-full w-px bg-brand-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-600"></div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-2">Nutid</h3>
                  <p className="text-gray-600">
                    RE:SHIFT fortsätter att utvecklas och innovera, utvecklar nya metoder för att möta utmaningarna på en snabbt föränderlig arbetsmarknad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
