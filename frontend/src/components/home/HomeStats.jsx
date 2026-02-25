import { features, additionalFeatures, stats } from '../../data/homeData';

export default function HomeStats() {
    return (
        <section className="py-12">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:pr-8">
                        <img src="/assets/images/elements/18.svg" alt="" className="w-full max-w-md mx-auto" />
                    </div>
                    <div>
                        <h3 className="mb-3">We'll help your grades soar</h3>
                        <p className="text-body mb-0">Start your 48-hour free trial and unlock all the summaries, Q&A, and analyses you need to get better grades now.</p>

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
                                    <h6 className="text-sm font-normal text-body">{s.label}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
