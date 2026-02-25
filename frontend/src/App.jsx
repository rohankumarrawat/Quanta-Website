import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import AuthLayout from './components/layout/AuthLayout';
import ScrollToTop from './components/common/ScrollToTop';

// Loading Component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

// Pages - Auth
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

// Pages - Main
const Home = lazy(() => import('./pages/Home'));
const AnswerDetail = lazy(() => import('./pages/AnswerDetail'));
const AskQuestion = lazy(() => import('./pages/AskQuestion'));

// Forum
const Forum = lazy(() => import('./pages/Forum'));
const ForumCategory = lazy(() => import('./pages/ForumCategory'));
const ForumDetail = lazy(() => import('./pages/ForumDetail'));

// Help Center
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const HelpDetail = lazy(() => import('./pages/HelpDetail'));
const Support = lazy(() => import('./pages/Support'));
const FAQs = lazy(() => import('./pages/FAQs'));

// Tickets
const TicketHome = lazy(() => import('./pages/TicketHome'));
const TicketList = lazy(() => import('./pages/TicketList'));
const TicketReply = lazy(() => import('./pages/TicketReply'));
const TicketCreate = lazy(() => import('./pages/TicketCreate'));

// Discussion
const Discussion = lazy(() => import('./pages/Discussion'));

// Categories
const Category = lazy(() => import('./pages/Category'));
const CategoryDetail = lazy(() => import('./pages/CategoryDetail'));
const CategoryPost = lazy(() => import('./pages/CategoryPost'));
const CategoryQuestion = lazy(() => import('./pages/CategoryQuestion'));

// Groups
const Group = lazy(() => import('./pages/Group'));
const GroupDetail = lazy(() => import('./pages/GroupDetail'));

// Communities
const Communities = lazy(() => import('./pages/Communities'));

// Blog
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));

// Profile
const MyProfile = lazy(() => import('./pages/MyProfile'));
const MyProfilePost = lazy(() => import('./pages/MyProfilePost'));
const MyProfileQuestion = lazy(() => import('./pages/MyProfileQuestion'));
const MyProfileFollower = lazy(() => import('./pages/MyProfileFollower'));
const MyProfileAchievement = lazy(() => import('./pages/MyProfileAchievement'));

// Account
const Settings = lazy(() => import('./pages/Settings'));
const Notification = lazy(() => import('./pages/Notification'));

// Static pages
const About = lazy(() => import('./pages/About'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const TermsAndCondition = lazy(() => import('./pages/TermsAndCondition'));

// Error
const Error404 = lazy(() => import('./pages/Error404'));

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        {/* Auth pages (no header/footer) */}
                        <Route path="/signin" element={<AuthLayout><SignIn /></AuthLayout>} />
                        <Route path="/signup" element={<AuthLayout><SignUp /></AuthLayout>} />
                        <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />
                        <Route path="/coming-soon" element={<AuthLayout><ComingSoon /></AuthLayout>} />

                        {/* Main pages (with header/footer) */}
                        <Route path="/" element={<MainLayout><Home /></MainLayout>} />

                        {/* Q&A */}
                        <Route path="/answer-detail" element={<MainLayout><AnswerDetail /></MainLayout>} />
                        <Route path="/ask-question" element={<MainLayout><AskQuestion /></MainLayout>} />

                        {/* Forum */}
                        <Route path="/forum" element={<MainLayout><Forum /></MainLayout>} />
                        <Route path="/forum-category" element={<MainLayout><ForumCategory /></MainLayout>} />
                        <Route path="/forum-detail" element={<MainLayout><ForumDetail /></MainLayout>} />

                        {/* Help Center */}
                        <Route path="/help-center" element={<MainLayout><HelpCenter /></MainLayout>} />
                        <Route path="/help-detail" element={<MainLayout><HelpDetail /></MainLayout>} />
                        <Route path="/support" element={<MainLayout><Support /></MainLayout>} />
                        <Route path="/faqs" element={<MainLayout><FAQs /></MainLayout>} />

                        {/* Tickets */}
                        <Route path="/tickets" element={<MainLayout><TicketHome /></MainLayout>} />
                        <Route path="/ticket-list" element={<MainLayout><TicketList /></MainLayout>} />
                        <Route path="/ticket-reply" element={<MainLayout><TicketReply /></MainLayout>} />
                        <Route path="/ticket-create" element={<MainLayout><TicketCreate /></MainLayout>} />

                        {/* Discussion */}
                        <Route path="/discussion" element={<MainLayout><Discussion /></MainLayout>} />

                        {/* Categories */}
                        <Route path="/category" element={<MainLayout><Category /></MainLayout>} />
                        <Route path="/category-detail" element={<MainLayout><CategoryDetail /></MainLayout>} />
                        <Route path="/category-post" element={<MainLayout><CategoryPost /></MainLayout>} />
                        <Route path="/category-question" element={<MainLayout><CategoryQuestion /></MainLayout>} />

                        {/* Groups */}
                        <Route path="/groups" element={<MainLayout><Group /></MainLayout>} />
                        <Route path="/group-detail" element={<MainLayout><GroupDetail /></MainLayout>} />

                        {/* Communities */}
                        <Route path="/communities" element={<MainLayout><Communities /></MainLayout>} />

                        {/* Blog */}
                        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
                        <Route path="/blog-detail" element={<MainLayout><BlogDetail /></MainLayout>} />

                        {/* Profile */}
                        <Route path="/profile" element={<MainLayout><MyProfile /></MainLayout>}>
                            <Route path="posts" element={<MyProfilePost />} />
                            <Route path="questions" element={<MyProfileQuestion />} />
                            <Route path="followers" element={<MyProfileFollower />} />
                            <Route path="achievements" element={<MyProfileAchievement />} />
                        </Route>

                        {/* Account */}
                        <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
                        <Route path="/notifications" element={<MainLayout><Notification /></MainLayout>} />

                        {/* Static pages */}
                        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
                        <Route path="/contact" element={<MainLayout><ContactUs /></MainLayout>} />
                        <Route path="/terms" element={<MainLayout><TermsAndCondition /></MainLayout>} />

                        {/* Error / 404 */}
                        <Route path="/error" element={<AuthLayout><Error404 /></AuthLayout>} />
                        <Route path="*" element={<AuthLayout><Error404 /></AuthLayout>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
