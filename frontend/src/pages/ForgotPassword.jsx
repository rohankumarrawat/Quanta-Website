<<<<<<< HEAD
import { Link } from 'react-router';

export default function ForgotPassword() {
    return (
        <section className="py-0">
            <div className="container">
                <div className="flex justify-center items-center min-h-screen py-8">
                    <div className="w-full max-w-md">
                        <div className="card p-6 sm:p-8 text-center">
                            <h1 className="text-2xl font-bold mb-2">Forgot password?</h1>
                            <p className="text-body mb-0">Enter the email address associated with your account and we'll send you a link to reset your password.</p>

                            <form className="mt-6 text-left">
                                <div className="mb-4">
                                    <label className="form-label">Enter email id</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <button type="submit" className="btn btn-primary w-full mb-3">Reset password</button>
                                <p className="text-center text-sm">
                                    Back to <Link to="/signin">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
=======
import { Link } from 'react-router';

export default function ForgotPassword() {
    return (
        <section className="py-0">
            <div className="container">
                <div className="flex justify-center items-center min-h-screen py-8">
                    <div className="w-full max-w-md">
                        <div className="card p-6 sm:p-8 text-center">
                            <h1 className="text-2xl font-bold mb-2">Forgot password?</h1>
                            <p className="text-body mb-0">Enter the email address associated with your account and we'll send you a link to reset your password.</p>

                            <form className="mt-6 text-left">
                                <div className="mb-4">
                                    <label className="form-label">Enter email id</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <button type="submit" className="btn btn-primary w-full mb-3">Reset password</button>
                                <p className="text-center text-sm">
                                    Back to <Link to="/signin">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
