
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
      title: "Career Transition",
      description: "Comprehensive support to prepare job seekers for employment and matching with suitable opportunities.",
      icon: <Users size={32} />,
      link: "/transition"
    },
    {
      title: "Market Projects",
      description: "Tailored programs designed to address specific workforce needs and labor market challenges.",
      icon: <Briefcase size={32} />,
      link: "/transition"
    },
    {
      title: "Career Guidance",
      description: "Expert guidance to help individuals navigate career choices and professional development paths.",
      icon: <LineChart size={32} />,
      link: "/transition"
    },
    {
      title: "Outplacement",
      description: "Supportive transition services for organizations and employees during workforce changes.",
      icon: <FileQuestion size={32} />,
      link: "/transition"
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Redefining Career Transitions for 2025"
          subtitle="We help individuals and organizations navigate transitions and build brighter futures through innovative employment solutions and strategic guidance."
          cta="Explore Our Services"
          ctaLink="/transition"
          fullHeight={true}
        />
        
        {/* Services Section */}
        <section className="section-padding relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 z-0 opacity-5">
            <img 
              src="public/lovable-uploads/845f639d-dba8-4eea-abb0-48844e038e8b.png" 
              alt="" 
              className="absolute top-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-orange-600 font-medium mb-2 inline-block uppercase tracking-wider text-sm">Our expertise</span>
              <h2 className="mb-6 text-gradient">Services That Redefine Success</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our comprehensive suite of transition services designed to meet the evolving needs of both job seekers and employers in 2025 and beyond.
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
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="section-padding relative bg-gray-50 overflow-hidden">
          {/* Geometric accent */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <img 
              src="public/lovable-uploads/a25b7afc-2085-42d0-8e2f-c1cdf5b8db1a.png" 
              alt="" 
              className="h-full w-full object-cover object-left"
            />
          </div>
          
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="About RE:SHIFT" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500 rounded-lg z-0"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-orange-300 rounded-lg z-0"></div>
              </div>
              
              <div>
                <span className="text-orange-600 font-medium mb-2 inline-block uppercase tracking-wider text-sm">About us</span>
                <h2 className="mb-6 text-gradient">RE:SHIFT Your Career Perspective</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  For over 15 years, RE:SHIFT has been at the forefront of creating innovative solutions for the modern labor market. 
                  We bridge the gap between job seekers and employers, providing specialized services that adapt to the ever-changing employment landscape.
                </p>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Our team of dedicated professionals brings expertise from diverse fields to create holistic approaches to employment challenges in 2025.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-orange-100 rounded-lg text-orange-600">
                      <Target size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Purpose-Driven</h4>
                      <p className="text-gray-600">We're committed to meaningful outcomes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-orange-100 rounded-lg text-orange-600">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Innovative</h4>
                      <p className="text-gray-600">Always evolving with market trends</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/about">
                  <Button variant="outline" className="rounded-full px-6 py-3 border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
                    Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Success Stories Section */}
        <section className="section-padding relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 z-0 opacity-5">
            <img 
              src="public/lovable-uploads/1a2dc181-0c95-4b1d-8e96-1c3aadcdeae5.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-orange-600 font-medium mb-2 inline-block uppercase tracking-wider text-sm">Success stories</span>
              <h2 className="mb-6 text-gradient">Transforming Careers & Organizations</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                See how we've helped thousands of individuals find meaningful employment and organizations navigate workforce transitions.
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
                  <p className="relative z-10 italic pl-5">The career guidance services at RE:SHIFT helped me identify my strengths and find a job I truly love. Their personalized approach made all the difference in 2025's competitive market.</p>
                </blockquote>
                <div className="font-semibold text-gray-900">Anna, Software Developer</div>
                <div className="text-sm text-gray-500">Stockholm, Sweden</div>
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
                  <p className="relative z-10 italic pl-5">After being laid off, RE:SHIFT's outplacement services gave me the support and tools I needed to quickly transition to a new role that exceeded my expectations.</p>
                </blockquote>
                <div className="font-semibold text-gray-900">Marcus, Marketing Manager</div>
                <div className="text-sm text-gray-500">Gothenburg, Sweden</div>
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
                  <p className="relative z-10 italic pl-5">As a company undergoing restructuring, RE:SHIFT provided invaluable guidance in supporting our employees through the transition with dignity and practical assistance.</p>
                </blockquote>
                <div className="font-semibold text-gray-900">Lena, HR Director</div>
                <div className="text-sm text-gray-500">Malmö, Sweden</div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="orange-gradient text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all">
                  <span className="flex items-center">Start Your Success Story <ArrowRight className="ml-2 w-4 h-4" /></span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="orange-gradient text-white py-20 relative overflow-hidden">
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="public/lovable-uploads/c9280494-6eef-4e95-a091-2921d13953b3.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-6 text-white">Ready To Re:Shift Your Future?</h2>
              <p className="text-xl mb-10 text-white/90 leading-relaxed">
                Contact us today to discuss how our services can help you or your organization navigate employment transitions in 2025's evolving landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                    <span className="flex items-center">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></span>
                  </Button>
                </Link>
                <Link to="/transition">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full">
                    <span className="flex items-center">View Services <ArrowRight className="ml-2 w-4 h-4" /></span>
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
