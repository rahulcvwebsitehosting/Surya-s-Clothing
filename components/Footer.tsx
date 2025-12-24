import React from 'react';
import { useLanguage } from './LanguageContext.tsx';
import { PHONE_DISPLAY } from '../constants.ts';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-silk-maroon text-pink-100 py-8 mb-16 md:mb-0 border-t border-temple-gold/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-2 font-serif">{t('brandName')}</h2>
        <p className="mb-4 text-pink-200">{t('address')}</p>
        <p className="mb-4 font-bold text-temple-gold">{PHONE_DISPLAY}</p>
        <p className="text-sm text-pink-300">© 2024 Surya's Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;