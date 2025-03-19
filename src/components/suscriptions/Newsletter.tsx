import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { subscribe } from "@/services/subscription";

const Newsletter = () => {
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

  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  return (
    <motion.div
      className="xl:w-[1250px] h-auto mx-auto lg:rounded-2xl flex flex-col py-5 mt-5 justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut"}}
        className="flex flex-col justify-center items-center gap-2"
      >
        <div className="text-6xl sm:text-7xl font-greatVibes  text-center text-blue1 py-3 relative z-10">
          Mantente en contacto
        </div>
        <div className="font-urbanist text-blue1 text-center text-lg mb-3">Suscribete a nuestro comunidad para que recibas las últimas actualizaciones y ofertas exclusivas.</div>
      </motion.div>
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
        {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative p-3 sm:p-4 bg-blue1 rounded-xl flex justify-center shadow-lg shadow-gray-600"
            >
              <span className="text-sm sm:text-lg font-semibold font-urbanist contact-home-highlight text-center">{message}</span>
            </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="relative flex gap-2 sm:gap-3 justify-center bg-blue1 p-3 sm:p-4 rounded-2xl shadow-md z-0"
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
              className="contact-btn-form-home whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition duration-300 bg-yellow1 text-white hover:shadow-md hover:shadow-gray-950 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
            >
              {isSubmitting ? 'Enviando...' : 'Suscríbete'}
            </button>
          </motion.form>
        )}
      </div>
    </motion.div>
  );
};

export default Newsletter;