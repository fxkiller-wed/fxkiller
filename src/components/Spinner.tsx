import { ThreeDots } from 'react-loader-spinner';
import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className='flex items-center justify-center h-screen'
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#081628"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </motion.div>
  );
};

export default Spinner;