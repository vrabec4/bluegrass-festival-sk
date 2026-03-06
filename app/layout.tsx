import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bluegrass na dobrom mieste',
  description: 'Jednodnovy bluegrass festival na Slovensku. 5 kapiel, jeden den, vstupne dobrovolne.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body>
        <div className="festival-shell">
          <div className="festival-overlay min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
