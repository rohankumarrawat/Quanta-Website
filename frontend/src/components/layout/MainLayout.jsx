import Header from './Header';
import Footer from './Footer';
import BackToTop from '../common/BackToTop';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
