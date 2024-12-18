import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { BorderBeam } from "@/components/ui/border-beam";

interface Question {
  question: string;
  answer: string;
}

const FAQsAccordions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const categories: { id: number; name: string }[] = [
    { id: 0, name: "Visit FAQ center" },
    { id: 1, name: "Visit our blog" },
    { id: 2, name: "Ask for more help" },
  ];

  const questions: { [key: number]: Question[] } = {
    0: [
      { question: "¿Qué es el FAQ Center?", answer: "Es una plataforma donde puedes encontrar respuestas a preguntas frecuentes." },
      { question: "¿Cómo puedo acceder al FAQ Center?", answer: "Puedes acceder desde nuestra página principal en el menú superior." },
    ],
    1: [
      { question: "¿Qué temas aborda el blog?", answer: "El blog aborda temas relacionados con nuestras soluciones y novedades." },
      { question: "¿Cada cuánto se actualiza el blog?", answer: "El blog se actualiza semanalmente con contenido nuevo." },
    ],
    2: [
      { question: "¿Cómo puedo solicitar ayuda?", answer: "Puedes contactarnos a través de nuestro formulario de contacto." },
      { question: "¿Qué tipo de ayuda brindan?", answer: "Brindamos soporte técnico y asesoramiento personalizado." },
    ],
  };

  const toggleAccordion = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <motion.div
      className="xl:w-[1250px] bg-gradient-green h-auto mx-auto p-5 rounded-2xl flex flex-col py-10 items-center"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-poppins font-semibold text-lg md:text-xl contact-home-highlight text-center">
        Questions and Answers
      </span>
      <div className="w-full flex flex-col md:flex-row mt-5 justify-center gap-10">
        {/* Categorías */}
        <div className="flex justify-center flex-col">
          <div className="text-3xl md:text-5xl font-bold pb-5 mb-3 flex flex-col md:flex-row items-center md:items-start font-display contact-home-highlight text-center md:text-left">
            <div className="text-gray-200">Frequently Asked</div>
            <div className="contact-home-highlight">Questions</div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-[400px]">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 text-left font-semibold text-base md:text-lg rounded-xl shadow-lg font-poppins shadow-green2 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-black via-emerald-950 to-black text-gray-200"
                    : "contact-btn-form-home text-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="flex flex-col gap-6 w-full md:w-[600px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedCategory === null ? (
            <div className="w-full md:w-[600px] flex justify-center items-center rounded-xl overflow-hidden btn-bg-black p-2">
              <iframe
                className="w-full aspect-video rounded-xl btn-bg-black shadow-lg shadow-gray-950"
                src="https://www.youtube.com/embed/NyiDPn4ZO0I"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : selectedCategory !== null && questions[selectedCategory]?.length === 0 ? (
            <div className="text-gray-400 text-lg text-center">
              There are no questions available for this category.
            </div>
          ) : (
            questions[selectedCategory]?.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl shadow-black bg-gradient-to-r from-black via-emerald-950 to-black text-white shadow-md"
              >
                <button
                  className="w-full flex justify-between items-center font-poppins text-md text-left p-4"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: selectedQuestion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowDown />
                  </motion.span>
                </button>
                {selectedQuestion === index && (
                  <motion.div
                    className="px-4 py-2 font-poppins text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
                <BorderBeam size={250} duration={25} delay={9} />
              </div>
            ))
          )}

          {selectedCategory !== null && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center justify-center gap-2 text-white font-poppins font-semibold text-lg p-2 rounded-xl shadow-lg shadow-black bg-gradient-to-r from-black via-emerald-950 to-black  transition duration-300 "
            >
              <div className="contact-home-highlight hover:text-gray-50">Watch Full Video</div>
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQsAccordions;