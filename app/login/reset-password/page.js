'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PasswordField from '@/components/hidePassword';

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
            <h1 className="text-center text-2xl sm:text-3xl mt-6 font-bold text-[#004A40] mb-1">Set New Password</h1>

            {/* Form */}
            <form className="space-y-3 text-[#004A40] mt-10 font-medium">
                <PasswordField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New password"
                />
                <PasswordField
                    placeholder="Confirm New Password"
                />
                <ul className="mt-4 text-xs">
                    <CheckItem label="At least 8 characters" passed={checks.length} />
                    <CheckItem label="At least one uppercase letter (A-Z)" passed={checks.uppercase} />
                    <CheckItem label="At least one lowercase letter (a-z)" passed={checks.lowercase} />
                    <CheckItem label="At least one number (0-9)" passed={checks.number} />
                    <CheckItem label="At least one symbol (!@#...)" passed={checks.symbol} />
                </ul>
                <Link href="/login/reset-password/success">
                    <button type="submit" className="w-full bg-[#004A40] hover:bg-green-800 text-white py-2 mt-8 rounded-full text-sm font-semibold">
                        Confirm
                    </button>
                </Link>
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
