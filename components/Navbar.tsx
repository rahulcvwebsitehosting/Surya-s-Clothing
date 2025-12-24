import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext.tsx';
import CulturalWidget from './CulturalWidget.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 rounded transition-colors font-serif tracking-wide ${
      isActive
        ? 'text-temple-gold font-bold border-b-2 border-temple-gold'
        : 'text-gray-100 hover:text-temple-gold hover:bg-white/10'
    }`;

  return (
    <nav className="bg-silk-maroon shadow-2xl sticky top-0 z-50 border-b-4 border-temple-gold">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar - Cultural Info */}
        <div className="hidden lg:block py-2 border-b border-white/10">
           <CulturalWidget />
        </div>

        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
               <div className="absolute inset-0 bg-temple-gold rounded-full blur group-hover:blur-md transition-all"></div>
               <div className="relative bg-sandal-cream p-2 rounded-full text-silk-maroon border-2 border-temple-gold">
                 <ShoppingBag size={28} />
               </div>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl md:text-2xl text-sandal-cream leading-none tracking-wider">
                {language === 'en' ? "Surya's" : "சூர்யா"} <span className="text-temple-gold">{language === 'en' ? "Clothing" : "உடைகள்"}</span>
              </h1>
              <p className="text-[10px] text-gray-300 tracking-widest uppercase hidden md:block">Est. 2023 • Tiruppur</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={linkClass}>{t('home')}</NavLink>
            <NavLink to="/products" className={linkClass}>{t('products')}</NavLink>
            <NavLink to="/order" className={linkClass}>{t('howToOrder')}</NavLink>
            <NavLink to="/about" className={linkClass}>{t('about')}</NavLink>
            
            <button className="text-gray-200 hover:text-temple-gold p-2">
                <Heart size={24} />
            </button>
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
              className="ml-4 px-4 py-1 border border-temple-gold rounded-full text-temple-gold font-bold hover:bg-temple-gold hover:text-silk-maroon transition-all text-sm font-sans"
            >
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
              className="px-2 py-1 border border-temple-gold rounded text-temple-gold font-bold text-xs"
            >
              {language === 'en' ? 'தமிழ்' : 'Eng'}
            </button>
            <button onClick={toggleMenu} className="text-temple-gold p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-silk-maroon border-t border-temple-gold pb-6 px-4 shadow-xl animate-in slide-in-from-top-5">
           <div className="py-4">
              <CulturalWidget />
           </div>
          <div className="flex flex-col space-y-2">
            <NavLink to="/" onClick={toggleMenu} className={linkClass}>{t('home')}</NavLink>
            <NavLink to="/products" onClick={toggleMenu} className={linkClass}>{t('products')}</NavLink>
            <NavLink to="/order" onClick={toggleMenu} className={linkClass}>{t('howToOrder')}</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className={linkClass}>{t('about')}</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className={linkClass}>{t('contact')}</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;