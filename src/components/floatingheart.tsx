import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const ValentinesHearts = () => {
  const [hearts, setHearts] = useState([]);

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

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animation: `float ${heart.duration}s infinite linear`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            size={heart.size}
            className="text-red-400"
            fill="currentColor"
          />
        </div>
      ))}
      {/* ✅ FIXED: Removed 'jsx' attribute */}
      <style>
        {`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(50px, -100px) rotate(120deg);
          }
          66% {
            transform: translate(-50px, -200px) rotate(240deg);
          }
          100% {
            transform: translate(0, -300px) rotate(360deg);
          }
        }
      `}
      </style>
    </div>
  );
};

export default ValentinesHearts;
