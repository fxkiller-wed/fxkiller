import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Suscriptions from './pages/Suscriptions';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Error from './pages/Error';  
import ScrollToTop from './components/ScrollTop';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/suscriptions" element={<Suscriptions />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

