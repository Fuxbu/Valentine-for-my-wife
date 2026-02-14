
import React, { useMemo } from 'react';

interface PetalRainProps {
  count?: number;
}

const PetalRain: React.FC<PetalRainProps> = ({ count = 20 }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 15 + 10,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
      rotation: Math.random() * 360,
      sway: Math.random() * 100 + 50
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: `-50px`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.2}px`,
            background: 'linear-gradient(135deg, #fb7185 0%, #be123c 100%)',
            borderRadius: '0% 100% 40% 100% / 0% 100% 40% 100%',
            opacity: 0.6,
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            transform: `rotate(${petal.rotation}deg)`,
            animation: `petal-fall ${petal.duration}s linear ${petal.delay}s infinite`
          }}
        />
      ))}
      <style>{`
        @keyframes petal-fall {
          0% { 
            transform: translateY(0vh) rotate(0deg) translateX(0px); 
            opacity: 0; 
          }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { 
            transform: translateY(110vh) rotate(720deg) translateX(100px); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
};

export default PetalRain;
