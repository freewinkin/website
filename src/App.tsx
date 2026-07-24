import React, { useState } from "react";
import LandingPage from "./LandingPage";
import XvoraOnboarding, { StartupBriefInput } from "./XvoraOnboarding";

export default function App() {
  const [activeView, setActiveView] = useState<"landing" | "onboarding">("landing");

  const handleComplete = (data: StartupBriefInput) => {
    // TODO: hand this off to wherever the Startup Brief gets generated/displayed.
    console.log("Startup Brief inputs:", data);
    setActiveView("landing");
  };

  return (
    <div>
      {activeView === "landing" ? (
        <LandingPage onStart={() => setActiveView("onboarding")} />
      ) : (
        <XvoraOnboarding
          onBack={() => setActiveView("landing")}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}
