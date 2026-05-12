import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WhatsApp Web Clone',
  description: 'Clon de WhatsApp Web hecho con Next.js',
  icons: { icon: '/whatsapp-icon.png' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#111b21] text-white">{children}</body>
    </html>
  );
}
