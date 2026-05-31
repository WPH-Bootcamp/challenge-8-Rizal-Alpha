import { type ISocialApp } from '../types';
import fb from '../components/assets/fb.svg';
import insta from '../components/assets/insta.svg';
import linkedin from '../components/assets/linkedin.svg';
import tiktok from '../components/assets/tiktok.svg';

export const socialappData: ISocialApp[] = [
  { id: 'o1', img: fb, title: 'facebook', link: 'https://www.facebook.com' },
  {
    id: 'o2',
    img: insta,
    title: 'instagram',
    link: 'https://www.instagram.com',
  },
  {
    id: 'o3',
    img: linkedin,
    title: 'linkedIn',
    link: 'https://www.linkedin.com',
  },
  { id: 'o4', img: tiktok, title: 'tiktok', link: 'https://www.tiktok.com' },
];
