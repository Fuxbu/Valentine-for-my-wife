
import React from 'react';

interface GreetingOverlayProps {
  isBloomed: boolean;
}

const GreetingOverlay: React.FC<GreetingOverlayProps> = ({ isBloomed }) => {
  return (
    <div className={`absolute inset-0 flex flex-col items-center pointer-events-none z-50 transition-all duration-1500 ease-out ${isBloomed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      
      {/* Optimized Layout for High-End Aesthetic */}
      <div className="mt-[25vh] md:mt-[18vh] text-center px-6 w-full flex flex-col items-center">
        
        <div className="relative inline-block mb-6 overflow-hidden">
          <h2 className="text-rose-200 text-sm md:text-xl font-['Poppins'] font-light tracking-[0.8em] uppercase animate-tracking-slide drop-shadow-[0_2px_15px_rgba(0,0,0,1)]">
            Eternal Love
          </h2>
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-text" />
        </div>
        
        <div className="relative mb-8 max-w-4xl">
          <h1 className="text-white text-5xl md:text-[10rem] font-['Great_Vibes'] leading-none drop-shadow-[0_0_50px_rgba(255,255,255,0.3)] animate-float-slow">
            Happy Valentine's Day
          </h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-60"></div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-6">
          <p className="text-rose-100 text-4xl md:text-7xl font-['Great_Vibes'] drop-shadow-[0_0_25px_rgba(244,63,94,1)] animate-heartbeat-glow">
            I Love You, Happy
          </p>
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-rose-500/50" />
            <div className="flex gap-2">
               <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping-slow delay-0 shadow-[0_0_10px_#f43f5e]" />
               <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping-slow delay-500 shadow-[0_0_10px_#f472b6]" />
               <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping-slow delay-1000 shadow-[0_0_10px_#f43f5e]" />
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-rose-500/50" />
          </div>
        </div>
      </div>

      <style>{`
        .animate-tracking-slide {
          animation: tracking-slide 5s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: 1.8s;
        }

        .animate-shimmer-text {
          animation: shimmer-text 3s infinite linear;
          animation-delay: 5s;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-heartbeat-glow {
          animation: heartbeat-glow 3s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-ping-slow {
          animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes tracking-slide {
          0% { letter-spacing: -0.5em; opacity: 0; filter: blur(20px); transform: translateY(-10px); }
          50% { opacity: 0.5; filter: blur(5px); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0); }
        }

        @keyframes shimmer-text {
          from { left: -100%; }
          to { left: 100%; }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }

        @keyframes heartbeat-glow {
          0%, 100% { opacity: 0.9; transform: scale(1); filter: brightness(1); }
          50% { opacity: 1; transform: scale(1.08); filter: brightness(1.3); }
        }
      `}</style>
    </div>
  );
};

export default GreetingOverlay;
