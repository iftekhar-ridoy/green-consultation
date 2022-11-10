import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import banner from '../../Assets/Banner/banner.jpg'
import { BsArrowRight } from 'react-icons/bs';
import useTitle from '../../useTitle/useTitle';
import person from '../../Assets/Person/person-icon-1682.png';
import { RiHome8Fill, RiMailOpenFill, RiPhoneFill } from 'react-icons/ri';

const Home = () => {
    const [services, setServices] = useState();
    useTitle('Home')
    useEffect(() => {
        fetch('https://assignment-11-server-iftekharul152811.vercel.app/srv')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='max-w-7xl mx-auto'>
            <section className='relative'>
                <div className='mb-40 mx-3' >
                    <img className='rounded-3xl' src={banner} alt="" />
                </div>
                <div className='absolute flex justify-start transform -translate-y-1/2 left-40 top-2/4 w-2/5'>
                    <p className='text-white text-4xl font-bold hidden lg:contents'>An individual's mental health needs can be addressed privately through a professional consultation</p>
                </div>
                <div className='absolute flex justify-start transform -translate-y-1/2 left-40 top-3/4 w-2/5'>
                    <div className="card-actions justify-center my-5 hidden lg:contents">
                        <Link to='/services'>
                            <p className='flex items-center border-2 p-2 rounded-full hover:bg-black '><span className='text-2xl text-white font-bold duration-500 ease-in-out'>Get Consultation</span><BsArrowRight className='text-white text-2xl mt-1 ml-3'></BsArrowRight> </p>
                        </Link>
                    </div>
                </div>

                <div className="lg:hidden mx-3 flex flex-col items-center text-center -mt-32 mb-24">
                    <p className=' text-3xl font-bold'>An individual's mental health needs can be addressed privately through a professional consultation</p>

                    <Link to='/services'>
                        <button className='flex items-center border-2 p-2 rounded-full mt-5'><span className='text-2xl font-bold duration-500 ease-in-out'>Get Consultation</span><BsArrowRight className='text-2xl mt-1 ml-3'></BsArrowRight> </button>
                    </Link>
                </div>
            </section>




            {/* services  */}
            <section className='bg-slate-200 py-5 rounded-xl'>
                <div className='text-3xl text-center font-bold py-5'>The services I provide</div>
                <div className='divider -mt-2'></div>
                <div className='mt-14'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3'>
                        {
                            services?.map(service =>
                                <ServiceCard
                                    key={service._id}
                                    service={service}
                                ></ServiceCard>)
                        }
                    </div>
                    <div className='flex justify-center my-10'>
                        <Link to='/services'>
                            <button className='btn btn-outline'>Show All</button>
                        </Link>
                    </div>
                </div>
            </section>


            {/* about me  */}
            <section>
                <div className='text-3xl text-center font-bold py-5 mt-40'>About Me</div>
                <div className='divider -mt-2'></div>
                <div className='grid grid-cols-1 lg:grid-cols-2 mx-3 mt-14 mb-40 gap-6'>
                    <div className='flex flex-col justify-center mx-3'>
                        <p className='text-3xl font-bold mb-10'>Iftekharul Islam Ridoy — licensed mental health counselor, psychotherapist</p>
                        <ul>
                            <li className='font-semibold text-xl'>- Always very sympathetic towards the problems of the clients.</li>

                            <li className='font-semibold text-xl'>- Can be a person’s best guide in times of mental crisis. #mentalcrisis</li>

                            <li className='font-semibold text-xl'>- I am here to provide complete solutions for your mental troubles.</li>
                        </ul>
                    </div>
                    <div className='flex justify-center'>
                        <img className='max-w-xs' src={person} alt="" />
                    </div>
                </div>
            </section>


            {/* contact  */}
            <section className='bg-slate-200 py-5 rounded-xl mb-40'>
                <div className='text-3xl text-center font-bold py-5'>Contact</div>
                <div className='divider -mt-2'></div>
                <div className='mt-14 flex justify-center'>
                    <div>
                        <p className='flex items-center text-xl font-semibold mb-3'><RiPhoneFill className='mr-3'></RiPhoneFill> 01302690768</p>
                        <p className='flex items-center text-xl font-semibold mb-3'><RiMailOpenFill className='mr-3'></RiMailOpenFill> iftekharulislam.ridoy@gmail.com</p>
                        <p className='flex items-start text-xl font-semibold mb-3'><RiHome8Fill className='mr-3 mt-1'></RiHome8Fill> Road No: 3 <br /> Ward No: 3 <br />Stadium Para, Khordoshaptana <br />lalmonirhat</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;


