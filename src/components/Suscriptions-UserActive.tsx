import { motion } from "framer-motion";
import NumberTicker from "./ui/number-ticker";

const UserActive = () => {
  const UserMembers = [
    { 'number': 1027, "descriptions": "Discord Members" },
    { 'number': 257, "descriptions": "Premium VIP Traders" },
    { 'number': 387, "descriptions": "Exitosos Pro Traders" },
    { 'number': 10, "descriptions": "Moderadores y Teams FX" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="xl:w-[1250px] h-auto mx-auto  lg:rounded-2xl flex flex-col  justify-center items-center"
    >
      <div className="text-7xl font-greatVibes text-center pt-8 ">
        <span className="text-blue1 pt-5">Nuestros Usuarios Activos</span>
      </div>
      <p className="text-blue1 font-urbanist mt-5 text-center text-lg">Usamos cada comentario e interacción con el usuario para saber como impactar, mejorar y crecer con la comunidad</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {UserMembers.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="flex flex-col items-center bg-blue1 p-6 rounded-xl shadow-md "
          >
            <span className="text-6xl font-bold text-gray-200 font-poppins">
              <NumberTicker value={item.number}/>+
            </span>
            <span className="contact-home-highlight mt-2 font-poppins font-semibold">{item.descriptions}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UserActive;
