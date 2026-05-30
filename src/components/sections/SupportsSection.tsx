//#FAQ
import { useState } from 'react';
import { supportsData } from '../../data/supportsData';
import minButton from '../assets/minus button.svg';
import plusButton from '../assets/plus button.svg';

interface ISupportProp {
  title: string;
  text: string;
  isOpen: boolean;
  onClick: () => void;
}

function SupportItem({ title, text, isOpen, onClick }: ISupportProp) {
  return (
    <div>
      <div>
        <div>{title}</div>
        <div onClick={onClick}>
          {isOpen ? (
            <img src={minButton} alt='minusButton' />
          ) : (
            <img src={plusButton} alt='minusButton' />
          )}
        </div>
      </div>
    </div>
  );
}

export default function SupportsSection(): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {supportsData.map((item) => (
        <SupportItem
          key={item.id}
          title={item.title}
          text={item.text}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      ))}
    </div>
  );
}
