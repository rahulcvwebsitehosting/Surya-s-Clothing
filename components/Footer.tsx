import React from 'react';
import { useLanguage } from './LanguageContext';
import { TEXTS, PHONE_DISPLAY } from '../constants';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  return (
    <footer className="bg-pink-900 text-pink-100 py-8 mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-2">{TEXTS.brandName[language]}</h2>
        <p className="mb-4 text-pink-200">{TEXTS.address[language]}</p>
        <p className="mb-4 font-bold">{PHONE_DISPLAY}</p>
        <p className="text-sm text-pink-300">© 2024 Surya's Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;