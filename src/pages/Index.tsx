
import { Link } from 'react-router-dom';
import { Users, Briefcase, LineChart, FileQuestion } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const services = [
    {
      title: "Rusta & Matcha",
      description: "Comprehensive support to prepare job seekers for employment and matching with suitable opportunities.",
      icon: <Users size={40} />,
      link: "/transition"
    },
    {
      title: "Labor Market Projects",
      description: "Tailored programs designed to address specific workforce needs and labor market challenges.",
      icon: <Briefcase size={40} />,
      link: "/transition"
    },
    {
      title: "Career Guidance",
      description: "Expert guidance to help individuals navigate career choices and professional development paths.",
      icon: <LineChart size={40} />,
      link: "/transition"
    },
    {
      title: "Outplacement",
      description: "Supportive transition services for organizations and employees during workforce changes.",
      icon: <FileQuestion size={40} />,
      link: "/transition"
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Creating Paths to Sustainable Employment"
          subtitle="We help individuals and organizations navigate transitions and build brighter futures through tailored employment solutions."
          cta="Explore Our Services"
          ctaLink="/transition"
          fullHeight={true}
        />
        
        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We offer comprehensive transition services designed to meet the needs of both job seekers and employers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="About WorkWise" 
                  className="rounded-lg shadow-md"
                />
              </div>
              
              <div>
                <h2 className="mb-4">About WorkWise</h2>
                <p className="text-gray-600 mb-6">
                  For over 15 years, WorkWise has been at the forefront of creating innovative solutions for the labor market. 
                  We bridge the gap between job seekers and employers, providing specialized services that adapt to the ever-changing employment landscape.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of dedicated professionals brings expertise from diverse fields to create holistic approaches to employment challenges.
                </p>
                <Link to="/about">
                  <Button className="btn-secondary">Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Success Stories Section */}
        <section className="section-padding bg-brand-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Success Stories</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We've helped thousands of individuals find meaningful employment and organizations navigate workforce transitions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Success Story 1 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <blockquote className="mb-4 italic text-gray-600">
                  "The career guidance services at WorkWise helped me identify my strengths and find a job I truly love. Their personalized approach made all the difference."
                </blockquote>
                <div className="font-semibold">Anna, Software Developer</div>
              </div>
              
              {/* Success Story 2 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <blockquote className="mb-4 italic text-gray-600">
                  "After being laid off, WorkWise's outplacement services gave me the support and tools I needed to quickly transition to a new role that exceeded my expectations."
                </blockquote>
                <div className="font-semibold">Marcus, Marketing Manager</div>
              </div>
              
              {/* Success Story 3 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <blockquote className="mb-4 italic text-gray-600">
                  "As a company undergoing restructuring, WorkWise provided invaluable guidance in supporting our employees through the transition with dignity and practical assistance."
                </blockquote>
                <div className="font-semibold">Lena, HR Director</div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/contact">
                <Button className="btn-primary">Start Your Success Story</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-brand-600 text-white py-16">
          <div className="container-custom text-center">
            <h2 className="mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our services can help you or your organization navigate employment transitions.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
