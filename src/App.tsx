import React, { useState } from "react";
import LandingPage from "./LandingPage";
import XvoraOnboarding from "./XvoraOnboarding";
import Startupbrief from "./Startupbrief";

export default function App() {
  const [activeView, setActiveView] = useState<"landing" | "onboarding" | "brief">("landing");
  const [onboardingData, setOnboardingData] = useState<any>(null);

  return (
    <div>
      {activeView === "landing" && (
        <LandingPage onStart={() => setActiveView("onboarding")} />
      )}
      {activeView === "onboarding" && (
        <XvoraOnboarding
          onBack={() => setActiveView("landing")}
          onComplete={(data) => {
            setOnboardingData(data);
            setActiveView("brief");
          }}
        />
      )}
      {activeView === "brief" && (
        <Startupbrief
          data={onboardingData}
          onBack={() => setActiveView("landing")}
        />
      )}
    </div>
  );
}
