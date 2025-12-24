import { Product, Translation } from './types';

export const PHONE_NUMBER = "+917708400768";
export const PHONE_DISPLAY = "+91 77084 00768";
export const WHATSAPP_LINK = `https://wa.me/917708400768`;
export const LOCATION_MAP_URL = "https://maps.google.com/maps?q=48QH%2BQWR%20Tiruppur%2C%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const TEXTS: Translation = {
  brandName: { en: "Surya's Clothing", ta: "சூர்யா உடைகள்" },
  home: { en: "Home", ta: "முகப்பு" },
  products: { en: "Collections", ta: "தொகுப்புகள்" },
  howToOrder: { en: "How to Order", ta: "ஆர்டர் செய்வது" },
  about: { en: "Our Story", ta: "எங்கள் கதை" },
  contact: { en: "Contact", ta: "தொடர்பு" },
  welcomeTitle: { en: "Tradition Meets Elegance", ta: "பாரம்பரியமும் அழகும் இணைந்த இடம்" },
  welcomeSubtitle: { en: "Handpicked Sarees & Nighties for the Modern Woman", ta: "நவீன பெண்களுக்கான தேர்ந்தெடுக்கப்பட்ட சேலைகள் மற்றும் நைட்டிகள்" },
  callNow: { en: "Call Now", ta: "அழைக்க" },
  whatsapp: { en: "Chat", ta: "வாட்ஸ்அப்" },
  newArrivals: { en: "New Arrivals", ta: "புதிய வரவுகள்" },
  viewAll: { en: "View All Collections", ta: "அனைத்தையும் காண்க" },
  sarees: { en: "Sarees", ta: "சேலைகள்" },
  nighties: { en: "Nighties", ta: "நைட்டிகள்" },
  womensClothing: { en: "Women's Wear", ta: "பெண்கள் ஆடைகள்" },
  price: { en: "Price", ta: "விலை" },
  orderOnWhatsapp: { en: "Order via WhatsApp", ta: "வாட்ஸ்அப்பில் ஆர்டர்" },
  close: { en: "Close", ta: "மூடு" },
  step1: { en: "Explore Collection", ta: "தொகுப்பை ஆராயுங்கள்" },
  step2: { en: "Chat to Confirm", ta: "பேசி உறுதி செய்யுங்கள்" },
  step3: { en: "Easy Payment", ta: "எளிய முறையில் பணம்" },
  step4: { en: "Fast Delivery", ta: "விரைவான விநியோகம்" },
  addressTitle: { en: "Visit Our Home Boutique", ta: "எங்கள் இல்லத்திற்கு வருக" },
  address: { en: "48QH+QWR Tiruppur, Tamil Nadu", ta: "48QH+QWR திருப்பூர், தமிழ்நாடு" },
  paymentMethods: { en: "Payment Methods", ta: "பணம் செலுத்தும் முறைகள்" },
  customOrders: { en: "Custom Stitching Available", ta: "தையல் வசதி உள்ளது" },
  pickupNote: { en: "Open: 10 AM - 8 PM", ta: "நேரம்: காலை 10 - இரவு 8" },
  aboutText1: { 
    en: "Surya's Clothing is a celebration of Tamil Nadu's textile heritage. Started from a humble home in Tiruppur, we bring you fabrics that tell a story.", 
    ta: "சூர்யா உடைகள் தமிழ்நாட்டின் ஜவுளி பாரம்பரியத்தின் கொண்டாட்டமாகும். திருப்பூரில் ஒரு எளிய வீட்டில் தொடங்கப்பட்டு, தரமான ஆடைகளை உங்களுக்கு வழங்குகிறோம்." 
  },
  aboutText2: {
    en: "We offer a wide range of sarees, nighties, and women's clothing suitable for daily wear and special occasions. We also accept custom orders for specific requirements.",
    ta: "தினசரி பயன்பாடு மற்றும் விசேஷங்களுக்கு ஏற்ற பலவிதமான சேலைகள், நைட்டிகள் மற்றும் பெண்கள் ஆடைகளை நாங்கள் வழங்குகிறோம். தனிப்பட்ட தேவைகளுக்கான பிரத்யேக ஆர்டர்களையும் ஏற்றுக்கொளோறோம்."
  },
  clickToExpand: { en: "Tap to view details", ta: "விவரங்களை பார்க்க தொடவும்" },
  auspiciousTime: { en: "Good time to shop!", ta: "வாங்க நல்ல நேரம்!" },
  rahuKalam: { en: "Rahu Kalam (Avoid new starts)", ta: "ராகு காலம் (தவிர்க்கவும்)" },
  filters: { en: "Filters", ta: "வடிகட்டி" },
  daily: { en: "Daily Wear", ta: "தினசரி" },
  festival: { en: "Festival", ta: "திருவிழா" },
  party: { en: "Party", ta: "விசேஷம்" },
  wedding: { en: "Wedding", ta: "திருமணம்" },
  addToWishlist: { en: "Add to Wishlist", ta: "விருப்பப்பட்டியலில் சேர்" },
  tryOn: { en: "Virtual Try-On", ta: "மெய்நிகர் முயற்சி" },
  spinWheel: { en: "Spin & Win", ta: "சுழற்றி வெல்லுங்கள்" },
  all: { en: "All", ta: "அனைத்தும்" },
};

export const PRODUCTS: Product[] = [
  // Sarees
  {
    id: 's1',
    category: 'Sarees',
    occasion: 'Daily',
    nameEn: 'Kanchi Cotton Silk',
    nameTa: 'காஞ்சி காட்டன் சில்க்',
    price: 850,
    rating: 5,
    isNew: true,
    colors: ['#FF0000', '#FFD700'],
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    descriptionEn: 'Premium cotton silk with traditional temple border. Breathable fabric perfect for Tiruppur weather.',
    descriptionTa: 'பாரம்பரிய கோவில் கரையுடன் கூடிய பிரீமியம் காட்டன் சில்க். திருப்பூர் காலநிலைக்கு ஏற்ற சுவாசிக்கக்கூடிய துணி.'
  },
  {
    id: 's2',
    category: 'Sarees',
    occasion: 'Party',
    nameEn: 'Georgette Floral',
    nameTa: 'ஜார்ஜெட் ஃப்ளோரல்',
    price: 1200,
    rating: 4,
    colors: ['#FFC0CB', '#800080'],
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop',
    descriptionEn: 'Lightweight flowy georgette saree with intricate floral digital prints.',
    descriptionTa: 'சிக்கலான மலர் டிஜிட்டல் பிரிண்ட்டுகளுடன் கூடிய இலகுரக ஜார்ஜெட் சேலை.'
  },
  {
    id: 's3',
    category: 'Sarees',
    occasion: 'Wedding',
    nameEn: 'Bridal Silk Tissue',
    nameTa: 'முகூர்த்த பட்டு டிஷ்யூ',
    price: 1800,
    rating: 5,
    isNew: true,
    colors: ['#800020', '#FFD700'],
    image: 'https://images.wholesalesalwar.com/2024y/October/53239/Pink-Pure%20Tissue%20Silk-Wedding%20Wear-Embroidery%20Work-Saree-THEWEDDINGSAGA-8403.jpg',
    descriptionEn: 'Rich look silk blend saree with heavy zari work, ideal for functions and weddings.',
    descriptionTa: 'விழாக்கள் மற்றும் திருமணங்களுக்கு ஏற்ற ஜரிகை வேலைப்பாடு கொண்ட பட்டு கலவை சேலை.'
  },
  {
    id: 's4',
    category: 'Sarees',
    occasion: 'Daily',
    nameEn: 'Coimbatore Cotton',
    nameTa: 'கோவை காட்டன்',
    price: 450,
    rating: 4,
    colors: ['#0000FF', '#008000'],
    image: 'https://www.prashantisarees.com/cdn/shop/products/coimbatore-cotton-saree-pink-prashanti-sarees-1.JPG?v=1703556138',
    descriptionEn: 'Authentic 80s count cotton saree. Pure comfort for daily home use.',
    descriptionTa: 'உண்மையான 80 கவுண்ட் காட்டன் சேலை. தினசரி வீட்டு உபயோகத்திற்கு முழுமையான வசதி.'
  },
  {
    id: 's5',
    category: 'Sarees',
    occasion: 'Festival',
    nameEn: 'Art Silk Jacquard',
    nameTa: 'ஆர்ட் சில்க் ஜாக்கார்ட்',
    price: 650,
    rating: 4,
    colors: ['#FFA500', '#FF1493'],
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd0a77?q=80&w=600&auto=format&fit=crop',
    descriptionEn: 'Budget friendly art silk with self-embossed jacquard designs.',
    descriptionTa: 'சுய-எம்ப்ராஸ் செய்யப்பட்ட ஜாக்கார்ட் டிசைன்களுடன் குறைந்த விலையில் ஆர்ட் சில்க்.'
  },
  // Nighties
  {
    id: 'n1',
    category: 'Nighties',
    occasion: 'Daily',
    nameEn: 'Premium Cotton Nighty',
    nameTa: 'பிரீமியம் காட்டன் நைட்டி',
    price: 350,
    rating: 5,
    colors: ['#4682B4', '#D8BFD8'],
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    descriptionEn: 'Thick cotton material that does not shrink. Vibrant colors.',
    descriptionTa: 'சுருங்காத தடிமனான காட்டன் மெட்டீரியல். துடிப்பான வண்ணங்கள்.'
  },
  {
    id: 'n2',
    category: 'Nighties',
    occasion: 'Daily',
    nameEn: 'Sungudi Print Nighty',
    nameTa: 'சுங்குடி பிரிண்ட் நைட்டி',
    price: 400,
    rating: 5,
    isNew: true,
    colors: ['#DC143C', '#FFFF00'],
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=600&auto=format&fit=crop',
    descriptionEn: 'Madurai Sungudi style printed nighty. Very cooling fabric.',
    descriptionTa: 'மதுரை சுங்குடி ஸ்டைல் பிரிண்டட் நைட்டி. மிகவும் குளிர்ச்சியான துணி.'
  },
  // Women's Clothing
  {
    id: 'w1',
    category: 'WomensClothing',
    occasion: 'Daily',
    nameEn: 'Jaipuri Cotton Kurti',
    nameTa: 'ஜெய்ப்பூரி காட்டன் குர்த்தி',
    price: 450,
    rating: 4,
    colors: ['#00FFFF', '#FF00FF'],
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600&auto=format&fit=crop',
    descriptionEn: 'Handblock printed Jaipuri cotton kurti. Stylish and traditional.',
    descriptionTa: 'ஹேண்ட்பிளாக் பிரிண்ட் செய்யப்பட்ட ஜெய்ப்பூரி காட்டன் குர்த்தி. ஸ்டைலான மற்றும் பாரம்பரியமான.'
  }
];