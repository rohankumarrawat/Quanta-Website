import { stats } from '../../data/homeData';
import { useTranslation } from 'react-i18next';

export default function HomeStats() {
    const { t } = useTranslation();
    const features = t('home_stats.features', { returnObjects: true });
    const additionalFeatures = t('home_stats.additional_features', { returnObjects: true });
    const statLabels = t('home_stats.stats_labels', { returnObjects: true });
    return (
        <section className="py-12">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:pr-8">
                        <img src="/assets/images/elements/18.svg" alt="" className="w-full max-w-md mx-auto" />
                    </div>
                    <div>
                        <h3 className="mb-3">{t('home_stats.heading')}</h3>
                        <p className="text-body mb-0">{t('home_stats.text')}</p>

                        <div className="grid sm:grid-cols-2 gap-2 my-6">
                            <ul className="space-y-2">
                                {features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <i className="bi bi-check-circle-fill text-success"></i> {item}
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2">
                                {additionalFeatures.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <i className="bi bi-check-circle-fill text-success"></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Counters */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((s, i) => (
                                <div key={i}>
                                    <h4 className="text-2xl font-bold mb-0">{s.value}</h4>
                                    <h6 className="text-sm font-normal text-body">{statLabels[i]}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
