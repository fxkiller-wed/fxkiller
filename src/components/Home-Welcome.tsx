import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { subscribe } from "@/services/subscription"; 

const Welcome = () => {
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
    <div 
      id="home-welcome"
      className="w-full flex items-center justify-center relative mb-16">
      <motion.div
        className="w-[90%] sm:w-[85%] md:w-[80%] max-w-[1000px] rounded-xl flex flex-col items-center gap-4 p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1, ease: "easeOut" }}  
      >
        <motion.div
          className="w-full flex justify-center scale-90 sm:scale-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 sm:gap-4  sm:mt-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="title-home-section font-greatVibes  text-7xl md:text-[200px]  xl:text-[200px] text-center pt-5">
            Fx Killers
          </h1>
          <p className="font-urbanist text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-blue1 relative z-10">
            TRADE <span className="text-xl sm:text-2xl">TRUST</span> TRANSFORM
          </p>
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
    </div>
  );
};

export default Welcome;