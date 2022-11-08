import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../Assets/Logo/Green-Leaf-PNG-Free-Image.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignIn = () => {
    const { signInUser, googleSignInUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // sign in by email password 
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    // sign in by Google 
    const handleGoogleSignIn = () => {
        googleSignInUser()
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="hero w-full mb-32">
            <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
                <div className="text-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <img className='h-24 w-24 mr-1' src={logo} alt="" />
                        </div>
                        <p className="font-bold">
                            <span className='text-5xl font-extrabold'>Sign In To Get Consultation</span>
                        </p>
                    </div>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100 my-5 py-5 mx-auto">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-green-600" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className='card-body -mt-14'>
                        <div className="divider mt-0">OR</div>
                        <div className="-mt-4">
                            <button onClick={handleGoogleSignIn} className='btn btn-outline bt w-full'>
                                <FcGoogle className='mr-2 text-xl'></FcGoogle>Google</button>
                        </div>

                        <p className='d-block text-red-600'>
                            {error}
                        </p>
                    </div>
                    <p className='text-center'>New to Green Consult? <Link className='text-green-600 font-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;