import React from 'react';
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
      className="w-full pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className='flex items-center gap-10'
        >
          <div className="flex flex-col items-center gap-3 relative">
            <BorderBeam size={250} duration={12} delay={9} className='rounded-xl' />
            <div className="w-28 h-24 sm:w-44 sm:h-36 bg-gradient-to-r from-black via-slate-900 to-black rounded-xl shadow-lg flex flex-col justify-center items-center gap-2 text-gray-50 text-sm md:text-2xl font-urbanist">
              <FaBookOpen className="text-3xl sm:text-6xl" />
              Learn
            </div>
          </div>

          <FaPlus className="md:block text-gray-50 text-6xl" />

          <div className="flex flex-col items-center gap-3 relative">
            <BorderBeam size={250} duration={12} delay={9} className='rounded-xl' />
            <div className="w-28 h-24 sm:w-44 sm:h-36 bg-gradient-to-r from-black via-slate-900 to-black rounded-xl shadow-lg flex flex-col justify-center items-center gap-2 text-gray-50 text-sm md:text-2xl font-urbanist">
              <FaDiscord className="text-3xl sm:text-6xl" />
              Community
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GlobalBrands;

