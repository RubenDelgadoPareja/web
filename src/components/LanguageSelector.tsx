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
    <div className="flex items-center gap-1 bg-stone-100 rounded-lg p-1">
      {languages.map(({ code, label, href }) => (
        <a
          key={code}
          href={href}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
            currentLang === code
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-stone-500 hover:text-stone-700 hover:bg-stone-200'
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
