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
        *{box-sizing:border-box;}
        html,body{margin:0;padding:0;}
        body{
          font-family:'Geist',-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
          color:var(--ink);
          background:var(--bg);
        }
        .navbar{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:20px 48px;
          border-bottom:1px solid var(--line);
        }
        .brand{
          display:flex;
          align-items:center;
        }
        .brand-logo{
          height:32px;
          width:auto;
          display:block;
        }
        .nav-links{
          display:flex;
          gap:44px;
          list-style:none;
          margin:0;
          padding:0;
        }
        .nav-links a{
          text-decoration:none;
          color:var(--muted);
          font-size:15px;
          font-weight:500;
        }
        .nav-links a.active{
          color:var(--ink);
          font-weight:600;
        }
        .signin-btn{
          background:var(--purple);
          color:#fff;
          border:none;
          padding:10px 22px;
          border-radius:8px;
          font-size:14px;
          font-weight:600;
          cursor:pointer;
        }
        .signin-btn:hover{background:var(--purple-dark);}
        .hero{
          display:flex;
          align-items:center;
          gap:40px;
          padding:60px 48px 80px 48px;
          max-width:1440px;
          margin:0 auto;
        }
        .hero-copy{
          flex:1 1 380px;
          min-width:320px;
          max-width:600px;
        }
        .hero-copy h1{
          font-size:42px;
          line-height:1.15;
          font-weight:800;
          letter-spacing:-0.02em;
          margin:0 0 20px 0;
        }
        .hero-copy p{
          font-size:16px;
          line-height:1.6;
          color:var(--muted);
          margin:0 0 28px 0;
          max-width:520px;
        }
        .hero-actions{
          display:flex;
          gap:14px;
        }
        .btn-primary{
          background:var(--purple);
          color:#fff;
          border:none;
          padding:14px 26px;
          border-radius:0;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
        }
        .btn-primary:hover{background:var(--purple-dark);}
        .btn-secondary{
          background:#fff;
          color:var(--ink);
          border:1.5px solid var(--purple);
          padding:14px 26px;
          border-radius:0;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
        }
        .btn-secondary:hover{background:var(--purple-soft);}
        .hero-diagram{
          flex:1 1 420px;
          min-width:340px;
          background:#fafafd;
          border-radius:16px;
          padding:clamp(16px,3vw,40px);
          position:relative;
          min-height:420px;
        }
        .diagram-canvas{
          position:relative;
          width:100%;
          max-width:640px;
          aspect-ratio:640/520;
          margin:0 auto;
        }
        .node{
          position:absolute;
          background:#fff;
          border-radius:12px;
          box-shadow:0 4px 18px rgba(30,20,90,0.08);
          display:flex;
          align-items:center;
          gap:clamp(6px,1.5vw,12px);
          padding:clamp(8px,2vw,14px) clamp(10px,2.5vw,18px);
          max-width:78%;
        }
        .node .icon-wrap{
          width:clamp(24px,5.5vw,36px);
          height:clamp(24px,5.5vw,36px);
          border-radius:8px;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          background:var(--purple-soft);
        }
        .node span.label{
          font-size:clamp(11px,2.3vw,15px);
          font-weight:600;
          color:var(--ink);
          white-space:nowrap;
        }
        .node svg{width:60%;height:60%;}
        .node-idea{ top:0%; left:50%; transform:translateX(-50%); }
        .node-center{
          top:28.85%; left:50%; transform:translateX(-50%);
          width:15.6%; aspect-ratio:1/1;
          justify-content:center;
          padding:0;
        }
        .node-center .x-mark{
          font-size:clamp(18px,4.5vw,38px);
          font-weight:800;
          background:linear-gradient(45deg,#0a0a0a 45%,#403690 100%);
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
        }
        .node-market{ top:55.8%; left:0%; }
        .node-competitor{ top:55.8%; right:0%; }
        .node-opportunities{ top:82.7%; left:14%; }
        .node-nextsteps{ top:82.7%; right:14%; }
        .icon-wrap.market{background:#eef0ff;}
        .icon-wrap.competitor{background:#eef0ff;}
        .icon-wrap.opportunities{background:var(--purple-soft);}
        .icon-wrap.nextsteps{background:var(--purple-soft);}
        .connectors{
          position:absolute;
          top:0; left:0;
          width:100%;
          height:100%;
          pointer-events:none;
        }
        .connectors path{
          fill:none;
          stroke:#c9c3f7;
          stroke-width:2;
        }
        .connectors circle{
          fill:var(--purple-icon);
        }
        @media (max-width:760px){
          .navbar{padding:16px 20px;}
          .nav-links{display:none;}
          .hero{flex-direction:column;padding:36px 20px;}
          .hero-copy h1{font-size:32px;}
          .hero-diagram{width:100%;}
        }
        section{max-width:1200px;margin:0 auto;padding:0 48px;}
        .accent{color:var(--purple);}
        .features{padding:30px 0 20px;}
        .features-head{max-width:640px;margin:0 auto 50px;text-align:center;}
        .features-head h2{font-size:26px;font-weight:800;letter-spacing:-0.01em;margin:0 0 12px;}
        .features-head p{font-size:15px;line-height:1.6;color:var(--muted);margin:0;}
        .brief-section{padding:50px 48px 40px;text-align:center;}
        .brief-section h2{font-size:24px;font-weight:800;margin:0 0 6px;}
        .brief-section .subtext{font-size:14px;color:var(--muted);margin:0 0 36px;}
        .brief-outer{
          position:relative;
          max-width:640px;
          margin:36px auto 36px;
        }
        .brief-shadow{
          position:absolute;
          inset:0;
          top:10px;left:10px;
          background:#0d0d1a;
          border-radius:22px;
          z-index:0;
        }
        .brief-window{
          position:relative;
          z-index:1;
          background:#fff;
          border-radius:22px;
          box-shadow:0 4px 14px rgba(20,15,50,0.12);
          text-align:left;
        }
        .brief-tab{
          position:absolute;
          top:-18px;
          left:26px;
          z-index:2;
          display:flex;
          align-items:center;
          gap:7px;
          background:#0d0d1a;
          color:#fff;
          border-radius:24px;
          padding:6px 16px 6px 12px;
          font-size:12px;
          font-weight:700;
        }
        .brief-card{padding:36px 30px 24px;}
        .brief-card h3{font-size:19px;font-weight:800;margin:0 0 4px;}
        .brief-card .brief-sub{font-size:13.5px;color:var(--muted);margin:0;}
        .brief-cta{text-align:center;margin-top:10px;}
        .steps-section{padding:50px 48px 30px;text-align:center;}
        .steps-section .eyebrow{
          font-size:11.5px;
          font-weight:700;
          letter-spacing:0.08em;
          color:var(--purple);
          margin:0 0 8px;
        }
        .steps-section h2{font-size:24px;font-weight:800;margin:0;}
        .faq-section{padding:40px 48px 40px;text-align:center;}
        .faq-section h2{font-size:24px;font-weight:800;margin:0 0 6px;}
        .faq-section .subtext{font-size:14px;color:var(--muted);margin:0;}
        .cta-band{
          max-width:1120px;
          margin:10px auto 50px;
          background:var(--purple-soft);
          border-radius:18px;
          padding:36px 28px;
          text-align:center;
        }
        .cta-band h2{font-size:22px;font-weight:800;margin:0 0 6px;}
        .cta-band p{font-size:14px;color:#514c78;margin:0 0 20px;}
        .site-footer{
          border-top:1px solid var(--line);
          padding:32px 48px 24px;
        }
        .footer-top{
          max-width:1200px;
          margin:0 auto;
          display:flex;
          flex-wrap:wrap;
          gap:40px;
          justify-content:space-between;
        }
        .footer-brand{flex:1 1 260px;max-width:300px;}
        .footer-brand p{font-size:13px;line-height:1.5;color:var(--muted);margin:0;}
      `}</style>

      <nav className="navbar">
        <div className="brand">
          <img src="logo.png" alt="Xvora" className="brand-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button onClick={onStart} className="signin-btn">Sign-In</button>
      </nav>

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
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
              </div>
              <span className="label">Your Startup Idea</span>
            </div>

            <div className="node node-center">
              <span className="x-mark">X</span>
            </div>

            <div className="node node-market">
              <div className="icon-wrap market">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
              </div>
              <span className="label">Market Analysis</span>
            </div>

            <div className="node node-competitor">
              <div className="icon-wrap competitor">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              </div>
              <span className="label">Competitor Insights</span>
            </div>

            <div className="node node-opportunities">
              <div className="icon-wrap opportunities">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5A5.5 5.5 0 1 0 8.5 11.5c.8.8 1.3 1.5 1.5 2.5"/></svg>
              </div>
              <span className="label">Opportunities</span>
            </div>

            <div className="node node-nextsteps">
              <div className="icon-wrap nextsteps">
                <svg viewBox="0 0 24 24" fill="none" stroke="#403690" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <span className="label">Next Steps</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-head">
          <h2>Built for <span className="accent">Founders</span> who are tired of <span className="accent">guessing</span>.</h2>
          <p>If you're a founder struggling to understand your market or unsure what to do next, you're in the right place.</p>
        </div>
      </section>

      <section className="brief-section">
        <h2>What You'll Walk Away With</h2>
        <p className="subtext">One analysis, Complete clarity.</p>
        <div className="brief-outer">
          <div className="brief-shadow"></div>
          <div className="brief-window">
            <div className="brief-tab"><span className="x-mark">X</span> Xvora Analysis</div>
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

      <section className="steps-section" id="how-it-works">
        <p className="eyebrow">HOW XVORA WORKS</p>
        <h2>From idea to clarity in 3 simple steps.</h2>
      </section>

      <section className="faq-section" id="faq">
        <h2>FAQ</h2>
        <p className="subtext">Everything you need to know before analyzing your startup.</p>
      </section>

      <section>
        <div className="cta-band">
          <h2>Ready to stop guessing?</h2>
          <p>Get your personalized Startup Brief today.</p>
          <button onClick={onStart} className="btn-primary">Analyze My Startup &rarr;</button>
        </div>
      </section>

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
