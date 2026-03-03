import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword() {
    const { t } = useTranslation();
    return (
        <section className="py-0">
            <div className="container">
                <div className="flex justify-center items-center min-h-screen py-8">
                    <div className="w-full max-w-md">
                        <div className="card p-6 sm:p-8 text-center">
                            <h1 className="text-2xl font-bold mb-2">{t('auth.forgot.title', 'Forgot password?')}</h1>
                            <p className="text-body mb-0">
                                {t('auth.forgot.subtitle', "Enter the email address associated with your account and we'll send you a link to reset your password.")}
                            </p>

                            <form className="mt-6 text-left">
                                <div className="mb-4">
                                    <label className="form-label">{t('auth.email_label', 'Enter email')}</label>
                                    <input type="email" className="form-control" placeholder={t('auth.email_placeholder', 'Enter your email')} />
                                </div>
                                <button type="submit" className="btn btn-primary w-full mb-3">
                                    {t('auth.forgot.submit', 'Reset password')}
                                </button>
                                <p className="text-center text-sm">
                                    {t('auth.forgot.back_to', 'Back to')}{' '}
                                    <Link to="/signin">{t('auth.signin.link_text', 'Sign in')}</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
