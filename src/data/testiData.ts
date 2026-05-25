import { type ITestimonials } from '../types';
import testi1 from '../components/assets/testi1.png';
import testi2 from '../components/assets/testi2.png';
import testi3 from '../components/assets/testi3.png';

export const testiData: ITestimonials[] = [
  {
    id: 't1',
    text: '“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”',
    name: 'John Lee',
    title: 'Creative Director at Innovate Corp',
    img: testi1,
  },
  {
    id: 't2',
    text: '“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”',
    name: 'Sarah Tan',
    title: 'Product Manager at Finovate',
    img: testi2,
  },
  {
    id: 't3',
    text: '“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”',
    name: 'Emily Chen',
    title: 'Marketing Head at Tech Solutions',
    img: testi3,
  },
];
