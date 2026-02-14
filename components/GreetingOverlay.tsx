
import React from 'react';

interface GreetingOverlayProps {
  isBloomed: boolean;
}

const GreetingOverlay: React.FC<GreetingOverlayProps> = ({ isBloomed }) => {
  return (
    <div className={`absolute inset-0 flex flex-col items-center pointer-events-none z-50 transition-all duration-[2500ms] cubic-bezier(0.16, 1, 0.3, 1) ${isBloomed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      
      <div className="mt-[20vh] md:mt-[15vh] text-center px-6 w-full flex flex-col items-center">
        
        {/* Shimmering Top Label */}
        <div className="relative inline-block mb-8 overflow-hidden group">
          <h2 className="text-rose-300/80 text-sm md:text-xl font-poppins font-light tracking-[1em] uppercase animate-tracking-slide drop-shadow-[0_0_10px_rgba(251,113,133,0.3)]">
            Eternal Symphony
          </h2>
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast" />
        </div>
        
        {/* Main Elegant Greeting */}
        <div className="relative mb-10 max-w-5xl">
          <h1 className="text-white text-6xl md:text-[11rem] font-greatvibes leading-none drop-shadow-[0_0_60px_rgba(251,113,133,0.4)] animate-float-gentle text-shadow-lux">
            Happy Valentine's Day
          </h1>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>
        </div>

        {/* Pulsing "I Love You" Section */}
        <div className="mt-8 flex flex-col items-center gap-8">
          <div className="relative">
            <p className="text-rose-100 text-5xl md:text-8xl font-greatvibes drop-shadow-[0_0_30px_#f43f5e] animate-heartbeat-glow">
              I Love You, Happy
            </p>
            {/* Background Aura for text */}
            <div className="absolute inset-0 bg-rose-500/20 blur-[40px] rounded-full scale-150 -z-10 animate-aura-pulse" />
          </div>
          
          <div className="flex items-center gap-6 opacity-70">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-rose-400" />
            <div className="flex gap-4">
               <div className="w-3 h-3 bg-rose-500 rounded-full animate-ping-slow shadow-[0_0_15px_#f43f5e]" />
               <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping-slow delay-700 shadow-[0_0_15px_#f472b6]" />
               <div className="w-3 h-3 bg-rose-500 rounded-full animate-ping-slow delay-1400 shadow-[0_0_15px_#f43f5e]" />
            </div>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-rose-400" />
          </div>
        </div>
      </div>

      <style>{`
        .text-shadow-lux {
          text-shadow: 0 0 20px rgba(251, 113, 133, 0.4), 0 0 40px rgba(251, 113, 133, 0.2);
        }

        @keyframes tracking-slide {
          0% { letter-spacing: -0.2em; opacity: 0; filter: blur(10px); }
          100% { letter-spacing: 1em; opacity: 1; filter: blur(0); }
        }

        @keyframes shimmer-fast {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        @keyframes heartbeat-glow {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.4); }
        }

        @keyframes aura-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1.2); }
          50% { opacity: 0.4; transform: scale(1.6); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          70%, 100% { transform: scale(3); opacity: 0; }
        }

        .animate-tracking-slide { animation: tracking-slide 4s ease-out forwards; }
        .animate-shimmer-fast { animation: shimmer-fast 4s linear infinite; }
        .animate-float-gentle { animation: float-gentle 10s ease-in-out infinite; }
        .animate-heartbeat-glow { animation: heartbeat-glow 2.5s ease-in-out infinite; }
        .animate-aura-pulse { animation: aura-pulse 5s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </div>
  );
};

export default GreetingOverlay;
