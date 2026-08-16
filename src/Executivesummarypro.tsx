import React from "react";
import "./ExecutiveSummaryPro.css";
import type { OnboardingData } from "./XvoraOnboarding";

interface ExecutiveSummaryProProps {
  data?: OnboardingData;
  onBack?: () => void;
}

const Icon = {
  arrowLeft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /></svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8 13 13.7l-4-4L3 16" /></svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
  ),
};

export default function ExecutiveSummaryPro({ data, onBack }: ExecutiveSummaryProProps) {
  const startupName = data?.startupName?.trim() || "Your startup";

  const subScores = [
    { label: "Market Opportunity", value: 88 },
    { label: "Team & Execution", value: 82 },
    { label: "Product Readiness", value: 75 },
    { label: "Timing", value: 90 },
    { label: "Competitive Moat", value: 70 },
    { label: "Financial Viability", value: 78 },
  ];

  const opportunities = [
    { title: "Rising SMB demand for AI research tools", impact: "High impact", confidence: "High confidence" },
    { title: "Underserved bootstrapped-SaaS segment", impact: "Medium impact", confidence: "High confidence" },
    { title: "Founders increasingly distrust generic AI chat tools", impact: "Medium impact", confidence: "Medium confidence" },
  ];

  const risks = [
    { title: "Dense competition from incumbents (Forrester, CB Insights)", severity: "High severity", mitigation: "Differentiate via UX and speed" },
    { title: "CAC may be high without a clear acquisition wedge", severity: "Medium severity", mitigation: "Lead with content & founder communities" },
    { title: "AI-native workflows are increasingly commoditized", severity: "Medium severity", mitigation: "Defend via proprietary data & workflow depth" },
  ];

  const comparables = [
    { name: "FounderPal", stage: "Series A", focus: "Idea validation", note: "Broad, generalist positioning" },
    { name: "CB Insights", stage: "Growth", focus: "Enterprise market intel", note: "Too expensive/complex for early founders" },
    { name: "Forrester", stage: "Public", focus: "Enterprise research", note: "Not built for founders at all" },
  ];

  return (
    <div className="esp-page">
      <div className="esp-shell">
        <main className="esp-main">
          <button className="esp-back" onClick={onBack}>
            {Icon.arrowLeft}
            Back to Startup Brief
          </button>

          <header className="esp-header">
            <div>
              <div className="esp-title-row">
                <h1>Executive Summary</h1>
                <span className="esp-pro-badge">{Icon.sparkle} Pro</span>
              </div>
              <p className="esp-subtitle">The full research and methodology behind {startupName}'s grade.</p>
            </div>
          </header>

          {/* UNLOCKED — grade breakdown */}
          <section className="esp-card">
            <p className="esp-section-title">Grade Breakdown</p>
            <p className="esp-section-sub">How your A- was calculated, across six weighted factors.</p>

            <div className="esp-subscore-grid">
              {subScores.map((s) => (
                <div className="esp-subscore" key={s.label}>
                  <div className="esp-subscore-top">
                    <span>{s.label}</span>
                    <span className="esp-subscore-value">{s.value}</span>
                  </div>
                  <div className="esp-bar-track">
                    <div className="esp-bar-fill" style={{ width: `${s.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LOCKED REGION */}
          <div className="esp-locked-region">
            <div className="esp-locked-content">
              {/* Opportunities & Risks */}
              <section className="esp-card">
                <p className="esp-section-title">Opportunities &amp; Risks, Ranked</p>
                <p className="esp-section-sub">Beyond the single top opportunity and risk — the full ranked list.</p>

                <div className="esp-rank-grid">
                  <div>
                    <p className="esp-rank-heading"><span className="esp-inline-icon esp-icon-purple">{Icon.rocket}</span>Opportunities</p>
                    {opportunities.map((o, idx) => (
                      <div className="esp-rank-row" key={idx}>
                        <span className="esp-rank-num">{idx + 1}</span>
                        <div>
                          <p className="esp-rank-title">{o.title}</p>
                          <div className="esp-rank-tags">
                            <span className="esp-tag esp-tag-green">{o.impact}</span>
                            <span className="esp-tag esp-tag-gray">{o.confidence}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="esp-rank-heading"><span className="esp-inline-icon esp-icon-amber">{Icon.warning}</span>Risks</p>
                    {risks.map((r, idx) => (
                      <div className="esp-rank-row" key={idx}>
                        <span className="esp-rank-num esp-rank-num-amber">{idx + 1}</span>
                        <div>
                          <p className="esp-rank-title">{r.title}</p>
                          <div className="esp-rank-tags">
                            <span className="esp-tag esp-tag-red">{r.severity}</span>
                            <span className="esp-tag esp-tag-gray">{r.mitigation}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Market sizing methodology */}
              <section className="esp-card">
                <p className="esp-section-title">Market Sizing Methodology</p>
                <p className="esp-section-sub">How TAM, SAM, and SOM were derived, and the assumptions behind each.</p>

                <div className="esp-methodology-grid">
                  <div className="esp-methodology-row">
                    <span className="esp-methodology-tag">TAM</span>
                    <div>
                      <p className="esp-methodology-value">$18.2B</p>
                      <p className="esp-methodology-note">Global market for AI-assisted business research &amp; analytics tools, sized top-down from industry reports.</p>
                    </div>
                  </div>
                  <div className="esp-methodology-row">
                    <span className="esp-methodology-tag">SAM</span>
                    <div>
                      <p className="esp-methodology-value">$2.4B</p>
                      <p className="esp-methodology-note">Early-stage founders and small teams actively seeking market/competitor research, sized bottom-up from estimated startup formation rates.</p>
                    </div>
                  </div>
                  <div className="esp-methodology-row">
                    <span className="esp-methodology-tag">SOM</span>
                    <div>
                      <p className="esp-methodology-value">$48M</p>
                      <p className="esp-methodology-note">Realistic 3-year capture assuming a 2% share of SAM, based on comparable early-stage SaaS penetration rates.</p>
                    </div>
                  </div>
                </div>

                <div className="esp-trend">
                  <p className="esp-trend-label">Search interest in "AI market research" (indexed, last 4 years)</p>
                  <svg viewBox="0 0 400 90" className="esp-trend-chart">
                    <polyline points="0,80 60,72 120,66 180,50 240,38 300,22 360,10 400,4" fill="none" stroke="#403690" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </section>

              {/* Founder-market fit */}
              <section className="esp-card">
                <p className="esp-section-title"><span className="esp-inline-icon esp-icon-purple">{Icon.users}</span>Founder-Market Fit</p>
                <p className="esp-point-text">
                  Your background and stated goals align closely with the SMB/founder segment this market opportunity depends on.
                  Xvora weighs founder-market fit as a leading indicator of execution risk — teams with direct experience in
                  their target customer's daily workflow ship faster and pivot less.
                </p>
              </section>

              {/* Comparables */}
              <section className="esp-card">
                <p className="esp-section-title">Comparable Companies</p>
                <p className="esp-section-sub">How existing players are positioned, and where the gap is.</p>

                <div className="esp-comp-table">
                  <div className="esp-comp-row esp-comp-head">
                    <span>Company</span>
                    <span>Stage</span>
                    <span>Focus</span>
                    <span>Gap Xvora exploits</span>
                  </div>
                  {comparables.map((c) => (
                    <div className="esp-comp-row" key={c.name}>
                      <span className="esp-comp-name">{c.name}</span>
                      <span>{c.stage}</span>
                      <span>{c.focus}</span>
                      <span className="esp-comp-note">{c.note}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Investor readiness + assumptions */}
              <section className="esp-card">
                <div className="esp-readiness-row">
                  <div className="esp-readiness-block">
                    <p className="esp-section-title"><span className="esp-inline-icon esp-icon-purple">{Icon.target}</span>Investor Readiness Score</p>
                    <div className="esp-readiness-score">72<span>/100</span></div>
                    <p className="esp-point-text">Solid fundamentals, but market sizing and defensibility need firmer evidence before a seed pitch.</p>
                  </div>
                  <div className="esp-readiness-block">
                    <p className="esp-section-title"><span className="esp-inline-icon esp-icon-purple">{Icon.chart}</span>Confidence Level</p>
                    <p className="esp-point-text">
                      This brief is built from {startupName}'s onboarding inputs plus third-party market data.
                      Confidence is <strong>Medium-High</strong> on market sizing, <strong>Medium</strong> on competitive
                      landscape, and <strong>Low-Medium</strong> on execution risk, which depends on data not yet provided.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="esp-paywall">
              <div className="esp-paywall-card">
                <div className="esp-paywall-icon">{Icon.lock}</div>
                <p className="esp-paywall-title">Unlock the Full Executive Summary</p>
                <p className="esp-paywall-sub">
                  See ranked opportunities &amp; risks, full market-sizing methodology, founder-market fit,
                  comparable companies, and your investor readiness score.
                </p>
                <button className="esp-upgrade-btn">
                  {Icon.rocket}
                  Upgrade to Xvora Pro
                </button>
                <button className="esp-secondary-btn" onClick={onBack}>
                  Back to Startup Brief
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
