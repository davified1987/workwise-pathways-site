
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
      name: "Job Seekers",
      questions: [
        {
          question: "How can WorkWise help me find a job?",
          answer: "WorkWise offers a range of services to help you find employment, including skills assessment, job search strategies, CV optimization, interview preparation, and direct connections to potential employers through our extensive network. Our Rusta & Matcha program is specifically designed to prepare you for the job market and match you with suitable opportunities."
        },
        {
          question: "Are your services free for job seekers?",
          answer: "Many of our services for job seekers are provided at no cost through partnerships with public employment agencies and other funding sources. Some specialized services may have fees, but we'll always be transparent about any costs before you commit. Contact us to learn which services you may be eligible for at no cost."
        },
        {
          question: "How long does it typically take to find employment through your services?",
          answer: "The timeline varies based on factors such as your skills, experience, the current job market, and your flexibility regarding job type and location. Some clients find employment within weeks, while others may take several months. Our goal is to find not just any job, but the right job for your circumstances and career goals."
        },
        {
          question: "Can you help me if I want to change careers?",
          answer: "Yes, our Career and Vocational Guidance services are specifically designed to help individuals considering career changes. We'll work with you to assess your transferable skills, identify potential new career paths, and develop a strategy for transitioning to a new field, which may include recommendations for additional training or education."
        }
      ]
    },
    {
      name: "Employers",
      questions: [
        {
          question: "How can WorkWise help my organization with recruitment?",
          answer: "We help employers find qualified candidates through our pool of job-ready individuals. Our matching process considers not just skills and experience, but also workplace culture fit and long-term potential. We can handle the initial screening process, present you with pre-qualified candidates, and even provide support during the onboarding process."
        },
        {
          question: "What makes your recruitment approach different from traditional methods?",
          answer: "Our approach focuses on sustainable employment matches that benefit both employers and employees. We take the time to understand your organization's needs, culture, and long-term goals, not just the immediate job requirements. This results in higher retention rates and better performance outcomes compared to traditional recruitment methods."
        },
        {
          question: "How do your outplacement services work?",
          answer: "Our outplacement services help organizations manage workforce reductions in a compassionate and effective way. We provide affected employees with career counseling, job search support, and other resources to help them transition to new employment. This approach helps maintain your organization's reputation as an employer while fulfilling ethical obligations to departing employees."
        },
        {
          question: "Can you help with temporary staffing needs?",
          answer: "Yes, we can help with both temporary and permanent staffing solutions. For temporary needs, we can quickly connect you with qualified professionals who can step in on short notice. We also offer temp-to-perm arrangements that allow both parties to assess the fit before committing to permanent employment."
        }
      ]
    },
    {
      name: "Our Programs",
      questions: [
        {
          question: "What is the Rusta & Matcha program?",
          answer: "Rusta & Matcha (Prepare & Match) is our flagship program that provides comprehensive support to job seekers. The 'Rusta' phase focuses on preparing individuals for employment through skills assessment, development, and job search preparation. The 'Matcha' phase connects prepared candidates with suitable employers, facilitating a good match for both parties."
        },
        {
          question: "How are your Labor Market Projects funded?",
          answer: "Our Labor Market Projects are funded through various sources, including government agencies, EU grants, private companies, and foundations. The funding model depends on the specific project, its goals, and the stakeholders involved. We're always transparent about funding sources for all our initiatives."
        },
        {
          question: "What types of career guidance do you offer?",
          answer: "We offer a wide range of career guidance services, including career assessment and exploration, educational planning, career change navigation, professional development planning, work-life balance counseling, and long-term career trajectory planning. Our approach is always personalized to the individual's specific needs and circumstances."
        },
        {
          question: "Do you offer specialized services for young people entering the job market?",
          answer: "Yes, we have programs specifically designed for young people entering the workforce for the first time. These include internship placement, apprenticeship programs, entry-level job matching, and guidance on education and training options that align with career goals. We understand the unique challenges faced by young job seekers and provide appropriate support."
        }
      ]
    },
    {
      name: "Working With Us",
      questions: [
        {
          question: "How do I get started with WorkWise services?",
          answer: "The first step is to contact us via phone, email, or the form on our website. We'll schedule an initial consultation to understand your needs and explain the relevant services we offer. For job seekers, this typically includes an assessment of your skills and career goals. For employers, we'll discuss your staffing needs and organizational culture."
        },
        {
          question: "Where are your offices located?",
          answer: "We have offices in Stockholm (headquarters), Gothenburg, Malmö, Uppsala, Linköping, and Umeå. This nationwide presence allows us to serve clients throughout Sweden. If you can't visit one of our physical locations, we also offer virtual consultations and services."
        },
        {
          question: "Do you work with international clients?",
          answer: "Yes, we work with both international job seekers looking for employment in Sweden and international companies seeking to establish or expand their presence in the Swedish market. We can provide guidance on Swedish labor laws, cultural considerations, and other aspects of the local employment landscape."
        },
        {
          question: "What industries do you specialize in?",
          answer: "While we work across all major industries, we have particular expertise in IT and tech, healthcare, manufacturing, retail, hospitality, and public sector employment. Our team includes specialists with industry-specific knowledge who understand the unique requirements and opportunities in these fields."
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
          title="Questions & Answers"
          subtitle="Find answers to common questions about our services and how we can help."
          image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
        />
        
        {/* FAQ Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Browse our commonly asked questions to find the information you need. If you don't see your question here, please don't hesitate to contact us.
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
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                If you couldn't find the answer you were looking for, our team is ready to help. Contact us for personalized assistance.
              </p>
              <Link to="/contact">
                <Button className="btn-primary">Contact Us</Button>
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
