import React, { useState } from "react";
import LandingPage from "./LandingPage";
import XvoraOnboarding from "./XvoraOnboarding";

export default function App() {
  const [activeView, setActiveView] = useState<"landing" | "onboarding">("landing");

  return (
    <div>
      {activeView === "landing" ? (
        <LandingPage onStart={() => setActiveView("onboarding")} />
      ) : (
        <XvoraOnboarding
          onComplete={(data) => {
            // TODO: hand this off to wherever the Startup Brief gets generated/displayed.
            console.log("Startup Brief inputs:", data);
          }}
        />
      )}
    </div>
  );
}
