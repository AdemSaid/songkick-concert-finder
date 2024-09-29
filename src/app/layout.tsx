import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Songkick Concert Finder',
  description: 'Find upcoming concerts for your favorite artists',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Songkick Concert Finder</h1>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 Songkick Concert Finder</p>
          </footer>
        </div>
      </body>
    </html>
  );
}