
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const About = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="About WorkWise"
          subtitle="Learn about our mission, values, and the team behind our success."
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        
        {/* Mission and Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="mb-6">Our Mission & Vision</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    <strong className="text-brand-700">Our Mission:</strong> To create sustainable pathways to employment by connecting individuals with meaningful work and helping organizations build resilient workforces.
                  </p>
                  <p>
                    <strong className="text-brand-700">Our Vision:</strong> A labor market where every person has the opportunity to reach their full potential, and organizations have access to the talent they need to thrive.
                  </p>
                  <p>
                    Since our founding in 2008, WorkWise has been dedicated to addressing the complex challenges of the modern labor market. We've grown from a small consultancy to a nationwide provider of comprehensive employment solutions.
                  </p>
                  <p>
                    Our approach combines deep expertise in labor market dynamics with a genuine commitment to the success of both individuals and organizations. We believe that the right match between talent and opportunity creates lasting value for all parties involved.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Our mission and vision" 
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
              <h2 className="mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                These principles guide our work and relationships with clients, partners, and each other.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our actions, prioritizing honesty, transparency, and fairness in every interaction.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Empowerment</h3>
                <p className="text-gray-600">
                  We believe in providing individuals with the tools, knowledge, and support they need to take control of their career development.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek better ways to address labor market challenges, embracing new ideas and approaches to create effective solutions.
                </p>
              </div>
              
              {/* Value 4 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Collaboration</h3>
                <p className="text-gray-600">
                  We work together with clients, partners, and communities to develop solutions that address complex employment challenges.
                </p>
              </div>
              
              {/* Value 5 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Inclusivity</h3>
                <p className="text-gray-600">
                  We are committed to creating opportunities for all individuals, regardless of background or circumstance, and celebrating diversity in the workplace.
                </p>
              </div>
              
              {/* Value 6 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-brand-700">Impact</h3>
                <p className="text-gray-600">
                  We measure our success by the positive difference we make in the lives of individuals and the performance of organizations we support.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Meet the experienced professionals who guide our organization and drive our mission forward.
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
                <p className="text-brand-700 mb-2">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 20 years of experience in employment services, Emma founded WorkWise with a vision for a more effective approach to labor market challenges.
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
                <p className="text-brand-700 mb-2">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Johan brings expertise in organizational development and strategic planning to ensure our services deliver maximum impact.
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
                <p className="text-brand-700 mb-2">Director of Employment Services</p>
                <p className="text-gray-600">
                  Sara leads our employment programs with deep insight into labor market trends and effective job-matching methodologies.
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
                <p className="text-brand-700 mb-2">Head of Corporate Partnerships</p>
                <p className="text-gray-600">
                  Marcus develops and maintains our relationships with employer partners, creating pathways for job seekers to find meaningful work.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our History */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Journey</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                From our founding to the present day, we've continuously evolved to meet the changing needs of the labor market.
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
                  <h3 className="text-xl font-bold mb-2">Founding</h3>
                  <p className="text-gray-600">
                    WorkWise was founded in Stockholm with a small team dedicated to improving employment services through a more personalized approach.
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
                    We opened offices in Gothenburg and Malmö, expanding our capacity to serve job seekers and employers across southern Sweden.
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
                    Launched our pioneering Rusta & Matcha program, setting a new standard for employment services in Sweden.
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
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <p className="text-gray-600">
                    Opened offices in Uppsala, Linköping, and Umeå, achieving nationwide coverage and serving thousands of clients annually.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 5 */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="md:col-span-1 text-center md:text-right">
                  <span className="text-brand-700 font-bold text-xl">Today</span>
                </div>
                <div className="hidden md:block md:col-span-1 justify-self-center h-full">
                  <div className="h-full w-px bg-brand-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-600"></div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-2">Present Day</h3>
                  <p className="text-gray-600">
                    WorkWise continues to evolve and innovate, developing new approaches to meet the challenges of a rapidly changing labor market.
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
