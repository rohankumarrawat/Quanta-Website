<<<<<<< HEAD
import { categories, recentQuestions } from '../data/homeData';
import CategoryCard from '../components/cards/CategoryCard';
import QuestionCard from '../components/cards/QuestionCard';
import HomeHero from '../components/home/HomeHero';
import HomeStats from '../components/home/HomeStats';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
    return (
        <>
            <HomeHero />

            {/* Categories Section */}
            <section className="py-12 xl:pt-20">
                <div className="container">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {categories.map((cat, i) => (
                            <CategoryCard key={i} {...cat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Recently Answered Questions */}
            <section className="py-0 lg:py-12">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-8">
                        <h2>Recently answered questions</h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4">
                            {recentQuestions.map((q, i) => (
                                <QuestionCard key={i} {...q} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <HomeStats />
            <HomeCTA />
        </>
    );
}
=======
import { categories, recentQuestions } from '../data/homeData';
import CategoryCard from '../components/cards/CategoryCard';
import QuestionCard from '../components/cards/QuestionCard';
import HomeHero from '../components/home/HomeHero';
import HomeStats from '../components/home/HomeStats';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
    return (
        <>
            <HomeHero />

            {/* Categories Section */}
            <section className="py-12 xl:pt-20">
                <div className="container">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {categories.map((cat, i) => (
                            <CategoryCard key={i} {...cat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Recently Answered Questions */}
            <section className="py-0 lg:py-12">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-8">
                        <h2>Recently answered questions</h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4">
                            {recentQuestions.map((q, i) => (
                                <QuestionCard key={i} {...q} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <HomeStats />
            <HomeCTA />
        </>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
