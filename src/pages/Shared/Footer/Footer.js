import React from 'react';
import logo from '../../../Assets/Logo/Green-Leaf-PNG-Free-Image.png'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-24'>
            <footer className="footer footer-center p-10 bg-black text-primary-content">
                <div>
                    <img className='h-10 mr-1' src={logo} alt="" />
                    <p className="font-bold">
                        <span className='text-3xl'>Green Consult</span> <br />Providing reliable consultation since 2012
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/iftekhar.ridoy07/'
                            target='_blank' rel="noopener noreferrer"><FaFacebookSquare className='w-7 h-7'></FaFacebookSquare></a>
                        <a href='https://www.instagram.com/'
                            target='_blank' rel="noopener noreferrer"><FaInstagramSquare className='w-7 h-7'></FaInstagramSquare></a>
                        <a href='https://www.linkedin.com/'
                            target='_blank' rel="noopener noreferrer"><FaLinkedin className='w-7 h-7'></FaLinkedin></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;