import { Link } from 'react-router-dom';
const categories = [
    { icon: '01', name: 'Maths & Arithmetics', questions: 2450, followers: 1200 },
    { icon: '02', name: 'Business & Finance', questions: 3100, followers: 2500 },
    { icon: '03', name: 'Science', questions: 1890, followers: 950 },
    { icon: '04', name: 'Health', questions: 2200, followers: 1800 },
    { icon: '05', name: 'Tax Accountants', questions: 890, followers: 650 },
    { icon: '06', name: 'Law & Legal', questions: 1560, followers: 1100 },
    { icon: '07', name: 'TV & News', questions: 780, followers: 520 },
    { icon: '08', name: 'Mechanics', questions: 650, followers: 380 },
    { icon: '09', name: 'History', questions: 1200, followers: 870 },
    { icon: '10', name: 'Construction', questions: 450, followers: 290 },
    { icon: '11', name: 'Technology', questions: 4500, followers: 3200 },
    { icon: '12', name: 'Language & Literature', questions: 980, followers: 720 },
];
export default function Category() {
    return (
        <section className="py-8"><div className="container">
            <div className="text-center mb-8"><h2 className="mb-2">All Categories</h2><p className="text-body">Browse questions by category to find topics that interest you.</p></div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((cat, i) => (
                    <Link key={i} to="/category-detail" className="card p-4 text-center hover:shadow-md transition-shadow group">
                        <img src={`/assets/images/elements/category/${cat.icon}.svg`} className="w-12 h-12 mx-auto mb-3" alt="" />
                        <h6 className="mb-2 group-hover:text-primary transition-colors">{cat.name}</h6>
                        <div className="flex justify-center gap-3 text-xs text-body">
                            <span>{cat.questions.toLocaleString()} Questions</span>
                            <span>{cat.followers.toLocaleString()} Followers</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div></section>
    );
}
