'use client';
import { useState, useEffect  } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ForgotPasswordReset() {
    const [code, setCode] = useState(['', '', '', '']);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
     const [email, setEmail] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedEmail = localStorage.getItem('resetEmail');
            if (!storedEmail) {
                toast.error("No email found, please enter email again.");
                router.push('/login/forgot-password');
            } else {
                setEmail(storedEmail);
            }
        }
    }, []);
    const handleSubmit = async () => {
        const otp = code.join('');

        if (otp.length < 4) {
            toast.error('Please enter all 4 digits');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('OTP verified');
                localStorage.setItem('otp', otp);
                router.push('/login/reset-password');
            } else {
                toast.error(data.message || 'Invalid OTP');
            }
        } catch (err) {
            toast.error('Server error');
        } finally {
            setLoading(false);
        }
    };
    const handleResend = async () => {
        if (!email) {
            toast.error("No email found. Please sign up again.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/request-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();
            if (res.ok) {
                toast.success('OTP resent successfully!');
            } else {
                toast.error(data.message || 'Failed to resend OTP.');
            }
        } catch (err) {
            toast.error('Server error while resending.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-6 pb-8 pt-6 w-full max-w-sm text-center">
            <h1 className="text-xl sm:text-3xl font-extrabold text-[#004A40] mb-2">Enter Your Code</h1>
            <p className="text-xs sm:text-sm text-green-900 mb-4">
                Please enter the 4-digit code sent to <br />
                <strong>{email || 'your email'}</strong>
            </p>

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
                                    document.getElementById(`code-${i + 1}`)?.focus();
                                }
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Backspace') {
                                if (code[i] === '' && i > 0) {
                                    document.getElementById(`code-${i - 1}`)?.focus();
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

            <button
                onClick={handleResend}
                disabled={loading}
                className="text-xs text-black mb-3 hover:text-[#004A40] disabled:opacity-50"
            >
                                {loading ? (
                    <svg className="animate-spin w-5 h-5 mx-auto text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                ) : (
                    'Resend Code'
                )}
            </button>

            <button
                onClick={handleSubmit}
                className="w-full bg-[#004A40] hover:bg-green-800 text-white py-2 rounded-full font-semibold mb-2"
                disabled={loading}
            >
                {loading ? (
                    <svg className="animate-spin w-5 h-5 mx-auto text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                ) : (
                    'Confirm'
                )}
            </button>
            <button
                className="text-xs text-black hover:text-[#004A40] mt-2"
                onClick={() => router.push('/login')}
            >
                Change Email Address
            </button>
        </div>
    );
}
