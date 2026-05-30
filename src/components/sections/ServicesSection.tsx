//ini yg paling mindblowing.. bisa atasi optical bias (misal tweak di bawah)
//#Service
import { servicesData } from '../../data/servicesData';
import type { IServices } from '../../types';

function ServiceItem({
  img,
  title,
  text,
  tweak = '',
}: IServices & { tweak?: string }) {
  return (
    <div>
      <div className='relative bg-box-greydark pt-12 pb-5 px-5 border border-slate-800 rounded-2xl mb-10'>
        <div className={`absolute bottom-25 left-5 ${tweak} w-16 h-16`}>
          <img src={img} className='object-contain' />
        </div>
        <p className='font-bold text-base leading-[30px]'>{title}</p>
        <p className='font-medium text-sm leading-[28px] text-text-grey'>
          {text}
        </p>
      </div>
    </div>
  );
}

export default function ServiceSection(): React.ReactNode {
  return (
    <div className='w-[393px] px-4'>
      <div className='text-center'>
        <h2 className='leading-[38px] mb-3 text-[28px] font-bold whitespace-pre-line'>
          {/* ini gw buat pakai tanda {} krna klo tanpa itu nda bisa pakai \n */}
          {`Smart IT Solutions That \n Grow With You`}
        </h2>
        <p className='leading-[28px] mb-15 text-sm font-medium text-text-grey'>
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>
      {servicesData.map((item) => (
        <ServiceItem
          key={item.id}
          img={item.img}
          title={item.title}
          text={item.text}
          tweak={item.tweak}
        />
      ))}
    </div>
  );
}
