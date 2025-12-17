import React from 'react';
import { useLanguage } from './LanguageContext';
import { TEXTS } from '../constants';
import { Sun, Moon } from 'lucide-react';

const CulturalWidget: React.FC = () => {
  const { language } = useLanguage();
  const date = new Date();
  const hour = date.getHours();
  
  // Simple mock logic for greeting and Rahu Kalam
  const isDay = hour > 6 && hour < 18;
  const isRahuKalam = hour >= 10 && hour <= 12; // Mock logic

  const tamilMonths = ['Chithirai', 'Vaikasi', 'Aani', 'Aadi', 'Avani', 'Purattasi', 'Aippasi', 'Karthigai', 'Margazhi', 'Thai', 'Maasi', 'Panguni'];
  const currentTamilMonth = tamilMonths[date.getMonth()]; // Approximate mapping

  return (
    <div className="bg-silk-maroon text-temple-gold p-3 rounded-lg shadow-lg flex items-center justify-between text-xs md:text-sm border border-temple-gold/30">
      <div className="flex items-center gap-2">
        {isDay ? <Sun size={16} className="text-yellow-400 animate-spin-slow" /> : <Moon size={16} className="text-gray-200" />}
        <span className="font-serif font-bold">
           {date.getDate()} {language === 'en' ? currentTamilMonth : 'தை'} • {language === 'en' ? 'Subha Muhurtham' : 'சுப முகூர்த்தம்'}
        </span>
      </div>
      <div className="hidden md:block">
        {isRahuKalam ? (
          <span className="text-red-300 font-bold animate-pulse">{TEXTS.rahuKalam[language]}</span>
        ) : (
          <span className="text-green-300 font-bold">{TEXTS.auspiciousTime[language]}</span>
        )}
      </div>
    </div>
  );
};

export default CulturalWidget;