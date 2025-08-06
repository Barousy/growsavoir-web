import '../styles/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}