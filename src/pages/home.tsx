/*fitur tombol light/dark + useContext */
import React from 'react';
import ProcessSection from '../components/sections/ProcessSection';
import HeroSection from '../components/sections/HeroSection';
import AchievementSection from '../components/sections/AchievementsSection';
import ServiceSection from '../components/sections/ServicesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import SupportsSection from '../components/sections/SupportsSection';

export function Home() {
  return (
    <div className='w-full max-w-[1440px] px-4 min-h-screen mx-auto text-white flex flex-col items-center justify-center font-quicksand sm:w-full md:w-full'>
      {/* <Navbar /> */}
      <main className='space-y-20'>
        {/* <HeroSection />
        <AchievementSection />
        <ProcessSection />
        <ServiceSection />
        <IndustriesSection />
        <ProjectsSection /> 
        <TestimonialsSection /> */}
        <SupportsSection />
        {/* <ContactsSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
