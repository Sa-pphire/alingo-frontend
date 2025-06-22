'use client';

import { useState } from 'react';

export default function ForgotPasswordReset() {
    const [code, setCode] = useState(['', '', '', '']);

    return (
        <div className="px-6 pb-8 pt-6 w-full max-w-sm text-center">
            <h1 className="text-xl sm:text-3xl font-extrabold text-[#004A40] mb-2">Enter Your Code</h1>
            <p className="text-xs sm:text-sm text-green-900 mb-4">Please enter the 4-digit code sent to <br />  <strong>hello@alingo.africa</strong></p>
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

            <button className="text-sm text-black mb-3 hover:text-[#004A40]">Resend Code</button>

            <button className="w-full bg-[#004A40] hover:bg-green-900 text-white py-2 rounded-full font-semibold mb-2">Confirm</button>

            <button className="text-sm text-black hover:text-[#004A40]">Change Email Address</button>
        </div>
    );
}
