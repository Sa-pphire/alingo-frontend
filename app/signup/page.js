'use client';
import Link from 'next/link';
import GoogleLoginButton from '@/components/GoogleButton';
import { useState, useEffect } from 'react';
import PasswordField from '@/components/hidePassword';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (email) {
            localStorage.setItem('email', email);
        }
    }, [email]);



    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Sign Up Successful! Otp sent to email');
                router.push('/signup/verify-email');
            } else {
                toast.error(data.message || 'Sign Up failed');
            }
        } catch (err) {
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <h1 className="hidden sm:block text-center text-2xl sm:text-3xl font-bold text-[#004A40] mb-1">Sign Up</h1>
            <p className="hidden sm:block text-center text-sm text-gray-600 mb-4">Let us get to know you more</p>

            <GoogleLoginButton />

            <div className="flex items-center gap-2 my-2">
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <span className="text-xs text-gray-500">OR</span>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-[#004A40] font-medium">
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 border border-[#004A40] rounded-full px-8 py-2 text-sm focus:outline-none"
                    required
                />
                <PasswordField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <PasswordField
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />

                <ul className="text-xs">
                    <CheckItem label="At least 8 characters" passed={checks.length} />
                    <CheckItem label="At least one uppercase letter (A-Z)" passed={checks.uppercase} />
                    <CheckItem label="At least one lowercase letter (a-z)" passed={checks.lowercase} />
                    <CheckItem label="At least one number (0-9)" passed={checks.number} />
                    <CheckItem label="At least one symbol (!@#...)" passed={checks.symbol} />
                </ul>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-[#004A40] text-white py-2 rounded-full mt-2 text-sm font-semibold transition 
              ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-900'}`}
                >
                    {loading ? (
                        <span className="flex justify-center items-center">
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                />
                            </svg>
                        </span>
                    ) : (
                        'Sign Up'
                    )}
                </button>


            </form>

            <p className="text-xs text-center font-medium text-black mt-1">
                Already have an account?{' '}
                <Link href="/login" className="text-[#004A40] hover:underline">
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
