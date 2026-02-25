import { Link } from 'react-router';

export default function HomeCTA() {
    return (
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
    );
}
