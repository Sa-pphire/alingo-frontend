import './globals.css';
import Image from "next/image";
export const metadata = {
  title: 'Alingo',
  description: 'Learn African languages easily',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#004A40" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-scroll bg-origin-border bg-cover bg-center text-white overflow-hidden" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        {/* Logo */}
        <div className="absolute left-4 z-20">
          <Image
            src="/images/logo.png"
            alt="Alingo logo"
            width={224}
            height={64}
            className="hidden sm:block w-30 lg:w-50 h-auto"
            priority
          />
        </div>
        {children}
      </body>
    </html>
  );
}
