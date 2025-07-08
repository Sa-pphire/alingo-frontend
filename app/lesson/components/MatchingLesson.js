'use client';
import { useState } from 'react';
import shuffle from 'lodash.shuffle';

export default function MatchingPairs({ pairs, onNext, isLast, incrementScore }) {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [shuffledRight, setShuffledRight] = useState(shuffle(pairs.map(p => p.translation)));

  const handleMatch = (right) => {
    if (!selectedLeft) return;

    const pair = pairs.find(p => p.english === selectedLeft && p.translation === right);
    if (pair) {
      setMatchedPairs([...matchedPairs, pair.english]);
      incrementScore();
    }

    setSelectedLeft(null);
  };

  const isComplete = matchedPairs.length === pairs.length;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-emerald-900">Match the phrases</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* English column */}
        <div className="space-y-2">
          {pairs.map(({ english }) => (
            <button
              key={english}
              onClick={() => setSelectedLeft(english)}
              disabled={matchedPairs.includes(english)}
              className={`w-full py-2 px-3 border rounded-lg ${matchedPairs.includes(english) ? 'bg-green-100' : selectedLeft === english ? 'bg-gray-200' : 'bg-white'}`}
            >
              {english}
            </button>
          ))}
        </div>

        {/* Translations column */}
        <div className="space-y-2">
          {shuffledRight.map((translation) => (
            <button
              key={translation}
              onClick={() => handleMatch(translation)}
              className="w-full py-2 px-3 border rounded-lg bg-white hover:bg-gray-100"
            >
              {translation}
            </button>
          ))}
        </div>
      </div>

      {isComplete && (
        <button onClick={onNext} className="mt-6 bg-emerald-600 text-white px-4 py-2 rounded-lg">
          {isLast ? 'Finish' : 'Next'}
        </button>
      )}
    </div>
  );
}
