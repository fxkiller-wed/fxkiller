import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion"

const HomeWhyChosee = () => {
  const infoItems = [
    { 
      title: "Enseñanza Clara y Aterrizada", 
      description: "Soy Iván, y me especializo en desglosar conceptos complejos de trading, brindándote explicaciones claras y accesibles para que puedas dominar el mercado sin complicaciones." 
    },
    { 
      title: "Preparación para la Realidad del Mercado", 
      description: "Te preparé para lo que realmente importa en el trading. No solo te enseñaré las estrategias, sino también cómo afrontar los desafíos reales y obtener ganancias sostenibles." 
    },
    { 
      title: "Una Comunidad de Apoyo", 
      description: "Al unirte a mi mentoría, entrarás en una comunidad de traders activos, con personas motivadas que comparten conocimientos, ideas y crecen juntas en el proceso." 
    },
    { 
      title: "Actualización Continua", 
      description: "El mercado cambia constantemente. Mi compromiso es mantenerte actualizado con las últimas tendencias y estrategias para que siempre estés un paso adelante." 
    },
    { 
      title: "Adaptabilidad", 
      description: "El mercado es dinámico y en constante evolución. Te enseñaré a adaptarte a esos cambios, para que puedas operar con confianza y flexibilidad en cualquier situación." 
    },
    { 
      title: "Capacitación Regular", 
      description: "No solo se trata de sesiones puntuales. Ofrezco capacitaciones regulares para que siempre estés al tanto de nuevas técnicas, herramientas y tendencias del mercado." 
    },
    { 
      title: "Soporte Personalizado", 
      description: "Mi enfoque es totalmente personalizado. Siempre estaré disponible para resolver tus dudas y apoyarte en cada paso del camino, asegurándome de que progreses a tu propio ritmo." 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(5); 

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? infoItems.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === infoItems.length - 1 ? 0 : prev + 1));

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[1200px] mx-auto flex flex-col items-center  relative overflow-hidden">
      <div className="py-4 text-center mb-6 text-gray-700 font-greatVibes title-home-section">
        <span className="text-gray-200  title-home-section text-5xl lg:6xl xl:text-7xl">Porque Elegirnos  </span>
      </div>

      <div className="relative w-full max-w-6xl h-64 flex items-center justify-center">
        <div className="flex items-center justify-center w-full">
          {infoItems.map((item, index) => {
            const position = index - currentIndex;
            const isCenter = position === 0;

            return (
              <div
                key={index}
                className={`absolute transition-transform duration-500 ease-in-out p-4 w-[350px] lg:w-[400px] xl:w-[450px] h-56 btn-why-chosee shadow-lg shadow-blue1 flex flex-col justify-center items-center text-gray-100 font-urbanist rounded-xl m-5
                  ${isCenter ? "z-10 scale-100" : "z-0 scale-75"}
                  ${position === -1 ? "-translate-x-72 rotate-6" : ""}
                  ${position === 1 ? "translate-x-72 -rotate-6" : ""}
                  ${position < -1 || position > 1 ? "opacity-0 pointer-events-none" : "opacity-100"}
                  sm:w-[350px] sm:h-48 md:w-[400px] md:h-56 lg:w-[450px] lg:h-64
                `}
              >
                <h3 className="mb-2 text-center text-2xl lg:text-3xl sm:text-base md:text-lg">{item.title}</h3>
                <p className="text-center text-base sm:text-sm md:text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-5 w-full max-w-6xl mt-4">
        <button 
          onClick={prevSlide} 
          className="bg-blue1 text-white p-2 rounded-full hover:bg-gray-600 z-10"
        >
          <IoIosArrowBack className="text-2xl"/>
        </button>
        <button 
          onClick={nextSlide} 
          className="bg-blue1 text-white p-2 rounded-full hover:bg-gray-600 z-10"
        >
          <IoIosArrowForward className="text-2xl"/>
        </button>
      </div>
    </motion.div>
  );
};

export default HomeWhyChosee;
