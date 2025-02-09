import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export const BidirectionalConfetti = ({ duration = 5000 }) => {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const shootConfetti = () => {
      confetti({
        origin: { x: 1, y: Math.random() }, 
        angle: 180, 
        particleCount: 50,
        spread: 70,
        startVelocity: 90,
        colors: ['#DB181B']
      });

      
      confetti({
        origin: { x: 0, y: Math.random() },
        angle: 0,
        particleCount: 50,
        spread: 70,
        startVelocity: 90,
        duration: Infinity,
        colors: ['#FF1493']
      });
    };


    const sparkleVariants = {
        animate: {
          scale: [1, 1.05, 1],
          transition: {
            duration: Infinity,
            repeat: Infinity,
            ease: "easeInOut"

          }
        }
      };

    intervalRef.current = window.setInterval(shootConfetti, 300);
    setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }, duration);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [duration]);

  return null;
};


