
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import OfficeLocation from '@/components/OfficeLocation';

const Offices = () => {
  const offices = [
    {
      name: "Stockholm (Headquarters)",
      address: "Sveavägen 123",
      city: "11346 Stockholm",
      phone: "+46 8 123 4567",
      email: "stockholm@workwise.com",
      imageUrl: "https://images.unsplash.com/photo-1508189860359-777d945909ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Gothenburg",
      address: "Avenyn 45",
      city: "41103 Gothenburg",
      phone: "+46 31 987 6543",
      email: "gothenburg@workwise.com",
      imageUrl: "https://images.unsplash.com/photo-1566807387450-b74aea0e727e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Malmö",
      address: "Stortorget 22",
      city: "21134 Malmö",
      phone: "+46 40 123 4567",
      email: "malmo@workwise.com",
      imageUrl: "https://images.unsplash.com/photo-1574354932366-ef1e6f9cfb93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80"
    },
    {
      name: "Uppsala",
      address: "Kungsgatan 78",
      city: "75331 Uppsala",
      phone: "+46 18 987 6543",
      email: "uppsala@workwise.com",
      imageUrl: "https://images.unsplash.com/photo-1565856830875-20de4dcbd690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Linköping",
      address: "Drottninggatan 42",
      city: "58221 Linköping",
      phone: "+46 13 123 4567",
      email: "linkoping@workwise.com",
      imageUrl: "https://images.unsplash.com/photo-1523510468196-230c647be6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      name: "Umeå",
      address: "Storgatan 55",
      city: "90326 Umeå",
      phone: "+46 90 987 6543",
      email: "umea@workwise.com",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Our Offices"
          subtitle="Visit us at one of our locations across Sweden to discuss how we can help with your employment needs."
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
        />
        
        {/* Offices List */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4">Find Us Near You</h2>
              <p className="text-gray-600 text-lg">
                With six offices strategically located across Sweden, we're never far away. 
                Visit us to discuss your employment needs in person or reach out via phone or email.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <OfficeLocation 
                  key={index}
                  name={office.name}
                  address={office.address}
                  city={office.city}
                  phone={office.phone}
                  email={office.email}
                  imageUrl={office.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12">
          <div className="container-custom">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="mb-4">Our National Presence</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  With locations throughout Sweden, we're well-positioned to serve clients nationwide.
                </p>
              </div>
              
              {/* This would be replaced with an actual map in a real implementation */}
              <div className="bg-gray-200 rounded-lg h-[500px] flex items-center justify-center">
                <p className="text-gray-600 text-lg">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Offices;
