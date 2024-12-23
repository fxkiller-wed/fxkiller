import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Photo from "@/assets/img/about-me-photo.jpg";
import IconContact from "@/assets/img/icon-contact.png";
import { subscribe } from "@/services/subscription";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const InfoContact = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Por favor, ingresa tu correo.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await subscribe(email);

      if (response.success) {
        setMessage("¡Gracias por suscribirte! Revisa tu correo para confirmar tu suscripción.");
        setEmail("");
        setIsSubscribed(true);
      } else {
        setMessage(`Hubo un error: ${response.message}`);
      }
    } catch (error) {
      setMessage("Hubo un problema al enviar tu suscripción.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const Networks = [
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/fxkillers.mx/" },
    { icon: <FaYoutube />, name: "Youtube", url: "https://www.youtube.com/@babyivanfx" },
    { icon: <FaXTwitter />, name: "Twitter", url: "https://x.com/fxkillersmx" },
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
          <Link to="/home" className="font-urbanist text-gray-100">
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
        <div className="my-6 lg:my-0 w-full lg:w-96 flex justify-center items-center">
          <img className="rounded-xl" src={Photo} alt="Imagen Presentacion" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 font-urbanist text-lg lg:text-2xl p-2">
          <div className="font-greatVibes py-2 contact-home-highlight text-5xl lg:text-7xl text-center">
            Lista de Espera
          </div>
          <div className="text-center text-gray-100">
            Dejanos tu correo y tus datos, cuentanos porque quieres formar parte de la comunidad. Nuestro equipo conversará contigo.
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col justify-center">
        <motion.div
          className="contact-home-highlight text-2xl font-urbanist text-center py-5 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Envianos tu correo
        </motion.div>
        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 bg-blue1 rounded-xl flex justify-center items-center"
          >
            <span className="text-sm sm:text-xl font-semibold font-urbanist contact-home-highlight text-center">{message}</span>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex sm:flex-row gap-2 justify-center items-center p-2 rounded-2xl btn-about-us"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 w-full font-urbanist rounded-xl text-gray-100 bg-black1 focus:outline-none focus:ring-2 focus:ring-beige2 placeholder-beige2 transition duration-300 text-sm sm:text-base"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="whitespace-nowrap px-6 py-3 rounded-xl contact-btn-form-home hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-urbanist font-semibold text-blue1"
            >
              {isSubmitting ? "Suscribiendo..." : "Regístrarme"}
            </button>
          </motion.form>
        )}

        <motion.div
          className="mt-8 flex flex-col justify-center items-center gap-6 font-urbanist text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-2xl font-urbanist text-center font-semibold contact-home-highlight">
            Todas nuestras redes sociales
          </div>
          {Networks.map((network, index) => (
            <motion.div
              key={index}
              className="w-full max-w-md h-16 bg-beige1 rounded-xl flex items-center px-4 hover:shadow-lg cursor-pointer transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNetworkClick(network.url)}
            >
              <div className="text-4xl text-gray-800 mr-4">{network.icon}</div>
              <div className="text-lg text-gray-800"> {network.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfoContact;
