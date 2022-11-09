import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Logo/Green-Leaf-PNG-Free-Image.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';

const SignUp = () => {

    const { signUpUser } = useContext(AuthContext);
    useTitle('SignUp');

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, imageURL, email, password);

        signUpUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
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
                            <span className='text-5xl font-extrabold'>Get your first free online consultation</span>
                        </p>
                    </div>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100 my-5 py-5 mx-auto">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name='imageURL' placeholder="Your image url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-green-600" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-green-600 font-bold' to="/signin">Sign In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;