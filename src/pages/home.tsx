/*fitur tombol light/dark + useContext */
import React from 'react';
import ProcessSection from '../components/sections/ProcessSection';
import { HeroSection } from '../components/sections/HeroSection';
import { AchievementSection } from '../components/sections/AchievementsSection';

export function Home() {
  return (
    <div className='w-full min-h-screen bg-canvas-dark text-white flex items-center justify-center font-quicksand '>
      {/* <Navbar /> */}
      <main className='space-y-20 md:space-y-24'>
        {/* <HeroSection /> */}
        <AchievementSection />
        {/* <ProcessSection /> */}
        {/* <ServicesSection /> */}
        {/* <IndustriesSection /> */}
        {/* <ProjectsSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <SupportsSection /> */}
        {/* <ContactsSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
