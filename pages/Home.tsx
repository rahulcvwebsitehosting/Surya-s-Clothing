import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Truck, ShieldCheck, Clock } from 'lucide-react';
import { TEXTS, PRODUCTS } from '../constants.ts';
import { useLanguage } from '../components/LanguageContext.tsx';

const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col pb-20 overflow-hidden">
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-silk-maroon text-sandal-cream">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-100 ease-linear"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1610189012906-6c02db387d95?q=80&w=1920&auto=format&fit=crop')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-silk-maroon/60 via-silk-maroon/40 to-silk-maroon/90"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20 animate-spin-slow">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="#FFD700" strokeWidth="2">
                <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
                <path d="M50 10 L50 90 M10 50 L90 50" />
            </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block border border-temple-gold px-4 py-1 rounded-full text-temple-gold text-sm font-serif tracking-widest mb-4 animate-bounce">
             ✨ {t('auspiciousTime')}
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
            {language === 'en' ? (
                <>
                The Elegance of <br/> <span className="text-temple-gold">Tamil Tradition</span>
                </>
            ) : (
                <>
                தமிழ் பாரம்பரியத்தின் <br/> <span className="text-temple-gold">அழகு</span>
                </>
            )}
          </h1>
          <p className="text-lg md:text-2xl opacity-90 mb-10 font-light font-sans max-w-2xl mx-auto">
            {t('welcomeSubtitle')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/products"
              className="bg-temple-gold text-silk-maroon font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              {language === 'en' ? 'Shop Collection' : 'தொகுப்பை பாருங்கள்'} <ArrowRight />
            </Link>
            <Link 
              to="/about"
              className="border-2 border-sandal-cream text-sandal-cream font-bold py-4 px-10 rounded-full hover:bg-sandal-cream hover:text-silk-maroon transition-colors"
            >
              {t('about')}
            </Link>
          </div>
        </div>
        
        {/* Fabric Flow Animation (CSS simulated) */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-sandal-cream to-transparent"></div>
      </section>

      {/* Ticker */}
      <div className="bg-temple-gold overflow-hidden py-2 whitespace-nowrap border-y-4 border-double border-silk-maroon">
        <div className="inline-block animate-float">
           <span className="mx-4 text-silk-maroon font-bold text-sm uppercase tracking-widest">🕉️ 200+ Happy Customers</span>
           <span className="mx-4 text-silk-maroon font-bold text-sm uppercase tracking-widest">🚚 Fast Delivery in Tiruppur</span>
           <span className="mx-4 text-silk-maroon font-bold text-sm uppercase tracking-widest">✨ New Festival Collection Available</span>
           <span className="mx-4 text-silk-maroon font-bold text-sm uppercase tracking-widest">🥻 Handpicked Quality</span>
        </div>
      </div>

      {/* Featured Collections with Traditional Cards */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
            <span className="text-silk-maroon font-serif text-lg italic">Curated for you</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 font-serif">{t('products')}</h2>
            <div className="w-24 h-1 bg-silk-maroon mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { 
                  title: t('sarees'), 
                  img: 'https://images.wholesalesalwar.com/2024y/October/53239/Pink-Pure%20Tissue%20Silk-Wedding%20Wear-Embroidery%20Work-Saree-THEWEDDINGSAGA-8403.jpg', 
                  color: 'bg-red-900', 
                  link: '/products?filter=Sarees' 
                },
                { 
                  title: t('nighties'), 
                  img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop', 
                  color: 'bg-purple-900', 
                  link: '/products?filter=Nighties' 
                },
                { 
                  title: t('womensClothing'), 
                  img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600&auto=format&fit=crop', 
                  color: 'bg-green-900', 
                  link: '/products?filter=WomensClothing' 
                }
            ].map((cat, idx) => (
                <Link to={cat.link} key={idx} className="group relative h-96 rounded-t-full border-4 border-silk-maroon overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <h3 className="text-3xl font-serif font-bold text-temple-gold mb-2">{cat.title}</h3>
                        <span className="text-white text-sm uppercase tracking-widest border-b border-white pb-1 group-hover:text-temple-gold group-hover:border-temple-gold transition-colors">Explore</span>
                    </div>
                </Link>
            ))}
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section className="bg-silk-maroon/5 py-20 relative">
        <div className="absolute inset-0 kolam-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-silk-maroon font-serif">{t('newArrivals')}</h2>
                </div>
                <Link to="/products" className="text-silk-maroon font-bold hover:text-temple-gold transition-colors flex items-center gap-2">
                    {t('viewAll')} <ArrowRight size={20} />
                </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {featuredProducts.map(p => (
                    <Link to="/products" key={p.id} className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group">
                        <div className="relative aspect-[3/4] overflow-hidden rounded mb-3">
                             <img src={p.image} alt={p.nameEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                             {p.isNew && <span className="absolute top-2 right-2 bg-temple-gold text-silk-maroon text-[10px] font-bold px-2 py-1 rounded">NEW</span>}
                        </div>
                        <h4 className="font-serif font-bold text-gray-800 truncate">{language === 'en' ? p.nameEn : p.nameTa}</h4>
                        <div className="flex justify-between items-center mt-2">
                             <p className="text-silk-maroon font-bold">₹{p.price}</p>
                             <button className="bg-silk-maroon text-temple-gold p-1 rounded-full"><ShoppingBag size={16} /></button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-silk-maroon text-sandal-cream py-12 border-t-4 border-temple-gold">
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={40} className="text-temple-gold" />
                <h4 className="font-bold">Quality Guarantee</h4>
                <p className="text-xs opacity-70">Handpicked fabrics</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Truck size={40} className="text-temple-gold" />
                <h4 className="font-bold">Home Delivery</h4>
                <p className="text-xs opacity-70">Nearby Tiruppur</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Star size={40} className="text-temple-gold" />
                <h4 className="font-bold">5-Star Service</h4>
                <p className="text-xs opacity-70">200+ Happy Customers</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Clock size={40} className="text-temple-gold" />
                <h4 className="font-bold">Order Anytime</h4>
                <p className="text-xs opacity-70">WhatsApp Support</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;