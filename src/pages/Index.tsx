
import React from 'react';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeServices from '@/components/HomeServices';
import HomeAbout from '@/components/HomeAbout';
import SuccessStories from '@/components/SuccessStories';
import HomeCTA from '@/components/HomeCTA';

const Index = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Omdefinierar karriärövergångar för 2025"
          subtitle="Vi hjälper individer och organisationer att navigera övergångar och bygga ljusare framtider genom innovativa sysselsättningslösningar och strategisk vägledning."
          cta="Utforska våra tjänster"
          ctaLink="/transition"
          image="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          fullHeight={true}
        />
        
        <HomeServices />
        <HomeAbout />
        <SuccessStories />
        <HomeCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
