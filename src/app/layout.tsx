import type { Metadata } from 'next';
import '../styles/globals.css';
import { fontMono } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'agenda.ai',
  description: 'Plataforma para agendar consultas',
  authors: [
    {
      name: 'Gabriel Ataide',
      url: 'https://www.linkedin.com/in/gabriel-ataidev/',
    },
  ],
  icons: [{ rel: 'icon', url: '/favicon.png' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontMono.className} antialiased`}>{children}</body>
    </html>
  );
}
