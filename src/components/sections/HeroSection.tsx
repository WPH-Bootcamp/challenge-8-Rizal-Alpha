import type React from 'react';
import darkheroimg from '../assets/dark_heroimg.png';
import { companyData } from '../../data/companyProofData';
import type { ICompanyProof } from '../../types';

function CompanyItem({ img }: ICompanyProof) {
  return (
    <img
      src={img}
      className='grayscale h-7 w-auto object-contain brightness-50 opacity-70 pr-12'
    />
  );
}

function CompanyProof(): React.ReactNode {
  return (
    <div>
      <p className='font-bold leading-[30px] text-base text-center'>
        Trusted by Global Innovators & Leading Brands
      </p>
      {/* efek loop malah efek glitch klo pakai justify-between => ubah ke  w-max */}
      <div className='flex flex-row w-max my-10 animate-marquee-right'>
        {companyData.map((item) => (
          <CompanyItem key={item.id} img={item.img} />
        ))}
        {companyData.map((item) => (
          <CompanyItem key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export function HeroSection(): React.ReactNode {
  return (
    <div className='w-[393px] grid-cols-1 overflow-hidden'>
      {/* text */}
      <div>
        <h1 className='font-bold text-4xl leading-[44px] mb-2'>
          Your Tech Partner for{' '}
          <span className='text-text-orange'>Smarter Growth</span>
        </h1>
        <p className='text-base text-white font-semibold leading-[30px] mb-10'>
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>
        <span className='inline-block w-full border rounded-4xl bg-text-orangedark text-white font-bold text-sm text-center leading-[28px] py-2 mb-11'>
          Let's Talk
        </span>
      </div>
      <div className='mb-11'>
        <img src={darkheroimg} />
      </div>
      <CompanyProof />
    </div>
  );
}
