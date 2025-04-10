
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  // FAQ categories and questions
  const categories = [
    {
      name: "Arbetssökande",
      questions: [
        {
          question: "Hur kan RE:SHIFT hjälpa mig att hitta ett jobb?",
          answer: "RE:SHIFT erbjuder ett brett utbud av tjänster för att hjälpa dig hitta anställning, inklusive kompetensbedömning, jobbsökningsstrategier, CV-optimering, intervjuförberedelse och direkta kopplingar till potentiella arbetsgivare genom vårt omfattande nätverk. Vårt Rusta & Matcha-program är specifikt utformat för att förbereda dig för arbetsmarknaden och matcha dig med lämpliga möjligheter."
        },
        {
          question: "Är era tjänster gratis för arbetssökande?",
          answer: "Många av våra tjänster för arbetssökande tillhandahålls utan kostnad genom partnerskap med offentliga arbetsförmedlingar och andra finansieringskällor. Vissa specialiserade tjänster kan ha avgifter, men vi är alltid transparenta med eventuella kostnader innan du förbinder dig. Kontakta oss för att få veta vilka tjänster du kan få tillgång till utan kostnad."
        },
        {
          question: "Hur lång tid tar det vanligtvis att hitta anställning genom era tjänster?",
          answer: "Tidsramen varierar baserat på faktorer som dina färdigheter, erfarenhet, aktuell arbetsmarknad och din flexibilitet gällande jobbtyp och plats. Vissa klienter hittar anställning inom veckor, medan andra kan ta flera månader. Vårt mål är att hitta inte bara vilket jobb som helst, utan rätt jobb för dina omständigheter och karriärmål."
        },
        {
          question: "Kan ni hjälpa mig om jag vill byta karriär?",
          answer: "Ja, våra Karriär- och yrkesvägledningstjänster är specifikt utformade för att hjälpa individer som överväger karriärbyten. Vi arbetar med dig för att bedöma dina överförbara färdigheter, identifiera potentiella nya karriärvägar, och utveckla en strategi för att övergå till ett nytt område, vilket kan inkludera rekommendationer för ytterligare utbildning."
        }
      ]
    },
    {
      name: "Arbetsgivare",
      questions: [
        {
          question: "Hur kan RE:SHIFT hjälpa min organisation med rekrytering?",
          answer: "Vi hjälper arbetsgivare att hitta kvalificerade kandidater genom vår pool av jobbklara individer. Vår matchningsprocess tar hänsyn till inte bara färdigheter och erfarenhet, utan även arbetsplatskultur och långsiktig potential. Vi kan hantera den initiala urvalsprocessen, presentera förkvalificerade kandidater för dig, och till och med ge stöd under introduktionsprocessen."
        },
        {
          question: "Vad gör ert rekryteringssätt annorlunda från traditionella metoder?",
          answer: "Vårt tillvägagångssätt fokuserar på hållbara anställningsmatchningar som gynnar både arbetsgivare och anställda. Vi tar oss tid att förstå din organisations behov, kultur och långsiktiga mål, inte bara de omedelbara jobbkraven. Detta resulterar i högre behållningsgrad och bättre prestationsresultat jämfört med traditionella rekryteringsmetoder."
        },
        {
          question: "Hur fungerar era outplacement-tjänster?",
          answer: "Våra outplacement-tjänster hjälper organisationer att hantera personalminskningar på ett medkännande och effektivt sätt. Vi ger berörda anställda karriärrådgivning, jobbsökningsstöd och andra resurser för att hjälpa dem övergå till nya anställningar. Detta tillvägagångssätt hjälper till att upprätthålla din organisations rykte som arbetsgivare samtidigt som det uppfyller etiska skyldigheter gentemot avgående anställda."
        },
        {
          question: "Kan ni hjälpa till med tillfälliga personalbehov?",
          answer: "Ja, vi kan hjälpa till med både tillfälliga och permanenta personallösningar. För tillfälliga behov kan vi snabbt koppla dig till kvalificerade yrkespersoner som kan kliva in med kort varsel. Vi erbjuder också temp-till-perm-arrangemang som låter båda parter bedöma passformen innan de förbinder sig till permanent anställning."
        }
      ]
    },
    {
      name: "Våra program",
      questions: [
        {
          question: "Vad är Rusta & Matcha-programmet?",
          answer: "Rusta & Matcha är vårt flaggskeppsprogram som ger omfattande stöd till arbetssökande. 'Rusta'-fasen fokuserar på att förbereda individer för anställning genom kompetensbedömning, utveckling och jobbsökningsförberedelse. 'Matcha'-fasen kopplar förberedda kandidater med lämpliga arbetsgivare, vilket underlättar en bra matchning för båda parter."
        },
        {
          question: "Hur finansieras era arbetsmarknadsprojekt?",
          answer: "Våra arbetsmarknadsprojekt finansieras genom olika källor, inklusive statliga myndigheter, EU-bidrag, privata företag och stiftelser. Finansieringsmodellen beror på det specifika projektet, dess mål och de involverade intressenterna. Vi är alltid transparenta med finansieringskällor för alla våra initiativ."
        },
        {
          question: "Vilka typer av karriärvägledning erbjuder ni?",
          answer: "Vi erbjuder ett brett utbud av karriärvägledningstjänster, inklusive karriärbedömning och utforskning, utbildningsplanering, navigering vid karriärbyte, professionell utvecklingsplanering, rådgivning om balans mellan arbete och privatliv, och långsiktig karriärbaneplaneringen. Vårt tillvägagångssätt är alltid personligt anpassat efter individens specifika behov och omständigheter."
        },
        {
          question: "Erbjuder ni specialiserade tjänster för unga som träder in på arbetsmarknaden?",
          answer: "Ja, vi har program specifikt utformade för unga som träder in i arbetslivet för första gången. Dessa inkluderar praktikplatsering, lärlingsutbildningsprogram, matchning för nybörjarjobb, och vägledning om utbildnings- och träningsalternativ som stämmer överens med karriärmål. Vi förstår de unika utmaningar som unga arbetssökande står inför och ger lämpligt stöd."
        }
      ]
    },
    {
      name: "Att arbeta med oss",
      questions: [
        {
          question: "Hur kommer jag igång med RE:SHIFT-tjänster?",
          answer: "Första steget är att kontakta oss via telefon, e-post eller formuläret på vår webbplats. Vi kommer att schemalägga ett inledande samråd för att förstå dina behov och förklara de relevanta tjänster vi erbjuder. För arbetssökande inkluderar detta vanligtvis en bedömning av dina färdigheter och karriärmål. För arbetsgivare kommer vi att diskutera dina personalbehov och organisationskultur."
        },
        {
          question: "Var finns era kontor?",
          answer: "Vi har kontor i Stockholm (huvudkontor), Göteborg, Malmö, Uppsala, Linköping och Umeå. Denna nationella närvaro gör att vi kan betjäna kunder i hela Sverige. Om du inte kan besöka någon av våra fysiska platser erbjuder vi också virtuella konsultationer och tjänster."
        },
        {
          question: "Arbetar ni med internationella klienter?",
          answer: "Ja, vi arbetar med både internationella arbetssökande som letar efter anställning i Sverige och internationella företag som söker etablera eller utöka sin närvaro på den svenska marknaden. Vi kan ge vägledning om svenska arbetsrättslagar, kulturella överväganden och andra aspekter av det lokala anställningslandskapet."
        },
        {
          question: "Vilka branscher specialiserar ni er på?",
          answer: "Medan vi arbetar inom alla större branscher har vi särskild expertis inom IT och teknik, sjukvård, tillverkning, detaljhandel, hotell och restaurang samt offentlig sektor. Vårt team inkluderar specialister med branschspecifik kunskap som förstår de unika kraven och möjligheterna inom dessa områden."
        }
      ]
    }
  ];
  
  // State to track which questions are expanded
  const [expandedQuestions, setExpandedQuestions] = useState<{[key: string]: boolean}>({});
  
  // Toggle question expansion
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Check if a question is expanded
  const isExpanded = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    return expandedQuestions[key] || false;
  };

  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Frågor & Svar"
          subtitle="Hitta svar på vanliga frågor om våra tjänster och hur vi kan hjälpa."
          image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
        />
        
        {/* FAQ Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4">Vanliga frågor</h2>
              <p className="text-gray-600 text-lg">
                Bläddra bland våra vanligt ställda frågor för att hitta den information du behöver. Om du inte ser din fråga här, tveka inte att kontakta oss.
              </p>
            </div>
            
            <div className="space-y-8">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <h3 className="text-xl font-bold bg-brand-50 p-6 border-b border-gray-100">
                    {category.name}
                  </h3>
                  
                  <div className="divide-y divide-gray-100">
                    {category.questions.map((item, questionIndex) => (
                      <div key={questionIndex} className="p-6">
                        <button 
                          className="flex justify-between items-center w-full text-left"
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          aria-expanded={isExpanded(categoryIndex, questionIndex)}
                        >
                          <span className="font-medium text-lg">{item.question}</span>
                          {isExpanded(categoryIndex, questionIndex) ? 
                            <ChevronUp className="flex-shrink-0 text-brand-600" size={20} /> : 
                            <ChevronDown className="flex-shrink-0 text-brand-600" size={20} />
                          }
                        </button>
                        
                        {isExpanded(categoryIndex, questionIndex) && (
                          <div className="mt-4 text-gray-600 pl-0 lg:pl-6">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Still Have Questions */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Har du fortfarande frågor?</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Om du inte kunde hitta svaret du letade efter är vårt team redo att hjälpa. Kontakta oss för personlig assistans.
              </p>
              <Link to="/contact">
                <Button className="btn-primary">Kontakta oss</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Faq;
