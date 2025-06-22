import './globals.css';

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
      <body className="min-h-screen bg-scroll bg-origin-border bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        {children}
      </body>
    </html>
  );
}
