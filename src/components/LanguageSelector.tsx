import React from 'react';

interface Props {
  currentLang: 'es' | 'en';
}

export default function LanguageSelector({ currentLang }: Props) {
  const languages = [
    { code: 'es', label: 'ES', href: '/' },
    { code: 'en', label: 'EN', href: '/en/' },
  ] as const;

  return (
    <div className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-stone-300 bg-stone-100 p-1 dark:border-stone-600 dark:bg-stone-800">
      {languages.map(({ code, label, href }) => (
        <a
          key={code}
          href={href}
          aria-current={currentLang === code ? 'page' : undefined}
          className={`rounded-md px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wide transition-colors sm:px-3 sm:text-xs ${
            currentLang === code
              ? 'bg-white text-stone-900 dark:bg-stone-700 dark:text-white'
              : 'text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
