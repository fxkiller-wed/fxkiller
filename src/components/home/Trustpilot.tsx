import { motion } from "framer-motion";
import TrustpilotLogo from "@/assets/img/logo-trustpilot.png";

const Trustpilot = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, y: 50 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 1, ease: "easeOut" }}
			className="h-auto w-full lg:w-[600px] flex flex-col relative z-10 overflow-hidden xl:text-[42px]  justify-center items-center py py-5 mb-5 "
		>
			<img
				src={TrustpilotLogo}
				alt="Trustpilot Logo"
				className="w-36 md:w-60 object-contain"
			/>
			<div className="font-urbanist text-lg md:text-2xl text-beige2 text-center">
				<span className="text-beige2 font-semibold">4.87 ★★★★★</span>
			</div>
			{/* <div className="flex justify-center items-center mt-3 lg:mt-0">
			<div className="trustpilot-widget" data-locale="es-ES" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="676c5f6781011505a3a0e065" data-style-height="52px" data-style-width="100%">
			<a href="https://es.trustpilot.com/review/fxkillers.mx" target="_blank" rel="noopener noreferrer" className="contact-btn-form-home text-blue1 px-6 py-3 font-urbanist font-semibold text-sm md:text-base rounded-xl">
				Ver más opiniones
			</a>
			</div>
			</div> */}
		</motion.div>
	);
};

export default Trustpilot;

