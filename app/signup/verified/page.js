'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function VerifiedSuccess() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/onboarding');
        }, 3000);

        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <div className="px-6 pb-8 pt-6 w-full max-w-sm text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-[#004A40] text-white w-30 h-30 flex items-center justify-center rounded-full">
                    <svg
                        className="w-20 h-20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold mb-2 text-[#004A40]">Verified!</h2>
            <p className="text-xs sm:text-sm text-green-800 mb-5">
                You have successfully verified your account. Redirecting to your dashboard...
            </p>

            <Link href="/onboarding">
                <button className="w-full bg-[#004A40] hover:bg-green-900 text-white py-2 rounded-md font-semibold">
                    Go To Dashboard
                </button>
            </Link>
        </div>
    );
}
