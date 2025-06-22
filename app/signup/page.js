'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUp() {
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
            <h1 className="hidden sm:block text-center text-2xl sm:text-3xl font-bold text-green-900 mb-1">Sign Up</h1>
            <p className="hidden sm:block text-center text-sm text-gray-600 mb-4">Let us get to know you more</p>

            {/* Google Button */}
            <button className="flex items-center justify-center gap-2 w-full border border-black rounded-md py-2 hover:bg-gray-100 transition">
                <Image src="/images/google.svg" alt="Google icon" width={20} height={20} />
                <span className="text-sm text-gray-800">Sign up with Google</span>
            </button>

            {/* OR Divider */}
            <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <span className="text-xs text-gray-500">OR</span>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>

            {/* Form */}
            <form className="space-y-3 text-green-900 font-medium">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-100 border border-green-900 rounded-full px-8 py-2 text-sm focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-100 border border-green-900 rounded-full px-8 py-2 text-sm focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full bg-gray-100 border border-green-900 rounded-full px-8 py-2 text-sm focus:outline-none"
                />
                <ul className='text-xs'>
                    <CheckItem label="At least 8 characters" passed={checks.length} />
                    <CheckItem label="At least one uppercase letter (A-Z)" passed={checks.uppercase} />
                    <CheckItem label="At least one lowercase letter (a-z)" passed={checks.lowercase} />
                    <CheckItem label="At least one number (0-9)" passed={checks.number} />
                    <CheckItem label="At least one symbol (!@#...)" passed={checks.symbol} />
                </ul>
                <button
                    type="submit"
                    className="w-full bg-green-900 hover:bg-green-800 text-white py-2 rounded-full mt-4 text-sm font-semibold"
                >
                    Sign Up
                </button>
            </form>

            {/* Footer */}
            <p className="text-xs text-center font-medium text-black mt-4">
                Already have an account?{' '}
                <Link href="/login" className="text-green-900 hover:underline">
                    Sign In
                </Link>
            </p>
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
