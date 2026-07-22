"use client";

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
        <XvoraOnboarding onBack={() => setActiveView("landing")} />
      )}
    </div>
  );
}
