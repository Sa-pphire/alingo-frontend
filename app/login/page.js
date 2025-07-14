'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PasswordField from '@/components/hidePassword';
import Link from 'next/link';
import GoogleLoginButton from '@/components/GoogleButton';
import { toast } from 'react-hot-toast';

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                const { token, user } = data;

                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));

                toast.success('Login successfully!');

                const isOnboarded = user.firstName && user.lastName && user.language;

                if (isOnboarded) {
                    router.push('/dashboard');
                } else {
                    router.push('/onboarding');
                }
            } else {
                toast.error(data.message || 'Login failed');
            }
        } catch (err) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="hidden sm:block text-center text-2xl sm:text-3xl font-bold text-[#004A40] mb-1">Sign In</h1>
            <p className="hidden sm:block text-center text-sm text-gray-600 mb-4">Let us get to know you more</p>

            <GoogleLoginButton />

            <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <span className="text-xs text-gray-500">OR</span>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>

            <form onSubmit={handleLogin} className="space-y-3 text-[#004A40] font-medium">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-100 border border-[#004A40] rounded-full px-8 py-2 text-sm focus:outline-none"
                />
                <PasswordField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <div className="text-right text-xs px-4 mt-2">
                    <Link href="/login/forgot-password" className="text-[#004A40] hover:underline">
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#004A40] hover:bg-green-800 text-white py-2 mt-4 rounded-full text-sm font-semibold flex items-center justify-center"
                >
                    {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        'Sign In'
                    )}
                </button>
            </form>

            <p className="text-xs text-center font-medium text-black mt-4">
                Don’t have an account?{' '}
                <Link href="/signup" className="text-[#004A40] hover:underline">
                    Sign Up
                </Link>
            </p>
        </div>
    );
}
