import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NextPage = () => {
  const location = useLocation();
  const name = location.state?.name || 'Guest';

  const sparkleVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-300 via-red-300 to-pink-300 h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }}           
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-8"
      >
        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 sparkle-text"
        >
          Hello {name}
        </motion.div>

        <motion.div
          variants={sparkleVariants}
          animate="animate"
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 sparkle-text"
        >
          Will you be My Valentine?
        </motion.div>
        
        <div className="flex gap-6 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl font-bold text-xl hover:shadow-lg transition-shadow"
          >
            Yes! 💖
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 0.9,
              x: [0, -100, 100, -100, 100, 0],
              transition: { duration: 0.5 }
            }}
            className="px-8 py-4 bg-gradient-to-r from-pink-300 to-red-300 text-white rounded-xl font-bold text-xl hover:shadow-lg transition-shadow"
          >
            Maybe... 🤔
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};