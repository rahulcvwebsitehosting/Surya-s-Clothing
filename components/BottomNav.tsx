import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, MessageCircle, Phone, User } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const BottomNav: React.FC = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center justify-center w-full h-full space-y-1 ${
      isActive ? 'text-silk-maroon font-bold' : 'text-gray-500'
    }`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-sandal-cream border-t-2 border-temple-gold shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-50 flex justify-between items-center px-2 pb-safe">
      <NavLink to="/" className={navClass}>
        <Home size={22} />
        <span className="text-[10px]">Home</span>
      </NavLink>
      <NavLink to="/products" className={navClass}>
        <Grid size={22} />
        <span className="text-[10px]">Shop</span>
      </NavLink>
      
      {/* Center WhatsApp Button */}
      <div className="relative -top-5">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center w-14 h-14 bg-basil-green rounded-full shadow-lg border-4 border-sandal-cream text-white animate-pulse-gold"
        >
          <MessageCircle size={28} fill="white" />
        </a>
      </div>

      <a href={`tel:${PHONE_NUMBER}`} className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500">
        <Phone size={22} />
        <span className="text-[10px]">Call</span>
      </a>
      <NavLink to="/about" className={navClass}>
        <User size={22} />
        <span className="text-[10px]">Story</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;