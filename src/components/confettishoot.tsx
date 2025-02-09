import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export const BidirectionalConfetti = ({ duration = 5000 }) => {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const shootConfetti = () => {
      // Right side confetti
      confetti({
        origin: { x: 1, y: Math.random() }, 
        angle: 180, 
        particleCount: 50,
        spread: 70,
        startVelocity: 90,
        colors: ['#DB181B'],
        decay: 0.9,
        gravity: 1
      });

      // Left side confetti
      confetti({
        origin: { x: 0, y: Math.random() },
        angle: 0,
        particleCount: 50,
        spread: 70,
        startVelocity: 90,
        colors: ['#FF1493'],
        decay: 0.9,
        gravity: 1
      });
    };

    // Start shooting confetti
    intervalRef.current = window.setInterval(shootConfetti, 300);

    // Stop after specified duration
    const timeoutId = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, duration);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, [duration]);

  return null;
};