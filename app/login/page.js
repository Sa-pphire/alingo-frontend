'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
    return (
        <div>
            {/* Title */}
            <h1 className="hidden sm:block text-center text-2xl sm:text-3xl font-bold text-[#004A40] mb-1">Sign In</h1>
            <p className="hidden sm:block text-center text-sm text-gray-600 mb-4">Let us get to know you more</p>

            {/* Google Button */}
            <button className="flex items-center justify-center gap-2 w-full border border-black rounded-md py-2 hover:bg-gray-100 transition">
                <Image src="/images/google.svg" alt="Google icon" width={20} height={20} />
                <span className="text-sm text-gray-800">Sign in with Google</span>
            </button>

            {/* OR Divider */}
            <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <span className="text-xs text-gray-500">OR</span>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>

            {/* Form */}
            <form className="space-y-3 text-[#004A40] font-medium">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-100 border border-[#004A40] rounded-full px-8 py-2 text-sm focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-100 border border-[#004A40] rounded-full px-8 py-2 mb-0 text-sm focus:outline-none"
                />
                <Link href="/login/forgot-password" className="text-xs px-4 mt-4 text-[#004A40] hover:underline">
                    Forgot Password
                </Link>
                <Link href="/onboarding">
                    <button type="submit" className="w-full bg-[#004A40] hover:bg-green-800 text-white py-2 mt-10 rounded-full text-sm font-semibold" >
                        Sign In
                    </button>
                </Link>

            </form>

            {/* Footer */}
            <p className="text-xs text-center font-medium text-black mt-4">
                Don't have an account?{' '}
                <Link href="/signup" className="text-[#004A40] hover:underline">
                    Sign Up
                </Link>
            </p>
        </div>
    );
}
