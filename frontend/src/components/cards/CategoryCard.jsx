import { Link } from 'react-router';

import { useTranslation } from 'react-i18next';

export default function CategoryCard({ icon, name, categoryKey, to = "/category-detail" }) {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];
    
    let displayName;
    if (categoryKey) {
        displayName = t(`categories.${categoryKey}`);
    } else if (typeof name === 'object') {
        displayName = name[lang] || name.en;
    } else {
        displayName = name;
    }

    return (
        <Link to={to} className="card flex items-center gap-3 p-3 h-full hover:shadow-md transition-shadow group">
            <img src={`/assets/images/elements/category/${icon}.svg`} className="h-10 w-10 flex-shrink-0" alt="" />
            <h6 className="mb-0 text-sm group-hover:text-primary transition-colors">{displayName}</h6>
        </Link>
    );
}
