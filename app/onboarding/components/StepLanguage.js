'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const languages = [
    {
        name: 'Yoruba',
        greeting: 'Ekaaro',
        level: 'Level 1',
        flag: '/images/ng.png',
    },
    {
        name: 'Hausa',
        greeting: 'Ina kwana',
        level: 'Level 1',
        flag: '/images/ng.png',
    },
    {
        name: 'Igbo',
        greeting: 'Ụtụtụ ọma',
        level: 'Level 1',
        flag: '/images/ng.png',
    },
];

export default function StepLanguage({ value, onChange }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div>
            {/* Desktop Heading */}
            <label className="hidden sm:block text-2xl text-center font-black mb-2">
                Your journey begins here!
            </label>
            <p className="hidden sm:block text-sm text-emerald-900 text-center mb-6">
                Which language would you love to explore?
            </p>

            {/* Search bar */}
            <div className="relative flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 px-10 font-extrabold text-emerald-900 rounded-full border border-emerald-900 bg-gray-200 shadow-sm"
                />
                <MagnifyingGlassIcon className="h-4 w-4 text-emerald-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Mobile List View */}
            <div className="flex flex-col gap-3 mb-15 sm:hidden">
                {languages.map((lang) => (
                    <div
                        key={lang.name}
                        onClick={() => {
                            onChange(lang.name);
                            sessionStorage.setItem('selectedLanguage', lang.name);
                        }}
                        className={clsx(
                            "flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-lg cursor-pointer",
                            value === lang.name && "ring-2 ring-cyan-400"
                        )}
                    >
                        <Image src={lang.flag} alt={`${lang.name} flag`} width={30} height={30} />
                        <p className="text-emerald-900 font-semibold text-lg">{lang.name}</p>
                    </div>
                ))}
            </div>

            {/*Desktop Cards */}
            <div className="hidden sm:flex justify-center gap-6 flex-wrap">
                {languages.map((lang, index) => {
                    const isFlipped = hovered === index;
                    const isSelected = value === lang.name;

                    return (
                        <div
                            key={lang.name}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => {
                                onChange(lang.name);
                                sessionStorage.setItem('selectedLanguage', lang.name);
                            }}
                            className={clsx(
                                "relative w-40 h-40 perspective cursor-pointer",
                                isSelected && "ring-4 rounded-lg ring-cyan-400"
                            )}
                        >
                            <div
                                className={clsx(
                                    "w-full h-full transition-transform duration-500 preserve-3d relative",
                                    isFlipped && "rotate-y-180"
                                )}
                            >
                                {/* Front Face */}
                                <div className="absolute w-full h-40 rounded-lg bg-emerald-900 text-white backface-hidden flex flex-col items-center justify-center border-2 border-cyan-500 shadow-lg">
                                    <Image src={lang.flag} alt="flag" width={50} height={50} />
                                    <p className="mt-4 text-lg font-bold">{lang.name}</p>
                                    <Image
                                        src="/images/star.svg"
                                        alt="star"
                                        width={50}
                                        height={50}
                                        className="absolute top-[-20px] right-[-15px]"
                                    />
                                </div>

                                {/* Back Face */}
                                <div className="absolute w-full h-40 rounded-lg bg-white text-emerald-900 backface-hidden transform rotate-y-180 flex flex-col items-center justify-center border shadow-lg">
                                    <Image src={lang.flag} alt="flag" width={50} height={50} />
                                    <p className="mt-2 italic">{lang.greeting}</p>
                                    <div className="mt-4 px-3 py-1 bg-orange-400 text-white text-xs rounded-full shadow">
                                        {lang.level}
                                    </div>
                                    <Image
                                        src="/images/star.svg"
                                        alt="star"
                                        width={50}
                                        height={50}
                                        className="absolute top-[-20px] left-[-15px]"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
