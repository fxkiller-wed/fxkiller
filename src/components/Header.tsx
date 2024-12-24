"use client";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { MdMenuOpen, MdClose } from "react-icons/md";
import { BorderBeam } from './ui/border-beam';
import HeaderMobile from "./HeaderMobile";
import LogoHeader from "../assets/img/Logo-Header.png";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const navItems = [
    { name: 'Inicio', path: '/inicio' },
    { name: 'Suscripciones', path: '/suscripciones' },
    { name: 'FAQs', path: '/FAQs' },
  ];

  return (
    <motion.header
      className="w-full fixed bg-green1 h-16 flex justify-between items-center px-8 shadow- shadow-gray-900 z-50"
      initial={{ opacity: 0, y: -30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
    >
      <motion.div
        className="text-gold text-3xl font-robo tracking-wider"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }} 
      >
        <Link to="/" className=" ">
          <img 
            src={LogoHeader} 
            alt='logo'
            className='w-16'
          />
        </Link>
      </motion.div>

      <motion.nav
        className="hidden lg:flex gap-10"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.5 }} 
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + 0.2 * index }} 
          >
            <div>
              <Link
                to={item.path}
                className={`relative group tracking-wide font-urbanist text-lg px-5 py-2 rounded-xl transition-all duration-300 ease-in-out 
                  ${location.pathname === item.path ? 'text-beige1' : 'text-gray-50 hover:text-beige2'}`}
              >
                {item.name}
                <BorderBeam/>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.nav>

      <div className="flex gap-6 items-center">
          <motion.div
            className="hidden lg:flex gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >

          <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}>
            <Link
              to="/contacto"
              className="btn-about-us text-gray-50 px-5 py-2 font-urbanist  rounded-full">
              Contáctanos
            </Link>
          </motion.div>
        </motion.div>
        <div className="lg:hidden">
          <div onClick={toggleMenu} className="cursor-pointer">
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {isOpen ? (
                <MdClose
                  className="text-beige1 hover:text-beige2 text-3xl transition duration-300 transform hover:scale-150"
                />
              ) : (
                <MdMenuOpen
                  className="text-beige1 hover:text-beige2 text-3xl transition duration-300 transform hover:scale-150"
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
      {isOpen && <HeaderMobile />}
    </motion.header>
  );
};

export default Header;
