'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SignIn() {
    const [password, setPassword] = useState('');

    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    return (
        <div className='px-5'>
            {/* Title */}
            <h1 className="text-center text-2xl sm:text-3xl mt-6 font-bold text-green-900 mb-1">Set New Password</h1>

            {/* Form */}
            <form className="space-y-3 text-green-900 mt-10 font-medium">
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-100 border border-green-900 rounded-full px-8 py-2 text-sm focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full bg-gray-100 border border-green-900 rounded-full px-8 py-2 mb-0 text-sm focus:outline-none"
                />
                <ul className="mt-4 text-xs">
                    <CheckItem label="At least 8 characters" passed={checks.length} />
                    <CheckItem label="At least one uppercase letter (A-Z)" passed={checks.uppercase} />
                    <CheckItem label="At least one lowercase letter (a-z)" passed={checks.lowercase} />
                    <CheckItem label="At least one number (0-9)" passed={checks.number} />
                    <CheckItem label="At least one symbol (!@#...)" passed={checks.symbol} />
                </ul>
                <button
                    type="submit"
                    className="w-full bg-green-900 hover:bg-green-800 text-white py-2 mt-8 rounded-full text-sm font-semibold"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
    function CheckItem({ label, passed }) {
        return (
            <li className={`flex text-xs items-center gap-2 ${passed ? 'text-green-600' : 'text-red-500'}`}>
                <span className="w-4 h-4 inline-block">
                    {passed ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </span>
                {label}
            </li>
        );
    }
}
