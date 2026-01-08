import './Middle.css'; // Assuming you have a CSS file for additional styles
import React from 'react';
import { ChevronRight, PlayCircle, Sparkles } from 'lucide-react';

const Middle = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#030712] overflow-hidden">
      
      {/* 1. Animated Background Gradients (Modern Depth) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
          
          
        {/* 2. Modern Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-blue-400 text-xs font-medium mb-8 hover:border-blue-500/50 transition-all cursor-pointer">
          <Sparkles size={14} />
          <span>AI-Powered Design Platform</span>
          <ChevronRight size={14} />
        </div>

        {/* 3. Hero Heading with Gradient Text */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6">
          Design for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
            Digital Frontier.
          </span>
        </h1>

        {/* 4. Subtext with high readability */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Stop settling for average. Build lightning-fast, visually stunning interfaces 
          with our premium component suite.
        </p>

        {/* 5. Modern Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary Action */}
          <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              Start Building Free <ChevronRight size={18} />
            </span>
          </button>

          {/* View Demo with Glassmorphism */}
          <button className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
            <PlayCircle size={18} className="text-blue-400" />
            View Demo
          </button>
        </div>

        {/* 6. Subtle Trust Indicator */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-6">
            Powering the world's best teams
          </p>
          <div className="flex justify-center gap-8 opacity-40 grayscale contrast-200">
            {/* Replace these with real SVG logos later */}
            <span className="text-xl font-bold text-white italic">ACME</span>
            <span className="text-xl font-bold text-white italic">GLOBEX</span>
            <span className="text-xl font-bold text-white italic">SIRIUS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Middle;