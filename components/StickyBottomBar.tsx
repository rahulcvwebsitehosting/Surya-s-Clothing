import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK, TEXTS } from '../constants';
import { useLanguage } from './LanguageContext';

const StickyBottomBar: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40 md:hidden flex border-t border-gray-200">
      <a 
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 flex flex-col items-center justify-center py-3 bg-white text-gray-800 active:bg-gray-100"
      >
        <Phone size={24} className="mb-1 text-pink-600" />
        <span className="text-xs font-bold uppercase">{TEXTS.callNow[language]}</span>
      </a>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-green-500 text-white active:bg-green-600"
      >
        <MessageCircle size={24} className="mb-1" />
        <span className="text-xs font-bold uppercase">{TEXTS.whatsapp[language]}</span>
      </a>
    </div>
  );
};

export default StickyBottomBar;