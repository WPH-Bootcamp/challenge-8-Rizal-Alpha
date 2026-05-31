//materi lifting state up => item menyadari satu sama lain
//#FAQ
import React, { useState } from 'react';
import { supportsData } from '../../data/supportsData';
import minButton from '../assets/minus button.svg';
import plusButton from '../assets/plus button.svg';
import consult from '../assets/consult.png';

interface ISupportProp {
  title: string;
  text: string;
  isOpen: boolean;
  onClick: () => void;
}

function SupportItem({ title, text, isOpen, onClick }: ISupportProp) {
  return (
    <div>
      <div
        onClick={onClick}
        className='flex items-center justify-between my-6 gap-3'
      >
        <div className='leading-8 font-bold text-lg'>{title}</div>
        <div className='w-6 h-6 flex'>
          {isOpen ? (
            <img src={minButton} alt='minusButton' />
          ) : (
            <img src={plusButton} alt='minusButton' />
          )}
        </div>
      </div>
      {isOpen && (
        <p className='text-text-grey font-medium leading-7 text-sm'>{text}</p>
      )}
    </div>
  );
}

export default function SupportsSection() {
  /*Jangan letak di sini!!  krna nanti 1 di-klik semua ikut juga, krna di bawah tu apply buat semua anggotanya, sedangkan jika diletakkan di atas, maka melekat di item terkait saja bukan semua item.
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [isClose, setClose] = useState<boolean>(true);
  tapi diletakkan keatas juga salah JIKA fiturmu: 'item saling mengetahui statenya' misal 1 klik yg lain nutup.
  Jika fitur hanya khusus di item itu saja (klik tutup-klik buka) maka sudah tepat klo const[isOpen  tu diatas
  Jadi, again.. solusinya untuk item saling mengetahui satu sama lain adalah => lifting state up di Induk di sini, tapi JANGAN PAKAI nilai boolean. pakai sistem Guru tunjuk no.Absen si murid */
  const [openId, setOpenId] = useState<string | null>(null); //pakai string krna di data ku pakai id manual yg unik
  const handleClick = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  //setOpenId akan ubah openId ke nilai dari fungsi dimana hasil fungsi itu adalah null atau item.id
  /*mengapa harus ada (prevId)  ? mirip seprti ni..
    const [counter, setCounter] = useState(0);
    function handleCounterTambah() {
  //klo setCounter(counter + 1) dibuat 2x maka nda efek karena dia tetap ambil nilai awal
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);}*/
  /*misal awalnya prevId bernilai null. ketika diklik kartu no.1 maka hasilnya 0 === 1 adalah salah maka tercetak si prevId = 1   */
  return (
    <div className='w-full flex flex-col items-stretch justify-center mx-auto  md:grid md:grid-cols-12'>
      <h2 className='text-left leading-[38px] mb-3 text-[28px] font-bold md:mb-6 md:whitespace-pre-line md:col-start-1 md:col-span-5 md:place-self-start'>
        {`Need Help? Start \n Here.`}
      </h2>
      <p className='text-left text-text-grey leading-[28px] mb-6 text-sm font-medium md:place-self-end md:whitespace-pre-line md:col-start-10 md:col-span-3'>
        {`Everything you need to \n know — all in one place.`}
      </p>
      <hr className='md:col-span-2 md:mb-12 md:col-start-1 md:col-span-12' />
      <div className='md:col-start-1 md:col-span-7'>
        {supportsData.map((item, index) => (
          // klo render lebih dari 1 elemen harus bungkus (jgn lupa key pindahkan ke) berikut:
          <React.Fragment key={item.id}>
            {/* hanya item>0 yg kena garis diatasnya */}
            {index > 0 && <hr />}
            <SupportItem
              title={item.title}
              text={item.text}
              // kondisi awal: Kartu 1 dicek: isOpen={null === 1} maka hasilnya False (Kartu 1 tertutup).
              // Saat kartu 1 diklik maka Kartu 1 mengecek: isOpen={1 === 1} Hasilnya True (Kartu 1 terbuka!)
              // sedangkan Kartu 2 dicek: isOpen={1 === 2} Hasilnya False (Kartu 2 tetap tertutup)
              isOpen={openId === item.id}
              onClick={() => handleClick(item.id)}
            />
          </React.Fragment>
        ))}
      </div>
      {/* buat kotak consultation */}
      <div className='flex flex-col justify-between items-center bg-bg-orange p-5 rounded-3xl mt-6 md:w-full md:h-full md:mt-0 md:col-start-9 md:col-span-4'>
        <p className='self-baseline font-bold text-3xl leading-9 mb-2 md:mb-1 md:text-4xl md:leading-11'>
          Let's talk it through
        </p>
        <p className='self-baseline font-semibold text-sm leading-7 mb-4 md:mb-6 md:text-lg md:leading-8'>
          book a free consultation with our team
        </p>
        <img src={consult} alt='consultation image' />
        <span className='justify-self-center bg-white text-center rounded-4xl font-bold text-black text-base leading-7 w-full  py-2 inline-block mt-4 md:mt-6'>
          Free Consultation
        </span>
      </div>
    </div>
  );
}
