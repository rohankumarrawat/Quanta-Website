import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const followers = Array.from({ length: 8 }, (_, i) => ({
    name: ['Dennis Barrett', 'Judy Nguyen', 'Frances Guerrero', 'Billy Vasquez', 'Larry Lawson', 'Amanda Reed', 'Louis Burns', 'Carolyn Ortiz'][i],
    avatar: ['03.jpg', '01.jpg', '05.jpg', '08.jpg', '04.jpg', '06.jpg', '07.jpg', '02.jpg'][i],
    roleKey: `profile.followers.role${i + 1}`,
    mutual: [12, 8, 5, 18, 3, 15, 7, 10][i]
}));

export default function MyProfileFollower() {
    const { t } = useTranslation();

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {followers.map((f, i) => (
                <div key={i} className="card p-4 flex items-center gap-3">
                    <img className="w-12 h-12 rounded-full object-cover flex-shrink-0" src={`/assets/images/avatar/${f.avatar}`} alt="" />
                    <div className="flex-1 min-w-0">
                        <h6 className="mb-0 truncate">
                            <Link to="/profile" className="text-heading hover:text-primary">{f.name}</Link>
                        </h6>
                        <p className="text-xs text-body mb-0">{t(f.roleKey)}</p>
                        <p className="text-xs text-body mb-0">
                            {t('profile.followers.mutual', { count: f.mutual })}
                        </p>
                    </div>
                    <button className="btn btn-sm btn-primary-soft flex-shrink-0">
                        {t('profile.follow', 'Follow')}
                    </button>
                </div>
            ))}
        </div>
    );
}
