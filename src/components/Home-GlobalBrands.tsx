import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDiscord, FaBookOpen, FaPlus } from "react-icons/fa";
import { BorderBeam } from './ui/border-beam';

const GlobalBrands: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="h-auto w-full py-5 flex flex-col items-center relative z-10 overflow-hidden xl:text-[42px]"
    >
      <div className='font-urbanist title-home-section font-semibold text-lg md:text-xl'>
        We Transport Confidence
      </div>

      <div className="flex flex-col justify-center items-center px-4">
        <div className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-gray-100 flex gap-3 title-home-section font-greatVibes py-3">
          Programas Destacados
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-2xl lg:max-w-4xl bg-blue1 rounded-2xl border-2 border-beige1 flex flex-col justify-around items-center p-4 xl:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className='flex items-center gap-5'
          >
            <div className="flex flex-col items-center gap-3 relative">
              <BorderBeam size={250} duration={12} delay={9} className='rounded-xl' />
              <div className="w-28 h-24 sm:w-32 sm:h-28 bg-gradient-to-r from-black via-slate-900 to-black rounded-xl shadow-lg flex flex-col justify-center items-center gap-2 text-gray-50 text-sm md:text-lg font-urbanist">
                <FaBookOpen className="text-3xl sm:text-4xl" />
                Learn
              </div>
            </div>

            <FaPlus className="md:block text-gray-50 text-3xl" />

            <div className="flex flex-col items-center gap-3 relative">
              <BorderBeam size={250} duration={12} delay={9} className='rounded-xl' />
              <div className="w-28 h-24 sm:w-32 sm:h-28 bg-gradient-to-r from-black via-slate-900 to-black rounded-xl shadow-lg flex flex-col justify-center items-center gap-2 text-gray-50 text-sm md:text-lg font-urbanist">
                <FaDiscord className="text-3xl sm:text-4xl" />
                Community
              </div>
            </div>
          </motion.div>
          <div className="mt-6 text-center md:mt-0 md:ml-5">
            <h4 className="text-lg sm:text-xl md:text-2xl text-gray-50 font-urbanist mt-5">
              Comunidad Premium + Curso
            </h4>
            <p className="text-gray-50 text-sm md:text-lg mt-3 font-urbanist">
              Accelerate your Business Success with a Powerful Combination of
              <span className="text-beige1 font-semibold"> Learning, Community, and Live Insights.</span>
            </p>
            <Link
              to="/contact"
              className="btn-about-us mt-5 inline-block text-gray-50 px-6 md:px-10 py-2 font-urbanist rounded-xl"
            >
              Confirm Us
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GlobalBrands;

