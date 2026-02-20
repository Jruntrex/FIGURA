import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';

import { ScrollToTop } from '@/components/utils/ScrollToTop';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/contact"
        element={<ContactPage />}
      />
    </Routes>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </LanguageProvider>
  );
};

export default App;
