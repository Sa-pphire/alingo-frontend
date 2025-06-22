'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
    return (
        <div className='px-5'>
            {/* Title */}
            <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#004A40] sm:mt-6 mb-1">Forgot Password?</h1>
            <p className="text-center text-xs sm:text-md text-green-800 mb-4">Please enter the email associated with your account</p>

            {/* Form */}
            <form className="space-y-3 mt-10 mb-25 text-[#004A40] font-medium">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-100 border border-[#004A40] rounded-full px-8 py-2 text-sm focus:outline-none"
                />

                <button
                    type="submit"
                    className="w-full bg-[#004A40] hover:bg-green-800 text-white py-2 mt-8 rounded-full text-sm font-semibold"
                >
                    Send Code
                </button>
            </form>
        </div>
    );
}
