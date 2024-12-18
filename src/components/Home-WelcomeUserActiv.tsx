import { motion } from "framer-motion";
import NumberTicker from "./ui/number-ticker";

const WelcomeUserActive = () => {
  const WelcomeUserMembers = [
    { 'number': 1027, "descriptions": "Discord Members" },
    { 'number': 257, "descriptions": "Premium VIP Traders" },
    { 'number': 387, "descriptions": "Exitosos Pro Traders" },
    { 'number': 10, "descriptions": "Moderadores y Teams FX" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 0.8 }}
      className="mx-auto mt-10 p-5 flex flex-col justify-center items-center"
    >
      <div className="text-4xl  font-urbanist title-home-section text-center">
        <span className="text-gray-200">Nuestros </span> 
        <span className="title-home-section">Usuarios Activos</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {WelcomeUserMembers.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="flex flex-col items-center bg-blue1 rounded-xl shadow-md shadow-gray-800 hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-6xl font-bold text-gray-200 font-poppins">
              <NumberTicker className="text-2xl" value={item.number}/>+
            </span>
            <span className="contact-home-highlight mt-2 font-poppins font-semibold">{item.descriptions}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WelcomeUserActive;