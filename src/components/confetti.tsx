import { motion } from "framer-motion";
import { useState } from "react";
import { BidirectionalConfetti } from "./confettishoot";

export const Confetti = () => {

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
            <BidirectionalConfetti/>
            <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 sparkle-text mb-50">
                <motion.div 
                   variants={sparkleVariants}
                    animate="animate"
                    className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 sparkle-text"
                >
                    <p className="ml-100">
                        Yupp 🎉
                    </p>
                    <p className="mt-8">
                        You Made me the Happiest Person ❤️
                    </p>
                </motion.div>
            </div>
        </div>
    )


}

