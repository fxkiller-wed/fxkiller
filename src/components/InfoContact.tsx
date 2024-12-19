import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Photo from "@/assets/img/about-me-photo.png";
import IconContact from "@/assets/img/icon-contact.png";
import { subscribe } from "@/services/subscription";
import { FaDiscord, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const InfoContact = () => {
  // Estados para gestionar la suscripción y los datos del formulario
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Maneja el envío del formulario
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

  // Información de las redes sociales
  const Networks = [
    { icon: <FaInstagram />, name: "Instagram", url: "" },
    { icon: <FaDiscord />, name: "Discord", url: "" },
    { icon: <FaTwitter />, name: "Twitter", url: "" },
    { icon: <FaYoutube />, name: "Youtube", url: "" },
  ];

  return (
    <div className="info-contact-container w-[1200px] mt-5">
      <div className="flex justify-between items-center">
        <div className="w-20">
          <img src={IconContact} alt="Icono Contacto" />
        </div>
        <div className="w-32 h-12 flex justify-center items-center contact-btn-form-home rounded-xl">
          <Link to="/home" className="font-urbanist font-semibold text-gray-100">
            Ver Website
          </Link>
        </div>
      </div>

      <div className="flex">
        <div className="m-8">
          <img className="rounded-xl w-[600px]" src={Photo} alt="Imagen Presentacion" />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 font-urbanist text-2xl">
          <div className="font-urbanist font-semibold contact-home-highlight text-5xl pt-2 text-center">
            ¿Estás listo para cambiar tu destino financiero?
          </div>
          <div className="text-center text-gray-100">
            Únete a FX Killers y lleva tu trading y crecimiento personal al siguiente nivel con mentorías exclusivas, recursos gratuitos y una comunidad vibrante. ¡Suscríbete ahora y comienza tu camino hacia el éxito en 2025!
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 flex flex-col justify-center">
        <div className="contact-home-highlight text-2xl font-urbanist text-center py-5 font-semibold">
          Newsletter
        </div>
        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-3 sm:p-4 bg-blue1 rounded-xl flex justify-center items-center"
          >
            <span className="text-sm sm:text-lg font-semibold font-urbanist contact-home-highlight text-center">{message}</span>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="relative flex gap-2 sm:gap-3 justify-center btn-why-chosee p-3 sm:p-4 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 sm:p-3 w-full font-urbanist rounded-xl text-gray-100 bg-transparent focus:outline-none focus:ring-2 focus:ring-beige1 focus:border-transparent placeholder-beige2 transition duration-300 relative z-10 text-sm sm:text-base"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="contact-btn-form-home whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition duration-300 bg-yellow1 hover:shadow-md hover:shadow-gray-950 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xs font-urbanist font-semibold text-blue1"
            >
              {isSubmitting ? 'Suscribiendo...' : 'Únete a nuestra comunidad'}
            </button>
          </motion.form>
        )}

        <div className="flex flex-col justify-center items-center gap-6 font-urbanist text-2xl">
          <div className="contact-home-highlight text-2xl font-urbanist text-center py-5 font-semibold">
            All my networks
          </div>
         {Networks.map((network, index) => ( 
          <div key={index} className="w-[750px] h-16 btn-bg-black flex justify-center items-center cursor-pointer mb-5">
              <div  className="flex justify-start items-center w-16 h-16 rounded-full mx-2">
                <div className="tetx-gray-50">{network.icon}</div>
                <div className="ml-2">Sígueme en {network.name}</div>
              </div>
          </div>
         ))}
        </div>
      </div>
    </div>
  );
};

export default InfoContact;
