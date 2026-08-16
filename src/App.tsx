import React, { useState } from "react";
import LandingPage from "./LandingPage";
import XvoraOnboarding, { OnboardingData } from "./XvoraOnboarding";
import StartupBrief from "./StartupBrief";
import ExecutiveSummaryPro from "./ExecutiveSummaryPro";

type View = "landing" | "onboarding" | "dashboard" | "executiveSummaryPro";

export default function App() {
  const [activeView, setActiveView] = useState<View>("landing");
  const [briefData, setBriefData] = useState<OnboardingData | undefined>(undefined);

  return (
    <div>
      {activeView === "landing" && (
        <LandingPage onStart={() => setActiveView("onboarding")} />
      )}

      {activeView === "onboarding" && (
        <XvoraOnboarding
          onBack={() => setActiveView("landing")}
          onComplete={(data) => {
            setBriefData(data);
            setActiveView("dashboard");
          }}
        />
      )}

      {activeView === "dashboard" && (
        <StartupBrief
          data={briefData}
          onBack={() => setActiveView("landing")}
          onViewFullSummary={() => setActiveView("executiveSummaryPro")}
        />
      )}

      {activeView === "executiveSummaryPro" && (
        <ExecutiveSummaryPro
          data={briefData}
          onBack={() => setActiveView("dashboard")}
        />
      )}
    </div>
  );
}
