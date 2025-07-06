'use client';

import { useEffect, useRef, useState } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';

export default function PhrasePreview({ phrase, onNext, onPrev, isFirst, isLast }) {
    const [audioUrl, setAudioUrl] = useState(null);
    const [loadingAudio, setLoadingAudio] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!phrase?.igbo) return;

        const fetchAudio = async () => {
            setLoadingAudio(true);
            const options = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer `,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: phrase.igbo,
                    voice: 'amara',
                    language: 'ig',
                }),
            };

            try {
                const response = await fetch('https://api.spi-tch.com/v1/speech', options);
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
            } catch (err) {
                console.error('Failed to fetch audio:', err);
                setAudioUrl(null);
            } finally {
                setLoadingAudio(false);
            }
        };

        fetchAudio();
    }, [phrase]);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className="bg-emerald-900 px-14 py-10 rounded-xl shadow-lg text-center max-w-md mx-auto text-white">
            <h2 className="text-lg font-semibold mb-2">{phrase.english}</h2>
            <p className="text-xl font-bold text-green-300">{phrase.igbo}</p>
            <p className="text-sm text-gray-200 italic mb-2">{phrase.igbo_pron}</p>

            {loadingAudio ? (
                <div className="flex justify-center items-center my-4">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>

            ) : audioUrl ? (
                <div className="my-4 flex justify-center">
                    <button onClick={handlePlay}>
                        <SpeakerWaveIcon className="w-10 h-10 text-white" />
                    </button>
                    <audio ref={audioRef} src={audioUrl} />
                </div>
            ) : (
                <p className="text-sm text-red-400">Audio unavailable</p>
            )}

            <div className="flex space-x-10 mt-6">
                <button
                    onClick={onPrev}
                    disabled={isFirst}
                    className={`px-4 py-2 rounded-md ${isFirst
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gray-200 text-black hover:bg-gray-300'
                        }`}
                >
                    Previous
                </button>

                <button
                    onClick={onNext}
                    className={`px-4 py-2 rounded-md ${isLast
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-gray-200 text-black hover:bg-gray-300'
                        }`}
                >
                    {isLast ? 'Start Lesson' : 'Next'}
                </button>
            </div>
        </div>
    );
}
