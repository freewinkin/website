import React from "react";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div style={{ fontFamily: "Geist, sans-serif", color: "#101828", background: "#FAFBFD", minHeight: "100vh" }}>
      <style>{`
        :root{
          --ink:#101828;
          --muted:#667085;
          --line:#E8EAF2;
          --purple:#6D5DF6;
          --purple-dark:#5847e4;
          --purple-soft:#ece9fd;
          --bg:#FAFBFD;
        }
        *{box-sizing:border-box;}
        html,body{margin:0;padding:0;}

        /* ===== Nav ===== */
        .navbar{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:20px 48px;
          border-bottom:1px solid var(--line);
          background: #FFFFFF;
        }
        .brand{display:flex;align-items:center;}
        .brand-logo{height:32px;width:auto;display:block;}
        .nav-links{display:flex;gap:44px;list-style:none;margin:0;padding:0;}
        .nav-links a{text-decoration:none;color:var(--muted);font-size:15px;font-weight:500;}
        .nav-links a.active{color:var(--ink);font-weight:600;}
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

        /* ===== Hero ===== */
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
        .hero-copy p{font-size:17px;line-height:1.6;color:var(--muted);margin:0 0 34px 0;max-width:520px;}
        .hero-actions{display:flex;gap:14px;}
        .btn-primary{
          background:var(--purple);
          color:#fff;
          border:none;
          padding:14px 26px;
          border-radius:8px;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
        }
        .btn-primary:hover{background:var(--purple-dark);}
        .btn-secondary{
          background:#FFFFFF;
          color:var(--ink);
          border:1.5px solid var(--purple);
          padding:14px 26px;
          border-radius:8px;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
        }
        .btn-secondary:hover{background:var(--purple-soft);}

        /* ===== Diagram ===== */
        .hero-diagram{
          flex:1 1 420px;
          min-width:340px;
          background:#FFFFFF;
          border:1px solid var(--line);
          border-radius:16px;
          padding:clamp(16px,3vw,40px);
          position:relative;
          min-height:420px;
        }
        .diagram-canvas{position:relative;width:100%;max-width:640px;aspect-ratio:640/520;margin:0 auto;}
        .node{
          position:absolute;
          background:#FFFFFF;
          border:1px solid var(--line);
          border-radius:12px;
          box-shadow:0 4px 18px rgba(11,16,32,0.06);
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
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
          background:var(--purple-soft);
        }
        .node span.label{font-size:clamp(11px,2.3vw,15px);font-weight:600;color:var(--ink);white-space:nowrap;}
        .node svg{width:60%;height:60%;}

        .node-idea{top:0%;left:50%;transform:translateX(-50%);}
        .node-center{
          top:28.85%;left:50%;transform:translateX(-50%);
          width:15.6%;aspect-ratio:1/1;
          justify-content:center;padding:0;
        }
        .node-center .x-mark{
          font-size:clamp(18px,4.5vw,38px);
          font-weight:800;
          color:#0B1020;
        }
        .node-market{top:55.8%;left:0%;}
        .node-competitor{top:55.8%;right:0%;}
        .node-opportunities{top:82.7%;left:14%;}
        .node-nextsteps{top:82.7%;right:14%;}

        .connectors{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;}
        .connectors path{fill:none;stroke:var(--line);stroke-width:2;}
        .connectors circle{fill:var(--purple);}

        section{max-width:1200px;margin:0 auto;padding:0 48px;}
        .accent{color:var(--purple);}

        /* ---------- Features ---------- */
        .features{padding-top:40px;padding-bottom:20px;}
        .features-head{max-width:640px;margin:0 auto 90px;text-align:center;}
        .features-head h2{font-size:30px;font-weight:800;margin:0 0 14px;color:#0B1020;}
        .features-head p{font-size:15px;line-height:1.7;color:var(--muted);margin:0;}

        .feature-row{display:flex;align-items:center;gap:64px;margin-bottom:110px;}
        .feature-row.reverse{flex-direction:row-reverse;}
        .feature-text{flex:1 1 320px;}
        .feature-text h3{font-size:22px;font-weight:700;color:var(--purple);margin:0 0 16px;}
        .feature-text p{font-size:15px;line-height:1.7;color:var(--ink);margin:0 0 12px;max-width:360px;}
        .feature-visual{flex:1 1 340px;display:flex;justify-content:center;}

        .sticky-note{
          position:relative;
          width:100%;max-width:360px;aspect-ratio:4/3;
          background:#FFFFFF;border:1px solid var(--line);
          border-radius:4px;box-shadow:0 18px 34px rgba(11,16,32,0.08);
          padding:26px 24px;transform:rotate(-2deg);
        }
        .sticky-note .note-title{font-size:19px;font-weight:700;color:var(--ink);margin:14px 0 16px;}
        .sticky-note .note-sub{font-size:14px;color:var(--muted);margin:2px 0;}
        .sticky-note .note-circle{
          display:inline-block;margin-top:10px;padding:4px 16px;
          border:2px solid var(--purple);border-radius:50%;
          font-size:14px;font-weight:700;color:var(--purple);
        }

        /* ---------- Startup Brief ---------- */
        .brief-section{padding:60px 48px 40px;text-align:center;}
        .brief-section h2{font-size:28px;font-weight:800;margin:0 0 8px;color:#0B1020;}
        .brief-section .subtext{font-size:14px;color:var(--muted);margin:0 0 56px;}

        .brief-outer{position:relative;max-width:640px;margin:60px auto 50px;}
        .brief-shadow{position:absolute;inset:0;top:14px;left:14px;background:#0B1020;border-radius:22px;z-index:0;}
        .brief-window{position:relative;z-index:1;background:#FFFFFF;border:1px solid var(--line);border-radius:22px;text-align:left;}
        .brief-tab{
          position:absolute;top:-20px;left:26px;z-index:2;
          display:flex;align-items:center;gap:7px;
          background:#0B1020;color:#fff;border-radius:24px;
          padding:8px 18px;font-size:13px;font-weight:700;
        }
        .brief-card{padding:44px 34px 26px;}
        .brief-card h3{font-size:21px;font-weight:800;margin:0 0 6px;color:#0B1020;}
        .brief-card .brief-sub{font-size:14px;color:var(--muted);margin:0 0 26px;}
        .brief-list{list-style:none;margin:0;padding:0;}
        .brief-list li{display:flex;align-items:center;gap:14px;padding:14px 0;border-top:1px solid var(--line);}
        .brief-icon{width:38px;height:38px;border-radius:8px;background:var(--purple-soft);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .brief-item-text strong{display:block;font-size:14.5px;font-weight:700;color:#0B1020;}
        .brief-item-text span{display:block;font-size:13px;color:var(--muted);}
        .brief-cta{text-align:center;}

        /* ---------- How it works & FAQ ---------- */
        .steps-section{padding:60px 48px 40px;text-align:center;}
        .steps-section .eyebrow{font-size:12px;font-weight:700;letter-spacing:0.08em;color:var(--purple);margin:0 0 10px;}
        .steps-section h2{font-size:26px;font-weight:800;margin:0 0 48px;color:#0B1020;}
        .steps-row{display:flex;align-items:flex-start;justify-content:center;gap:20px;flex-wrap:wrap;}
        .step-card{flex:1 1 240px;max-width:280px;text-align:left;background:#FFFFFF;border:1px solid var(--line);border-radius:14px;padding:26px 22px;}
        
        .faq-section{padding:60px 48px 60px;text-align:center;}
        .faq-section h2{font-size:26px;font-weight:800;margin:0 0 8px;color:#0B1020;}
        .faq-list{max-width:680px;margin:0 auto;text-align:left;border-top:1px solid var(--line);}
        .faq-item{border-bottom:1px solid var(--line);}
        .faq-item summary{list-style:none;display:flex;align-items:center;justify-content:space-between;padding:18px 4px;font-size:14.5px;font-weight:600;cursor:pointer;color:#0B1020;}
        .faq-item p{margin:0 4px 20px;font-size:13.5px;line-height:1.7;color:var(--muted);}

        /* ---------- CTA Band & Footer ---------- */
        .cta-band{max-width:1120px;margin:20px auto 70px;background:var(--purple-soft);border-radius:18px;padding:48px 32px;text-align:center;}
        .cta-band h2{font-size:24px;font-weight:800;margin:0 0 8px;color:#0B1020;}
        .cta-band p{font-size:14.5px;color:var(--muted);margin:0 0 26px;}

        .site-footer{border-top:1px solid var(--line);padding:48px;background:#FFFFFF;}
        .footer-top{max-width:1200px;margin:0 auto 32px;display:flex;flex-wrap:wrap;gap:40px;justify-content:space-between;}
        .footer-brand p{font-size:13px;line-height:1.6;color:var(--muted);margin:0;}
        .footer-col h5{font-size:13px;font-weight:700;margin:0 0 14px;color:#0B1020;}
        .footer-col a{display:block;font-size:13.5px;color:var(--muted);text-decoration:none;margin-bottom:10px;}
        .footer-bottom{max-width:1200px;margin:0 auto;padding-top:24px;border-top:1px solid var(--line);display:flex;justify-content:space-between;color:var(--muted);font-size:12.5px;}

        @media (max-width:760px){
          .navbar{padding:16px 20px;}
          .nav-links{display:none;}
          .hero{flex-direction:column;padding:48px 20px;}
          .feature-row,.feature-row.reverse{flex-direction:column;gap:28px;}
        }
      `}</style>

      <nav className="navbar">
        <div className="brand">
          <img src="logo.png" alt="Xvora" className="brand-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#features">Features</a></li>
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

            <div className="node node-center">
              <span className="x-mark">X</span>
            </div>

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

      {/* FEATURES SECTION */}
      <section className="features" id="features">
        <div className="features-head">
          <h2>Built for <span className="accent">Founders</span> who are tired of <span className="accent">guessing</span>.</h2>
          <p>If you're a founder struggling to understand your market or unsure what to do next, you're in the right place. Xvora gives you the clarity to move forward with confidence.</p>
        </div>

        <div className="feature-row">
          <div className="feature-text">
            <h3>Market Validation</h3>
            <p>Don't know if your market is worth entering?</p>
            <p>We'll help you understand market demand before you invest months building.</p>
          </div>
          <div className="feature-visual">
            <div className="sticky-note">
              <p className="note-title">Worth entering this market?</p>
              <p className="note-sub">&bull; Demand?</p>
              <p className="note-sub">&bull; Competition?</p>
              <span className="note-circle">Need validation.</span>
            </div>
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-text">
            <h3>Competitive Landscape</h3>
            <p>Can't figure out who your competitors are?</p>
            <p>Identify direct and indirect competitors, compare positioning, and uncover gaps they're leaving behind.</p>
          </div>
          <div className="feature-visual">
            <div className="sticky-note">
              <p className="note-title">Who are my competitors?</p>
              <p className="note-sub">Direct? Indirect?</p>
              <p className="note-sub">Where's the gap?</p>
            </div>
          </div>
        </div>

        <div className="feature-row">
          <div className="feature-text">
            <h3>Decision Making</h3>
            <p>Overwhelmed by too many decisions?</p>
            <p>Stop jumping between ideas. Xvora helps you prioritize the next move with confidence.</p>
          </div>
          <div className="feature-visual">
            <div className="sticky-note">
              <p className="note-title">Too many decisions.</p>
              <span className="note-circle">What should I focus on?</span>
            </div>
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-text">
            <h3>Strategy</h3>
            <p>Unsure what to do next?</p>
            <p>Every insight ends with a clear recommendation so you're never left wondering what comes next.</p>
          </div>
          <div className="feature-visual">
            <div className="sticky-note">
              <p className="note-title">What do I do next?</p>
              <p className="note-sub">&bull; Plan? &bull; Build? &bull; Launch?</p>
              <span className="note-circle">Need a clear next step.</span>
            </div>
          </div>
        </div>
      </section>

      {/* STARTUP BRIEF SECTION */}
      <section className="brief-section">
        <h2>What You'll Walk Away With</h2>
        <p className="subtext">One analysis, Complete clarity.</p>

        <div className="brief-outer">
          <div className="brief-shadow"></div>
          <div className="brief-window">
            <div className="brief-tab">Xvora Analysis</div>
            <div className="brief-card">
              <h3>Your Startup Brief</h3>
              <p className="brief-sub">Everything you need to move forward with confidence.</p>
              <ul className="brief-list">
                <li>
                  <div className="brief-icon">📊</div>
                  <div className="brief-item-text"><strong>Market Validation</strong><span>Know if your market is worth entering.</span></div>
                </li>
                <li>
                  <div className="brief-icon">🎯</div>
                  <div className="brief-item-text"><strong>Competitor Landscape</strong><span>Understand who you are really competing with.</span></div>
                </li>
                <li>
                  <div className="brief-icon">🚀</div>
                  <div className="brief-item-text"><strong>Growth opportunity</strong><span>Discover gaps and untapped opportunities.</span></div>
                </li>
                <li>
                  <div className="brief-icon">📈</div>
                  <div className="brief-item-text"><strong>Positioning Strategy</strong><span>See where you fit and how you can win.</span></div>
                </li>
                <li>
                  <div className="brief-icon">✅</div>
                  <div className="brief-item-text"><strong>Recommended next steps</strong><span>Get one clear, prioritized action to take next.</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="brief-cta">
          <button onClick={onStart} className="btn-primary">Analyze My Startup</button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps-section" id="how-it-works">
        <p className="eyebrow">HOW XVORA WORKS</p>
        <h2>From idea to clarity in 3 simple steps.</h2>
        <div className="steps-row">
          <div className="step-card">
            <span className="step-num">01</span>
            <h4>Tell us about your startup</h4>
            <p>Share your idea, target audience, and what you're building.</p>
          </div>
          <div className="step-card">
            <span className="step-num">02</span>
            <h4>Xvora researches your market</h4>
            <p>Our AI analyzes the market, competitors, and opportunities behind the scenes.</p>
          </div>
          <div className="step-card">
            <span className="step-num">03</span>
            <h4>Get your Startup Brief</h4>
            <p>Receive a personalized strategy with clear insights and next steps.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" id="faq">
        <h2>FAQ</h2>
        <p style={{ color: "var(--muted)", marginBottom: "40px" }}>Everything you need to know before analyzing your startup.</p>
        <div className="faq-list">
          <details className="faq-item">
            <summary>What exactly does Xvora analyze?<span>+</span></summary>
            <p>Xvora researches your market, identifies your competitors, uncovers opportunities, and creates a personalized strategy so you know exactly what to do next.</p>
          </details>
          <details className="faq-item">
            <summary>Who is Xvora built for?<span>+</span></summary>
            <p>Xvora is designed for solo founders, first-time founders, indie hackers, and small teams who want to validate ideas before spending months building.</p>
          </details>
          <details className="faq-item">
            <summary>How long does an analysis take?<span>+</span></summary>
            <p>Most analyses are completed within a few minutes.</p>
          </details>
          <details className="faq-item">
            <summary>What makes Xvora different from ChatGPT?<span>+</span></summary>
            <p>ChatGPT answers questions. Xvora continuously researches your market, remembers your startup, and turns scattered information into one clear strategy tailored to your business.</p>
          </details>
          <details className="faq-item">
            <summary>Is my startup information private?<span>+</span></summary>
            <p>Yes. Your ideas and analysis remain private and are never shared with other users.</p>
          </details>
          <details className="faq-item">
            <summary>What do I receive after the analysis?<span>+</span></summary>
            <p>You'll receive a personalized Startup Brief with market validation, competitor insights, opportunity mapping, positioning recommendations, and clear next steps.</p>
          </details>
          <details className="faq-item">
            <summary>Will my Startup Brief change over time?<span>+</span></summary>
            <p>Yes. As markets evolve and competitors change, Xvora can continue researching and keep your Startup Brief up to date.</p>
          </details>
        </div>
      </section>

      {/* CTA BAND */}
      <section>
        <div className="cta-band">
          <h2>Ready to stop guessing?</h2>
          <p>Get your personalized Startup Brief today.</p>
          <button onClick={onStart} className="btn-primary">Analyze My Startup &rarr;</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <p>Great ideas deserve better decisions.<br />Research deeply. Present simply.</p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <a href="#">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Xvora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
