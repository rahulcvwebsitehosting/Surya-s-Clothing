import React from 'react';
import { Product } from '../types';
import { TEXTS, WHATSAPP_LINK } from '../constants';
import { useLanguage } from './LanguageContext';
import { MessageCircle, Star, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { language } = useLanguage();

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hi, I am interested in ${product.nameEn} (₹${product.price}). Is it available?`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Helper to get safe category label
  const getCategoryLabel = (cat: string) => {
    if (cat === 'WomensClothing') return TEXTS.womensClothing[language];
    // For 'Sarees' and 'Nighties', toLowerCase() matches the keys in TEXTS
    return (TEXTS as any)[cat.toLowerCase()]?.[language] || cat;
  };

  return (
    <div 
      className="group relative h-[400px] w-full perspective-1000 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-full w-full shadow-xl transition-all duration-700 transform-style-3d group-hover:rotate-y-180 rounded-xl">
        
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-xl overflow-hidden bg-white border-2 border-transparent group-hover:border-temple-gold">
          <img 
            src={product.image} 
            alt={product.nameEn}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-kumkum-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
              NEW
            </div>
          )}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
            <h3 className="font-serif font-bold text-lg truncate">{language === 'en' ? product.nameEn : product.nameTa}</h3>
            <p className="text-temple-gold font-bold text-xl">₹{product.price}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full bg-sandal-cream rounded-xl rotate-y-180 backface-hidden p-6 flex flex-col justify-between border-2 border-temple-gold shadow-2xl bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]">
          <div>
            <div className="flex justify-between items-start mb-2">
               <h3 className="font-bold text-silk-maroon text-lg leading-tight">{language === 'en' ? product.nameEn : product.nameTa}</h3>
               <div className="flex text-amber-500">
                 {[...Array(product.rating || 4)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
               </div>
            </div>
            <p className="text-gray-600 text-xs mb-2 italic">
              {getCategoryLabel(product.category)}
            </p>
            <p className="text-gray-800 text-sm line-clamp-4 leading-relaxed">
              {language === 'en' ? product.descriptionEn : product.descriptionTa}
            </p>
            
            {/* Color Swatches */}
            {product.colors && (
              <div className="flex gap-2 mt-4">
                {product.colors.map((c, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border border-gray-300 shadow-sm" style={{ backgroundColor: c }} />
                ))}
              </div>
            )}
          </div>

          <div className="space-y-3">
             <button className="w-full py-2 bg-silk-maroon text-temple-gold font-bold rounded shadow-md flex items-center justify-center gap-2 hover:bg-maroon-800 transition-colors">
                <Eye size={18} /> {TEXTS.clickToExpand[language]}
             </button>
             <button 
                onClick={handleWhatsAppOrder}
                className="w-full py-2 bg-basil-green text-white font-bold rounded shadow-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
             >
                <MessageCircle size={18} /> {TEXTS.orderOnWhatsapp[language]}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;