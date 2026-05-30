import React, { useState } from 'react';
import { processData } from '../../data/processData';
import type { IProcess } from '../../types';
import chevronUp from '../assets/chevron-up.svg';
import chevronDown from '../assets/chevron-down.svg';

function ProcessItem({
  title,
  text,
  index,
  isLast,
}: IProcess): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* paksa seukuran bola jgn pakai auto */}
      <div className='grid grid-cols-[52px_1fr] justify-items-center w-[393px] px-4'>
        <div className='flex flex-col justify-baseline items-stretch mr-3'>
          {/* bola bernomor */}
          <div
            className={`w-10 h-10 rounded-full font-bold text-sm transition-colors grid place-items-center mt-3 ${
              isOpen
                ? 'bg-text-orangedark text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </div>
          {/* garis penghubung, di bola ku margin +3 di garis margin -3 biar klop */}
          {!isLast && isOpen && (
            <div className='w-0.5 bg-gray-300 flex-1 self-center -mb-3'></div>
          )}
        </div>
        {/* kotak tulisan */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex flex-col items-start justify-self-stretch pt-4 pb-3 px-4 bg-box-greydark mb-4 border-slate-600 rounded-xl'
        >
          <div className='flex justify-between w-full'>
            <div className='text-base font-bold leading-[30px] mb-1'>
              {title}
            </div>
            <img
              src={!isOpen ? chevronDown : chevronUp}
              className='bg-box-greydark block w-6 h-6'
            />
          </div>
          {isOpen && (
            <div className='font-medium text-sm leading-[28px] text-text-grey'>
              {text}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function ProcessSection(): React.ReactNode {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='leading-[38px] mb-3 text-[28px] font-bold'>Our Process</h2>
      <p className='text-text-grey leading-[28px] mb-6 text-sm font-medium'>
        Clear steps. Smart execution. Results you can count on.
      </p>

      {processData.map((data, index) => (
        <ProcessItem
          key={data.id}
          title={data.title}
          text={data.text}
          index={index}
          isLast={index === processData.length - 1}
        />
      ))}
    </div>
  );
}
