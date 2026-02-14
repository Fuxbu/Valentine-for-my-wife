
import React from 'react';
import Rose from './Rose';

interface RoseGardenProps {
  isBloomed: boolean;
}

const RoseGarden: React.FC<RoseGardenProps> = ({ isBloomed }) => {
  return (
    <div className={`relative w-full h-full flex justify-center items-end pb-[10vh] transition-all duration-1500 ${isBloomed ? 'scale-100' : 'scale-90 opacity-0'}`}>
      <div className="flowers-container relative w-full h-full max-w-5xl flex justify-center items-end">
        
        {/* Ground Glow & Mist Layers */}
        <div className="absolute bottom-[-5vh] left-1/2 -translate-x-1/2 w-[180%] h-[40vh] bg-gradient-to-t from-rose-950/40 via-rose-900/10 to-transparent blur-[140px] -z-10" />
        <div className="absolute bottom-[2vh] left-1/2 -translate-x-1/2 w-[100%] h-[8vh] bg-rose-600/10 blur-[50px] rounded-full -z-10 animate-mist-flow" />
        
        {/* Main Central Rose */}
        <Rose id={1} className="rose--center" isBloomed={isBloomed} />
        
        {/* Supporting Roses */}
        <Rose id={2} className="rose--left" isBloomed={isBloomed} />
        <Rose id={3} className="rose--right" isBloomed={isBloomed} />
        
        {/* Additional accent layers for depth */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[4vh] bg-rose-950/80 blur-xl -z-5 rounded-full" />
      </div>

      <style>{`
        .flowers-container {
          perspective: 2000px;
        }

        .flower {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform-origin: bottom center;
        }

        .rose--center {
          z-index: 40;
          animation: gentle-sway-main 10s ease-in-out infinite;
        }
        
        .rose--left {
          z-index: 30;
          margin-left: -11vmin;
          animation: gentle-sway-left 12s ease-in-out infinite;
        }
        
        .rose--right {
          z-index: 30;
          margin-left: 11vmin;
          animation: gentle-sway-right 11s ease-in-out infinite;
        }

        @keyframes gentle-sway-main {
          0%, 100% { transform: rotate(0deg) scale(1.02) translateY(0); }
          50% { transform: rotate(1deg) scale(1.05) translateY(-5px); }
        }

        @keyframes gentle-sway-left {
          0%, 100% { transform: rotate(-12deg) translateY(0); }
          50% { transform: rotate(-8deg) translateY(-8px); }
        }

        @keyframes gentle-sway-right {
          0%, 100% { transform: rotate(12deg) translateY(0); }
          50% { transform: rotate(8deg) translateY(-8px); }
        }

        @keyframes mist-flow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, 0) scale(1) skewX(0); }
          50% { opacity: 0.6; transform: translate(-50%, 5px) scale(1.1) skewX(5deg); }
        }
      `}</style>
    </div>
  );
};

export default RoseGarden;
