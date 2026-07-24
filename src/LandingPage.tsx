import React from "react";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div style={{ fontFamily: "Geist, sans-serif", color: "#101828", background: "#FAFBFD", minHeight: "100vh" }}>
      <style>{`
        *{box-sizing:border-box;}
        body{margin:0;padding:0;}
        .navbar{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:20px 48px;
          border-bottom:1px solid #E8EAF2;
          background: #FFFFFF;
        }
        .brand-logo{height:32px;width:auto;display:block;}
        .nav-links{display:flex;gap:44px;list-style:none;margin:0;padding:0;}
        .nav-links a{text-decoration:none;color:#667085;font-size:15px;font-weight:500;}
        .nav-links a.active{color:#101828;font-weight:600;}
        .signin-btn{
          background:#6D5DF6;
          color:#fff;
          border:none;
          padding:10px 22px;
          border-radius:8px;
          font-size:14px;
          font-weight:600;
          cursor:pointer;
        }
        .signin-btn:hover{background:#5847e4;}
        .hero{
          display:flex;
          align-items:center;
          gap:40px;
          padding:80px 48px;
          max-width:1440px;
          margin:0 auto;
        }
        .hero-copy{flex:1 1 380px;min-width:320px;max-width:600px;}
        .hero-copy h1{font-size:48px;line-height:1.12;font-weight:800;letter-spacing:-0.02em;margin:0 0 22px 0;color:#0B1020;}
        .hero-copy p{font-size:17px;line-height:1.6;color:#667085;margin:0 0 34px 0;max-width:520px;}
        .hero-actions{display:flex;gap:14px;}
        .btn-primary{
          background:#6D5DF6;
          color:#fff;
          border:none;
          padding:14px 26px;
          border-radius:8px;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
        }
        .btn-primary:hover{background:#5847e4;}
        .btn-secondary{
          background:#FFFFFF;
          color:#0B1020;
          border:1.5px solid #6D5DF6;
          padding:14px 26px;
          border-radius:8px;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
        }
        .btn-secondary:hover{background:#FAFBFD;}
        .hero-diagram{
          flex:1 1 420px;
          min-width:340px;
          background:#FFFFFF;
          border:1px solid #E8EAF2;
          border-radius:16px;
          padding:40px;
          position:relative;
          min-height:420px;
        }
        .diagram-canvas{position:relative;width:100%;max-width:640px;aspect-ratio:640/520;margin:0 auto;}
        .node{
          position:absolute;
          background:#FFFFFF;
          border:1px solid #E8EAF2;
          border-radius:12px;
          box-shadow:0 4px 18px rgba(11,16,32,0.06);
          display:flex;
          align-items:center;
          gap:12px;
          padding:12px 18px;
        }
        .node .icon-wrap{
          width:36px;height:36px;
          border-radius:8px;
          display:flex;align-items:center;justify-content:center;
          background:#FAFBFD;
        }
        .node span.label{font-size:14px;font-weight:600;color:#0B1020;}
        .node-idea{top:0%;left:50%;transform:translateX(-50%);}
        .node-center{
          top:28.85%;left:50%;transform:translateX(-50%);
          width:15.6%;aspect-ratio:1/1;
          justify-content:center;padding:0;
          background:#0B1020;color:white;border-radius:50%;font-size:24px;font-weight:800;align-items:center;display:flex;
        }
        .node-market{top:55.8%;left:0%;}
        .node-competitor{top:55.8%;right:0%;}
        .node-opportunities{top:82.7%;left:14%;}
        .node-nextsteps{top:82.7%;right:14%;}
        .connectors{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;}
        .connectors path{fill:none;stroke:#E8EAF2;stroke-width:2;}
        .connectors circle{fill:#6D5DF6;}
        section{max-width:1200px;margin:0 auto;padding:0 48px;}
        .accent{color:#6D5DF6;}
        .brief-section{padding:60px 48px 40px;text-align:center;}
        .brief-outer{position:relative;max-width:640px;margin:60px auto 50px;}
        .brief-shadow{position:absolute;inset:0;top:14px;left:14px;background:#0B1020;border-radius:22px;z-index:0;}
        .brief-window{position:relative;z-index:1;background:#FFFFFF;border:1px solid #E8EAF2;border-radius:22px;text-align:left;}
        .brief-tab{position:absolute;top:-20px;left:26px;z-index:2;display:flex;align-items:center;gap:7px;background:#0B1020;color:#fff;border-radius:24px;padding:8px 18px;font-size:13px;font-weight:700;}
        .brief-card{padding:44px 34px 26px;}
        .site-footer{border-top:1px solid #E8EAF2;padding:48px;background:#FFFFFF;text-align:center;color:#98A2B3;font-size:13px;}
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
              <div className="icon-wrap">💡</div>
              <span className="label">Your Startup Idea</span>
            </div>

            <div className="node node-center">X</div>

            <div className="node node-market">
              <div className="icon-wrap">📊</div>
              <span className="label">Market Analysis</span>
            </div>

            <div className="node node-competitor">
              <div className="icon-wrap">🎯</div>
              <span className="label">Competitor Insights</span>
            </div>

            <div className="node node-opportunities">
              <div className="icon-wrap">🚀</div>
              <span className="label">Opportunities</span>
            </div>

            <div className="node node-nextsteps">
              <div className="icon-wrap">✅</div>
              <span className="label">Next Steps</span>
            </div>
          </div>
        </div>
      </section>

      <section className="brief-section">
        <h2>What You'll Walk Away With</h2>
        <p style={{ color: "#667085", fontSize: "14px" }}>One analysis, Complete clarity.</p>
        <div className="brief-outer">
          <div className="brief-shadow"></div>
          <div className="brief-window">
            <div className="brief-tab">Xvora Analysis</div>
            <div className="brief-card">
              <h3 style={{ color: "#0B1020" }}>Your Startup Brief</h3>
              <p style={{ color: "#667085", fontSize: "14px" }}>Everything you need to move forward with confidence.</p>
            </div>
          </div>
        </div>
        <button onClick={onStart} className="btn-primary">Analyze My Startup</button>
      </section>

      <footer className="site-footer">
        <p>&copy; 2026 Xvora. Great ideas deserve better decisions. Research deeply. Present simply.</p>
      </footer>
    </div>
  );
}
