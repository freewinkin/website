import React, { useState } from "react";

export interface OnboardingData {
  startupName: string;
  industry: string;
  stage: string;
  description: string;
  selectedGoal: string;
}

interface OnboardingProps {
  onBack: () => void;
  onComplete?: (data: OnboardingData) => void;
}

export default function XvoraOnboarding({ onBack, onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [startupName, setStartupName] = useState("");
  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("Validate my startup idea");

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (onComplete) {
      onComplete({ startupName, industry, stage, description, selectedGoal });
    }
  };

  const handleBackBtn = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const goals = [
    { title: "Validate my startup idea", description: "Find out whether my idea solves a real problem." },
    { title: "Research my market", description: "Research market size, trends, and opportunities." },
    { title: "Analyze my competitors", description: "Discover competitors and identify gaps in the market." },
    { title: "Define my positioning", description: "Clarify my value proposition and differentiation." },
    { title: "Build my go-to-market strategy", description: "Learn how to reach and acquire my first customers." },
    { title: "Create an action plan", description: "Get personalized next steps to move my startup forward." },
    { title: "I'm not sure yet ✨", description: "Let Xvora decide what deserves the most attention." },
  ];

  return (
    <div className="onboarding-container">
      <style>{`
        .onboarding-container {
          min-height: 100vh;
          background: #F8F9FB;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Geist', sans-serif;
          padding: 20px;
        }
        .onboarding-box {
          width: 100%;
          max-width: 1000px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
          display: flex;
          overflow: hidden;
          min-height: 550px;
        }
        .sidebar {
          width: 280px;
          background: #FAFAFC;
          border-right: 1px solid #e6e6ef;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .logo-area {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          cursor: pointer;
          margin-bottom: 40px;
        }
        .logo-badge {
          width: 28px; height: 28px;
          background: #403690;
          color: white;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
        }
        .steps-list { position: relative; }
        .step-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding-bottom: 28px;
          font-size: 14px;
          color: #6b7280;
        }
        .step-item:last-child { padding-bottom: 0; }
        .step-item::before {
          content: "";
          position: absolute;
          left: 11px;
          top: 24px;
          bottom: -4px;
          width: 2px;
          background: repeating-linear-gradient(to bottom, #d1d5db 0, #d1d5db 4px, transparent 4px, transparent 8px);
        }
        .step-item:last-child::before { display: none; }
        .step-item.done::before { background: #403690; }
        .step-item.active { color: #403690; font-weight: 700; }
        .step-circle {
          flex-shrink: 0;
          width: 24px; height: 24px;
          border-radius: 50%;
          border: 2px solid #d1d5db;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          background: #fff;
          z-index: 1;
        }
        .step-item.active .step-circle { border-color: #403690; background: #403690; color: white; }
        .step-item.done .step-circle { border-color: #403690; background: #403690; color: white; }
        .step-text-sub { font-size: 12px; color: #9ca3af; margin-top: 2px; font-weight: 400; }
        .content-area { flex: 1; padding: 48px; display: flex; flex-direction: column; justify-content: space-between; }
        h2 { font-size: 24px; font-weight: 800; color: #0f0f14; margin-bottom: 8px; }
        p.sub { font-size: 14px; color: #6b7280; margin-bottom: 32px; }
        .form-group { margin-bottom: 20px; text-align: left; }
        .form-group label { display: block; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; color: #333; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%; padding: 12px 16px; border: 1px solid #e6e6ef; border-radius: 8px; font-size: 14px; outline: none; font-family: inherit;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: #403690; }
        .field-hint { font-size: 12px; color: #9ca3af; margin: -4px 0 10px; }
        .or-divider { display: flex; align-items: center; gap: 16px; margin: 24px 0; color: #9ca3af; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; }
        .or-divider::before, .or-divider::after { content: ""; flex: 1; height: 1px; background: #e6e6ef; }
        .upload-box { border: 1.5px dashed #d8d5f5; border-radius: 14px; padding: 20px; background: #fff; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .upload-box-left { display: flex; align-items: flex-start; gap: 14px; }
        .upload-icon { width: 38px; height: 38px; border-radius: 10px; background: #ece9fd; color: #403690; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .upload-title { font-size: 14px; font-weight: 700; color: #0f0f14; margin: 0 0 3px; }
        .upload-desc { font-size: 12.5px; color: #6b7280; margin: 0 0 8px; max-width: 380px; }
        .upload-note { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #9ca3af; }
        .btn-upload { background: #fff; border: 1px solid #e6e6ef; color: #403690; font-size: 12.5px; font-weight: 700; padding: 9px 16px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 7px; white-space: nowrap; }
        .btn-upload:hover { border-color: #403690; }
        .goal-option { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border: 1.5px solid #e6e6ef; border-radius: 10px; margin-bottom: 10px; cursor: pointer; text-align: left; font-size: 14px; }
        .goal-option.selected { border-color: #403690; background: #ece9fd; }
        .goal-option input[type="radio"] { margin-top: 3px; accent-color: #403690; }
        .goal-title { font-weight: 700; color: #0f0f14; font-size: 14px; margin: 0; }
        .goal-desc { font-size: 12.5px; color: #6b7280; margin: 3px 0 0; }
        .footer-controls { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e6e6ef; padding-top: 24px; }
        .btn-back { background: #fff; border: 1px solid #e6e6ef; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; }
        .btn-next { background: #403690; color: white; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-weight: 600; }
        .btn-next:hover { background: #332a73; }
      `}</style>

      <div className="onboarding-box">
        <div className="sidebar">
          <div>
            <div className="logo-area" onClick={onBack}>
              <div className="logo-badge">X</div>
              <span>XVORA</span>
            </div>
            <div className="steps-list">
              <div className={`step-item ${currentStep === 1 ? "active" : currentStep > 1 ? "done" : ""}`}>
                <div className="step-circle">{currentStep > 1 ? "✓" : "1"}</div>
                <div>
                  <div>Create your startup</div>
                  <div className="step-text-sub">Let's start with the basics.</div>
                </div>
              </div>
              <div className={`step-item ${currentStep === 2 ? "active" : currentStep > 2 ? "done" : ""}`}>
                <div className="step-circle">{currentStep > 2 ? "✓" : "2"}</div>
                <div>
                  <div>About your startup</div>
                  <div className="step-text-sub">Tell us what you're building.</div>
                </div>
              </div>
              <div className={`step-item ${currentStep === 3 ? "active" : ""}`}>
                <div className="step-circle">3</div>
                <div>
                  <div>Your goals</div>
                  <div className="step-text-sub">What do you want to achieve?</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "#8a8a95" }}>Your data is private & secure.</div>
        </div>

        <div className="content-area">
          <div>
            {currentStep === 1 && (
              <div>
                <h2>Let's create your startup</h2>
                <p className="sub">Set up your workspace basics.</p>
                <div className="form-group">
                  <label>Startup Name</label>
                  <input type="text" value={startupName} onChange={(e) => setStartupName(e.target.value)} placeholder="e.g. Xvora" />
                </div>
                <div className="form-group">
                  <label>Industry</label>
                  <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                    <option value="" disabled>Select your industry</option>
                    <option value="SaaS">SaaS & Software</option>
                    <option value="Fintech">Fintech</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Startup Stage</label>
                  <select value={stage} onChange={(e) => setStage(e.target.value)}>
                    <option value="" disabled>Select stage</option>
                    <option value="Idea">Idea</option>
                    <option value="Building MVP">Building MVP</option>
                    <option value="Growing">Growing</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2>Tell us about your startup</h2>
                <p className="sub">Help Xvora understand your startup so we can generate a personalized Startup Brief.</p>
                <div className="form-group">
                  <label>Describe your startup</label>
                  <p className="field-hint">Tell us what you're building, who it's for, and how it works.</p>
                  <textarea
                    rows={6}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="We're building an AI platform that helps founders validate startup ideas through automated market research..."
                  />
                </div>

                <div className="or-divider">OR</div>

                <div className="upload-box">
                  <div className="upload-box-left">
                    <div className="upload-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div>
                      <p className="upload-title">Already have this written?</p>
                      <p className="upload-desc">Upload a pitch deck, vision document, one-pager, PRD, or business plan instead.</p>
                      <div className="upload-note">
                      </div>
  <div style={{ width: "14px", height: "14px", flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  </div>
  <span>Your document stays private and is only used to generate your Startup Brief.</span>
</div>
                      
                    </div>
                  </div>
                  
                  <button type="button" className="btn-upload">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    Upload Startup Document
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2>What would you like Xvora to help you with first?</h2>
                <p className="sub">Choose one. We'll personalize your Startup Brief based on your selection.</p>
                {goals.map((goal, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedGoal(goal.title)}
                    className={`goal-option ${selectedGoal === goal.title ? "selected" : ""}`}
                  >
                    <input type="radio" checked={selectedGoal === goal.title} readOnly />
                    <div>
                      <p className="goal-title">{goal.title}</p>
                      <p className="goal-desc">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="footer-controls">
            <button onClick={handleBackBtn} className="btn-back">Back</button>
            <button onClick={handleNext} className="btn-next">
              {currentStep === 3 ? "Generate Brief" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
