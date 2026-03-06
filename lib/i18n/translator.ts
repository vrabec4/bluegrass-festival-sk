import { defaultLocale, getMessages, type Locale, type Messages } from '@/lib/i18n/messages';

type TranslationValues = Record<string, string | number>;

export type TranslationFn = (key: string, values?: TranslationValues) => string;

function getByPath(messages: Messages, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object' && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, messages);
}

function applyValues(template: string, values?: TranslationValues): string {
  if (!values) {
    return template;
  }

  return Object.entries(values).reduce((result, [name, value]) => {
    return result.replaceAll(`{${name}}`, String(value));
  }, template);
}

export function createTranslator(locale: Locale = defaultLocale, messages?: Messages): TranslationFn {
  const resolvedMessages = messages ?? getMessages(locale);

  return (key: string, values?: TranslationValues) => {
    const resolved = getByPath(resolvedMessages, key);
    if (typeof resolved !== 'string') {
      return key;
    }

    return applyValues(resolved, values);
  };
}
