import { Link } from 'react-router';

import { useTranslation, Trans } from 'react-i18next';
import { forumCategories } from '../data/forumData';

export default function AskQuestion() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    return (
        <section className="py-8">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h2 className="mb-2">{t('ask_question.page_title')}</h2>
                    <p className="text-body mb-6">{t('ask_question.page_subtitle')}</p>

                    <div className="card p-4 sm:p-6">
                        <form>
                            <div className="mb-4">
                                <label className="form-label">{t('ask_question.field_title')}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={t('ask_question.placeholder_title')}
                                />
                                <p className="text-xs text-body mt-1">
                                    {t('ask_question.guidelines.list.0')}
                                </p>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">{t('ask_question.field_description')}</label>
                                <textarea
                                    className="form-control"
                                    rows="8"
                                    placeholder={t('ask_question.placeholder_description')}
                                ></textarea>
                                <p className="text-xs text-body mt-1">
                                    {t('ask_question.guidelines.list.2')}
                                </p>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">{t('ask_question.field_category')}</label>
                                <select className="form-select">
                                    <option value="">{t('select_category', 'Select category')}</option>
                                    {forumCategories.map((cat, ix) => {
                                        const label = typeof cat.name === 'object' ? cat.name[lang] || cat.name.en : cat.name;
                                        return (
                                            <option key={ix} value={label.toLowerCase()}>
                                                {label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">{t('ask_question.field_tags')}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={t('ask_question.placeholder_tags')}
                                />
                                <p className="text-xs text-body mt-1">
                                    {t('ask_question.guidelines.list.1')}
                                </p>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">{t('ask_question.field_visibility')}</label>
                                <select className="form-select">
                                    <option>{t('ask_question.submit')}</option>
                                </select>
                            </div>

                            <div className="alert alert-success">
                                <h6 className="font-semibold mb-2">
                                    {t('ask_question.guidelines.heading')}
                                </h6>
                                <ul className="text-sm space-y-1 list-disc list-inside">
                                    {t('ask_question.guidelines.list', { returnObjects: true }).map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-3">
                                <button type="submit" className="btn btn-primary">
                                    {t('ask_question.submit')}
                                </button>
                                <button type="button" className="btn btn-light">
                                    {t('ask_question.cancel')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
