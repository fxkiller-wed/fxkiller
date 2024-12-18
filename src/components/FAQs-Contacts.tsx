import { motion } from "framer-motion";
import React, { useState } from "react";
import ImgProduct from "@/assets/img/product.png";
import { subscribeinfo } from "@/services/allinfosubscription"; // Asegúrate de que la ruta sea correcta

const FAQsContacts = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formMessage, setFormMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false); // Nuevo estado para controlar la visibilidad del formulario

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
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
        setIsSubscribed(true); // Ocultar el formulario y mostrar el mensaje de agradecimiento
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
      className="p-6 flex flex-col justify-center items-center bg-gray-300 lg:rounded-2xl my-5 h-auto w-full xl:w-[1250px] py-5 px-10 relative z-10 xl:rounded-2xl"
    >
      <div className="font-poppins text-xl title-home-section font-bold">Contact Us</div>
      <div className="font-display title-home-section text-5xl font-bold text-center">
        <span className="title-home-section">Contactate</span>
        <span className="text-gray-200"> con Nosotros</span>
      </div>
      <div className="flex flex-col font-poppins text-lg text-green2 text-center mt-5 font-medium">
        <div>Estamos aquí para ayudarte en todo momento.</div>
        <div>Déjanos un mensaje y nos pondremos en contacto contigo pronto.</div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-around gap-8">
        {isSubscribed ? (
          <div className="flex justify-center items-center">
             <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 p-4 h-[200px]  bg-green-100 border border-green-400 text-green-700 rounded-xl flex items-center justify-center"
          >
            <span className="mr-2 text-2xl">🎉</span>
            <span className="font-semibold">{formMessage}</span>
          </motion.div>
          </div>
         
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative z-10 flex flex-col gap-4 justify-center items-center bg-white shadow-lg rounded-2xl p-6 w-full lg:w-1/2"
          >
            <h3 className="font-poppins text-2xl text-center mb-4 text-gray-700">Formulario de Contacto</h3>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full flex-1 p-3 font-poppins text-gray-800 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green2 placeholder-gray-500 transition duration-300 ease-in-out"
              />
              <input
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full flex-1 p-3 font-poppins text-gray-800 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green2 placeholder-gray-500 transition duration-300 ease-in-out"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full font-poppins text-gray-800 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green2 placeholder-gray-500 transition duration-300 ease-in-out"
            />
            <textarea
              placeholder="Message"
              aria-label="Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 w-full font-poppins text-gray-800 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green2 placeholder-gray-500 transition duration-300 ease-in-out resize-none"
            ></textarea>
            <button
              type="submit"
              aria-label="Submit Form"
              className="w-full py-3 mt-4 text-lg font-semibold text-white bg-green2 rounded-xl shadow-md transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green1 focus:ring-offset-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Submit"}
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
          </motion.form>
        )}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center w-full lg:w-1/2 h-auto relative bg-gray-100 rounded-2xl shadow-lg p-6"
        >
          <h3 className="font-poppins text-2xl text-center mb-4 text-gray-700">Nuestro Producto</h3>
          <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg">
            <motion.img 
              src={ImgProduct} 
              alt="Product" 
              className="h-full w-auto object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQsContacts;