import  { useEffect, useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const ValentinesHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }[]>([]);
  const intervalRef = useRef<number | null>(null);

  // Setup floating hearts
  useEffect(() => {
    const newHearts = Array.from({ length: 30 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 24 + 16,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.5 + 0.5,
    }));
    setHearts(newHearts);
  }, []);

  // Setup confetti
  useEffect(() => {
    const shootConfetti = () => {
      // Left side confetti
      confetti({
        origin: { x: 0, y: Math.random() },
        angle: 0,
        particleCount: 50,
        spread: 70,
        startVelocity: 90,
        colors: ['#FF1493'],
        disableForReducedMotion: true
      });

      // Right side confetti
      confetti({
        origin: { x: 1, y: Math.random() },
        angle: 180,
        particleCount: 50,
        spread: 70,
        startVelocity: 90,
        colors: ['#DB181B'],
        disableForReducedMotion: true
      });
    };

    intervalRef.current = window.setInterval(shootConfetti, 300);

    // Cleanup after 5 seconds
    const timeout = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.05, 1],
            y: -300,
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            size={heart.size}
            className="text-red-400"
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ValentinesHearts;