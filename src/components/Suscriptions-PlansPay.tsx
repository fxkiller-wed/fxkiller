import React from 'react';
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface Plan {
  title: string;
  price: string;
  period: string;
  tag?: string;
  features: string[];
  buttonText: string;
  width?: string;
  height?: string;
}

const PlansPay: React.FC = () => {
  const plans: Plan[] = [
    {
      title: "For Growing Business",
      price: "149.00",
      period: "/mes",
      tag: "PREMIUM VIP",
      features: [
        "Soporte de moderadores 24/5",
        "BIAS (dirección diaria y semanal)",
        "Psicóloga Personal y Grupal",
        "Nutrióloga Personal y Grupal",
        "Live Sessions de Trading semanal",
        "Casos de estudio",
        "Idiomas (Inglés + Francés)",
        "Recap semanal de Trades"
      ],
      buttonText: "¡Únete!",
    },
    {
      title: "PDF The Best ICT Guide",
      price: "949.00",
      period: "/único pago",
      tag: "BLACKFRIDAY30",
      features: [
        "PDF de 142 pag.",
        "Masterclass personalizada 1hr.",
        "Acceso a sección especial de Pro Traders (30 días).",
        "Casos de estudio (modo PDF).",
        "Masterclasses grupales fechas random.",
        "Reuniones de Pro Traders en tu país.",
        "Dudas y preguntas en todo momento con Iván Vargas."
      ],
      buttonText: "Adquiere Pro Traders",
      width: "w-[350px]",
      height: "h-[500px]"
    },
    {
      title: "Coaching 1ON1",
      price: "1949.00",
      period: "/único pago",
      features: [
        "Entrenamiento avanzado 1 semana",
        "1 semana junto a Iván Vargas",
        "Clases de 2 hrs (tú eliges tu horario)",
        "PDF The Best ICT Guide incluido 2.0",
        "WhatsApp personal de babyivanfx",
        "90 días gratis en Membresía Premium VIP",
        "Acceso Pro Traders 30 días"
      ],
      buttonText: "Reserva 60 días antes",
    }
  ];

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index === 1 ? 0 : index === 0 ? 100 : -100,
      y: index === 1 ? 100 : 0,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index === 1 ? 0 : 1,
        ease: "easeOut"
      }
    }),
  };
return (
    <motion.div
      className="xl:w-[1250px] bg-blue1 h-auto mx-auto p-3 lg:rounded-2xl flex flex-col py-5 justify-center items-center"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <span className="font-urbanist font-semibold contact-home-highlight text-xl">
        Suscriptions
      </span>
      <div className="text-6xl font-greatVibes contact-home-highlight text-center p-3">
        <span className="contact-home-highlight">Planes perfectos </span>
        <span className="text-gray-200">  para tus necesidades:</span>
      </div>
      <div className="font-urbanist text-gray-200 text-center text-lg">
        Ofrecemos una gama de planes de precios flexibles diseñados para adaptarse a traders de todos los tamaños.
      </div>
      <div className="w-full flex flex-wrap justify-center gap-6 items-center mt-5">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={`bg-[#0a0c18] text-white ${plan.height || "h-[450px]"} ${plan.width || "w-72"} rounded-xl  p-5 flex flex-col justify-between shadow-xl relative`}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="absolute inset-0">
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold contact-home-highlight">{plan.title}</h2>
              <p className="text-4xl font-bold mt-3">${plan.price} <span className="text-sm">{plan.period}</span></p>
              {plan.tag && <p className="text-beige2 text-sm font-semibold mt-2">{plan.tag}</p>}
              <ul className="text-sm mt-4 space-y-2 font-urbanist">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                    className="flex items-center gap-2"
                  >
                    <FaCheck className="text-beige2 text-xl"/>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-l from-[#3f83f2] to-[#d7ad5e] text-black font-urbanist font-semibold py-2 px-4 rounded-xl mt-5 relative z-10"
            >
              {plan.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlansPay;