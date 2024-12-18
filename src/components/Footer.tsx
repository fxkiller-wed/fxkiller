import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";
import SelloFooter from "@/assets/img/footer-sello-FX-killers.png";

const Footer = () => {
  const navIcons = [
    { icon: <FaYoutube />, href: "https://www.youtube.com/@babyivanfx" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/babyivanfx/" },
    { icon: <FaDiscord />, href: "" },
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
          <div className="text-lg font-bold w-36 h-36 p-3 bg-black rounded-xl text-center">
            <img src={SelloFooter} alt="Sello" />
          </div>
          <div className="contact-home-highlight text-sm font-urbanist font-semibold pt-3">
            COOL COMPANY FOR COOL TRADERS
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-2 px-5 mt-6"
        >
          <div className="font-greatVibes    contact-home-highlight text-4xl pt-2">
            Community
          </div>
          <RouterLink
            to="/home"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/home"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Testimonials
          </RouterLink>
          <RouterLink
            to="/home"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Why Chosee
          </RouterLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-2 mt-6"
        >
          <div className="font-greatVibes    contact-home-highlight text-4xl pt-2">
            Company
          </div>
          <RouterLink
            to="/suscriptions"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Subscription
          </RouterLink>
          <RouterLink
            to="/contact"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Confirm Us
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
          <div className="font-greatVibes    contact-home-highlight text-center text-4xl pt-2">
            Contact
          </div>
          <RouterLink
            to="/contact"
            className=" btn-about-us text-gray-50 px-8 py-2 font-urbanist rounded-full"
          >
            Confirm Us
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
        <div className="w-full h-[1px] btn-about-us flex justify-center items-center"></div>
        <div className="w-full text-center text-gray-200 flex justify-between items-center">
          <RouterLink
            to="/terms"
            className="text-gray-200 font-urbanist cursor-pointer hover:text-beige2"
          >
            Terms and Conditions
          </RouterLink>
          <div className="text-sm font-urbanist py-4 px-2">
            @2024 FX KILLERS TRADING HOUSE, All rights reserved.
          </div>
          <div className="text-sm font-urbanist py-4 px-2 flex gap-1">
            Desarrollado por
            <a
              href="https://github.com/KeniBeck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige2 hover:text-yellow-100"
            >
              {" "}
              KeniBeck
            </a>
            &
            <a
              href="https://github.com/Yedixdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige2 hover:text-yellow-100"
            >
              {" "}
              Yedixdev
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
