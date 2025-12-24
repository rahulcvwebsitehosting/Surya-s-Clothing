import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import BottomNav from './components/BottomNav.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';
import AudioPlayer from './components/AudioPlayer.tsx';

// Pages
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import HowToOrder from './pages/HowToOrder.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

// ScrollToTop component to ensure pages start at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout component
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<HowToOrder />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
      <FloatingWhatsApp />
      <AudioPlayer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Layout />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;