'use client';
import { useState, useEffect } from 'react';
import StepName from './StepName';
import StepAge from './StepAge';
import StepLanguage from './StepLanguage';
import StepExperience from './StepExperience';
import StepReason from './StepReason';
import ProgressBar from './ProgressBar';
import { toast } from 'react-hot-toast';

export default function OnboardingForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    language: '',
    experience: '',
    reason: '',
  });

  useEffect(() => {
    sessionStorage.setItem('onboardingStep', step);
  }, [step]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setStep((prev) => {
    const newStep = prev + 1;
    sessionStorage.setItem('onboardingStep', newStep);
    return newStep;
  });
  const prevStep = () => setStep((prev) => {
    const newStep = prev - 1;
    sessionStorage.setItem('onboardingStep', newStep);
    return newStep;
  });


  const handleFinish = async () => {
    try {
      const token = localStorage.getItem('token');
      const isoAge = formData.age ? new Date(formData.age).toISOString() : null;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: isoAge,
          goal: formData.reason,
          level: formData.experience,
          language: formData.language,
        }),
      });

      if (res.ok) {
        sessionStorage.removeItem('onboardingStep');
        toast.success('Account Creation Successful!');
        window.location.href = '/dashboard';
      } else {
        const error = await res.json();
        toast.error(error.message || 'Update failed');
      }
    } catch (err) {
      toast.error('An error occurred while submitting your onboarding info.');
    }
  };


  const steps = [
    <StepName value={{ firstName: formData.firstName, lastName: formData.lastName }} onChange={(val) => setFormData({ ...formData, firstName: val.firstName, lastName: val.lastName })} />,
    <StepAge value={formData.age} onChange={(val) => handleChange('age', val)} />,
    <StepLanguage value={formData.language} onChange={(val) => handleChange('language', val)} />,
    <StepExperience value={formData.experience} onChange={(val) => handleChange('experience', val)} />,
    <StepReason value={formData.reason} onChange={(val) => handleChange('reason', val)} selectedLanguage={formData.language} />
  ];

  return (
    <div>
      <ProgressBar currentStep={step} totalSteps={5} />
      <form className="space-y-6 mt-6" onSubmit={(e) => e.preventDefault()}>
        {steps[step]}
        <div className="flex pt-4">
          {step > 0 && (
            <button
              type="button"
              className="text-sm text-gray-600 z-50 hover:underline"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              type="button"
              className={`ml-auto px-5 py-2 z-50 rounded-md text-white transition ${(step === 0 && !formData.firstName || !formData.lastName) ||
                (step === 1 && !formData.age) ||
                (step === 2 && !formData.language) ||
                (step === 3 && !formData.experience) ||
                (step === 4 && !formData.reason)
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#004A40] hover:bg-emerald-800'
                }`}
              onClick={nextStep}
              disabled={
                (step === 0 && !formData.firstName || !formData.lastName) ||
                (step === 1 && !formData.age) ||
                (step === 2 && !formData.language) ||
                (step === 3 && !formData.experience) ||
                (step === 4 && !formData.reason)
              }
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="ml-auto bg-[#004A40] hover:bg-emerald-800 z-50 text-white px-5 py-2 rounded-md"
              onClick={handleFinish}
            >
              Finish
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
