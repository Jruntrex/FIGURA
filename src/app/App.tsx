import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import UnderConstruction from './components/UnderConstruction';

const AppRoutes = () => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/contact"
        element={isLocalhost ? <ContactPage /> : <UnderConstruction />}
      />
    </Routes>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </LanguageProvider>
  );
};

export default App;
