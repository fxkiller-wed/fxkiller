import { motion } from "framer-motion";
import TrustpilotLogo from "@/assets/img/logo-trustpilot.png";

const HomeTrustpilot = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-[600px] flex flex-col justify-center items-center py bg-blue1 rounded-2xl shadow-lg py-5 mb-5"
    >
      <div></div>
      <img
        src={TrustpilotLogo}
        alt="Trustpilot Logo"
        className="w-36 md:w-44 object-contain"
      />
      <div className="font-urbanist text-lg md:text-2xl text-beige2 text-center">
        <span className="text-beige2 font-semibold">4.87 ★★★★★</span>
        <p className="text-sm md:text-lg text-gray-200 my-2">
          Calificación de nuestros clientes
        </p>
      </div>
      <a
        href="https://es.trustpilot.com/review/fxkillersacademy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn-form-home text-blue1 px-6 py-2 font-urbanist font-semibold text-sm md:text-base rounded-xl"
      >
        Ver más opiniones
      </a>
    </motion.div>
  );
};

export default HomeTrustpilot;
