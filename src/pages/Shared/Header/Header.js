import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo/Green-Leaf-PNG-Free-Image.png';
import { HiOutlinePhone } from "react-icons/hi"

const Header = () => {
    const menuItems = [
        <li className='font-semibold text-xl'><Link to='/'>Home</Link> </li>,
        <li className='font-semibold text-xl'><Link to='/'>About</Link> </li>,
        <li className='font-semibold text-xl'><Link to='/'>Services</Link> </li>,
        <li className='font-semibold text-xl'><Link to='/'>Reviews</Link> </li>,
        <li className='font-semibold text-xl'><Link to='/blog'>Blog</Link> </li>,
        <li className='font-semibold text-xl'><Link to='/'>Login</Link> </li>,
    ]
    return (
        <div className="navbar h-20 py-5 mb-12 bg-slate-200">
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
                {/* {
                    user?.email ?
                        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 bg-base-100 rounded-box hidden lg:block">
                            <menu className='mr-3'>
                                <li onClick={handleSingOut} className='font-semibold '>
                                    <Link>Sign Out</Link> </li>
                            </menu>
                        </ul>
                        :
                        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 bg-base-100 rounded-box hidden lg:block">
                            <menu className='mr-3'>
                                <li className='font-semibold '><Link to='/login'>Login</Link> </li>
                            </menu>
                        </ul>
                } */}

                <li className='hidden lg:contents text-xl text-green-600 font-bold'><HiOutlinePhone className='mr-2 text-green-600'></HiOutlinePhone><span className='mr-5'> 01302690768</span></li>
            </div>
        </div>

    );
};

export default Header;