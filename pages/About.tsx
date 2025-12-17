import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { TEXTS } from '../constants';

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{TEXTS.about[language]}</h1>
        </div>
        
        <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{TEXTS.brandName[language]}</h2>
            
            <div className="prose prose-pink max-w-none text-gray-700 space-y-4">
                <p className="text-lg leading-relaxed">
                    {TEXTS.aboutText1[language]}
                </p>
                <p className="text-lg leading-relaxed">
                    {TEXTS.aboutText2[language]}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-bold text-pink-800 mb-2">{language === 'en' ? 'Why Choose Us?' : 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்?'}</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>{language === 'en' ? 'Budget-friendly prices' : 'குறைந்த விலை'}</li>
                            <li>{language === 'en' ? 'Good quality materials' : 'தரமான துணிகள்'}</li>
                            <li>{language === 'en' ? 'Home-based trust' : 'நம்பிக்கையான சேவை'}</li>
                            <li>{language === 'en' ? 'Friendly service' : 'நட்பான அணுகுமுறை'}</li>
                        </ul>
                    </div>
                     <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-bold text-purple-800 mb-2">{language === 'en' ? 'Our Collections' : 'எங்கள் தொகுப்புகள்'}</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>{TEXTS.sarees[language]}</li>
                            <li>{TEXTS.nighties[language]}</li>
                            <li>{TEXTS.womensClothing[language]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;