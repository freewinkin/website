"use client";

import React from "react";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="font-sans text-[#0f0f14] bg-white selection:bg-[#ece9fd]">
      <nav className="flex items-center justify-between px-12 py-5 border-b border-[#e6e6ef]">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-xl">XVORA</span>
        </div>
        <ul className="flex gap-11 list-none m-0 p-0 text-sm font-medium text-[#6b7280]">
          <li><a href="#" className="text-[#0f0f14] font-semibold">Home</a></li>
          <li><a href="#how-it-works" className="hover:text-[#0f0f14]">How it works</a></li>
          <li><a href="#faq" className="hover:text-[#0f0f14]">FAQ</a></li>
        </ul>
        <button onClick={onStart} className="bg-[#403690] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#332a73] transition-all cursor-pointer">
          Sign-In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center gap-10 px-12 py-20 max-w-[1440px] mx-auto flex-wrap">
        <div className="flex-1 min-w-[320px] max-w-[600px]">
          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.12] mb-5">
            Great ideas fail when founders don't know what to do next.
          </h1>
          <p className="text-lg text-[#6b7280] leading-relaxed mb-8">
            Xvora researches your competitors, analyzes your market, and tells you exactly where your startup can win—in minutes.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={onStart} 
              className="bg-[#403690] text-white px-7 py-3.5 font-semibold hover:bg-[#332a73] transition-all shadow-md cursor-pointer"
            >
              Analyze My Startup
            </button>
            <button 
              onClick={onStart} 
              className="bg-white text-[#0f0f14] border-1.5 border-[#403690] px-7 py-3.5 font-semibold hover:bg-[#ece9fd] transition-all cursor-pointer"
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="max-w-[1120px] mx-auto my-20 bg-[#ece9fd] rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-extrabold mb-3">Ready to stop guessing?</h2>
        <p className="text-base text-[#514c78] mb-6">Get your personalized Startup Brief today.</p>
        <button 
          onClick={onStart} 
          className="bg-[#403690] text-white px-7 py-3.5 font-semibold hover:bg-[#332a73] transition-all shadow-md cursor-pointer"
        >
          Analyze My Startup &rarr;
        </button>
      </section>
    </div>
  );
}
