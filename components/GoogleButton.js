'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function GoogleLoginButton() {
  const router = useRouter();
  const divRef = useRef();

  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = initializeGSI;
      document.body.appendChild(script);
    };

    const initializeGSI = () => {
      if (!window.google || !divRef.current) return;

      window.google.accounts.id.initialize({
        client_id: process.env.GOOGLE_CLIENT_ID,
        callback: async (response) => {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tokenId: response.credential }),
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
            alert(data.message || 'Login failed');
          }
        }
      });

      window.google.accounts.id.renderButton(divRef.current, {
        theme: 'outline',
        size: 'large',
        shape: 'pill',
        text: 'continue_with',
        logo_alignment: 'center',
        width: '300',
      });
    };

    loadGoogleScript();
  }, []);

  return (
    <div ref={divRef} className="flex justify-center p-1" />
  );
}
