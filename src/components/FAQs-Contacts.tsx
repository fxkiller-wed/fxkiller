import { motion } from "framer-motion";
import React, { useState } from "react";
import ImgProduct from "@/assets/img/product.png";
import { subscribeinfo } from "@/services/allinfosubscription"; 

const FAQsContacts = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formMessage, setFormMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !email || !message) {
      setFormMessage("Por favor, completa todos los campos.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formId = import.meta.env.VITE_FORM_ID2;
      const response = await subscribeinfo(formId, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        fields: {
          message: message,
        },
      });

      if (response.success) {
        setFormMessage("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setIsSubscribed(true); 

        setTimeout(() => {
          setFormMessage(""); 
          setIsSubscribed(false); 
        }, 3000);
      } else {
        setFormMessage(`Hubo un error: ${response.message}`);
      }
    } catch (error) {
      setFormMessage("Hubo un problema al enviar tu mensaje.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="p-6 flex flex-col justify-center items-center lg:rounded-2xl my-5 h-auto w-full xl:w-[1100px] py-5 px-10 relative z-10 xl:rounded-2xl"
    >
      <div className="font-greatVibes text-blue1 text-6xl text-center pt-2">Contactate con Nosotros</div>
      <div className="flex flex-col font-urbanist text-lg text-blue-1 text-center mb-5 font-medium">
        <div>Estamos aquí para ayudarte en todo momento.</div>
        <div>Déjanos un mensaje y nos pondremos en contacto contigo pronto.</div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-around bg-blue1 rounded-2xl">
        {isSubscribed ? (
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative p-3 sm:p-4 bg-blue1 rounded-xl flex justify-center shadow-lg shadow-gray-600"
            >
              <span className="text-sm sm:text-lg font-semibold font-urbanist contact-home-highlight text-center">{formMessage}</span>
            </motion.div>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative z-10 flex flex-col xl:flex-row justify-center items-center w-full p-6"
          >
            <div className="flex flex-col gap-4 w-full lg:w-[500px]">
              <h3 className="font-greatVibes text-5xl text-center text-white pt-2 mb-6 contact-home-highlight">
                Formulario de Contacto
              </h3>
  
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 font-urbanist text-gray-100 bg-transparent border border-beige1 rounded-xl focus:outline-none focus:ring-2 focus:ring-beige1 placeholder-beige1 transition duration-300 ease-in-out"
                />
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 font-urbanist text-gray-100 bg-transparent border border-beige1 rounded-xl focus:outline-none focus:ring-2 focus:ring-beige1 placeholder-beige1 transition duration-300 ease-in-out"
                />
              </div>
  
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 font-urbanist text-gray-100 bg-transparent border border-beige1 rounded-xl focus:outline-none focus:ring-2 focus:ring-beige1 placeholder-beige1 transition duration-300 ease-in-out resize-none"
              ></textarea>
  
              <button
                type="submit"
                aria-label="Submit Form"
                className="w-full py-3 text-lg text-white btn-about-us rounded-xl transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green1 focus:ring-offset-2 border-1 border-beige1 shadow-lg shadow-beige1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
  
              {formMessage && (
                <div
                  className={`${
                    formMessage.includes("Gracias") ? "text-green-500" : "text-red-500"
                  } font-semibold text-center mt-4`}
                >
                  {formMessage}
                </div>
              )}
            </div>
          </motion.form>
        )}
        <div className="flex w-full items-center overflow-hidden lg:rounded-xl justify-end">
          <motion.img
            src={ImgProduct}
            alt="Product"
            className="h-full w-auto object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FAQsContacts;