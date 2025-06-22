'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function VerifyEmail() {
    const [code, setCode] = useState(['', '', '', '']);

    return (
        <div className="px-8 w-full max-w-sm text-center">
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#004A40] mb-2">Verify Your Email</h1>
            <p className="text-xs sm:text-sm text-green-800 mb-4">Please enter the 4-digit code sent to <br />  <strong>hello@alingo.africa</strong></p>

            <div className="flex justify-center gap-2 mb-4">
                {code.map((digit, i) => (
                    <input
                        key={i}
                        id={`code-${i}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^[0-9]?$/.test(val)) {
                                const newCode = [...code];
                                newCode[i] = val;
                                setCode(newCode);

                                if (val && i < 3) {
                                    document.getElementById(`code-${i + 1}`).focus();
                                }
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Backspace') {
                                if (code[i] === '' && i > 0) {
                                    document.getElementById(`code-${i - 1}`).focus();
                                } else {
                                    const newCode = [...code];
                                    newCode[i] = '';
                                    setCode(newCode);
                                }
                            }
                        }}
                        className="w-12 h-12 border border-gray-300 rounded-md text-[#004A40] text-xl text-center focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#004A40]"
                    />
                ))}

            </div>

            <button className="text-xs text-black mb-3 hover:text-[#004A40]">Resend Code</button> 
            <Link href="/signup/verified">
                <button className="w-full bg-[#004A40] hover:bg-green-800 text-white py-2 rounded-full font-semibold mb-2">Confirm</button>
            </Link>
            <button className="text-xs text-black hover:text-[#004A40]">Change Email Address</button>
        </div>
    );
}
