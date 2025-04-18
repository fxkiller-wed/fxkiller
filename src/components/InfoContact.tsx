
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Photo from "@/assets/img/info-contact.png";
import IconContact from "@/assets/img/icon-contact.png";
import FAQsContacts from "./FAQs-Contacts";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const InfoContact = () => {

  const Networks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/fxkillers.mx/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@babyivanfx" },
    { icon: <FaXTwitter />, url: "https://x.com/fxkillersmx" },
  ];

  const handleNetworkClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <motion.div
      className="info-contact-container max-w-screen-xl mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex justify-between items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-16 sm:w-20">
          <img src={IconContact} alt="Icono Contacto" />
        </div>
        <div className="w-28 sm:w-32 h-10 sm:h-12 flex justify-center items-center contact-btn-form-home rounded-xl contact-btn-form-home hover:scale-105 transition duration-300">
          <Link to="/inicio" className="font-urbanist text-gray-100">
            Ver Website
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center lg:mt-4 lg:mx-10 "
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        
        <div className="flex flex-col justify-center items-center gap- font-urbanist text-lg lg:text-2xl">
          <div className="font-greatVibes py-2 contact-home-highlight text-5xl lg:text-7xl text-center">
            Lista de Espera
          </div>
          <div className="my-6 lg:my-0 w-full lg:w-[800px] flex justify-center items-center">
          <img className="rounded-xl" src={Photo} alt="Imagen Presentacion" />
        </div>
          <div className="text-center text-gray-100">
            Dejanos tu correo y tus datos, cuentanos porque quieres formar parte de la comunidad. Nuestro equipo conversará contigo.
          </div>
        </div>
      </motion.div>

      <div className="w-full flex flex-col items-center justify-center">
        <FAQsContacts />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        >
        <div className="flex justify-center items-center gap-6 mb-5">
          {Networks.map((network) => (
            <motion.div
              key={network.url} 
              className="w-16 h-16 bg-beige1 rounded-xl flex justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2}}
              onClick={() => handleNetworkClick(network.url)}
            >
              <div className="text-4xl text-gray-800">{network.icon}</div>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfoContact;
