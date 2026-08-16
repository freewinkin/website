import React from "react";
import "./StartupBrief.css";
import type { OnboardingData } from "./XvoraOnboarding";

interface StartupBriefProps {
  data?: OnboardingData;
  onBack?: () => void;
}

/* ---------- tiny inline icon set (no external deps) ---------- */
const Icon = {
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6M3 22v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L21 8M3 16l2.64 2.36A9 9 0 0 0 20.49 15" /></svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
  ),
  chevronDown: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /></svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17v5M9 10.76a2 2 0 0 1 1.11-1.79l1.78-.9a2 2 0 0 1 1.78 0l4.79 2.4a1 1 0 0 1 0 1.79l-1.78.89a2 2 0 0 0-1.11 1.79V17H9v-2.06a2 2 0 0 0-.79-1.6l-2.2-1.65a1 1 0 0 1 .18-1.72Z" /></svg>
  ),
  purse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10h18l-1.5 9.5a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 10Z" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" /></svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  task: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 2 2 4-4" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" /></svg>
  ),
  help: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.67-2.5 2-2.5 3.5" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8 13 13.7l-4-4L3 16" /></svg>
  ),
};

export default function StartupBrief({ data, onBack }: StartupBriefProps) {
  const startupName = data?.startupName?.trim() || "Xvora";
  const generatedDate = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const generatedTime = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  const navItems = [
    { label: "Startup Brief", icon: Icon.doc, active: true },
    { label: "Market Research", icon: Icon.search, active: false },
    { label: "Competitors", icon: Icon.chart, active: false },
    { label: "Customers", icon: Icon.users, active: false },
    { label: "Go-to-Market", icon: Icon.rocket, active: false },
    { label: "Tasks", icon: Icon.task, active: false },
    { label: "Documents", icon: Icon.doc, active: false },
  ];

  const advantages = [
    { icon: Icon.sparkle, label: "AI-native workflow", sub: "Built for speed and automation" },
    { icon: Icon.rocket, label: "Faster research", sub: "Deliver insights in minutes" },
    { icon: Icon.users, label: "Founder-first approach", sub: "Solving real founder problems" },
  ];

  const nextStepsLeft = [
    "Validate your ICP with 10-15 founder interviews",
    "Build a landing page & test core messaging",
    "Run pricing survey to find the right positioning",
  ];
  const nextStepsRight = [
    "Develop MVP focusing on core AI workflow",
    "Launch & acquire your first 50 early users",
  ];

  const immediateActions = [
    "Interview 10 potential users",
    "Build landing page & collect waitlist signups",
    "Validate pricing assumptions",
  ];

  return (
    <div className="sb-page">
      <div className="sb-shell">
        {/* ============ LEFT SIDEBAR ============ */}
        <aside className="sb-sidebar">
          <div className="sb-sidebar-top">
            <div className="sb-logo" onClick={onBack}>
              <span className="sb-logo-x">X</span>
              <span className="sb-logo-word">XVORA</span>
            </div>

            <div className="sb-workspace">
              <div className="sb-workspace-badge">X</div>
              <div className="sb-workspace-text">
                <p className="sb-workspace-name">{startupName}</p>
                <p className="sb-workspace-sub">AI Market Intelligence</p>
              </div>
              <span className="sb-workspace-chevron">{Icon.chevronDown}</span>
            </div>

            <nav className="sb-nav">
              {navItems.map((item) => (
                <div key={item.label} className={`sb-nav-item ${item.active ? "active" : ""}`}>
                  <span className="sb-nav-icon">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          <div className="sb-sidebar-bottom">
            <div className="sb-nav-item sb-nav-secondary">
              <span className="sb-nav-icon">{Icon.settings}</span>
              Settings
            </div>
            <div className="sb-nav-item sb-nav-secondary">
              <span className="sb-nav-icon">{Icon.help}</span>
              Help &amp; Support
            </div>

            <div className="sb-profile">
              <div className="sb-profile-avatar">A</div>
              <div className="sb-profile-text">
                <p className="sb-profile-name">Alex Johnson</p>
                <p className="sb-profile-role">alex@xvora.com</p>
              </div>
              <span className="sb-workspace-chevron">{Icon.chevronDown}</span>
            </div>
          </div>
        </aside>

        {/* ============ MAIN CONTENT ============ */}
        <main className="sb-main">
          <header className="sb-header">
            <div>
              <h1>Startup Brief</h1>
              <p className="sb-subtitle">Your AI-generated startup intelligence at a glance.</p>
            </div>
            <div className="sb-header-actions">
              <span className="sb-generated-date">Generated on {generatedDate} at {generatedTime}</span>
              <button className="sb-btn-secondary">
                {Icon.refresh}
                Regenerate Brief
              </button>
              <button className="sb-btn-primary">
                {Icon.download}
                Export
                {Icon.chevronDown}
              </button>
            </div>
          </header>

          {/* SECTION 1 — EXECUTIVE SUMMARY */}
          <section className="sb-card">
            <div className="sb-section-head">
              <span className="sb-section-num">1</span>
              <div>
                <p className="sb-section-title">Executive Summary</p>
                <p className="sb-section-question">Should I continue building this?</p>
              </div>
              <div className="sb-deco">
                <svg viewBox="0 0 140 60" className="sb-deco-hills">
                  <path d="M0 60 L20 30 L40 45 L58 15 L78 40 L100 20 L120 42 L140 30 L140 60 Z" fill="#ece9fd" />
                </svg>
                <svg viewBox="0 0 36 36" className="sb-deco-ring">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#ece9fd" strokeWidth="6" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#403690" strokeWidth="6" strokeDasharray="88" strokeDashoffset="55" strokeLinecap="round" transform="rotate(-90 18 18)" />
                </svg>
              </div>
            </div>

            <div className="sb-exec-box">
              <div className="sb-grade-block">
                <p className="sb-block-label">Overall Grade</p>
                <div className="sb-grade">A-</div>
                <p className="sb-grade-title">Strong potential</p>
                <p className="sb-grade-sub">High fit for SMB founders</p>
              </div>
              <div className="sb-divider" />
              <div className="sb-exec-point">
                <p className="sb-block-label"><span className="sb-inline-icon sb-icon-purple">{Icon.rocket}</span>Biggest Opportunity</p>
                <p className="sb-point-text">Rising demand for AI research tools among SMBs looking to make data-driven decisions.</p>
              </div>
              <div className="sb-divider" />
              <div className="sb-exec-point">
                <p className="sb-block-label"><span className="sb-inline-icon sb-icon-amber">{Icon.warning}</span>Biggest Risk</p>
                <p className="sb-point-text">Dense competition in the market. Need sharp differentiation.</p>
              </div>
              <div className="sb-divider" />
              <div className="sb-market-block">
                <p className="sb-block-label">Market Potential</p>
                <div className="sb-market-row">
                  <span className="sb-market-tag">TAM</span>
                  <div className="sb-bar-track"><div className="sb-bar-fill" style={{ width: "100%" }} /></div>
                  <div className="sb-market-figures">
                    <span className="sb-market-value">$18.2B</span>
                    <span className="sb-market-note">Total available market</span>
                  </div>
                </div>
                <div className="sb-market-row">
                  <span className="sb-market-tag">SAM</span>
                  <div className="sb-bar-track"><div className="sb-bar-fill" style={{ width: "40%" }} /></div>
                  <div className="sb-market-figures">
                    <span className="sb-market-value">$2.4B</span>
                    <span className="sb-market-note">13% of TAM</span>
                  </div>
                </div>
                <div className="sb-market-row">
                  <span className="sb-market-tag">SOM</span>
                  <div className="sb-bar-track"><div className="sb-bar-fill" style={{ width: "12%" }} /></div>
                  <div className="sb-market-figures">
                    <span className="sb-market-value">$48M</span>
                    <span className="sb-market-note">Realistic 3-year capture</span>
                  </div>
                </div>
              </div>
            </div>

            <a className="sb-view-link" href="#">View full executive summary {Icon.arrowRight}</a>
          </section>

          {/* SECTION 2 — COMPETITOR & RISK RADAR */}
          <section className="sb-card">
            <div className="sb-section-head">
              <span className="sb-section-num">2</span>
              <div>
                <p className="sb-section-title">Competitor &amp; Risk Radar</p>
                <p className="sb-section-question">Can I compete?</p>
              </div>
            </div>

            <div className="sb-density-block">
              <div className="sb-competition-top">
                <span className="sb-inline-title">Market Density</span>
                <span className="sb-competition-pct">68% · Competitive</span>
              </div>
              <div className="sb-bar-track"><div className="sb-bar-fill sb-bar-fill-amber" style={{ width: "68%" }} /></div>
              <div className="sb-density-scale">
                <span>Niche</span>
                <span>Overcrowded</span>
              </div>
            </div>

            <div className="sb-radar-grid">
              <div className="sb-radar-left">
                <p className="sb-block-label">Top Competitors</p>
                <div className="sb-competitor-row">
                  <div className="sb-competitor-card">
                    <span className="sb-avatar-circle">F</span>
                    <div>
                      <p className="sb-competitor-name">Forrester</p>
                      <p className="sb-competitor-sub">Enterprise</p>
                    </div>
                  </div>
                  <div className="sb-competitor-card">
                    <span className="sb-avatar-circle">CB</span>
                    <div>
                      <p className="sb-competitor-name">CB Insights</p>
                      <p className="sb-competitor-sub">Data-heavy</p>
                    </div>
                  </div>
                  <div className="sb-competitor-card">
                    <span className="sb-avatar-circle sb-avatar-plus">+3</span>
                    <div>
                      <p className="sb-competitor-name">niche players</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sb-radar-right">
                <p className="sb-block-label">Top Actionable Risks</p>
                <div className="sb-chip-row">
                  <div className="sb-chip sb-chip-red">
                    <span className="sb-chip-icon">{Icon.pin}</span>
                    Differentiate via UX
                  </div>
                  <div className="sb-chip sb-chip-amber">
                    <span className="sb-chip-icon">{Icon.purse}</span>
                    CAC may be high
                  </div>
                  <div className="sb-chip sb-chip-green">
                    <span className="sb-chip-icon">{Icon.check}</span>
                    AI moat is defendable
                  </div>
                </div>
              </div>
            </div>

            <a className="sb-view-link" href="#">View full competitor analysis {Icon.arrowRight}</a>
          </section>

          {/* SECTION 3 — WHY YOU CAN WIN */}
          <section className="sb-card">
            <div className="sb-section-head">
              <span className="sb-section-num">3</span>
              <div>
                <p className="sb-section-title">Why You Can Win</p>
                <p className="sb-section-question">Why does this startup have a chance?</p>
              </div>
            </div>

            <div className="sb-win-grid">
              <div className="sb-advantages">
                {advantages.map((a) => (
                  <div className="sb-advantage-row" key={a.label}>
                    <span className="sb-advantage-icon">{a.icon}</span>
                    <div className="sb-advantage-text">
                      <p className="sb-advantage-label">{a.label}</p>
                      <p className="sb-advantage-sub">{a.sub}</p>
                    </div>
                    <span className="sb-strong-pill">Strong</span>
                  </div>
                ))}
              </div>

              <div className="sb-insight-box">
                <p className="sb-insight-label">{Icon.sparkle} Xvora Insight</p>
                <p className="sb-insight-text">
                  Become the default decision engine for founders, not just another research tool.
                  Niche down to bootstrapped SaaS to cut through the noise.
                </p>
                <a className="sb-insight-link" href="#">Read the strategic deep-dive {Icon.arrowRight}</a>
              </div>
            </div>

            <a className="sb-view-link" href="#">See why these advantages matter {Icon.arrowRight}</a>
          </section>

          {/* SECTION 4 — RECOMMENDED NEXT STEPS */}
          <section className="sb-card">
            <div className="sb-section-head">
              <span className="sb-section-num">4</span>
              <div>
                <p className="sb-section-title">Recommended Next Steps</p>
                <p className="sb-section-question">What should I do tomorrow?</p>
              </div>
            </div>

            <div className="sb-steps-grid">
              <div className="sb-steps-columns">
                <ol className="sb-steps-list" start={1}>
                  {nextStepsLeft.map((step, idx) => (
                    <li key={idx} className="sb-step-row">
                      <span className="sb-step-num">{idx + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <ol className="sb-steps-list" start={4}>
                  {nextStepsRight.map((step, idx) => (
                    <li key={idx} className="sb-step-row">
                      <span className="sb-step-num">{idx + 4}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="sb-immediate-box">
                <p className="sb-immediate-title">
                  <span className="sb-inline-icon sb-icon-purple">{Icon.target}</span>
                  Top 3 Immediate Actions
                </p>
                {immediateActions.map((action, idx) => (
                  <div key={idx} className="sb-immediate-row">
                    <span className="sb-immediate-num">{idx + 1}</span>
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

            <a className="sb-view-link" href="#">View full action plan {Icon.arrowRight}</a>
          </section>
        </main>
      </div>
    </div>
  );
}
