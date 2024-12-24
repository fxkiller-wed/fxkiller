import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { subscribe } from "@/services/subscription";
import Photo from "@/assets/img/about-me-photo.jpg";

const AboutMe = () => {
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
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  return (
    <motion.div
      className="xl:w-[1250px] h-auto mx-auto lg:rounded-2xl flex flex-col pt-5 justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-home-highlight font-poppins font-semibold text-xl mb-4">¿Quién está detrás?</div>

      <motion.div
        className="w-full flex flex-col items-center justify-center lg:flex-row gap-4"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-80 h-80 btn-why-chosee" 
        >
          <img
            src={Photo}
            alt="foto"
            className="absolute inset-0 w-full h-full object-cover p-1 rounded-xl"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-[700px] bg-green1 opacity-90 relative z-10 xl:rounded-xl p-4 sm:p-6 "
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ x: 0 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center text-center gap-2"
          >
            <span className="font-urbanist text-3xl sm:text-4xl text-gray-50">CEO & Fundador</span>
            <span className="contact-home-highlight text-gray-100 font-greatVibes text-5xl sm:text-5xl py-3">Ivan Vargas</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
            className="text-gray-50 font-poppins font-light mt-4 text-sm sm:text-base"
          >
            <p>
              Babyivanfx, cuyo nombre real es Iván Vargas, es un trader, emprendedor, mentor de Forex, y fundador de 4 empresas a sus 29 años, entre ellas FX KILLERS. Nacido en México, algunos aspectos clave sobre él:
            </p>
            <ul className="list-disc list-inside">
              <li>Más de 5 años de experiencia en el mercado Forex.</li>
              <li>Ofrece recursos como un diario de trading, seguimiento de hábitos y bootcamps.</li>
              <li>Autor de "The Best ICT Guide 2.0" con estrategias y consejos para traders.</li>
              <li>Se centra en el trading sostenible y consistente, con análisis y ejecución en vivo.</li>
              <li>Ha manejado más de 2 millones de dólares y retirado grandes sumas en varias plataformas.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Sección de Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center items-center mt-5 gap-4 bg-[#EEEBd5] p-6 lg:rounded-xl w-full lg:w-[1030px]"
      >
        <div className="relative z-10 font-poppins text-xl font-semibold text-green2">Mantente en contacto</div>
        
        <div className="font-urbanist text-green2 text-center">
          Suscríbete a nuestro email para recibir actualizaciones y ofertas exclusivas
        </div>
        <div className=" text-7xl xl:text-9xl pt-5 font-greatVibes text-beige1 text-center" >Fx Killers</div>

        {/* Mensaje de suscripción */}
        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-green2 border border-beige1 rounded-xl flex items-center p-4"
          >
            <span className="contact-home-highlight text-lg font-urbanist text-center">
              {message}
            </span>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative z-10 flex sm:flex-row gap-2 justify-center bg-green2 p-2 rounded-2xl"
          >
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 w-full sm:w-96 font-poppins rounded-xl text-gray-100 bg-transparent border-beige1 focus:outline-none focus:ring-2 focus:ring-beige1 focus:border-transparent placeholder-beige1 transition duration-300 ease-in-out"
            />
            <motion.button
              type="submit"
              className={`contact-btn-form-home px-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Suscribirme"}
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;