'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error('Please enter your email.');

    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/request-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('resetEmail', email);
        toast.success('OTP sent to your email.');
        router.push('/login/forgot-password/reset');
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      toast.error('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='px-5'>
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#004A40] sm:mt-6 mb-1">Forgot Password?</h1>
      <p className="text-center text-xs sm:text-md text-green-800 mb-4">
        Please enter the email associated with your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-3 mt-10 mb-25 text-[#004A40] font-medium">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full bg-gray-100 border border-[#004A40] rounded-full px-8 py-2 text-sm focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#004A40] hover:bg-green-800 text-white py-2 mt-8 rounded-full text-sm font-semibold"
        >
          {loading ? 'Sending...' : 'Send Code'}
        </button>
      </form>
    </div>
  );
}
