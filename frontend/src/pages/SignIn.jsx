import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function SignIn() {
    const { t } = useTranslation();
    return (
        <section className="py-0">
            <div className="container">
                <div className="flex justify-center items-center min-h-screen py-8">
                    <div className="w-full max-w-md">
                        <div className="card p-6 sm:p-8">
                            <h1 className="text-2xl font-bold mb-2 text-center">{t('auth.signin.title', 'Welcome back')}</h1>
                            <p className="text-center mb-0">
                                {t('auth.signin.new_here', 'New here?')}{' '}
                                <Link to="/signup">{t('auth.signin.create_account', 'Create an account')}</Link>
                            </p>

                            <form className="mt-6 text-left">
                                <div className="mb-4">
                                    <label className="form-label">{t('auth.email_label', 'Enter email')}</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="form-label">{t('auth.password_label', 'Enter password')}</label>
                                    <input type="password" className="form-control pr-10" placeholder={t('auth.password_placeholder', 'Enter your password')} />
                                    <span className="absolute top-1/2 right-3 mt-3.5 -translate-y-1/2 cursor-pointer text-body">
                                        <i className="fas fa-eye-slash"></i>
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" className="form-check-input" id="rememberCheck" />
                                        <label className="form-check-label" htmlFor="rememberCheck">{t('auth.signin.remember_me', 'Remember me?')}</label>
                                    </div>
                                    <Link to="/forgot-password" className="text-sm">{t('auth.signin.forgot_password', 'Forgot password?')}</Link>
                                </div>
                                <button type="submit" className="btn btn-primary w-full">{t('auth.signin.submit', 'Login')}</button>

                                <div className="relative my-6">
                                    <hr />
                                    <p className="text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-body">
                                        {t('auth.or_sign_in_with', 'Or sign in with')}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <a href="#" className="btn btn-outline-light">
                                        <i className="fab fa-google text-red-500 mr-2"></i>Google
                                    </a>
                                    <a href="#" className="btn btn-outline-light">
                                        <i className="fab fa-facebook-f text-blue-600 mr-2"></i>Facebook
                                    </a>
                                </div>

                                <p className="text-center text-sm text-body mt-4">
                                    ©2025 <a href="#">Quanta.</a> {t('all_rights_reserved')}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
