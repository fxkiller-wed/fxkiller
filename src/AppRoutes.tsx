import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Suscriptions from './pages/Suscriptions';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Error from './pages/Error';
import ScrollToTop from './components/ScrollTop';
import Terms from './pages/Terms';

const AppRoutes = () => {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/inicio" element={<Home />} />
				<Route path="/suscripciones" element={<Suscriptions />} />
				<Route path="/FAQs" element={<FAQs />} />
				<Route path="/contacto" element={<Contact />} />
				<Route path="/terminos" element={<Terms />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</>
	);
};

export default AppRoutes;

