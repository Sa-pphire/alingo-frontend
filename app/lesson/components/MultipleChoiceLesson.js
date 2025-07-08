'use client';
import { useState, useMemo, useEffect } from 'react';
import Image from "next/image";

export default function MultipleChoiceLesson({ phrase, language = 'igbo', onNext, incrementScore, isLast, score, total }) {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelected('');
    setSubmitted(false);
  }, [phrase]);

  const options = useMemo(() => {
    return phrase.options?.[language]
      ?.map(value => ({ value, sort: Math.random() }))
      ?.sort((a, b) => a.sort - b.sort)
      ?.map(({ value }) => value) || [];
  }, [phrase, language]);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected === phrase[language]) {
      incrementScore();
    }
  };

  return (
    <div className="w-full sm:px-10 sm:px-10 pt-4 mx-0 text-center max-w-xl sm:mx-auto">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/lady.png"
          alt="Lady"
          width={70}
          height={70}
          className="relative object-scale-down w-auto h-auto transition-transform duration-300 hover:scale-105"
        />
        <div className="relative bg-emerald-900 content-center text-green-400 rounded-lg px-4 py-2 w-fit h-16">
          <div className="flex items-center justify-center">
            <h2 className="relative text-xs sm:text-lg font-semibold content-center text-white">What is "{phrase.english}"</h2>
          </div>
          <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-emerald-900"></div>
        </div>
      </div>

      <div className="grid gap-3 mt-2 sm:px-10">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            disabled={submitted}
            className={`py-2 px-4 rounded-lg border transition ${submitted && opt === phrase[language] ? 'border-2 border-green-600' : ''
              } ${submitted && opt === selected && opt !== phrase[language] ? 'border-2 border-red-600' : ''} ${!submitted && selected === opt ? 'bg-gray-200' : 'bg-white'
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="my-4 flex justify-end">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="bg-emerald-900 text-white px-32 sm:px-6 py-2 rounded-3xl sm:rounded-lg"
          >
            Check
          </button>
        ) : (
          <div className='sm:flex gap-2'>
            <p className={`content-center text-md text-emerald-700 font-semibold ${selected === phrase[language] ? 'text-emerald-700' : ''
              } ${selected !== phrase[language] ? 'text-red-600' : ''}`}>
              {selected === phrase[language] ? 'Correct!' : `Wrong!`}
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={onNext} className="bg-emerald-900 text-white px-34 sm:px-6 py-2 rounded-3xl sm:rounded-lg">
                {isLast ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
