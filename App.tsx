
import React, { useState, useMemo } from 'react';
import RoseGarden from './components/RoseGarden';
import FloatingHearts from './components/FloatingHearts';
import GreetingOverlay from './components/GreetingOverlay';
import PetalRain from './components/PetalRain';

const App: React.FC = () => {
  const [isBloomed, setIsBloomed] = useState(false);

  const bokehOrbs = useMemo(() => 
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 200 + 80,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.12 + 0.04
    })), []);

  const handleBloom = () => {
    setIsBloomed(true);
  };

  const handleReload = () => {
    setIsBloomed(false);
  };

  return (
    <div className="relative w-full h-screen bg-[#050002] overflow-hidden flex items-center justify-center font-poppins">
      
      {/* Dynamic Cinematic Background */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-[3000ms] ${isBloomed ? 'opacity-100' : 'opacity-60'}`}>
        
        {/* Layer 1: Heart-Center Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#58061c_0%,#050002_80%)]" />
        
        {/* Layer 2: Drifting Bokeh Orbs */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {bokehOrbs.map(orb => (
            <div
              key={orb.id}
              className="absolute rounded-full bg-rose-400 blur-[80px]"
              style={{
                left: `${orb.left}%`,
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                opacity: orb.opacity,
                animation: `float-bokeh ${orb.duration}s linear ${orb.delay}s infinite`
              }}
            />
          ))}
        </div>

        {/* Layer 3: Twinkling Stardust */}
        <div className="absolute inset-0 z-0">
          {[...Array(120)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-0 animate-star ${i % 3 === 0 ? 'bg-rose-300' : 'bg-white'}`}
              style={{
                width: (Math.random() * 1.5 + 0.5) + 'px',
                height: (Math.random() * 1.5 + 0.5) + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 10 + 's',
                animationDuration: Math.random() * 6 + 4 + 's'
              }}
            />
          ))}
        </div>
        
        <FloatingHearts count={30} />
        {isBloomed && <PetalRain count={25} />}
      </div>

      {/* Interactive Main Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <RoseGarden isBloomed={isBloomed} />
      </div>

      <GreetingOverlay isBloomed={isBloomed} />

      {/* Bloom UI */}
      {!isBloomed ? (
        <div className="z-[70] flex flex-col items-center gap-12 text-center animate-intro px-8">
          <div className="space-y-4">
            <h3 className="text-rose-400 text-sm md:text-xl tracking-[1em] uppercase font-light drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]">
              Love's Awakening
            </h3>
            <p className="text-white/30 text-xs md:text-lg italic font-light tracking-[0.2em]">
              Tap to see my heart unfold for you...
            </p>
          </div>
          <button
            onClick={handleBloom}
            className="group relative px-24 py-8 bg-transparent text-white rounded-full font-semibold transition-all duration-1000 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full group-hover:bg-rose-600/10 transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.5)]" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.1)_0%,transparent_70%)]" />
            
            <span className="relative z-10 flex items-center gap-6 tracking-[0.4em] uppercase text-sm md:text-xl">
              Bloom My Love
              <span className="text-3xl animate-heart-throb inline-block">❤</span>
            </span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-60 group-hover:w-3/4 transition-all duration-700" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleReload}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[70] px-14 py-4 bg-white/5 hover:bg-white/10 text-white/20 hover:text-white/60 rounded-full text-[12px] tracking-[0.5em] uppercase font-bold border border-white/5 transition-all duration-1000 backdrop-blur-3xl hover:border-rose-500/20"
        >
          Re-Experience
        </button>
      )}

      <style>{`
        @keyframes float-bokeh {
          0% { transform: translateY(110vh) translateX(0) scale(1); opacity: 0; }
          10% { opacity: var(--opacity, 0.1); }
          90% { opacity: var(--opacity, 0.1); }
          100% { transform: translateY(-20vh) translateX(40px) scale(1.2); opacity: 0; }
        }
        @keyframes star {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.7; transform: scale(1.3); filter: blur(1px); }
        }
        @keyframes intro {
          from { opacity: 0; transform: translateY(30px); filter: blur(15px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes heart-throb {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.3); filter: brightness(1.5); text-shadow: 0 0 20px #fb7185; }
        }
        .animate-star { animation: star linear infinite; }
        .animate-intro { animation: intro 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-heart-throb { animation: heart-throb 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
      `}</style>
    </div>
  );
};

export default App;
