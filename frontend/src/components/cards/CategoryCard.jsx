import { Link } from 'react-router';

export default function CategoryCard({ icon, name, to = "/category-detail" }) {
    return (
        <Link to={to} className="card flex items-center gap-3 p-3 h-full hover:shadow-md transition-shadow group">
            <img src={`/assets/images/elements/category/${icon}.svg`} className="h-10 w-10 flex-shrink-0" alt="" />
            <h6 className="mb-0 text-sm group-hover:text-primary transition-colors">{name}</h6>
        </Link>
    );
}
