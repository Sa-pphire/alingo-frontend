import { useState } from 'react';
import { lessons } from '../lessons';

export default function useLessonFlow() {
  const phrases = lessons.greetings.level_2;

  const [phase, setPhase] = useState('preview'); // 'preview', 'quiz', or 'done'
  const [previewStep, setPreviewStep] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [score, setScore] = useState(0);

  const next = () => {
    if (phase === 'preview') {
      if (previewStep + 1 < phrases.length) {
        setPreviewStep((prev) => prev + 1);
      } else {
        // Move to quiz phase after last preview
        setPhase('quiz');
      }
    } else if (phase === 'quiz') {
      if (quizStep + 1 < phrases.length) {
        setQuizStep((prev) => prev + 1);
      } else {
        setPhase('done');
      }
    }
  };

  const prev = () => {
    if (phase === 'preview' && previewStep > 0) {
      setPreviewStep((prev) => prev - 1);
    } else if (phase === 'quiz' && quizStep > 0) {
      setQuizStep((prev) => prev - 1);
    }
  };

  const incrementScore = () => setScore((prev) => prev + 1);

  return {
    phase,
    next,
    prev,
    score,
    incrementScore,
    phrase: phase === 'preview' ? phrases[previewStep] : phrases[quizStep],
    isFirst: phase === 'preview' ? previewStep === 0 : quizStep === 0,
    isLastPreview: previewStep === phrases.length - 1,
    isLastQuiz: quizStep === phrases.length - 1,
    total: phrases.length,
  };
}
