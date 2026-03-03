import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: 'en', labelKey: 'languages.english' },
        { code: 'fr', labelKey: 'languages.french' },
        { code: 'es', labelKey: 'languages.spanish' },
        { code: 'de', labelKey: 'languages.german' }
    ];

    const changeLang = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
        setOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-body hover:text-primary transition-colors">
                <i className="bi bi-globe2 text-lg"></i>
                <span>{t('language')}</span>
            </button>
            {open && (
                <div className="absolute mt-2 right-0 bg-white border border-border-color rounded-md shadow-lg py-1 z-50">
                    {languages.map((l) => (
                        <button key={l.code} className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100" onClick={() => changeLang(l.code)}>
                            {t(l.labelKey)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
