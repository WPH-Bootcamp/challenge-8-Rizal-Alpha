//ini ada kaitannya dengan lifting state up

import { useState } from 'react';
import { industriesData } from '../../data/industriesData';
import type { IIndustriesData } from '../../types';

//pisahkan interface untuk data vs untuk props
//untuk props:
interface IIndustriesProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

// active => tulisannya warna cerah putih
function IndustriesItem({ onClick, title, isActive }: IIndustriesProps) {
  return (
    <div className='flex gap-2 items-center mb-3'>
      {isActive ? (
        <div className='w-1 h-6 bg-text-orangedark rounded-4xl'></div>
      ) : (
        <div className='w-1 h-6 bg-bg-graySign rounded-4xl'></div>
      )}
      <p
        onClick={onClick}
        className={`cursor-pointer leading-[30px] font-bold ${!isActive && 'text-bg-graySign'}`}
      >
        {title}
      </p>
    </div>
  );
}

export default function IndustriesSection(): React.ReactNode {
  // const [textActive, setTextActive] = useState<string | null>(null);
  // tapi cara ini hanya bisa simpan 1 nilai, jd gimana jika ada nilai lain terkait tombol itu misal ada elemen <p> atau <img/> terkait? pakai object interface
  // const [textActive, setTextActive] = useState<IIndustriesData | null>(null); ini awalnya kupakai tapi hasilnya malah saat inisiasi nda muncul text dan img, jadi ini solusinya:
  const [textActive, setTextActive] = useState<IIndustriesData | null>(
    industriesData[0]
  );
  return (
    <div className='w-[393px] px-4 grid grid-cols-1'>
      <h2 className='leading-[38px] mb-3 text-[28px] font-bold'>
        Built for Your Industry
      </h2>
      <p className='leading-[28px] mb-6 text-sm font-medium'>
        We've helped companies across industries launch smarter, faster, and
        more securely.
      </p>

      {/* ini untuk hasilkan ketiga tombol di tempat yg sama */}
      {industriesData.map((item) => (
        <IndustriesItem
          key={item.id}
          title={item.title}
          // onClick={() => setTextActive(item.text)} masih terkait dgn diatas versi string biasa, solusi: ubah ke versi object (title, img, text akan diubah 1 paket sekaligus) berikut
          onClick={() => setTextActive(item)}
          isActive={textActive?.id === item.id}
        />
      ))}
      {/* ini untuk 1 tempat view */}
      <div className='mt-6 mb-5 text-sm'>{textActive?.text}</div>
      <img src={textActive?.img} className='rounded-2xl' />
      {/* <div>{textActive?.id}</div>  ini hanya ujicoba apakah textActive?.id (jgn lupa tanda ? krna si TS nda percaya kalau textActive bakal bisa berubah dari null ketika diklik) itu bisa sebagaimana dibawah ini juga. Jadi klo sudah terbukti gw masukkan ke isActive.  Intinya textActive.id === item.id  KETIKA onClick terjadi.*/}
    </div>
  );
}
/*intinya textActive itu adalah kunci. ketika diklik maka setTextActive akan ubah nilai textActive dari defaultnya misal null atau string seperti industriesData[0] menjadi item (satuan data) dari object industriesData bisa itu si A, B, atau C. Mungkin agak bingung.. tapi lihat dgn jelas...  .map hanya mengubah mereka memiliki fitur 'bisa diklik/onClick' dan siapapun yg diklik maka ialah si item yg diklik.. maka data dari item inilah yg dibawa ke text dan img terkait*/
