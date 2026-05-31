//#Projects

import type React from 'react';
import { projectsData } from '../../data/projectsData';
import type { IProjects } from '../../types';

function ProjectItem({ img, title }: IProjects) {
  return (
    <div>
      <div className='w-[361px] h-[361px]'>
        <img src={img} className='rounded-2xl' />
      </div>
      <p className='text-sm font-medium leading-[28px] text-text-orangedark'>
        Landing Page
      </p>
      <p className='text-base font-bold leading-[30px] mb-5'>{title}</p>
    </div>
  );
}

export default function ProjectsSection(): React.ReactNode {
  return (
    <div className='w-[393px] px-4'>
      <div className='text-center'>
        <h2 className='leading-[38px] mb-3 text-[28px] font-bold'>
          From Vision to Launch! Projects We're Proud Of
        </h2>
        <p className='text-text-grey leading-[28px] mb-6 text-sm font-medium'>
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>
      {projectsData.map((item) => (
        <ProjectItem key={item.id} img={item.img} title={item.title} />
      ))}
    </div>
  );
}
