import React from 'react';
import { Product } from '../types';
import { TEXTS, WHATSAPP_LINK } from '../constants';
import { useLanguage } from './LanguageContext';
import { X, MessageCircle } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { language } = useLanguage();

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const message = `Hi, I am interested in ${product.nameEn} (₹${product.price}). Is it available?`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative bg-gray-100 flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/80 p-2 rounded-full text-gray-800 hover:bg-white transition-colors z-10"
          >
            <X size={24} />
          </button>
          <img 
            src={product.image} 
            alt={product.nameEn} 
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="mb-2">
            <h2 className="text-2xl font-bold text-gray-900">{language === 'en' ? product.nameEn : product.nameTa}</h2>
            <h3 className="text-lg text-gray-600 mt-1">{language === 'en' ? product.nameTa : product.nameEn}</h3>
          </div>
          
          <div className="text-3xl font-bold text-pink-700 my-4">₹{product.price}</div>
          
          <div className="bg-pink-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-pink-900 mb-1">Details / விவரங்கள்:</h4>
            <p className="text-gray-700 mb-2">{product.descriptionEn}</p>
            <p className="text-gray-700">{product.descriptionTa}</p>
          </div>

          <button
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg"
          >
            <MessageCircle size={28} fill="currentColor" />
            <span className="text-lg">{TEXTS.orderOnWhatsapp[language]}</span>
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">
             {language === 'en' ? 'Clicking this button will open WhatsApp with a pre-filled message.' : 'இந்த பட்டனை கிளிக் செய்தால் வாட்ஸ்அப் திறக்கும்.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;