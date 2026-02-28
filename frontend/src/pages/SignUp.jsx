<<<<<<< HEAD
import { Link } from 'react-router';

export default function SignUp() {
    return (
        <section className="py-0">
            <div className="container">
                <div className="flex justify-center items-center min-h-screen py-8">
                    <div className="w-full max-w-md">
                        <div className="card p-6 sm:p-8">
                            <h1 className="text-2xl font-bold mb-2 text-center">Create new account</h1>
                            <p className="text-center mb-0">Already a member? <Link to="/signin">Log in</Link></p>

                            <form className="mt-6 text-left">
                                <div className="mb-4">
                                    <label className="form-label">Enter email id</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="form-label">Enter password</label>
                                    <input type="password" className="form-control pr-10" placeholder="Enter your password" />
                                    <span className="absolute top-1/2 right-3 mt-3.5 -translate-y-1/2 cursor-pointer text-body">
                                        <i className="fas fa-eye-slash"></i>
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <input type="checkbox" className="form-check-input" id="keepSignedIn" />
                                    <label className="form-check-label" htmlFor="keepSignedIn">Keep me signed in</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-full">Sign Up</button>

                                <div className="relative my-6">
                                    <hr />
                                    <p className="text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-body">Or sign in with</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <a href="#" className="btn btn-outline-light"><i className="fab fa-google text-red-500 mr-2"></i>Google</a>
                                    <a href="#" className="btn btn-outline-light"><i className="fab fa-facebook-f text-blue-600 mr-2"></i>Facebook</a>
                                </div>

                                <p className="text-center text-sm text-body mt-4">©2025 <a href="#">Quanta.</a> All rights reserved</p>
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

export default function SignUp() {
    return (
        <section className="py-0">
            <div className="container">
                <div className="flex justify-center items-center min-h-screen py-8">
                    <div className="w-full max-w-md">
                        <div className="card p-6 sm:p-8">
                            <h1 className="text-2xl font-bold mb-2 text-center">Create new account</h1>
                            <p className="text-center mb-0">Already a member? <Link to="/signin">Log in</Link></p>

                            <form className="mt-6 text-left">
                                <div className="mb-4">
                                    <label className="form-label">Enter email id</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="form-label">Enter password</label>
                                    <input type="password" className="form-control pr-10" placeholder="Enter your password" />
                                    <span className="absolute top-1/2 right-3 mt-3.5 -translate-y-1/2 cursor-pointer text-body">
                                        <i className="fas fa-eye-slash"></i>
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <input type="checkbox" className="form-check-input" id="keepSignedIn" />
                                    <label className="form-check-label" htmlFor="keepSignedIn">Keep me signed in</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-full">Sign Up</button>

                                <div className="relative my-6">
                                    <hr />
                                    <p className="text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-body">Or sign in with</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <a href="#" className="btn btn-outline-light"><i className="fab fa-google text-red-500 mr-2"></i>Google</a>
                                    <a href="#" className="btn btn-outline-light"><i className="fab fa-facebook-f text-blue-600 mr-2"></i>Facebook</a>
                                </div>

                                <p className="text-center text-sm text-body mt-4">©2025 <a href="#">Quanta.</a> All rights reserved</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
>>>>>>> b51d19062c6ff9441585b362d5db7e3f2b76ab0e
