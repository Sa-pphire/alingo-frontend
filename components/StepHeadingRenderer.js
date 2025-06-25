'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

const headings = [
    { title: "What's your name?", subtitle: "What should we shout when we see you?" },
    { title: "When is your birthday?", subtitle: "We might send a cake (virtually)" },
    { title: "Your journey begins here!", subtitle: "Which language would you love to explore?" },
    { title: "What’s your language level?", subtitle: "Rate your language street cred!" },
    { title: "Why do you want to learn Hausa?", subtitle: "You get ginger! But what’s fueling the fire?" },
];

export default function StepHeadingRenderer() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const updateStep = () => {
            const storedStep = parseInt(sessionStorage.getItem('onboardingStep'), 10);
            if (!isNaN(storedStep)) setStep(storedStep);
        };

        const interval = setInterval(updateStep, 100);
        return () => clearInterval(interval);
    }, []);

    const heading = headings[step] || { title: "", subtitle: "" };

    return (
        <div className="sm:hidden flex items-center text-white mt-10 mb-4 px-4 space-x-4">
            <Image
                src="/images/lady.png"
                alt="Lady Character"
                width={60}
                height={60}
                className="flex-shrink-0"
                priority
            />
            <div>
                <h1 className="text-xl font-bold">{heading.title}</h1>
                <p className="text-sm">{heading.subtitle}</p>
            </div>
        </div>
    );

}
