import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CancellationPolicy from './pages/CancellationPolicy';
import BookingPage from './pages/BookingPage';
import BlogPost from './pages/BlogPost';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/cancelacion" element={<CancellationPolicy />} />
      <Route path="/agendar" element={<BookingPage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
