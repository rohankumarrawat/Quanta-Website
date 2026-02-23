export default function ContactUs() {
    return (
        <section className="py-8"><div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8"><h2 className="mb-2">Contact Us</h2><p className="text-body">Have a question or feedback? We'd love to hear from you.</p></div>
            <div className="grid lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
                <div className="lg:col-span-5">
                    <div className="card p-6">
                        <h5 className="mb-4">Get in Touch</h5>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><i className="bi bi-geo-alt"></i></div><div><h6 className="mb-0 text-sm">Address</h6><p className="text-sm text-body mb-0">123 Main Street, San Francisco, CA 94102</p></div></li>
                            <li className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><i className="bi bi-envelope"></i></div><div><h6 className="mb-0 text-sm">Email</h6><p className="text-sm text-body mb-0">hello@quanta.com</p></div></li>
                            <li className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><i className="bi bi-telephone"></i></div><div><h6 className="mb-0 text-sm">Phone</h6><p className="text-sm text-body mb-0">+1 (555) 123-4567</p></div></li>
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="card p-6">
                        <h5 className="mb-4">Send a Message</h5>
                        <form>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div><label className="form-label">First Name</label><input type="text" className="form-control" /></div>
                                <div><label className="form-label">Last Name</label><input type="text" className="form-control" /></div>
                            </div>
                            <div className="mb-4"><label className="form-label">Email</label><input type="email" className="form-control" /></div>
                            <div className="mb-4"><label className="form-label">Subject</label><input type="text" className="form-control" /></div>
                            <div className="mb-4"><label className="form-label">Message</label><textarea className="form-control" rows="4"></textarea></div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div></section>
    );
}
