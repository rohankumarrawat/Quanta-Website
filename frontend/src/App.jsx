import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import AuthLayout from './components/layout/AuthLayout';

// Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import AnswerDetail from './pages/AnswerDetail';
import AskQuestion from './pages/AskQuestion';
import Forum from './pages/Forum';
import ForumCategory from './pages/ForumCategory';
import ForumDetail from './pages/ForumDetail';
import HelpCenter from './pages/HelpCenter';
import HelpDetail from './pages/HelpDetail';
import Support from './pages/Support';
import FAQs from './pages/FAQs';
import TicketHome from './pages/TicketHome';
import TicketList from './pages/TicketList';
import TicketReply from './pages/TicketReply';
import TicketCreate from './pages/TicketCreate';
import Discussion from './pages/Discussion';
import Category from './pages/Category';
import CategoryDetail from './pages/CategoryDetail';
import CategoryPost from './pages/CategoryPost';
import CategoryQuestion from './pages/CategoryQuestion';
import Group from './pages/Group';
import GroupDetail from './pages/GroupDetail';
import Communities from './pages/Communities';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import MyProfile from './pages/MyProfile';
import MyProfilePost from './pages/MyProfilePost';
import MyProfileQuestion from './pages/MyProfileQuestion';
import MyProfileFollower from './pages/MyProfileFollower';
import MyProfileAchievement from './pages/MyProfileAchievement';
import Settings from './pages/Settings';
import Notification from './pages/Notification';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import TermsAndCondition from './pages/TermsAndCondition';
import Error404 from './pages/Error404';
import ComingSoon from './pages/ComingSoon';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
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
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
