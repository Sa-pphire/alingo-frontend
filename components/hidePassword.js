'use client';

import { useState } from 'react';

export default function PasswordField({ value, onChange, placeholder = 'Enter your password' }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-100 border border-[#004A40] rounded-full px-8 py-2 text-sm focus:outline-none"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
      >
        {show ? (
          // Eye closed icon
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.002.153-1.967.438-2.875m1.057-2.11A9.985 9.985 0 0112 3c5.523 0 10 4.477 10 10 0 1.343-.265 2.625-.75 3.8M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ) : (
          // Eye open icon
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7" />
          </svg>
        )}
      </button>
    </div>
  );
}
