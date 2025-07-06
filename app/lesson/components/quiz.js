import { useMemo, useEffect, useState } from "react";

export default function MainLesson({ phrase, onNext, incrementScore, isLast, score, total }) {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelected('');
    setSubmitted(false);
  }, [phrase]);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected === phrase.igbo) {
      incrementScore();
    }
  };

  const language = 'igbo';

  const shuffledOptions = useMemo(() => {
    if (!phrase?.options || !phrase.options[language]) return [];

    return phrase.options[language]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }, [phrase, language]);

  return (
    <div className="bg-emerald-900 py-6 sm:px-20 px-10 mx-0 rounded-xl shadow-lg text-center max-w-md sm:mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-green-500">What is "{phrase.english}":</h2>

      {shuffledOptions.length > 0 ? (
        <div className="grid gap-3">
          {shuffledOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              disabled={submitted}
              className={`py-2 px-4 w-full rounded-lg border transition
                ${submitted && opt === phrase[language] ? 'text-green-400 border-green-500' : ''}
                ${submitted && opt === selected && opt !== phrase[language] ? 'text-red-400 border-red-900' : ''}
                ${!submitted && selected === opt ? 'bg-gray-200' : 'bg-white'}
              `}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-red-500 mt-4">⚠️ No options provided for this phrase.</p>
      )}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={onNext}
          className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg"
        >
          {isLast ? 'Finish' : 'Next'}
        </button>
      )}
    </div>
  );
}
