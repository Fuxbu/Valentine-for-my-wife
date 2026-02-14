
import React, { useMemo } from 'react';

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 15 }) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 12,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 8,
      pulseDelay: Math.random() * 2,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-500/40"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animation: `float-ethereal ${heart.duration}s linear ${heart.delay}s infinite, heart-pulse 3s ease-in-out ${heart.pulseDelay}s infinite`,
          }}
        >
          ❤
        </div>
      ))}
      <style>{`
        @keyframes float-ethereal {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.6; }
          85% { opacity: 0.6; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
        @keyframes heart-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); filter: brightness(1.3) blur(1px); }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
