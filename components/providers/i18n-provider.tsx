'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { createTranslator, type TranslationFn } from '@/lib/i18n';
import type { Locale, Messages } from '@/lib/i18n';

type I18nContextValue = {
  locale: Locale;
  t: TranslationFn;
};

const I18nContext = createContext<I18nContextValue | null>(null);

type I18nProviderProps = {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
};

export function I18nProvider({ locale, messages, children }: I18nProviderProps) {
  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      t: createTranslator(locale, messages),
    };
  }, [locale, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }

  return context;
}
