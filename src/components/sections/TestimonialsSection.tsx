//belum bisa pakai lifting state up, karena klo di industriesSection tu tombol berbeda di klik dan hasil hanya 1 view bukan masing2, maka di sini nda bisa, karena tombol berbeda disini tapi ada efek gulir untuk mobile, dan PC juga efek gulir tapi terlihat (versi shadow) sebelum dan sesudahnya.
//kita pakai prinsip index, dan buat hanya 1 fungsi utama krna klo lebih akan banyak passing props dan functional scope yg menghalangi
// challenge: tombol kita buat sebanyak itemnya !! (DONE)
// challenge: materi infinite loop + tombol navigasi + metode matematika [bukan metode copy-paste item seperti di companyProof] (misal testi ke-1 (diklik) maka akan di tengah tapi tetap ada kartu terakhir di kiri (blur) begitu juga di kanan ada kartu ke-2) DONE => pelajaran emas: klo mau di tengah si absolute maka pakain inset-x-0 dan mx-auto
//challenge: hiasan border untuk kartu yg aktif
//challenge: selain dot navigasi, kartu kanan-kiri bisa diklik untuk ke tengah

//#Testimonials

import React, { useState } from 'react';
import { testiData } from '../../data/testiData';
import tickmark from '../assets/tickmark.svg';
import star from '../assets/StarRating.svg';

//interface buat props
interface ITestiProps {
  text: string;
  title: string;
  name: string;
  img: string;
  isCenter: boolean;
  isRight: boolean;
  isLeft: boolean;
  onClick: () => void;
}

function TestiItem({
  text,
  title,
  name,
  img,
  isCenter,
  isLeft,
  isRight,
  onClick,
}: ITestiProps) {
  return (
    <div
      className={`text-center absolute inset-x-0 mx-auto w-full max-w-[361px] h-[284px] bg-box-greydark rounded-3xl border border-slate-800 flex flex-col justify-between items-center
        ${isCenter ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-0'} 
        ${isCenter && 'sm:opacity-100 sm:scale-100 sm:z-20 sm:translate-x-0 sm:blur-0 '} 
        ${isRight && 'sm:opacity-40 sm:scale-90 sm:z-10 sm:blur-[1px] sm:translate-x-[340px]'} 
        ${isLeft && 'sm:opacity-40 sm:scale-90 sm:z-10  sm:blur-[1px] sm:-translate-x-[340px]'} 
        ${isCenter && 'sm:opacity-100 sm:scale-100 sm:z-20 sm:translate-x-0 sm:blur-0 '} 
        md:w-full md:max-w-[594px] md:h-[292px] 
        ${isRight && 'md:opacity-10 md:scale-90 md:z-10 md:blur-[1px] md:translate-x-[340px] '} 
        ${isLeft && 'md:opacity-10 md:scale-90 md:z-10  md:blur-[1px] md:-translate-x-[340px]'} 
        md:mb-20
        `}
      onClick={onClick}
    >
      <div className='flex items-center justify-center w-16 h-16 absolute -top-8.5 left-4 md:w-20 md:h-20 md:-top-10 md:left-10'>
        <img src={tickmark} alt='tickMark' />
      </div>
      <img src={star} alt='starRating' className='w-34 h-6 mt-4 md:mt-6' />
      <p className='font-semibold texts-sm leading-7 mt-3 mb-4 mx-4 md:mb-6 md:text-lg'>
        {text}
      </p>
      <p className='font-semibold texts-sm leading-7 md:text-lg'>{name}</p>
      <p className='font-semibold texts-sm leading-7 mb-12 text-text-orangedark md:text-lg'>
        {title}
      </p>
      <img
        src={img}
        alt='testimonialsPhoto'
        className='absolute -bottom-5 w-15 h-15 rounded-4xl object-cover '
      />
    </div>
  );
}

export default function TestimonialsSection(): React.ReactNode {
  const [activeIndex, setActiveIndex] = useState<number>(0); // selalu dimulai dari index pertama
  const totalData = testiData.length; //akan berguna di dasar mesin carousel di bawah

  return (
    <div className='w-[393px] px-4 flex flex-col items-center mx-auto sm:w-full md:w-full'>
      <h2 className='leading-[38px] text-center mb-3 text-[28px] font-bold md:text-[40px]'>
        What Partners Say About Working With Us
      </h2>
      <p className='leading-[28px] text-text-grey mb-6 text-sm font-medium md:text-lg md:mb-20'>
        Trusted voices. Real experiences. Proven results.
      </p>
      {/* //container untuk kartu testimonials dan tombol navigasi */}
      <div className='flex flex-col items-center mx-auto w-full px-4 md:px-0 sm:overflow-hidden md:overflow-hidden'>
        {/* di sini kita pakai "relative" (sebagai jangkar bagi absolute di dalamnya) dan "tinggi tetap/fixed", tanpa itu maka tidak akan sesuai dgn keberadaan kartu2 didalamnya yg akan kita buat absolute (efek keluar dari flow, tidak dianggap ada) */}
        {/*container si kartu2 berada */}
        <div className='flex relative items-center h-[400px] w-full sm:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:sm:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]'>
          {testiData.map((item, index) => {
            // dasar mesin corousel (mengapa di sini bukan diatas/diluar? karena scope)
            // hitung selisih posisi kartu sesuai item vs kartu yg aktif (activeIndex)
            /*misalnya aku klik tombol ke-3 maka kartu ke-3 akan diff=0 sedangkan kartu kedua maka dif = 2 - 3 = -1 dan kartu keempat nilai diff nya adalah dif = 4-3 = 1 */
            let diff = index - activeIndex;
            // logika melingkar
            /*Nah, sekarang mari kita hitung Kartu Ke-1:Hitungan awal: 1 - 6 = -5 Karena -5 itu kurang dari -1, maka pintu if (diff < -1) terbuka!Jembatan gaibnya bekerja, nilainya ditambah totalData (yaitu 6) = -5 + 6 = 1 Hasilnya: Kartu 1 otomatis berubah menjadi diff = 1 dan sukses nangkring sebagai Kartu Kanan di sebelah Kartu 6! 
          Nah, sekarang mari kita hitung Kartu Ke-6 (Kartu terakhir):Hitungan awal: 6 - 1 = 5 Karena 5 itu lebih besar dari 1, maka pintu if (diff > 1) terbuka Jembatan gaibnya bekerja, nilainya dikurangi totalData (yaitu 6) = 5 - 6 = -1
          */
            if (diff < -1) diff += totalData;
            if (diff > 1) diff -= totalData;
            //hasil diff => // 0  = Kartu Tengah (Aktif); 1  = Kartu Kanan (Selanjutnya); -1 = Kartu Kiri (Sebelumnya)
            const isCenter = diff === 0;
            const isRight = diff === 1;
            const isLeft = diff === -1;
            //================
            return (
              <TestiItem
                key={item.id}
                img={item.img}
                name={item.name}
                text={item.text}
                title={item.title}
                isCenter={isCenter}
                isRight={isRight}
                isLeft={isLeft}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>
        {/* jujur ini keren buangett.. awalnya gw coba masukin ke atas hasilnya si navigasi bulatnya malah ada dibawah masing2 kartu, sangat aneh... krna navigasinya terpisah jauh dari temannya sejarak si kartu diatas, jadi ini solusinya: si testiData akan kita loop .map() ulang kemudian disatukan*/}
        {/*tombol navigasi */}
        <div className='flex'>
          {testiData.map((_, index) => {
            return (
              <div
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-4xl ${activeIndex === index ? 'bg-text-orange' : 'bg-box-greydark'} `}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
