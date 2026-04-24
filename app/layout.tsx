import type { Metadata } from 'next';
import { I18nProvider } from '@/components/providers/i18n-provider';
import { createTranslator, defaultLocale, getMessages } from '@/lib/i18n';
import './globals.css';

const locale = defaultLocale;
const t = createTranslator(locale);

export const metadata: Metadata = {
  title: t('metadata.siteTitle'),
  description: t('metadata.siteDescription'),
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = getMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="preload" as="image" href="/images/logo.webp" fetchPriority="high" />
      </head>
      <body>
        <I18nProvider locale={locale} messages={messages}>
          <div className="festival-shell" id="top">
            <div className="festival-overlay min-h-screen">{children}</div>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
