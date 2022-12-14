import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/Logo/Green-Leaf-PNG-Free-Image.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignOut = () =>
        signOutUser()
            .then(res => {
                return navigate(from, { replace: true })
            })
            .catch()


    const menuItems = <>
        {
            user?.email ?
                <>
                    <li className='font-semibold text-lg mr-3'><Link to='/'>Home</Link> </li>
                    <li className='font-semibold text-lg mr-3'><Link to='/blog'>Blog</Link> </li>
                    <li className='font-semibold text-lg mr-3'><Link to='/myReviews'>My Reviews</Link> </li>
                    <li className='font-semibold text-lg mr-3'><Link to='/addService'>Add Service</Link> </li>
                    <li onClick={handleSignOut} className='text-lg font-semibold block lg:hidden'><Link to='/'>Sign Out</Link></li>
                </>
                :
                <>
                    <li className='font-semibold text-lg mr-3'><Link to='/'>Home</Link> </li>
                    <li className='font-semibold text-lg mr-3'><Link to='/blog'>Blog</Link> </li>
                    <li className='font-semibold text-lg block lg:hidden'><Link to='/signin'>Sign In</Link> </li>
                </>


        }
    </>


    return (
        <div className="navbar h-20 py-5 mb-5 bg-slate-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost  normal-case text-2xl text-green-800 font-bold">
                    <img className='h-7 mr-1' src={logo} alt="" /> Green Consult
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <ul tabIndex={0} className="menu menu-horizontal p-0  hidden lg:block">
                            <menu className='mr-3'>
                                <li onClick={handleSignOut} className='text-lg font-semibold '>
                                    <Link>Sign Out</Link> </li>
                            </menu>
                        </ul>
                        :
                        <ul tabIndex={0} className="menu menu-horizontal p-0  hidden lg:block">
                            <menu className='mr-3'>
                                <li className='text-lg font-semibold '><Link to='/signin'>Sign In</Link> </li>
                            </menu>
                        </ul>

                }


            </div>
        </div>

    );
};


export default Header;