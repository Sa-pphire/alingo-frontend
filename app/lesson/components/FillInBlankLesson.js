'use client';
import { useState, useMemo } from 'react';

export default function FillInTheBlank({ phrase, language = 'igbo', onNext, isLast, incrementScore }) {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected === phrase) {
      incrementScore();
    }
  };
  const options = useMemo(() => {
     return phrase.options?.[language]
       ?.map(value => ({ value, sort: Math.random() }))
       ?.sort((a, b) => a.sort - b.sort)
       ?.map(({ value }) => value) || [];
   }, [phrase, language]);
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-emerald-900">
        Fill in the blank: "{phrase.english.replace(phrase, '_____')}"
      </h2>
      <div className="grid gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            disabled={submitted}
            className={`py-2 px-4 rounded-lg border transition
              ${submitted && opt === phrase.igbo ? 'bg-green-200 border-green-600' : ''}
              ${submitted && selected === opt && opt !== phrase.igbo ? 'bg-red-200 border-red-600' : ''}
              ${!submitted && selected === opt ? 'bg-gray-200' : 'bg-white'}
            `}
          >
            {opt}
          </button>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      ) : (
        <button onClick={onNext} className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg">
          {isLast ? 'Finish' : 'Next'}
        </button>
      )}
    </div>
  );
}
