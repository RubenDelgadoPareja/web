import es from './es.json';
import en from './en.json';

const resources = {
  es,
  en
} as const;

type Es = typeof es;
type En = typeof en;

export const translations = {
  es: es as Es,
  en: en as En,
} as const;

export type Language = keyof typeof translations;

export function getTranslations(lang: Language) {
  return translations[lang];
}

export function useTranslations(lang: Language) {
  const t = translations[lang];
  
  return {
    t: (key: string): string => {
      const keys = key.split('.');
      let result: unknown = t;
      for (const k of keys) {
        result = (result as Record<string, unknown>)?.[k];
      }
      return typeof result === 'string' ? result : key;
    },
  };
}
