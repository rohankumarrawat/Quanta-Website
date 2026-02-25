import { Link } from 'react-router';

export default function HomeHero() {
    return (
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
                    <form className="bg-white rounded-lg p-2 mt-6 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex">
                            <input className="flex-1 px-4 py-3 border-0 bg-transparent text-heading focus:outline-none" type="search" placeholder="What is your Question?" />
                            <button type="submit" className="btn btn-primary btn-lg rounded-md">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
