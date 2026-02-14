
import React from 'react';

interface RoseProps {
  id: number;
  className?: string;
  isBloomed: boolean;
}

const Rose: React.FC<RoseProps> = ({ id, className, isBloomed }) => {
  if (!isBloomed) return null;

  return (
    <div className={`flower ${className}`}>
      <div className={`flower__leafs flower__leafs--${id}`}>
        {/* Shadow Base */}
        <div className="rose-petal shadow-base"></div>

        {/* Outer Petals with Specular Highlights */}
        {[1, 2, 3].map(num => (
          <div key={`o-${num}`} className={`rose-petal outer-layer petal-${num}`}>
            <div className="petal-highlight" />
          </div>
        ))}
        
        {/* Mid Petals */}
        {[4, 5, 6].map(num => (
          <div key={`m-${num}`} className={`rose-petal mid-layer petal-${num}`} />
        ))}
        
        {/* Core Heart Petals */}
        {[7, 8, 9].map(num => (
          <div key={`c-${num}`} className={`rose-petal core-layer petal-${num}`} />
        ))}
        
        {/* Glowing Center */}
        <div className="flower__center-glow"></div>
        <div className="flower__sparkle-center"></div>

        {/* Floating Embers */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`flower__ember ember--${i + 1}`} />
        ))}
      </div>

      <div className="flower__line">
        <div className="stem-leaf leaf-left" />
        <div className="stem-leaf leaf-right" />
        <div className="thorn thorn-1" />
        <div className="thorn thorn-2" />
        <div className="stem-glow" />
      </div>

      <style>{`
        .flower {
          filter: drop-shadow(0 0 40px rgba(100, 0, 20, 0.4));
        }

        .flower__leafs {
          position: relative;
          z-index: 5;
          animation: bloom-lux 5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes bloom-lux {
          0% { transform: scale(0) rotate(-45deg); filter: brightness(0); }
          60% { transform: scale(1.05) rotate(5deg); filter: brightness(1.2); }
          100% { transform: scale(1) rotate(0); filter: brightness(1); }
        }

        .rose-petal {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform-origin: bottom center;
          background: linear-gradient(165deg, #4c0519 0%, #9d174d 40%, #be123c 70%, #fb7185 100%);
          box-shadow: 
            inset 0 0 30px rgba(0,0,0,0.7),
            0 10px 20px rgba(0,0,0,0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          transition: transform 4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .petal-highlight {
          position: absolute;
          top: 0; left: 0; right: 0; height: 30%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent);
          border-radius: 50% 50% 0 0;
          pointer-events: none;
        }

        /* Geometry */
        .shadow-base { width: 18vmin; height: 12vmin; border-radius: 50%; background: #1a0004; transform: translate(-50%, 25%) rotateX(85deg); z-index: 0; }
        
        .outer-layer { width: 16vmin; height: 20vmin; border-radius: 40% 60% 45% 55% / 65% 65% 35% 35%; z-index: 1; }
        .petal-1 { transform: translate(-50%, 10%) rotateX(75deg) rotateZ(10deg); }
        .petal-2 { transform: translate(-50%, 10%) rotateX(75deg) rotateZ(130deg); }
        .petal-3 { transform: translate(-50%, 10%) rotateX(75deg) rotateZ(250deg); }

        .mid-layer { width: 13vmin; height: 17vmin; border-radius: 50% 50% 30% 30% / 80% 80% 20% 20%; z-index: 2; }
        .petal-4 { transform: translate(-50%, 4%) rotateY(50deg) rotateX(25deg); }
        .petal-5 { transform: translate(-50%, 4%) rotateY(-50deg) rotateX(25deg); }
        .petal-6 { transform: translate(-50%, 4%) rotateY(180deg) rotateX(20deg); }

        .core-layer { width: 9vmin; height: 13vmin; border-radius: 50% 50% 20% 20% / 95% 95% 5% 5%; background: linear-gradient(to top, #2d0007, #9d174d); z-index: 3; }
        .petal-7 { transform: translate(-50%, 0) rotateY(85deg) scale(0.95); }
        .petal-8 { transform: translate(-50%, 0) rotateY(-85deg) scale(0.95); }
        .petal-9 { width: 7vmin; height: 10vmin; transform: translate(-50%, 0) scale(0.85); background: #1a0004; z-index: 4; }

        .flower__center-glow {
          position: absolute;
          left: -4vmin; top: -6vmin;
          width: 8vmin; height: 8vmin;
          background: radial-gradient(circle, rgba(251, 113, 133, 0.4) 0%, transparent 80%);
          z-index: 5;
          animation: center-pulse 4s ease-in-out infinite;
        }

        .flower__sparkle-center {
          position: absolute;
          left: -0.5vmin; top: -2vmin;
          width: 1vmin; height: 1vmin;
          background: #fff;
          border-radius: 50%;
          filter: blur(1px);
          box-shadow: 0 0 10px #fff, 0 0 20px #fb7185;
          z-index: 6;
          animation: core-sparkle 2s ease-in-out infinite;
        }

        @keyframes center-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.6); }
        }

        @keyframes core-sparkle {
          0%, 100% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }

        /* Stem */
        .flower__line {
          width: 1.4vmin;
          height: 0;
          background: linear-gradient(to top, #022c22, #064e3b, #10b981);
          animation: grow-stem-premium 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          position: relative;
          z-index: 1;
        }

        @keyframes grow-stem-premium {
          0% { height: 0; }
          100% { height: 68vmin; }
        }

        .stem-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, transparent, rgba(16, 185, 129, 0.2), transparent);
          filter: blur(5px);
        }

        .stem-leaf {
          width: 11vmin; height: 6.5vmin;
          background: linear-gradient(to right, #022c22, #10b981);
          border-radius: 2px 100% 10px 100%;
          position: absolute;
          opacity: 0;
          animation: leaf-unfurl-lux 2s 3s ease-out forwards;
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }
        .leaf-left { top: 40%; left: -10vmin; transform: rotate(-35deg) scaleX(-1); }
        .leaf-right { top: 20%; left: 1.5vmin; transform: rotate(-30deg); }

        @keyframes leaf-unfurl-lux {
          from { opacity: 0; transform: scale(0) rotate(-45deg); }
          to { opacity: 1; transform: scale(1) rotate(-35deg); }
        }

        .thorn {
          position: absolute;
          width: 0; height: 0;
          border-left: 0.8vmin solid transparent;
          border-right: 0.8vmin solid transparent;
          border-bottom: 2.2vmin solid #022c22;
        }
        .thorn-1 { top: 55%; left: -1.4vmin; transform: rotate(-90deg); }
        .thorn-2 { top: 35%; left: 1.2vmin; transform: rotate(90deg); }

        /* Embers */
        .flower__ember {
          position: absolute;
          width: 0.6vmin; height: 0.6vmin;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px #fb7185;
          animation: ember-fly 7s infinite ease-out;
        }
        .ember--1 { left: -15vmin; bottom: 15vmin; animation-delay: 0s; }
        .ember--2 { right: -15vmin; bottom: 35vmin; animation-delay: 2s; }
        .ember--3 { left: -8vmin; bottom: 50vmin; animation-delay: 4s; }

        @keyframes ember-fly {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          20% { opacity: 1; transform: translate(5vmin, -15vmin) scale(1); }
          100% { transform: translate(-10vmin, -80vmin) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Rose;
