'use client';
import { useState, useEffect } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { shuffle } from 'lodash';

export default function SentenceReorder({ phrase, language = 'igbo', onNext, incrementScore, isLast, score, total }) {
  const correctWords = phrase[language].trim().split(' ');
  const [shuffled, setShuffled] = useState(shuffle(correctWords));
  const [selectedWords, setSelectedWords] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedWords([]);
    setSubmitted(false);
  }, [phrase]);

  const handleWordClick = (word) => {
    if (!submitted && !selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleSubmit = () => {
    const answer = selectedWords.join(' ');
    setSubmitted(true);
    if (answer === phrase[language]) {
      incrementScore();
    }
  };

  const playAudio = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'yo-NG'; // or 'ig-NG', 'ha-NG' etc. if dynamic
    speechSynthesis.speak(utterance);
  };


  return (
    <div className="w-full sm:px-10 sm:px-10 pt-4 mx-0 text-center max-w-xl sm:mx-auto">
      <div className="flex items-center  space-x-4">
        <Image
          src="/images/lady.png"
          alt="Lady"
          width={70}
          height={70}
          className="relative object-scale-down w-auto h-auto transition-transform duration-300"
        />
        <div className="relative bg-emerald-900 content-center text-green-400 rounded-lg px-4 py-2 w-30 h-16">
          <div className="flex items-center justify-center">
            <button
              onClick={() => playAudio(phrase[language])}
            >
              <SpeakerWaveIcon className="w-10 h-10 text-green-400" />
            </button>
          </div>
          <div className="absolute -left-2 top-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-emerald-900"></div>
        </div>
      </div>

      <div className="mb-8 mt-4 min-h-[50px] border-b-2 border-t-2 p-2">
        {selectedWords.map((word, index) => (
          <span key={index} className="inline-block bg-emerald-100 text-emerald-800 font-bold px-2 py-1 m-1 rounded">
            {word}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {shuffled.map((word, idx) => (
          <button
            key={idx}
            onClick={() => handleWordClick(word)}
            disabled={submitted || selectedWords.includes(word)}
            className={`border px-3 py-2 rounded-full text-sm bg-white hover:bg-gray-100 transition ${selectedWords.includes(word) && 'opacity-40 cursor-not-allowed'
              }`}
          >
            {word}
          </button>
        ))}
      </div>
      <div className="my-4 flex justify-end">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedWords.length !== correctWords.length}
            className="bg-emerald-900 text-white px-32 sm:px-6 py-2 rounded-3xl sm:rounded-lg"
          >
            Check
          </button>
        ) : (
          <div className='sm:flex gap-2'>
            <p className={`content-center text-md text-emerald-700 font-semibold ${selectedWords.join(' ') === phrase[language] ? 'text-emerald-700' : ''
              } ${selectedWords.join(' ') !== phrase[language] ? 'text-red-600' : ''}`}>
              {selectedWords.join(' ') === phrase[language] ? 'Correct!' : `Wrong!`}
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
