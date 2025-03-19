import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { subscribe } from "@/services/subscription";
import Logo from "@/assets/img/isotipo-FX-killers.png"

const Hero = () => {
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
    <div id="home-welcome" className="w-full flex items-center justify-center ">
      <motion.div
        className="w-[90%] sm:w-[85%] md:w-[80%] max-w-[900px] rounded-xl relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full flex justify-center ">
          <img src={Logo} alt="Logo" className="w-36 my-2 lg:w-60"/>
        </div>
        <div className=" relative w-full aspect-video rounded-xl shadow-lg shadow-gray-950 p-1 btn-bg-black">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/wF29e2IuAok?si=p8hc-KTzdc_1R_Pb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-6 lg:pb-4 sm:bottom-0 sm:left-0 sm:w-full sm:bg-gradient-to-t flex flex-col sm:to-transparent sm:rounded-xl">
          <div className="font-semibold font-urbanist text-xl text-center mb-3 text-beige1">Newsletter e Información exclusiva</div>
          {isSubscribed ? (
            <div className="w-full flex justify-center ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-6500px] p-4 flex btn-why-chosee rounded-xl shadow-lg shadow-black text-center border-2 border-beige1"
              >
                <span className="text-sm sm:text-lg text-center font-urbanist text-white">{message}</span>
              </motion.div>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex sm:flex-row items-center gap-3 btn-why-chosee p-2 rounded-xl shadow-md w-full max-w-xl mx-auto bg-black/40 sm:bg-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >

              <input
                type="email"
                placeholder="Escribe tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 sm:p-3 flex-grow font-urbanist rounded-xl text-gray-100 bg-transparent focus:outline-none focus:ring-2 focus:ring-beige1 focus:border-transparent placeholder-beige2 transition duration-300 text-sm sm:text-base"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-beige1 hover:bg-beige2 px-6 py-3 rounded-xl transition duration-300 text-base text-gray-100 hover:text-black hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Suscríbete"}
              </button>
            </motion.form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
