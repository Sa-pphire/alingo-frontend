'use client';
import useLessonFlow from './components/lessonFlow';
import PhrasePreview from './components/lesson';
import MainLesson from './components/quiz';
import FinalScore from './components/finalScore';

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

  return (
    <div className="flex items-center justify-center py-10 sm:p-10">
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
        <MainLesson
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
  );
}
