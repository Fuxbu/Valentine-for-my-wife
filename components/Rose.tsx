
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
        {/* Multi-layered High-Fidelity Petals */}
        
        {/* Deep Shadow Petals */}
        <div className="rose-petal deep-base petal-d1"></div>
        <div className="rose-petal deep-base petal-d2"></div>

        {/* Outer Large Petals */}
        <div className="rose-petal outer-layer petal-1"><div className="shimmer-sweep" /></div>
        <div className="rose-petal outer-layer petal-2"><div className="shimmer-sweep" /></div>
        <div className="rose-petal outer-layer petal-3"><div className="shimmer-sweep" /></div>
        
        {/* Mid Structural Petals */}
        <div className="rose-petal mid-layer petal-4"></div>
        <div className="rose-petal mid-layer petal-5"></div>
        <div className="rose-petal mid-layer petal-6"></div>
        
        {/* Core Nested Heart */}
        <div className="rose-petal core-layer petal-7"></div>
        <div className="rose-petal core-layer petal-8"></div>
        <div className="rose-petal core-layer petal-9"></div>
        
        {/* Central Glowing Essence */}
        <div className="flower__pollen-glow"></div>
        <div className="flower__core-aura"></div>

        {/* Floating Embers */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`flower__ember ember--${i + 1}`} />
        ))}
      </div>

      <div className="flower__line">
        <div className="stem-leaf leaf-left" />
        <div className="stem-leaf leaf-right" />
        <div className="thorn thorn-left" />
        <div className="thorn thorn-right" />
      </div>

      <style>{`
        .flower {
          filter: drop-shadow(0 0 35px rgba(100, 0, 25, 0.5));
          transform: translateZ(0); /* Force GPU */
        }

        .flower__leafs {
          position: relative;
          z-index: 5;
          animation: cinematic-bloom 4.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes cinematic-bloom {
          0% { transform: scale(0) rotate(-25deg) translateY(20px); filter: brightness(0); }
          60% { transform: scale(1.1) rotate(5deg) translateY(-5px); filter: brightness(1.2); }
          100% { transform: scale(1) rotate(0) translateY(0); filter: brightness(1); }
        }

        .rose-petal {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform-origin: bottom center;
          background: linear-gradient(165deg, #4c0519 0%, #881337 30%, #be123c 60%, #fb7185 100%);
          box-shadow: 
            inset 0 0 25px rgba(0,0,0,0.7),
            0 5px 15px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          transition: transform 3s cubic-bezier(0.19, 1, 0.22, 1);
        }

        /* Velvet Shader Effect */
        .rose-petal::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 10%, rgba(255,255,255,0.15) 0%, transparent 60%);
          mix-blend-mode: soft-light;
        }

        .shimmer-sweep {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%);
          animation: sweep-light 8s infinite linear;
          pointer-events: none;
        }

        @keyframes sweep-light {
          0% { transform: translate(-100%, -100%); }
          20% { transform: translate(100%, 100%); }
          100% { transform: translate(100%, 100%); }
        }

        /* Petal Specifics */
        .deep-base { width: 18vmin; height: 13vmin; border-radius: 50%; background: #1a0004; transform: translate(-50%, 20%) rotateX(85deg); z-index: 0; }
        
        .outer-layer { width: 16vmin; height: 19vmin; border-radius: 40% 60% 45% 55% / 65% 65% 35% 35%; z-index: 1; }
        .petal-1 { transform: translate(-50%, 8%) rotateX(75deg) rotateZ(15deg); }
        .petal-2 { transform: translate(-50%, 8%) rotateX(75deg) rotateZ(135deg); }
        .petal-3 { transform: translate(-50%, 8%) rotateX(75deg) rotateZ(255deg); }

        .mid-layer { width: 13vmin; height: 16vmin; border-radius: 50% 50% 30% 30% / 85% 85% 15% 15%; z-index: 2; }
        .petal-4 { transform: translate(-50%, 3%) rotateY(55deg) rotateX(30deg); }
        .petal-5 { transform: translate(-50%, 3%) rotateY(-55deg) rotateX(30deg); }
        .petal-6 { transform: translate(-50%, 3%) rotateY(180deg) rotateX(25deg); }

        .core-layer { width: 9vmin; height: 12vmin; border-radius: 50% 50% 20% 20% / 95% 95% 5% 5%; background: linear-gradient(to top, #2d0007, #9d174d); z-index: 3; }
        .petal-7 { transform: translate(-50%, 0) rotateY(80deg) scale(0.95); }
        .petal-8 { transform: translate(-50%, 0) rotateY(-80deg) scale(0.95); }
        .petal-9 { width: 7vmin; height: 10vmin; transform: translate(-50%, 0) scale(0.85); background: #1a0004; z-index: 4; }

        .flower__pollen-glow {
          position: absolute;
          left: -1vmin; top: -3.5vmin;
          width: 2vmin; height: 2vmin;
          background: #ffecb3;
          border-radius: 50%;
          filter: blur(1.5vmin);
          z-index: 6;
          opacity: 0.8;
          animation: pollen-pulse 3s ease-in-out infinite;
        }

        .flower__core-aura {
          position: absolute;
          left: -4vmin; top: -6vmin;
          width: 8vmin; height: 8vmin;
          background: radial-gradient(circle, rgba(251, 113, 133, 0.4) 0%, transparent 80%);
          z-index: 5;
          animation: aura-expand 6s ease-in-out infinite;
        }

        @keyframes pollen-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes aura-expand {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.8); opacity: 0.5; }
        }

        /* Stem & Thorns */
        .flower__line {
          width: 1.5vmin;
          height: 0;
          background: linear-gradient(to top, #022c22, #065f46, #10b981);
          animation: grow-stem-lux 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          position: relative;
          z-index: 1;
        }

        @keyframes grow-stem-lux {
          0% { height: 0; }
          100% { height: 65vmin; }
        }

        .stem-leaf {
          width: 10vmin; height: 6vmin;
          background: linear-gradient(to right, #022c22, #10b981);
          border-radius: 2px 100% 8px 100%;
          position: absolute;
          opacity: 0;
          animation: leaf-unfurl 2s 2.5s ease-out forwards;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        .leaf-left { top: 45%; left: -9vmin; transform: rotate(-30deg) scaleX(-1); }
        .leaf-right { top: 25%; left: 1.5vmin; transform: rotate(-25deg); }

        @keyframes leaf-unfurl {
          from { opacity: 0; transform: rotate(-45deg) scale(0); }
          to { opacity: 1; transform: rotate(-30deg) scale(1); }
        }

        .thorn {
          position: absolute;
          width: 0; height: 0;
          border-left: 0.8vmin solid transparent;
          border-right: 0.8vmin solid transparent;
          border-bottom: 2vmin solid #022c22;
        }
        .thorn-left { top: 60%; left: -1.5vmin; transform: rotate(-90deg); }
        .thorn-right { top: 35%; left: 1.2vmin; transform: rotate(90deg); }

        /* Embers */
        .flower__ember {
          position: absolute;
          width: 0.8vmin; height: 0.8vmin;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 12px #fb7185, 0 0 4px white;
          animation: ember-rise 6s infinite ease-out;
        }
        .ember--1 { left: -12vmin; bottom: 10vmin; animation-delay: 0s; }
        .ember--2 { right: -12vmin; bottom: 30vmin; animation-delay: 1.5s; }
        .ember--3 { left: -6vmin; bottom: 45vmin; animation-delay: 3s; }
        .ember--4 { right: -6vmin; bottom: 5vmin; animation-delay: 4.5s; }

        @keyframes ember-rise {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-75vmin) translateX(calc(10vmin * (random() - 0.5))) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Rose;
