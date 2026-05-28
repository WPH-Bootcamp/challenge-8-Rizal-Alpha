/*fitur tombol light/dark + useContext */
import React from 'react';
import ProcessSection from '../components/sections/ProcessSection';
import HeroSection from '../components/sections/HeroSection';
import AchievementSection from '../components/sections/AchievementsSection';
import ServiceSection from '../components/sections/ServicesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

export function Home() {
  return (
    <div className='w-full min-h-screen bg-black text-white flex items-center justify-center font-quicksand '>
      {/* <Navbar /> */}
      <main className='space-y-20 w-full'>
        {/* <HeroSection />
        <AchievementSection />
        <ProcessSection />
        <ServiceSection />
        <IndustriesSection />
        <ProjectsSection /> */}
        <TestimonialsSection />
        {/* <SupportsSection /> */}
        {/* <ContactsSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
