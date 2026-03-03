import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
const categoriesData = [
    { icon: '01', key: 'math_arithmetics', questions: 2450, followers: 1200 },
    { icon: '02', key: 'business_finance', questions: 3100, followers: 2500 },
    { icon: '03', key: 'science', questions: 1890, followers: 950 },
    { icon: '04', key: 'health', questions: 2200, followers: 1800 },
    { icon: '05', key: 'tax_accountants', questions: 890, followers: 650 },
    { icon: '06', key: 'law_legal', questions: 1560, followers: 1100 },
    { icon: '07', key: 'tv_news', questions: 780, followers: 520 },
    { icon: '08', key: 'mechanics', questions: 650, followers: 380 },
    { icon: '09', key: 'history', questions: 1200, followers: 870 },
    { icon: '10', key: 'construction', questions: 450, followers: 290 },
    { icon: '11', key: 'technology', questions: 4500, followers: 3200 },
    { icon: '12', key: 'language_literature', questions: 980, followers: 720 },
];
export default function Category() {
    const { t } = useTranslation();
    return (
        <section className="py-8"><div className="container">
            <div className="text-center mb-8"><h2 className="mb-2">{t('all_categories')}</h2><p className="text-body">{t('browse_categories_subtitle')}</p></div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoriesData.map((cat, i) => (
                    <Link key={i} to="/category-detail" className="card p-4 text-center hover:shadow-md transition-shadow group">
                        <img src={`/assets/images/elements/category/${cat.icon}.svg`} className="w-12 h-12 mx-auto mb-3" alt="" />
                        <h6 className="mb-2 group-hover:text-primary transition-colors">{t(`categories.${cat.key}`)}</h6>
                        <div className="flex justify-center gap-3 text-xs text-body">
                            <span>{cat.questions.toLocaleString()} {t('category_questions', {count: cat.questions})}}</span>
                            <span>{cat.followers.toLocaleString()} {t('category_followers', {count: cat.followers})}}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div></section>
    );
}
