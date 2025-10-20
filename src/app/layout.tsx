import type { ReactNode } from 'react';
// @ts-ignore
import './globals.css';

export const metadata = {
  title: 'toschaef.dev',
  description: 'Wip portfolio site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-gray-200 min-h-screen font-sans">
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}