
import React, { useState, useMemo } from 'react';
import RoseGarden from './components/RoseGarden';
import FloatingHearts from './components/FloatingHearts';
import GreetingOverlay from './components/GreetingOverlay';

const App: React.FC = () => {
  const [isBloomed, setIsBloomed] = useState(false);

  // Generate memoized bokeh orbs to avoid re-renders
  const bokehOrbs = useMemo(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 150 + 50,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.15 + 0.05
    })), []);

  const handleBloom = () => {
    setIsBloomed(true);
  };

  const handleReload = () => {
    setIsBloomed(false);
  };

  return (
    <div className="relative w-full h-screen bg-[#050002] overflow-hidden flex items-center justify-center font-poppins">
      
      {/* Enhanced Multi-Layered Background */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-2000 ${isBloomed ? 'opacity-100' : 'opacity-70'}`}>
        
        {/* Layer 1: Base Radial Bloom */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#4c0519_0%,#050002_75%)]" />
        
        {/* Layer 2: Shifting Nebula Clouds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-rose-900/20 rounded-full blur-[180px] animate-nebula-1" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-rose-950/30 rounded-full blur-[150px] animate-nebula-2" />
        </div>

        {/* Layer 3: Drifting Bokeh Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {bokehOrbs.map(orb => (
            <div
              key={orb.id}
              className="absolute rounded-full bg-rose-300 blur-[60px]"
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

        {/* Layer 4: Twinkling Stardust */}
        <div className="absolute inset-0 z-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-0 animate-star ${i % 4 === 0 ? 'bg-rose-400' : 'bg-white'}`}
              style={{
                width: (Math.random() * 2 + 0.5) + 'px',
                height: (Math.random() * 2 + 0.5) + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 10 + 's',
                animationDuration: Math.random() * 5 + 3 + 's'
              }}
            />
          ))}
        </div>
        
        <FloatingHearts count={40} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <RoseGarden isBloomed={isBloomed} />
      </div>

      <GreetingOverlay isBloomed={isBloomed} />

      {/* Bloom UI */}
      {!isBloomed ? (
        <div className="z-[70] flex flex-col items-center gap-10 text-center animate-intro px-6">
          <div className="space-y-4">
            <h3 className="text-rose-400 text-sm md:text-lg tracking-[0.6em] uppercase font-light drop-shadow-lg">
              A Valentine's Secret
            </h3>
            <p className="text-white/40 text-xs md:text-base italic font-light tracking-widest">
              Wait for the moment... and let love grow
            </p>
          </div>
          <button
            onClick={handleBloom}
            className="group relative px-20 py-7 bg-transparent text-white rounded-full font-semibold transition-all duration-700 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full group-hover:bg-rose-600/10 transition-colors shadow-2xl" />
            <span className="relative z-10 flex items-center gap-5 tracking-[0.3em] uppercase text-sm md:text-lg">
              Unfold My Heart
              <span className="text-2xl animate-heart-throb">❤</span>
            </span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      ) : (
        <button
          onClick={handleReload}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[70] px-12 py-4 bg-white/5 hover:bg-white/10 text-white/30 hover:text-white/70 rounded-full text-[12px] tracking-[0.4em] uppercase font-bold border border-white/5 transition-all duration-500 backdrop-blur-3xl"
        >
          Begin Again
        </button>
      )}

      <style>{`
        @keyframes nebula-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, 15%) scale(1.1); }
        }
        @keyframes nebula-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, -10%) scale(1.2); }
        }
        @keyframes float-bokeh {
          0% { transform: translateY(120vh) translateX(0); }
          50% { transform: translateY(50vh) translateX(30px); }
          100% { transform: translateY(-20vh) translateX(-20px); }
        }
        @keyframes star {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes intro {
          from { opacity: 0; transform: scale(0.95) translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        @keyframes heart-throb {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 1; text-shadow: 0 0 15px #fb7185; }
        }
        .animate-nebula-1 { animation: nebula-1 25s ease-in-out infinite; }
        .animate-nebula-2 { animation: nebula-2 30s ease-in-out infinite; }
        .animate-star { animation: star linear infinite; }
        .animate-intro { animation: intro 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-heart-throb { animation: heart-throb 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default App;
