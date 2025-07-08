'use client';
import useLessonFlow from './components/lessonFlow';
import PhrasePreview from './components/lesson';
import FinalScore from './components/finalScore';
import HeadingRenderer from "@/components/HeadingRenderer";
import { lessonComponents } from './components/lessonTypeMap';

export default function LessonPage() {
  const {
    phase,
    phrase,
    next,
    prev,
    score,
    incrementScore,
    isFirst,
    isLastPreview,
    isLastQuiz,
    total,
  } = useLessonFlow();
  const LessonComponent =
    (phrase?.type && lessonComponents[phrase.type]) || lessonComponents['multiple_choice']; // fallback

  return (
    <div>
      <HeadingRenderer/>
      <div className="flex items-center justify-center py-2 sm:px-10">
        {phase === 'preview' && (
          <PhrasePreview
            phrase={phrase}
            onNext={next}
            onPrev={prev}
            isFirst={isFirst}
            isLast={isLastPreview}
          />
        )}

        {phase === 'quiz' && (

          <LessonComponent
            phrase={phrase}
            onNext={next}
            incrementScore={incrementScore}
            isLast={isLastQuiz}
            score={score}
            total={total}
          />
        )}

        {phase === 'done' && (
          <FinalScore score={score} total={total} />
        )}
      </div>
    </div>
  );
}
