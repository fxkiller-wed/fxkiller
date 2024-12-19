import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const HeaderMobile = () => {
  return (
    <motion.nav
      className='lg:hidden flex p-10 flex-col items-center gap-4 font-urbanist text-xl text-blue1 bg-gradient-to-br from-[#fffbf4] to-[#7f99a9] shadow-md absolute w-full top-[65px] left-0 z-40'
      initial={{ opacity: 0, y: -30}} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3, delay: 0.1 }} 
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link className="relative group transition duration-300 ease-in-out font-semibold hover:text-beige1" 
        to="/">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige1 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link className="relative group transition duration-300 ease-in-out font-semibold hover:text-beige1" 
        to="/suscriptions">
          Community + Course
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige1 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link className="relative group transition duration-300 ease-in-out font-semibold hover:text-beige1" 
        to="/FAQs">
          FAQs
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige1 transition-all duration-300 group-hover:w-full"/>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link
          to="/contact"
          className=" btn-about-us text-gray-50 px-16 py-3 mt-10 font-urbanist text-xl text-center">
          Confirm Us
        </Link>
      </motion.div>

      <div className='flex gap-10 justify-center items-center mt-3'>
        <motion.a
          href="https://www.youtube.com/@babyivanfx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue1 hover:text-beige1 text-5xl transition duration-300 transform hover:scale-150"
          initial={{ opacity: 0, y: -25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <FaYoutube className='text-4xl' />
        </motion.a>
        
        <motion.a
          href="https://www.instagram.com/babyivanfx/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue1 hover:text-beige1 text-3xl transition duration-300 transform hover:scale-150"
          initial={{ opacity: 0, y: -25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <FaInstagram  className='text-4xl'/>
        </motion.a>
        
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue1 hover:text-beige1 text-3xl transition duration-300 transform hover:scale-150"
          initial={{ opacity: 0, y: -25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <FaDiscord className='text-4xl' />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default HeaderMobile;
