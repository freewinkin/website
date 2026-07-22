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
              className="bg-white text-[#0f0f14] border-2 border-[#403690] px-7 py-3.5 font-semibold hover:bg-[#ece9fd] transition-all cursor-pointer"
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
"use client";

import React from "react";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="font-sans text-[#0f0f14] bg-white selection:bg-[#ece9fd]">
      <style>{`
        :root{
          --ink:#0f0f14;
          --muted:#6b7280;
          --line:#e6e6ef;
          --purple:#403690;
          --purple-dark:#332a73;
          --purple-soft:#ece9fd;
          --purple-icon:#403690;
          --bg:#ffffff;
        }
        .navbar{display:flex;align-items:center;justify-content:space-between;padding:20px 48px;border-bottom:1px solid var(--line);}
        .brand-logo{height:32px;width:auto;display:block;}
        .nav-links{display:flex;gap:44px;list-style:none;margin:0;padding:0;}
        .nav-links a{text-decoration:none;color:var(--muted);font-size:15px;font-weight:500;}
        .nav-links a.active{color:var(--ink);font-weight:600;}
        .signin-btn{background:var(--purple);color:#fff;border:none;padding:10px 22px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;}
        .signin-btn:hover{background:var(--purple-dark);}
        .hero{display:flex;align-items:center;gap:40px;padding:80px 48px;max-width:1440px;margin:0 auto;}
        .hero-copy{flex:1 1 380px;min-width:320px;max-width:600px;}
        .hero-copy h1{font-size:48px;line-height:1.12;font-weight:800;letter-spacing:-0.02em;margin:0 0 22px 0;}
        .hero-copy p{font-size:17px;line-height:1.6;color:var(--muted);margin:0 0 34px 0;max-width:520px;}
        .hero-actions{display:flex;gap:14px;}
        .btn-primary{background:var(--purple);color:#fff;border:none;padding:14px 26px;border-radius:0;font-size:15px;font-weight:600;cursor:pointer;}
        .btn-primary:hover{background:var(--purple-dark);}
        .btn-secondary{background:#fff;color:var(--ink);border:1.5px solid var(--purple);padding:14px 26px;border-radius:0;font-size:15px;font-weight:600;cursor:pointer;}
        .btn-secondary:hover{background:var(--purple-soft);}
        .hero-diagram{flex:1 1 420px;min-width:340px;background:#fafafd;border-radius:16px;padding:clamp(16px,3vw,40px);position:relative;min-height:420px;}
        .diagram-canvas{position:relative;width:100%;max-width:640px;aspect-ratio:640/520;margin:0 auto;}
        .node{position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 18px rgba(30,20,90,0.08);display:flex;align-items:center;gap:clamp(6px,1.5vw,12px);padding:clamp(8px,2vw,14px) clamp(10px,2.5vw,18px);max-width:78%;}
        .node .icon-wrap{width:clamp(24px,5.5vw,36px);height:clamp(24px,5.5vw,36px);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:var(--purple-soft);}
        .node span.label{font-size:clamp(11px,2.3vw,15px);font-weight:600;color:var(--ink);white-space:nowrap;}
        .node svg{width:60%;height:60%;}
        .node-idea{top:0%;left:50%;transform:translateX(-50%);}
        .node-center{top:28.85%;left:50%;transform:translateX(-50%);width:15.6%;aspect-ratio:1/1;justify-content:center;padding:0;}
        .node-center .x-mark{font-size:clamp(18px,4.5vw,38px);font-weight:800;background:linear-gradient(45deg,#0a0a0a 45%,#403690 100%);-webkit-background-clip:text;background-clip:text;color:transparent;}
        .node-market{top:55.8%;left:0%;}
        .node-competitor{top:55.8%;right:0%;}
        .node-opportunities{top:82.7%;left:14%;}
        .node-nextsteps{top:82.7%;right:14%;}
        .connectors{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;}
        .connectors path{fill:none;stroke:#c9c3f7;stroke-width:2;}
        .connectors circle{fill:var(--purple-icon);}
        section{max-width:1200px;margin:0 auto;padding:0 48px;}
        .accent{color:var(--purple);}
        .features{padding-top:40px;padding-bottom:20px;}
        .features-head{max-width:640px;margin:0 auto 90px;text-align:center;}
        .features-head h2{font-size:30px;font-weight:800;letter-spacing:-0.01em;margin:0 0 14px;}
        .features-head p{font-size:15px;line-height:1.7;color:var(--muted);margin:0;}
        .feature-row{display:flex;align-items:center;gap:64px;margin-bottom:110px;}
        .feature-row.reverse{flex-direction:row-reverse;}
        .feature-text{flex:1 1 320px;}
        .feature-text h3{font-size:22px;font-weight:700;color:var(--purple);margin:0 0 16px;}
        .feature-text p{font-size:15px;line-height:1.7;color:var(--ink);margin:0 0 12px;max-width:360px;}
        .feature-visual{flex:1 1 340px;display:flex;justify-content:center;}
        .sticky-note{position:relative;width:100%;max-width:360px;aspect-ratio:4/3;background:#fdfdfa;border-radius:4px;box-shadow:0 18px 34px rgba(20,15,50,0.12);padding:26px 24px;transform:rotate(var(--tilt,-2deg));font-family:sans-serif;}
        .sticky-note .tape{position:absolute;top:-14px;left:50%;width:90px;height:28px;background:rgba(200,200,210,0.55);border:1px solid rgba(180,180,190,0.4);transform:translateX(-50%) rotate(-3deg);}
        .sticky-note .note-title{font-size:19px;font-weight:700;color:var(--ink);line-height:1.25;margin:14px 0 16px;}
        .sticky-note .doodle{display:block;width:100%;height:auto;margin-bottom:10px;}
        .sticky-note .note-sub{font-size:14px;color:#444;margin:2px 0;line-height:1.5;}
        .sticky-note .note-circle{display:inline-block;margin-top:10px;padding:4px 16px;border:2px solid var(--purple);border-radius:50%;font-size:14px;font-weight:700;color:var(--purple);}
        .brief-section{padding:60px 48px 40px;text-align:center;}
        .brief-section h2{font-size:28px;font-weight:800;margin:0 0 8px;}
        .brief-section .subtext{font-size:14px;color:var(--muted);margin:0 0 56px;}
        .brief-outer{position:relative;max-width:640px;margin:60px auto 50px;}
        .brief-shadow{position:absolute;inset:0;top:14px;left:14px;background:#0d0d1a;border-radius:22px;z-index:0;}
        .brief-window{position:relative;z-index:1;background:#fff;border-radius:22px;box-shadow:0 4px 14px rgba(20,15,50,0.12);text-align:left;}
        .brief-tab{position:absolute;top:-20px;left:26px;z-index:2;display:flex;align-items:center;gap:7px;background:#0d0d1a;color:#fff;border-radius:24px;padding:8px 18px 8px 14px;font-size:13px;font-weight:700;}
        .brief-card{padding:44px 34px 26px;}
        .brief-card h3{font-size:21px;font-weight:800;margin:0 0 6px;}
        .brief-card .brief-sub{font-size:14px;color:var(--muted);margin:0 0 26px;}
        .brief-list{list-style:none;margin:0;padding:0;}
        .brief-list li{display:flex;align-items:center;gap:14px;padding:14px 0;border-top:1px solid var(--line);}
        .brief-list li:first-child{border-top:none;}
        .brief-icon{width:38px;height:38px;border-radius:8px;background:var(--purple-soft);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .brief-item-text strong{display:block;font-size:14.5px;font-weight:700;}
        .brief-item-text span{display:block;font-size:13px;color:var(--muted);margin-top:2px;}
        .brief-check{width:18px;height:18px;color:var(--purple);flex-shrink:0;}
        .ready-note{text-align:right;color:#8a8a95;font-size:16px;margin:18px 20px 0 0;padding-bottom:22px;}
        .brief-cta{text-align:center;}
        .steps-section{padding:60px 48px 40px;text-align:center;}
        .steps-section .eyebrow{font-size:12px;font-weight:700;letter-spacing:0.08em;color:var(--purple);margin:0 0 10px;}
        .steps-section h2{font-size:26px;font-weight:800;margin:0 0 48px;}
        .steps-row{display:flex;align-items:flex-start;justify-content:center;gap:0;flex-wrap:wrap;}
        .step-card{flex:1 1 240px;max-width:280px;text-align:left;background:#fafafd;border-radius:14px;padding:26px 22px;}
        .step-num{display:inline-block;font-size:12px;font-weight:700;color:var(--purple);background:var(--purple-soft);border-radius:20px;padding:3px 10px;margin-bottom:16px;}
        .step-icon{width:42px;height:42px;border-radius:10px;background:var(--purple-soft);display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
        .step-card h4{font-size:15.5px;font-weight:700;margin:0 0 8px;}
        .step-card p{font-size:13.5px;line-height:1.6;color:var(--muted);margin:0;}
        .step-arrow{flex:0 0 auto;align-self:center;color:#c9c3f7;font-size:20px;padding:0 14px;}
        .faq-section{padding:60px 48px 60px;text-align:center;}
        .faq-section h2{font-size:26px;font-weight:800;margin:0 0 8px;}
        .faq-section .subtext{font-size:14px;color:var(--muted);margin:0 0 40px;}
        .faq-list{max-width:680px;margin:0 auto;text-align:left;border-top:1px solid var(--line);}
        .faq-item{border-bottom:1px solid var(--line);}
        .faq-item summary{list-style:none;display:flex;align-items:center;justify-content:space-between;padding:18px 4px;font-size:14.5px;font-weight:600;cursor:pointer;}
        .faq-item .plus{font-size:18px;color:var(--purple);flex-shrink:0;margin-left:14px;}
        .faq-item[open] .plus{transform:rotate(45deg);}
        .faq-item p{margin:0 4px 20px;font-size:13.5px;line-height:1.7;color:var(--muted);}
        .cta-band{max-width:1120px;margin:20px auto 70px;background:var(--purple-soft);border-radius:18px;padding:48px 32px;text-align:center;}
        .cta-band h2{font-size:24px;font-weight:800;margin:0 0 8px;}
        .cta-band p{font-size:14.5px;color:#514c78;margin:0 0 26px;}
        .site-footer{border-top:1px solid var(--line);padding:48px 48px 28px;}
        .footer-top{max-width:1200px;margin:0 auto 32px;display:flex;flex-wrap:wrap;gap:40px;justify-content:space-between;}
        .footer-brand{flex:1 1 260px;max-width:300px;}
        .footer-brand p{font-size:13px;line-height:1.6;color:var(--muted);margin:0;}
        .footer-col h5{font-size:13px;font-weight:700;margin:0 0 14px;}
        .footer-col a{display:block;font-size:13.5px;color:var(--muted);text-decoration:none;margin-bottom:10px;}
        .footer-bottom{max-width:1200px;margin:0 auto;padding-top:24px;border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;}
        .socials{display:flex;gap:14px;}
        .socials a{color:var(--muted);display:flex;}
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <span className="font-bold text-xl tracking-tight">XVORA</span>
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button onClick={onStart} className="signin-btn">Sign-In</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-copy">
          <h1>Great ideas fail when founders don't know what to do next.</h1>
          <p>Xvora researches your competitors, analyzes your market, and tells you exactly where your startup can win&mdash;in minutes</p>
          <div className="hero-actions">
            <button onClick={onStart} className="btn-primary">Analyze My Startup</button>
            <button onClick={onStart} className="btn-secondary">View Demo</button>
          </div>
        </div>

        <div className="hero-diagram">
          <div className="diagram-canvas">
            <svg className="connectors" viewBox="0 0 640 520" preserveAspectRatio="none">
              <path d="M 320 62 L 320 150"/>
              <circle cx="320" cy="150" r="4"/>
              <path d="M 300 200 L 150 200 L 150 288"/>
              <circle cx="150" cy="288" r="4"/>
              <path d="M 340 200 L 500 200 L 500 288"/>
              <circle cx="500" cy="288" r="4"/>
              <path d="M 310 250 L 230 250 L 230 428"/>
              <circle cx="230" cy="428" r="4"/>
              <path d="M 330 250 L 420 250 L 420 428"/>
              <circle cx="420" cy="428" r="4"/>
            </svg>

            <div className="node node-idea">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
              </div>
              <span className="label">Your Startup Idea</span>
            </div>

            <div className="node node-center">
              <span className="x-mark">X</span>
            </div>

            <div className="node node-market">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
              </div>
              <span className="label">Market Analysis</span>
            </div>

            <div className="node node-competitor">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              </div>
              <span className="label">Competitor Insights</span>
            </div>

            <div className="node node-opportunities">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5A5.5 5.5 0 1 0 8.5 11.5c.8.8 1.3 1.5 1.5 2.5"/></svg>
              </div>
              <span className="label">Opportunities</span>
            </div>

            <div className="node node-nextsteps">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <span className="label">Next Steps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-head">
          <h2>Built for <span className="accent">Founders</span> who are tired of <span className="accent">guessing</span>.</h2>
          <p>If you're a founder struggling to understand your market or unsure what to do next, you're in the right place.</p>
        </div>
      </section>

      {/* Startup Brief Section */}
      <section className="brief-section">
        <h2>What You'll Walk Away With</h2>
        <p className="subtext">One analysis, Complete clarity.</p>
        <div className="brief-outer">
          <div className="brief-shadow"></div>
          <div className="brief-window">
            <div className="brief-tab"><span className="text-white font-bold">X</span> Xvora Analysis</div>
            <div className="brief-card">
              <h3>Your Startup Brief</h3>
              <p className="brief-sub">Everything you need to move forward with confidence.</p>
            </div>
          </div>
        </div>
        <div className="brief-cta">
          <button onClick={onStart} className="btn-primary">Analyze My Startup</button>
        </div>
      </section>

      {/* How it Works */}
      <section className="steps-section" id="how-it-works">
        <p className="eyebrow">HOW XVORA WORKS</p>
        <h2>From idea to clarity in 3 simple steps.</h2>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <h2>FAQ</h2>
        <p className="subtext">Everything you need to know before analyzing your startup.</p>
      </section>

      {/* CTA Band */}
      <section>
        <div className="cta-band">
          <h2>Ready to stop guessing?</h2>
          <p>Get your personalized Startup Brief today.</p>
          <button onClick={onStart} className="btn-primary">Analyze My Startup &rarr;</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <p>Great ideas deserve better decisions.<br/>Research deeply. Present simply.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
