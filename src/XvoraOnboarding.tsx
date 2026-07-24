import React, { useState } from "react";

interface OnboardingProps {
  onBack: () => void;
  onComplete?: (data: any) => void;
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
    "Validate my startup idea",
    "Research my market",
    "Analyze my competitors",
    "Define my positioning",
    "Build my go-to-market strategy",
    "Create an action plan",
    "I'm not sure yet ✨"
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
        .step-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          font-size: 14px;
          color: #6b7280;
        }
        .step-item.active {
          color: #403690;
          font-weight: 700;
        }
        .step-circle {
          width: 24px; height: 24px;
          border-radius: 50%;
          border: 2px solid #d1d5db;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
        }
        .step-item.active .step-circle {
          border-color: #403690;
          background: #403690;
          color: white;
        }
        .content-area {
          flex: 1;
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        h2 { font-size: 24px; font-weight: 800; color: #0f0f14; margin-bottom: 8px; }
        p.sub { font-size: 14px; color: #6b7280; margin-bottom: 32px; }
        .form-group { margin-bottom: 20px; text-align: left; }
        .form-group label { display: block; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; color: #333; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%; padding: 12px 16px; border: 1px solid #e6e6ef; border-radius: 8px; font-size: 14px; outline: none;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: #403690;
        }
        .goal-option {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 16px; border: 1px solid #e6e6ef; border-radius: 8px;
          margin-bottom: 10px; cursor: pointer; text-align: left; font-size: 14px;
        }
        .goal-option.selected { border-color: #403690; background: #ece9fd; font-weight: 600; }
        .footer-controls {
          display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e6e6ef; padding-top: 24px;
        }
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
            <div className={`step-item ${currentStep === 1 ? "active" : ""}`}>
              <div className="step-circle">1</div>
              <span>Create your startup</span>
            </div>
            <div className={`step-item ${currentStep === 2 ? "active" : ""}`}>
              <div className="step-circle">2</div>
              <span>About your startup</span>
            </div>
            <div className={`step-item ${currentStep === 3 ? "active" : ""}`}>
              <div className="step-circle">3</div>
              <span>Your goals</span>
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
                <p className="sub">Describe what you are building.</p>
                <div className="form-group">
                  <label>Description</label>
                  <textarea rows={6} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="We are building an AI platform that..." />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2>What would you like help with first?</h2>
                <p className="sub">Choose your main objective.</p>
                {goals.map((goal, idx) => (
                  <div key={idx} onClick={() => setSelectedGoal(goal)} className={`goal-option ${selectedGoal === goal ? "selected" : ""}`}>
                    <input type="radio" checked={selectedGoal === goal} readOnly />
                    <span>{goal}</span>
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
