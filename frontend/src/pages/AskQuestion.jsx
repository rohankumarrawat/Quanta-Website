import { Link } from 'react-router';

export default function AskQuestion() {
    return (
        <section className="py-8">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h2 className="mb-2">Ask a Public Question</h2>
                    <p className="text-body mb-6">Get help from the community by asking a well-formed question.</p>

                    <div className="card p-4 sm:p-6">
                        <form>
                            <div className="mb-4">
                                <label className="form-label">Question Title *</label>
                                <input type="text" className="form-control" placeholder="e.g. What is the difference between compiler and interpreter?" />
                                <p className="text-xs text-body mt-1">Be specific and imagine you're asking a question to another person.</p>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Description *</label>
                                <textarea className="form-control" rows="8" placeholder="Explain your question in detail..."></textarea>
                                <p className="text-xs text-body mt-1">Include all the information someone would need to answer your question.</p>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Category</label>
                                <select className="form-select">
                                    <option>Select category</option>
                                    <option>Technology</option>
                                    <option>Programming</option>
                                    <option>Business & Finance</option>
                                    <option>Health</option>
                                    <option>History</option>
                                    <option>Language & Literature</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Tags</label>
                                <input type="text" className="form-control" placeholder="e.g. javascript, react, css" />
                                <p className="text-xs text-body mt-1">Add up to 5 tags to describe what your question is about.</p>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Visibility</label>
                                <select className="form-select">
                                    <option>Public</option>
                                    <option>Friends</option>
                                    <option>Only me</option>
                                </select>
                            </div>

                            <div className="alert alert-success">
                                <h6 className="font-semibold mb-2">Guidelines for Receiving Quality Answers</h6>
                                <ul className="text-sm space-y-1 list-disc list-inside">
                                    <li>Ensure that your question hasn't been previously posed</li>
                                    <li>Keep your questions concise and focused for optimal clarity</li>
                                    <li>Double check grammar and spelling</li>
                                </ul>
                            </div>

                            <div className="flex gap-3">
                                <button type="submit" className="btn btn-primary">Post Question</button>
                                <button type="button" className="btn btn-light">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
