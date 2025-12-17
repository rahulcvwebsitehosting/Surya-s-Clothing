import React, { useState, useMemo } from 'react';
import { PRODUCTS, TEXTS } from '../constants';
import { useLanguage } from '../components/LanguageContext';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';
import { Filter, X } from 'lucide-react';

const Products: React.FC = () => {
  const { language } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Sarees' | 'Nighties' | 'WomensClothing'>('All');
  const [occasionFilter, setOccasionFilter] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const catMatch = categoryFilter === 'All' || p.category === categoryFilter;
      const occMatch = occasionFilter === 'All' || p.occasion === occasionFilter;
      return catMatch && occMatch;
    });
  }, [categoryFilter, occasionFilter]);

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return TEXTS.all ? TEXTS.all[language] : 'All';
    if (cat === 'WomensClothing') return TEXTS.womensClothing[language];
    return (TEXTS as any)[cat.toLowerCase()]?.[language] || cat;
  };

  const getOccasionLabel = (occ: string) => {
    if (occ === 'All') return TEXTS.all ? TEXTS.all[language] : 'All';
    return (TEXTS as any)[occ.toLowerCase()]?.[language] || occ;
  };

  return (
    <div className="min-h-screen bg-sandal-cream pb-24">
      {/* Header */}
      <div className="bg-silk-maroon text-sandal-cream py-8 px-4 text-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 kolam-bg opacity-10"></div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold relative z-10">{TEXTS.products[language]}</h1>
        <p className="text-temple-gold text-sm mt-2 relative z-10">Select your style for every occasion</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 rounded-lg font-bold text-gray-700 shadow-sm"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} /> {TEXTS.filters[language]}
        </button>

        {/* Sidebar Filters */}
        <div className={`
          fixed inset-0 z-40 bg-white p-6 transform transition-transform duration-300 md:relative md:transform-none md:w-64 md:block md:bg-transparent md:p-0 md:shadow-none
          ${showFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="flex justify-between items-center mb-6 md:hidden">
             <h2 className="text-xl font-bold font-serif">{TEXTS.filters[language]}</h2>
             <button onClick={() => setShowFilters(false)}><X /></button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 sticky top-24">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-bold text-silk-maroon mb-4 border-b border-gray-200 pb-2">{language === 'en' ? 'Category' : 'வகை'}</h3>
              <div className="space-y-2">
                {['All', 'Sarees', 'Nighties', 'WomensClothing'].map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${categoryFilter === cat ? 'border-silk-maroon' : 'border-gray-300'}`}>
                      {categoryFilter === cat && <div className="w-2 h-2 rounded-full bg-silk-maroon"></div>}
                    </div>
                    <input 
                      type="radio" 
                      name="category" 
                      className="hidden" 
                      checked={categoryFilter === cat} 
                      onChange={() => setCategoryFilter(cat as any)} 
                    />
                    <span className={`${categoryFilter === cat ? 'text-silk-maroon font-bold' : 'text-gray-600 group-hover:text-silk-maroon'}`}>
                       {getCategoryLabel(cat)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Occasion Filter */}
            <div>
              <h3 className="font-bold text-silk-maroon mb-4 border-b border-gray-200 pb-2">{language === 'en' ? 'Occasion' : 'சந்தர்ப்பம்'}</h3>
              <div className="space-y-2">
                {['All', 'Daily', 'Festival', 'Party', 'Wedding'].map(occ => (
                  <label key={occ} className="flex items-center gap-3 cursor-pointer group">
                     <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center ${occasionFilter === occ ? 'border-silk-maroon' : 'border-gray-300'}`}>
                      {occasionFilter === occ && <div className="w-2 h-2 bg-silk-maroon"></div>}
                    </div>
                    <input 
                      type="radio" 
                      name="occasion" 
                      className="hidden" 
                      checked={occasionFilter === occ} 
                      onChange={() => setOccasionFilter(occ)} 
                    />
                    <span className={`${occasionFilter === occ ? 'text-silk-maroon font-bold' : 'text-gray-600 group-hover:text-silk-maroon'}`}>
                       {getOccasionLabel(occ)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <button 
                onClick={() => {setCategoryFilter('All'); setOccasionFilter('All');}}
                className="mt-6 text-sm text-gray-400 hover:text-silk-maroon underline w-full text-center"
            >
                Reset Filters
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => setSelectedProduct(product)} 
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl shadow border border-dashed border-gray-300">
               <p className="text-gray-500 text-lg">No products found matching your selection.</p>
               <button 
                  onClick={() => {setCategoryFilter('All'); setOccasionFilter('All');}}
                  className="mt-4 text-silk-maroon font-bold hover:underline"
               >
                  Clear Filters
               </button>
            </div>
          )}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default Products;