import { motion } from "framer-motion";
import React, { useState } from "react";
import { subscribe } from "@/services/subscription";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");  
  const [message, setMessage] = useState<string>("");  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);  

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
      } else {
        setMessage(`Hubo un error: ${response.message}`);
      }
    } catch (error) {
      setMessage("Hubo un problema al enviar tu suscripción.");
    } finally {
      setIsSubmitting(false); 
    }
  };

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
        <div className="relative z-10 font-poppins text-xl font-semibold title-home-section">Newsletter</div>
        <div className="text-6xl sm:text-6xl font-greatVibes  text-blue1 text-center title-home-section py-3 relative z-10">
          Mantente en contacto
        </div>
        <div className="font-urbanist text-blue1 text-center">Suscribete a nuestro email para recibir las últimas actualizaciones y ofertas exclusivas.</div>
      </motion.div>

      {message && (
        <div className={`${message.includes("Gracias") ? "text-green-500" : "text-red-500"} font-semibold text-center`}>
          {message}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ delay: 1, duration: 1, ease: "easeOut"}}
        className="relative mt-5 flex justify-center"
      >
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 flex sm:flex-row gap-2 justify-center bg-blue1 p-3 rounded-2xl mx-3"
        >
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 w-full sm:w-96 font-urbanist rounded-xl text-gray-100 bg-transparent border-beige-1 focus:outline-none focus:ring-2 focus:ring-beige1 focus:border-transparent placeholder-beige2 transition duration-300 ease-in-out "
          />
          <motion.button
            type="submit"
            className={`contact-btn-form-home px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            {isSubmitting ? "Enviando..." : "Suscribirme"}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;