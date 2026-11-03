import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import Press from './pages/Press';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#page">
        Skip to Content
      </a>
      <ScrollToTop />
      <ScrollEffects />
      <Header />
      <main id="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/press" element={<Press />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
