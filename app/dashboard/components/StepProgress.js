import { useState } from "react";

export default function StepProgress() {
  const totalSteps = 6;
  const [currentStep, setCurrentStep] = useState(2); 

  const progressPercent = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="relative w-full max-w-xs mx-auto mt-6">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0 rounded-full" />

      {/* Filled Progress Line */}
      <div
        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#35FFBC] to-[#00A0DE] transform -translate-y-1/2 z-10 rounded-full transition-all duration-300"
        style={{ width: `${progressPercent}%` }}
      />

      {/* Circles */}
      <div className="relative z-20 flex justify-between">
        {[...Array(totalSteps)].map((_, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-full border-2 ${
              idx <= currentStep ? 'bg-[#004A40] border-[#004A40]' : 'bg-white border-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
