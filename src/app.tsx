"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight, 
  ShieldCheck, 
  Rocket, 
  LayoutGrid, 
  TrendingUp, 
  Upload, 
  Lock, 
  ChevronDown,
  Sparkles
} from "lucide-react";

interface OnboardingProps {
  onComplete?: (data: any) => void;
}

export default function XvoraOnboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1);

  // Form states
  const [startupName, setStartupName] = useState("");
  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("Validate my startup idea");

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      if (onComplete) {
        onComplete({
          startupName,
          industry,
          stage,
          description,
          selectedGoal
        });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goals = [
    {
      title: "Validate my startup idea",
      description: "Find out whether my idea solves a real problem."
    },
    {
      title: "Research my market",
      description: "Research market size, trends, and opportunities."
    },
    {
      title: "Analyze my competitors",
      description: "Discover competitors and identify gaps in the market."
    },
    {
      title: "Define my positioning",
      description: "Clarify my value proposition and differentiation."
    },
    {
      title: "Build my go-to-market strategy",
      description: "Learn how to reach and acquire my first customers."
    },
    {
      title: "Create an action plan",
      description: "Get personalized next steps to move my startup forward."
    },
    {
      title: "I'm not sure yet ✨",
      description: "Let Xvora decide what deserves the most attention."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#F8F9FB] flex flex-col items-center justify-center p-4 font-sans text-neutral-900 select-none">
      {/* Main Container */}
      <div className="w-full max-w-[1400px] h-[90vh] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 flex overflow-hidden relative">
        
        {/* SIDEBAR */}
        <div className="w-[320px] bg-[#FAFAFC] border-r border-neutral-200/60 pt-10 px-8 flex flex-col justify-between shrink-0">
          <div>
            {/* Logo Area */}
            <div className="flex items-center gap-2 mb-12">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                X
              </div>
              <span className="font-bold tracking-wider text-sm text-neutral-900">XVORA</span>
            </div>

            {/* Steps Progress */}
            <div className="relative pl-2">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-[24px] bottom-[24px] w-[2px] bg-neutral-200" />

              {/* Step 1 */}
              <div className="relative flex items-start gap-4 mb-8">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium z-10 transition-colors ${
                  currentStep > 1 
                    ? "bg-[#6366F1] text-white" 
                    : currentStep === 1 
                    ? "bg-[#6366F1] text-white ring-4 ring-indigo-50" 
                    : "bg-white border-2 border-neutral-300 text-neutral-500"
                }`}>
                  {currentStep > 1 ? <Check className="w-3.5 h-3.5" /> : "1"}
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${currentStep === 1 ? "text-[#6366F1]" : "text-neutral-900"}`}>
                    Create your startup
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Let's start with the basics.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-4 mb-8">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium z-10 transition-colors ${
                  currentStep > 2 
                    ? "bg-[#6366F1] text-white" 
                    : currentStep === 2 
                    ? "bg-[#6366F1] text-white ring-4 ring-indigo-50" 
                    : "bg-white border-2 border-neutral-300 text-neutral-500"
                }`}>
                  {currentStep > 2 ? <Check className="w-3.5 h-3.5" /> : "2"}
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${currentStep === 2 ? "text-[#6366F1]" : "text-neutral-900"}`}>
                    About your startup
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Tell us what you're building.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-4">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium z-10 transition-colors ${
                  currentStep === 3 
                    ? "bg-[#6366F1] text-white ring-4 ring-indigo-50" 
                    : "bg-white border-2 border-neutral-300 text-neutral-500"
                }`}>
                  3
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${currentStep === 3 ? "text-[#6366F1]" : "text-neutral-900"}`}>
                    Your goals
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">What do you want to achieve?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="mb-8 bg-white border border-neutral-200/80 rounded-xl p-4 shadow-sm flex items-start gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg text-[#6366F1] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-semibold text-neutral-900">Your data is private and secure.</h5>
              <p className="text-[11px] text-neutral-500 mt-0.5">We never share your information.</p>
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 h-full overflow-y-auto px-16 py-12 flex flex-col justify-between">
          <div className="max-w-[850px] w-full mx-auto">
            <AnimatePresence mode="wait">
              
              {/* STEP 1 */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Let's create your startup</h1>
                    <p className="text-neutral-500 mt-2 text-sm">Let's set up your workspace. You can always update these details later.</p>
                  </div>

                  <div className="mt-10 space-y-6">
                    {/* Field 1 */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Startup Name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Rocket className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          value={startupName}
                          onChange={(e) => setStartupName(e.target.value)}
                          placeholder="e.g. Xvora"
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Field 2 */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Industry
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <LayoutGrid className="w-4 h-4" />
                        </span>
                        <select
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full pl-10 pr-10 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 appearance-none focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all shadow-sm cursor-pointer"
                        >
                          <option value="" disabled>Select your industry</option>
                          <option value="SaaS">SaaS & Software</option>
                          <option value="Fintech">Fintech</option>
                          <option value="AI">Artificial Intelligence</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Other">Other</option>
                        </select>
                        <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-neutral-400">
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Field 3 */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                        Startup Stage
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <TrendingUp className="w-4 h-4" />
                        </span>
                        <select
                          value={stage}
                          onChange={(e) => setStage(e.target.value)}
                          className="w-full pl-10 pr-10 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 appearance-none focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all shadow-sm cursor-pointer"
                        >
                          <option value="" disabled>Select stage</option>
                          <option value="Idea">Idea</option>
                          <option value="Building MVP">Building MVP</option>
                          <option value="Recently Launched">Recently Launched</option>
                          <option value="Growing">Growing</option>
                          <option value="Scaling">Scaling</option>
                        </select>
                        <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-neutral-400">
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Info Card */}
                    <div className="bg-[#F8F7FF] border border-[#EBE8FF] rounded-xl p-4 flex items-center gap-3">
                      <div className="p-2 bg-indigo-100/60 rounded-lg text-[#6366F1] shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-neutral-900">Don't worry, you can change these later.</h5>
                        <p className="text-[11px] text-neutral-500 mt-0.5">You'll be able to update all details anytime in your workspace.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Tell us about your startup</h1>
                    <p className="text-neutral-500 mt-2 text-sm">Help Xvora understand your startup so we can generate a personalized Startup Brief.</p>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-1">
                        Describe your startup
                      </label>
                      <p className="text-xs text-neutral-400 mb-2.5">Tell us what you're building, who it's for, and how it works.</p>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="We're building an AI platform that helps founders validate startup ideas through automated market research..."
                        className="w-full h-[220px] p-4 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all shadow-sm resize-none"
                      />
                    </div>

                    {/* Centered Divider */}
                    <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-neutral-200"></div>
                      <span className="flex-shrink mx-4 text-xs font-medium text-neutral-400 tracking-widest">OR</span>
                      <div className="flex-grow border-t border-neutral-200"></div>
                    </div>

                    {/* Upload Section */}
                    <div className="border border-dashed border-neutral-300 rounded-2xl p-6 bg-white flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-indigo-50 text-[#6366F1] rounded-xl shrink-0">
                          <Upload className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-900">Already have this written?</h4>
                          <p className="text-xs text-neutral-500 mt-0.5 max-w-md">Upload a pitch deck, vision document, one-pager, PRD, or business plan instead.</p>
                          <div className="flex items-center gap-1.5 mt-3 text-[11px] text-neutral-400">
                            <Lock className="w-3 h-3" />
                            <span>Your document stays private and is only used to understand your startup and generate your Startup Brief.</span>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="px-4 py-2 border border-neutral-200 hover:border-[#6366F1] text-[#6366F1] text-xs font-semibold rounded-xl transition-all shadow-sm shrink-0 flex items-center gap-2 bg-white"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        Upload Startup Document
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900">What would you like Xvora to help you with first?</h1>
                    <p className="text-neutral-500 mt-2 text-sm">Choose one. We'll personalize your Startup Brief based on your selection.</p>
                  </div>

                  <div className="mt-8 space-y-3">
                    {goals.map((goal, idx) => {
                      const isSelected = selectedGoal === goal.title;
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedGoal(goal.title)}
                          className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#6366F1] bg-[#F8F7FF]"
                              : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/50"
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            <div className="mt-0.5 flex items-center justify-center">
                              <input
                                type="radio"
                                name="goal"
                                checked={isSelected}
                                onChange={() => setSelectedGoal(goal.title)}
                                className="w-4 h-4 text-[#6366F1] border-neutral-300 focus:ring-[#6366F1] accent-[#6366F1] cursor-pointer"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-neutral-900">{goal.title}</h4>
                              <p className="text-xs text-neutral-500 mt-0.5">{goal.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          <div className="max-w-[850px] w-full mx-auto pt-6 flex items-center justify-between border-t border-neutral-100">
            {currentStep > 1 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBack}
                className="px-5 py-2.5 border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-all flex items-center gap-2 bg-white shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </motion.button>
            ) : (
              <span className="text-xs text-neutral-400">Skip for now</span>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="px-6 py-2.5 bg-[#6366F1] hover:bg-[#5558DD] text-white rounded-xl text-xs font-semibold transition-all shadow-sm flex items-center gap-2 ml-auto"
            >
              {currentStep === 3 ? (
                <>
                  Generate My Startup Brief
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>

        </div>

      </div>
      
      {/* Footer copyright */}
      <div className="mt-4 text-xs text-neutral-400">
        © 2026 Xvora. All rights reserved.
      </div>
    </div>
  );
}
