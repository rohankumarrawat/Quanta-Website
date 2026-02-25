import { Link } from 'react-router';
import { forumCategories, recentTopics } from '../data/forumData';
import ForumCategoryCard from '../components/cards/ForumCategoryCard';
import ForumTopicRow from '../components/forum/ForumTopicRow';

export default function Forum() {
    return (
        <section className="py-8">
            <div className="container">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="mb-1">Forum</h2>
                        <p className="text-body mb-0">Join the discussion and share your knowledge with the community.</p>
                    </div>
                    <Link to="/ask-question" className="btn btn-primary self-start">Create New Topic</Link>
                </div>

                {/* Forum Categories */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {forumCategories.map((cat, i) => (
                        <ForumCategoryCard key={i} {...cat} />
                    ))}
                </div>

                {/* Recent Topics */}
                <h4 className="mb-4">Recent Topics</h4>
                <div className="card">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Topic</th>
                                    <th className="text-center">Replies</th>
                                    <th className="text-center">Views</th>
                                    <th>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTopics.map((topic, i) => (
                                    <ForumTopicRow key={i} {...topic} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
