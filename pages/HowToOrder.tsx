import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { TEXTS, PHONE_DISPLAY } from '../constants';
import { MessageCircle, Phone, CheckCircle, Truck, ShoppingBag, CreditCard } from 'lucide-react';

const HowToOrder: React.FC = () => {
  const { language } = useLanguage();

  const steps = [
    { icon: <ShoppingBag size={28} />, title: TEXTS.step1[language], desc: "Browse our collections and select your favorite items." },
    { icon: <MessageCircle size={28} />, title: TEXTS.step2[language], desc: "Click the WhatsApp button to chat with us directly." },
    { icon: <CreditCard size={28} />, title: TEXTS.step3[language], desc: "Pay via GPay, PhonePe or Cash." },
    { icon: <Truck size={28} />, title: TEXTS.step4[language], desc: "Home delivery or pickup available." },
  ];

  return (
    <div className="min-h-screen bg-sandal-cream pb-20">
      <div className="bg-silk-maroon text-sandal-cream py-12 text-center relative overflow-hidden">
         <div className="absolute inset-0 kolam-bg opacity-10"></div>
         <h1 className="text-3xl md:text-5xl font-serif font-bold relative z-10">{TEXTS.howToOrder[language]}</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-temple-gold transform -translate-x-1/2 z-0"></div>

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-8 relative z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Number Bubble */}
                        <div className="w-16 h-16 rounded-full bg-silk-maroon border-4 border-temple-gold flex items-center justify-center text-temple-gold text-2xl font-bold shadow-lg flex-shrink-0">
                            {index + 1}
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border-l-4 border-silk-maroon w-full transform hover:scale-105 transition-transform duration-300">
                             <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-600 mb-4">
                                {step.icon}
                             </div>
                             <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">{step.title}</h3>
                             <p className="text-gray-600">{step.desc}</p>
                        </div>
                        
                        <div className="flex-1 hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>

        {/* Video Tutorial Placeholder */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-dashed border-gray-300">
            <h3 className="text-2xl font-bold text-silk-maroon mb-4 font-serif">Watch: How to Order</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4 cursor-pointer hover:bg-gray-300 transition-colors group">
                 <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                 </div>
            </div>
            <p className="text-sm text-gray-500">Video tutorial coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;