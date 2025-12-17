import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { TEXTS, PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_LINK, LOCATION_MAP_URL } from '../constants';
import { Phone, MessageCircle, MapPin, Clock, CreditCard } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">{TEXTS.contact[language]}</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500">
                <div className="flex items-center gap-4 mb-3">
                    <div className="bg-pink-100 p-3 rounded-full text-pink-600"><Phone /></div>
                    <div>
                        <h3 className="font-bold text-gray-800">{language === 'en' ? 'Phone' : 'தொலைபேசி'}</h3>
                        <a href={`tel:${PHONE_NUMBER}`} className="text-lg font-bold text-pink-700 hover:underline">{PHONE_DISPLAY}</a>
                    </div>
                </div>
                <a href={`tel:${PHONE_NUMBER}`} className="block w-full text-center bg-gray-100 py-2 rounded font-semibold text-gray-700 hover:bg-gray-200 mt-2">
                    {TEXTS.callNow[language]}
                </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center gap-4 mb-3">
                    <div className="bg-green-100 p-3 rounded-full text-green-600"><MessageCircle /></div>
                    <div>
                        <h3 className="font-bold text-gray-800">{TEXTS.whatsapp[language]}</h3>
                        <p className="text-gray-600 text-sm">Chat for orders & queries</p>
                    </div>
                </div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="block w-full text-center bg-green-500 py-2 rounded font-semibold text-white hover:bg-green-600 mt-2 shadow-sm">
                    {TEXTS.orderOnWhatsapp[language]}
                </a>
            </div>

             {/* Timing Card */}
             <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-400">
                <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Clock /></div>
                    <div>
                        <h3 className="font-bold text-gray-800">{language === 'en' ? 'Timings' : 'நேரம்'}</h3>
                        <p className="text-gray-600 font-medium">{TEXTS.pickupNote[language]}</p>
                    </div>
                </div>
            </div>

             {/* Payments Card */}
             <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-purple-100 p-3 rounded-full text-purple-600"><CreditCard /></div>
                    <div>
                        <h3 className="font-bold text-gray-800">{TEXTS.paymentMethods[language]}</h3>
                        <p className="text-sm text-gray-500">GPay, PhonePe, Cash</p>
                    </div>
                </div>
                <div className="bg-gray-100 h-32 rounded flex items-center justify-center text-gray-400 text-sm border-2 border-dashed border-gray-300">
                     [Owner to add QR Code Image here]
                </div>
            </div>

        </div>

        {/* Map Column */}
        <div className="bg-white p-2 rounded-xl shadow-md h-full min-h-[400px] flex flex-col">
             <div className="p-4">
                <div className="flex items-center gap-2 text-pink-700 mb-2">
                    <MapPin />
                    <h3 className="font-bold">{TEXTS.addressTitle[language]}</h3>
                </div>
                <p className="text-gray-600 mb-4">{TEXTS.address[language]}</p>
             </div>
             <iframe 
                src={LOCATION_MAP_URL}
                width="100%" 
                height="100%" 
                className="flex-1 rounded-lg bg-gray-200"
                style={{border:0, minHeight: '300px'}} 
                allowFullScreen 
                loading="lazy"
                title="location-map"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;