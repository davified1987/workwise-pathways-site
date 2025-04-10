
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Kontakta oss"
          subtitle="Vi finns här för att svara på dina frågor och diskutera hur vi kan hjälpa dig med dina anställningsbehov."
          image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
        />
        
        {/* Contact Info and Form */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Nå oss</h2>
                
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="space-y-6">
                    {/* Head Office */}
                    <div>
                      <h3 className="text-lg font-bold mb-3">Huvudkontor</h3>
                      <div className="flex items-start space-x-3 text-gray-600">
                        <MapPin className="mt-1 text-brand-600 flex-shrink-0" size={20} />
                        <div>
                          <p>Sveavägen 123</p>
                          <p>11346 Stockholm, Sverige</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <h3 className="text-lg font-bold mb-3">Telefon</h3>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Phone className="text-brand-600 flex-shrink-0" size={20} />
                        <p>+46 8 123 4567</p>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div>
                      <h3 className="text-lg font-bold mb-3">E-post</h3>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Mail className="text-brand-600 flex-shrink-0" size={20} />
                        <p>info@workwise.com</p>
                      </div>
                    </div>
                    
                    {/* Opening Hours */}
                    <div>
                      <h3 className="text-lg font-bold mb-3">Öppettider</h3>
                      <div className="flex items-start space-x-3 text-gray-600">
                        <Clock className="mt-1 text-brand-600 flex-shrink-0" size={20} />
                        <div>
                          <p>Måndag - Fredag: 8:30 - 17:00</p>
                          <p>Lördag - Söndag: Stängt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Skicka oss ett meddelande</h2>
                
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="mb-4">Våra kontor</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Med sex kontor runt om i Sverige är vi alltid nära dig. Besök vårt närmaste kontor eller kontakta oss online.
              </p>
            </div>
            
            {/* This would be replaced with an actual map in a real implementation */}
            <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center shadow-md">
              <p className="text-gray-600 text-lg">Interaktiv karta visas här</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
