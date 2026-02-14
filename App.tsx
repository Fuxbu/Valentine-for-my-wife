
import React, { useState } from 'react';
import RoseGarden from './components/RoseGarden';
import FloatingHearts from './components/FloatingHearts';
import GreetingOverlay from './components/GreetingOverlay';

const App: React.FC = () => {
  const [isBloomed, setIsBloomed] = useState(false);

  const handleBloom = () => {
    setIsBloomed(true);
  };

  const handleReload = () => {
    setIsBloomed(false);
  };

  return (
    <div className="relative w-full h-screen bg-[#050002] transition-all duration-1000 overflow-hidden flex items-center justify-center font-['Poppins']">
      {/* Dynamic Background Layer */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1500 ${isBloomed ? 'opacity-100' : 'opacity-60'}`}>
        {/* Deep Romantic Base Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3d0510_0%,#050002_85%)]" />
        
        {/* Cinematic Aurora / Light Leaks */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-rose-900 rounded-full blur-[150px] animate-aurora-1" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-900/40 rounded-full blur-[120px] animate-aurora-2" />
        </div>

        {/* Twinkling Multicolored Stardust */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-0 animate-twinkle ${i % 3 === 0 ? 'bg-rose-300' : i % 2 === 0 ? 'bg-pink-200' : 'bg-white'}`}
              style={{
                width: (Math.random() * 2 + 1) + 'px',
                height: (Math.random() * 2 + 1) + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 8 + 's',
                animationDuration: Math.random() * 4 + 3 + 's'
              }}
            />
          ))}
        </div>
        
        <FloatingHearts count={35} />
      </div>

      {/* The Animated Roses */}
      <div className="relative z-20">
        <RoseGarden isBloomed={isBloomed} />
      </div>

      {/* Romantic Text Overlay */}
      <GreetingOverlay isBloomed={isBloomed} />

      {/* Bloom UI Controls */}
      {!isBloomed ? (
        <div className="z-[60] flex flex-col items-center gap-8 text-center animate-fade-in px-6">
          <div className="space-y-3">
            <h3 className="text-rose-400 text-sm md:text-base tracking-[0.5em] uppercase opacity-90 font-light">
              A Symphony of Love
            </h3>
            <p className="text-white/30 text-xs md:text-sm italic font-light max-w-xs">
              Every petal carries a whisper of my heart...
            </p>
          </div>
          <button
            onClick={handleBloom}
            className="group relative px-16 py-6 bg-transparent text-white rounded-full font-semibold overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95"
          >
            {/* Glossy Button Glass Effect */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/20 rounded-full group-hover:bg-rose-600/20 transition-colors" />
            <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <span className="relative z-10 flex items-center gap-4 tracking-widest uppercase text-sm md:text-base">
              Bloom My Love
              <span className="text-xl animate-heart-beat">❤</span>
            </span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleReload}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[60] px-10 py-4 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/80 rounded-full text-[11px] tracking-[0.3em] uppercase font-bold border border-white/10 transition-all duration-500 backdrop-blur-2xl"
        >
          Re-Experience
        </button>
      )}

      <style>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(15%, 10%) scale(1.2); opacity: 0.5; }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1.1); opacity: 0.2; }
          50% { transform: translate(-10%, -15%) scale(0.9); opacity: 0.4; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.3); filter: blur(1px); }
          50% { opacity: 0.9; transform: scale(1.2); filter: blur(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); filter: blur(15px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes heart-beat {
          0%, 100% { transform: scale(1); text-shadow: 0 0 10px rgba(251, 113, 133, 0); }
          50% { transform: scale(1.3); text-shadow: 0 0 20px rgba(251, 113, 133, 0.8); }
        }
        .animate-aurora-1 { animation: aurora-1 15s ease-in-out infinite; }
        .animate-aurora-2 { animation: aurora-2 20s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle linear infinite; }
        .animate-fade-in { animation: fade-in 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-heart-beat { animation: heart-beat 1.2s infinite; }
      `}</style>
    </div>
  );
};

export default App;
