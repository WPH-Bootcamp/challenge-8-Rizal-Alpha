/*fitur tombol light/dark + useContext */
import React from 'react';
import ProcessSection from '../components/sections/ProcessSection';

export function Home() {
  return (
    <React.Fragment>
      {/* <Navbar />
      <main className='space-y-16 md:space-y-24'>
        <HeroSection />
        <CompanyProofSection />
        <AchievementsSection />
        <ProcessSection />
        <ServicesSection />
        <IndustriesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <SupportsSection />
        <ContactsSection />
      </main>
      <Footer /> */}

      <ProcessSection />
    </React.Fragment>
  );
}
