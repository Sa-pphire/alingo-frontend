'use client';

import { useEffect, useState } from 'react';
import BoyCharacter from "@/components/boy";
import WomanCharacter from "@/components/woman";
import UncleCharacter from "@/components/uncle";
import LadyCharacter from "@/components/lady";

const characters = [
  <BoyCharacter key="boy" />,
  <UncleCharacter key="uncle" />,
  <LadyCharacter key="lady" />,
  <WomanCharacter key="woman" />
];

export default function CharacterRenderer() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const updateStep = () => {
      const storedStep = parseInt(sessionStorage.getItem('onboardingStep'), 10);
      if (!isNaN(storedStep)) setStep(storedStep);
    };

    // Listen for storage changes (optional for multi-tab use)
    window.addEventListener('storage', updateStep);

    // Poll for changes (reliable way for in-tab updates)
    const interval = setInterval(updateStep, 100);

    // Cleanup
    return () => {
      window.removeEventListener('storage', updateStep);
      clearInterval(interval);
    };
  }, []);

  return characters[step]
}
