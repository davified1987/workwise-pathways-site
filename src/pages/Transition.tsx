
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
          title="Transition Services"
          subtitle="Comprehensive solutions to navigate employment transitions for individuals and organizations."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        
        {/* Intro Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Our Approach to Transitions</h2>
              <p className="text-gray-600 text-lg mb-8">
                At WorkWise, we understand that transitions in the labor market require tailored approaches. 
                Our comprehensive services are designed to meet the unique needs of both individuals seeking 
                employment and organizations navigating workforce changes.
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
                  Our Rusta & Matcha services prepare job seekers for the labor market and connect them with 
                  suitable employment opportunities. This dual approach ensures individuals are not only ready 
                  for work but also matched with positions that align with their skills and aspirations.
                </p>
                <h3 className="text-xl font-bold mb-3">Key Components:</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Skills assessment and development</li>
                  <li>Job-seeking strategies and tools</li>
                  <li>Interview preparation</li>
                  <li>CV and cover letter optimization</li>
                  <li>Employer matching based on skills and preferences</li>
                  <li>Ongoing support during the application process</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group">
                  Learn more about Rusta & Matcha 
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
                  alt="Labor Market Projects" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-4">Labor Market Projects</h2>
                <p className="text-gray-600 mb-4">
                  Our Labor Market Projects address specific challenges in the employment landscape through 
                  targeted initiatives. We collaborate with public and private entities to develop and implement 
                  projects that create sustainable employment solutions.
                </p>
                <h3 className="text-xl font-bold mb-3">Our Projects Include:</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Industry-specific training programs</li>
                  <li>Integration initiatives for underrepresented groups</li>
                  <li>Regional employment development</li>
                  <li>Skills gap analysis and targeted education</li>
                  <li>Public-private partnership programs</li>
                  <li>Career development for specific populations</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group">
                  Explore our Labor Market Projects 
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
                <h2 className="mb-4">Career and Vocational Guidance</h2>
                <p className="text-gray-600 mb-4">
                  Our career guidance services help individuals make informed decisions about their professional paths. 
                  We provide personalized support that considers each person's unique skills, interests, and circumstances.
                </p>
                <h3 className="text-xl font-bold mb-3">Our Guidance Includes:</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Career assessment and exploration</li>
                  <li>Educational planning and guidance</li>
                  <li>Career change navigation</li>
                  <li>Professional development planning</li>
                  <li>Work-life balance considerations</li>
                  <li>Long-term career trajectory planning</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group">
                  Learn about our Career Guidance services 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Career and Vocational Guidance" 
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
                  Our outplacement services support both organizations and employees during workforce transitions. 
                  We provide compassionate and effective assistance to help individuals find new opportunities and 
                  organizations manage changes responsibly.
                </p>
                <h3 className="text-xl font-bold mb-3">Our Outplacement Services Include:</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                  <li>Transition counseling and emotional support</li>
                  <li>Personalized career coaching</li>
                  <li>Job search strategy development</li>
                  <li>Resume and online profile optimization</li>
                  <li>Networking and interview preparation</li>
                  <li>Access to our employer network</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 group">
                  Explore our Outplacement services 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-brand-600 text-white py-16">
          <div className="container-custom text-center">
            <h2 className="mb-6">Need Help with Employment Transitions?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our transition services can support you or your organization.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Get in Touch
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
