import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const answers = [
    { user: 'Dennis Barrett', avatar: '03.jpg', index: 0, votes: 36, accepted: true },
    { user: 'Judy Nguyen', avatar: '01.jpg', index: 1, votes: 12, accepted: false },
    { user: 'Frances Guerrero', avatar: '05.jpg', index: 2, votes: 8, accepted: false },
];

export default function AnswerDetail() {
    const { t } = useTranslation();
    const tags = ['programming', 'compiler', 'interpreter'];

    return (
        <section className="py-8">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* Question */}
                        <div className="card p-4 sm:p-6 mb-4">
                            <div className="flex gap-4">
                                {/* Vote */}
                                <div className="flex flex-col items-center gap-1 pt-1">
                                    <button className="text-body hover:text-primary"><i className="bi bi-caret-up-fill text-xl"></i></button>
                                    <span className="font-semibold text-heading text-lg">25</span>
                                    <button className="text-body hover:text-primary"><i className="bi bi-caret-down-fill text-xl"></i></button>
                                </div>
                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="badge badge-dark">{t('role_programmer','Programmer')}</span>
                                        <span className="badge bg-success/10 text-success">{t('answered','Answered')}</span>
                                    </div>
                                    <h4 className="mb-2">{t('ansdetail.question_title', 'What is the difference between a compiler and an interpreter?')}</h4>
                                    <div className="flex items-center gap-2 text-sm text-body mb-4">
                                        <Link to="/profile" className="text-primary">Larry Lawson</Link>
                                        <span>•</span>
                                        <span>{t('asked','Asked:')} 07 Nov 2024</span>
                                    </div>
                                    <p className="text-body leading-relaxed">{t('ansdetail.question_body', "I'm trying to understand the fundamental difference between compilers and interpreters. Could someone explain this clearly with examples? I understand that both are language translators, but I'm confused about their working mechanisms.")}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {tags.map((tag) => (
                                            <span key={tag} className="bg-gray-100 text-body text-xs px-3 py-1 rounded-full">{t(`tag.${tag}`, tag)}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-color text-sm">
                                        <Link to="#" className="text-body hover:text-primary"><i className="fa-regular fa-message mr-1"></i>{t('answers_count',{count:15})}</Link>
                                        <span className="text-body"><i className="fa-regular fa-eye mr-1"></i>{t('views',{count:102})}</span>
                                        <button className="text-body hover:text-primary ml-auto"><i className="bi bi-share"></i></button>
                                        <button className="text-body hover:text-primary"><i className="fa-regular fa-bookmark"></i></button>
                                        <button className="text-body hover:text-primary"><i className="fa-regular fa-flag"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Answers */}
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="mb-0">{t('answers_count',{count:answers.length})}</h5>
                            <select className="form-select w-auto text-sm">
                                <option>{t('sort.most_recent','Most recent')}</option>
                                <option>{t('sort.oldest_first','Oldest first')}</option>
                                <option>{t('sort.most_voted','Most voted')}</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            {answers.map((a) => (
                                <div key={a.index} className={`card p-4 sm:p-6 ${a.accepted ? 'border-success border-2' : ''}`}>
                                    <div className="flex gap-4">
                                        {/* Vote */}
                                        <div className="flex flex-col items-center gap-1">
                                            <button className="text-body hover:text-primary"><i className="bi bi-hand-thumbs-up-fill"></i></button>
                                            <span className="font-semibold text-heading">{a.votes}</span>
                                            <button className="text-body hover:text-primary"><i className="bi bi-hand-thumbs-down-fill"></i></button>
                                        </div>
                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <img className="w-9 h-9 rounded-full object-cover" src={`/assets/images/avatar/${a.avatar}`} alt="" />
                                                <div>
                                                    <Link to="/profile" className="font-semibold text-heading text-sm">{a.user}</Link>
                                                    <p className="text-xs text-body mb-0">{t(`ansdetail.answers.${a.index}.time`)}</p>
                                                </div>
                                                {a.accepted && (
                                                    <span className="badge bg-success text-white ml-auto">
                                                        <i className="bi bi-check-circle mr-1"></i>{t('accepted')}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-body leading-relaxed mb-0">{t(`ansdetail.answers.${a.index}.text`)}</p>
                                            <div className="flex items-center gap-3 mt-3 text-sm">
                                                <button className="text-body hover:text-primary"><i className="bi bi-reply mr-1"></i>{t('reply')}</button>
                                                <button className="text-body hover:text-primary"><i className="bi bi-share mr-1"></i>{t('share')}</button>
                                                <button className="text-body hover:text-primary"><i className="bi bi-flag mr-1"></i>{t('report')}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Answer */}
                        <div className="card p-4 sm:p-6 mt-6">
                            <h5 className="mb-4">{t('your_answer')}</h5>
                            <textarea className="form-control mb-3" rows="5" placeholder={t('placeholder.write_answer','Write your answer here...')}></textarea>
                            <button className="btn btn-primary">{t('post_your_answer')}</button>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4">
                        {/* Related Questions */}
                        <div className="card p-4 mb-4">
                            <h6 className="mb-3">{t('related_questions','Related Questions')}</h6>
                            <ul className="space-y-3">
                                {['What is the difference between JVM, JRE, and JDK?', 'How does garbage collection work in Java?', 'Explain polymorphism in object-oriented programming', 'What are the SOLID principles?'].map((q, i) => (
                                    <li key={i}><Link to="/answer-detail" className="text-sm text-body hover:text-primary">{q}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Trending Tags */}
                        <div className="card p-4 mb-4">
                            <h6 className="mb-3">{t('trending_tags','Trending Tags')}</h6>
                            <div className="flex flex-wrap gap-2">
                                {['javascript', 'python', 'react', 'node.js', 'css', 'html', 'typescript', 'sql'].map((tag, i) => (
                                    <Link key={i} to="/category" className="bg-gray-100 hover:bg-primary hover:text-white text-body text-xs px-3 py-1.5 rounded-full transition-colors">{t(`tag.${tag}`, tag)}</Link>
                                ))}
                            </div>
                        </div>

                        {/* Join Community */}
                        <div className="card p-4 text-center">
                            <img src="/assets/images/elements/18.svg" className="w-24 mx-auto mb-3" alt="" />
                            <h6>{t('join_community.heading','Join the Community')}</h6>
                            <p className="text-sm text-body mb-3">{t('join_community.text','Get answers to your questions from experts.')}</p>
                            <Link to="/signup" className="btn btn-primary btn-sm w-full">{t('join_community.button','Join Free')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
