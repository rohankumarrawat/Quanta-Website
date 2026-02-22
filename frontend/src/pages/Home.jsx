import { Link } from 'react-router-dom';

const categories = [
    { icon: '06', name: 'Law & Legal Issue' },
    { icon: '09', name: 'History' },
    { icon: '12', name: 'Language & Literature' },
    { icon: '11', name: 'Technology' },
    { icon: '02', name: 'Business & Finance' },
    { icon: '04', name: 'Health' },
    { icon: '08', name: 'Mechanics' },
    { icon: '10', name: 'Construction' },
    { icon: '01', name: 'Maths & Arithmetics' },
    { icon: '07', name: 'TV & News' },
    { icon: '05', name: 'Tax Accountants' },
    { icon: '03', name: 'All Categories' },
];

const recentQuestions = [
    { badge: 'Programmer', title: 'What is the difference between procedural and object-oriented programming?', time: '50 min ago', answers: 10, latest: '15 min ago' },
    { badge: 'Business', title: 'What is the role of market segmentation in marketing strategy?', time: '9 hours ago', answers: 18, latest: '7 hours ago' },
    { badge: 'History', title: 'What were the key events and consequences of the Cold War?', time: '2 hours ago', answers: 5, latest: '9 min ago' },
    { badge: 'Technology', title: 'What is the significance of cloud computing in modern IT infrastructure?', time: '8 hours ago', answers: 25, latest: '6 hours ago' },
];

const stats = [
    { value: '12K', label: 'Total Followers' },
    { value: '28,000+', label: 'Total Questions' },
    { value: '26,585+', label: 'Total Answers' },
];

export default function Home() {
    return (
        <>
            {/* Hero / Banner Section */}
            <section className="pb-0 lg:pb-12 pt-16 md:pt-20 relative">
                <div className="container relative">
                    {/* Background decoration */}
                    <div className="hidden lg:block">
                        <img src="/assets/images/elements/dark-bg-shape.png" className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-5 -ml-5 opacity-10" alt="" />
                    </div>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-0">
                            The Best Way to Get a Good{' '}
                            <span className="text-primary">Answer</span> is to Ask a Good{' '}
                            <span className="relative inline-block">
                                Question
                                <span className="absolute -bottom-2 left-0 right-0">
                                    <svg className="fill-primary w-full" viewBox="0 0 145.5 40.2" height="20">
                                        <path d="M45.7,30c-0.1-3.8,1.6-3.9,5.1-3.8c7.5,0.3,15-0.2,22.5-0.8c10.2-0.9,20.3-2.4,30.4-3.5c6.4-0.7,12.2-3.8,18.4-4.8c5.5-0.9,9.9-3.8,14.5-6.4c0.7-0.4,1.3-1.2,2-1.6c1.2-0.6,0.9-4.1,3.9-1.7c2.6,2,3.9,3.8,2.2,6.8c-2.6,4.5-7,6.5-11.5,8.5c-12.4,5.7-25.7,8.3-39,10.7c-14,2.6-28.2,3.6-42.4,3.3C46,36.6,40,36.8,34.2,34.9c3.5-1.5,7.1-0.5,10.7-0.7c4-0.2,7.9,0,11.9,0.2c1.2,0,2.3,0.1,2.8-1.3c0.5,0.3,0.9,0.9,1.4,0.9c8.8,0.6,17.4-0.3,26-1.9c0.7-0.1,0.5-0.9,0.5-1.4c0.5,0.8,1.2,1.3,2.1,1.2c6.3-1,12.6-1.5,18.6-3.9c-7,0.2-13.7,3.1-20.7,2.8c-9.2,1.9-18.6,2.3-28,2.4c-2.5,0.1-5,0.2-7.5,0.3c-2.2,0-1.9-0.1-2.9-2.4C48.8,30.1,47,29.9,45.7,30L45.7,30z" />
                                    </svg>
                                </span>
                            </span>
                        </h1>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <div className="bg-white rounded-lg py-2 px-4 text-sm font-medium text-heading flex items-center gap-2 shadow-sm">
                                <img src="/assets/images/elements/06.svg" className="h-5" alt="" />
                                Connect around the world
                            </div>
                            <div className="bg-white rounded-lg py-2 px-4 text-sm font-medium text-heading flex items-center gap-2 shadow-sm">
                                <img src="/assets/images/elements/07.svg" className="h-5" alt="" />
                                Free Asking
                            </div>
                            <div className="bg-white rounded-lg py-2 px-4 text-sm font-medium text-heading flex items-center gap-2 shadow-sm">
                                <img src="/assets/images/elements/04.svg" className="h-5" alt="" />
                                100% Trusted Answers
                            </div>
                        </div>

                        {/* Search */}
                        <form className="bg-white rounded-lg p-2 mt-6 shadow-sm">
                            <div className="flex">
                                <input className="flex-1 px-4 py-3 border-0 bg-transparent text-heading focus:outline-none" type="search" placeholder="What is your Question?" />
                                <button type="button" className="btn btn-primary btn-lg rounded-md">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-12 xl:pt-20">
                <div className="container">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {categories.map((cat, i) => (
                            <Link key={i} to="/category-detail" className="card flex items-center gap-3 p-3 h-full hover:shadow-md transition-shadow group">
                                <img src={`/assets/images/elements/category/${cat.icon}.svg`} className="h-10 w-10 flex-shrink-0" alt="" />
                                <h6 className="mb-0 text-sm group-hover:text-primary transition-colors">{cat.name}</h6>
                            </Link>
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
                                <div key={i} className="card p-4">
                                    <span className="badge badge-dark mb-2 inline-block">{q.badge}</span>
                                    <h5 className="card-title mb-1">
                                        <Link to="/answer-detail" className="text-heading hover:text-primary transition-colors">{q.title}</Link>
                                    </h5>
                                    <small className="text-body">Asked: {q.time}</small>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-1">
                                        <Link to="/answer-detail" className="text-sm text-primary">{q.answers} Answers</Link>
                                        <span className="text-sm text-body">Latest answer was {q.latest}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About / Stats Section */}
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
                                    {['15,000+ Category', 'State your question clearly', '375,000+ answered', 'Ad-free content'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <i className="bi bi-check-circle-fill text-success"></i> {item}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-2">
                                    {['30% study tools discount', 'PDF downloads', '5-star customer support'].map((item, i) => (
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

            {/* CTA Section */}
            <section className="py-0 lg:py-12">
                <div className="container">
                    <div className="bg-white p-8 sm:p-12 rounded-lg shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                                <h3 className="mb-2">What do you need to know?</h3>
                                <p className="text-body mb-0">Whether you&apos;re stuck on a history question or blocked by a geometry puzzle, there&apos;s no question too tricky for Brainy.</p>
                            </div>
                            <Link to="/ask-question" className="btn btn-dark whitespace-nowrap self-start">Ask a Question</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
