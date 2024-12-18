import React, { useState } from "react";

const AboutMe = () => {
  const [email, setEmail] = useState<string>("");  
  const [message, setMessage] = useState<string>("");  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);  

  const API_KEY = "bZcfKqa3c7EDn2VhsDKY1Q";
  const FORM_ID = "7439790";
  const BASE_URL = "https://api.convertkit.com/v3/forms";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Por favor, ingresa tu correo.");
      return;
    }

    setIsSubmitting(true); 

    try {
      const response = await fetch(`${BASE_URL}/${FORM_ID}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email: email,
        }),
      });

      if (response.ok) {
        setMessage("¡Gracias por suscribirte!");
        setEmail(""); 
      } else {
        setMessage("Hubo un error. Inténtalo nuevamente.");
      }
    } catch (error) {
      setMessage("Hubo un problema al enviar tu suscripción.");
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="w-2xl bg-gradient-to-r from-[#197149] to-[#012b20] h-auto m-4 rounded-2 xl flex justify-center items-center flex-col gap-5 p-8">
      <div className="text-5xl font-bold font-display text-gray-300 text-center">
        <span className="contact-home-highlight">Mantente</span> en contacto
      </div>

      {message && (
        <div
          className={`${
            message.includes("Gracias") ? "text-green-500" : "text-red-500"
          } font-semibold text-center`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full flex gap-2 mt-5 justify-center">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 w-96 font-poppins rounded-lg text-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-beige1 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out"
        />

        <button
          type="submit"
          className={`contact-btn-form-home px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Suscribirme"}
        </button>
      </form>
    </div>
  );
};

export default AboutMe;
