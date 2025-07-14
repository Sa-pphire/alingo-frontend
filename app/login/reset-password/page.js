'use client';
import { useState, useEffect } from 'react';
import PasswordField from '@/components/hidePassword';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedEmail = localStorage.getItem('resetEmail');
            const resetOtp = localStorage.getItem('otp')
            if (!storedEmail) {
                toast.error("No email found, please enter email again.");
                router.push('/login/forgot-password');
            } else {
                setEmail(storedEmail);
                setOtp(resetOtp)
            }
        }
    }, []);

    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const isValid = Object.values(checks).every(Boolean) && password === confirm;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !otp) {
            toast.error('Missing credentials. Start reset process again.');
            return;
        }

        if (password !== confirm) {
            toast.error("Passwords don't match");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp, newPassword: password }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Password reset successfully');
                localStorage.removeItem('resetEmail');
                localStorage.removeItem('otp');
                router.push('/login');
            } else {
                toast.error(data.message || 'Reset failed');
            }
        } catch (err) {
            toast.error('Server error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-5">
            <h1 className="text-center text-2xl sm:text-3xl mt-6 font-bold text-[#004A40] mb-1">Set New Password</h1>

            <form className="space-y-3 text-[#004A40] mt-10 font-medium" onSubmit={handleSubmit}>
                <PasswordField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New password"
                />
                <PasswordField
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Confirm New Password"
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
                    disabled={!isValid || loading}
                    className={`w-full mt-8 py-2 rounded-full text-sm font-semibold transition text-white ${isValid ? 'bg-[#004A40] hover:bg-green-800' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    {loading ? 'Resetting...' : 'Confirm'}
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
