export default function ComingSoon() {
    return (
        <section className="py-0"><div className="container">
            <div className="flex justify-center items-center min-h-screen text-center py-8">
                <div className="max-w-lg">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="bi bi-rocket-takeoff-fill text-4xl text-primary"></i>
                    </div>
                    <h1 className="text-4xl font-bold mb-3">Coming Soon</h1>
                    <p className="text-body mb-6">We're working hard to bring you something amazing. Stay tuned for updates!</p>
                    <form className="max-w-sm mx-auto">
                        <div className="flex">
                            <input type="email" className="form-control rounded-r-none" placeholder="Enter your email" />
                            <button type="button" className="btn btn-primary rounded-l-none">Notify Me</button>
                        </div>
                    </form>
                    <p className="text-sm text-body mt-4">Get notified when we launch. No spam, we promise!</p>
                </div>
            </div>
        </div></section>
    );
}
