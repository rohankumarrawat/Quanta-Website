import { Link } from 'react-router-dom';
export default function Error404() {
    return (
        <section className="py-0"><div className="container">
            <div className="flex justify-center items-center min-h-screen text-center py-8">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
                    <h2 className="mb-3">Oh no, something went wrong!</h2>
                    <p className="text-body mb-6">The page you're looking for doesn't exist or has been moved. Don't worry, it happens to the best of us.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link to="/" className="btn btn-primary">Go Home</Link>
                        <Link to="/help-center" className="btn btn-light">Help Center</Link>
                    </div>
                </div>
            </div>
        </div></section>
    );
}
