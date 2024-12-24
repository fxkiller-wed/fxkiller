import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SelloFooter from "@/assets/img/isologo.png";
import Tagline from "@/assets/img/tagline-horizontal-FX-killers.png"

const Footer = () => {
  const navIcons = [
    { icon: <FaYoutube />, href: "https://www.youtube.com/@babyivanfx" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/fxkillers.mx/" },
    { icon: <FaXTwitter />, href: "https://x.com/fxkillersmx" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-blue1 w-full pt-5 flex flex-col items-center relative z-10 overflow-hidden mt-10"
    >
      <div className="flex flex-wrap justify-evenly items-center px-5 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col items-center gap-4" >
            <img src={SelloFooter} alt="Sello" className="w-52 mb-3 "/>
            <img src={Tagline} alt="Sello" className="w-80 mb-3 "/>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-2 px-5 mt-6"
        >
          <div className="font-greatVibes   contact-home-highlight text-4xl px-1 py-1">
            Comunidad
          </div>
          <RouterLink
            to="/inicio"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Inicio
          </RouterLink>
          <RouterLink
            to="/inicio"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Testimonios
          </RouterLink>
          <RouterLink
            to="/inicio"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Porque Elegirnos
          </RouterLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-2 mt-6"
        >
          <div className="font-greatVibes    contact-home-highlight text-4xl pt-2">
            Compañía
          </div>
          <RouterLink
            to="/suscripciones"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Suscripciones
          </RouterLink>
          <RouterLink
            to="/contacto"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Contactános
          </RouterLink>
          <RouterLink
            to="/FAQs"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            FAQs
          </RouterLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-2 mt-6"
        >
          <div className="font-greatVibes contact-home-highlight text-center text-4xl pt-2">
            Contactános
          </div>
          <RouterLink
            to="/contacto"
            className=" btn-about-us text-gray-50 px-8 py-2 font-urbanist rounded-full"
          >
            Contactános
          </RouterLink>
          <div className="flex justify-between gap-3">
            {navIcons.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige1 hover:text-yellow-100 text-4xl transition duration-300 transform hover:scale-150"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + 0.2 * index }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col px-5 w-full mt-4"
      >
        <div className="w-full h-[1px] btn-why-chosee flex justify-center items-center"></div>
        <div className="w-full text-center text-gray-200 flex justify-between items-center">
          <RouterLink
            to="/terminos"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Términos y Condiciones
          </RouterLink>
          <div className="text-sm font-urbanist py-4 px-2">
            © 2024 FX KILLERS, Todos los derechos reservados.
          </div>
          <div className="font-urbanist  flex items-center ">
            Somos de Mexico
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer
