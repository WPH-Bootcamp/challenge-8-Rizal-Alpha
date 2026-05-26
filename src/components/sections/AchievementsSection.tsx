//#About

import { achievementData } from '../../data/achievementsData';
import type { IAchievement } from '../../types';

function AchItem({ title, text }: IAchievement) {
  return (
    <div className='flex flex-col justify-center items-center bg-box-greydark w-43 h-43 rounded-full'>
      <p className='font-bold text-4xl text-text-orangedark leading-[44px] mb-[6px]'>
        {title}
      </p>
      <p className='font-semibold text-sm leading-[28px] whitespace-pre-line'>
        {text}
      </p>
    </div>
  );
}

export function AchievementSection() {
  return (
    <div className='flex flex-col items-center w-[393px] text-center'>
      <h2 className='leading-[38px] mb-3 text-[28px] font-bold'>
        End-to-End IT Solutions That Drive Results
      </h2>
      <p className='leading-[28px] mb-8 text-sm font-medium'>
        From strategy to execution, we deliver solutions that grow your
        business.
      </p>
      <div className='grid grid-cols-2 gap-4'>
        {achievementData.map((item) => (
          <AchItem key={item.id} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
