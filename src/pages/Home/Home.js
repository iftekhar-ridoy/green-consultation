import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import banner from '../../Assets/Banner/banner.jpg'
import { BsArrowRight } from 'react-icons/bs';
import useTitle from '../../useTitle/useTitle';

const Home = () => {
    const [services, setServices] = useState();
    useTitle('Home')
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mb-40'>
                <img className='rounded-3xl' src={banner} alt="" />
            </div>
            <div className='absolute flex justify-start transform -translate-y-1/2 left-40 top-2/4 w-2/5'>
                <p className='text-white text-5xl font-bold'>An individual's mental health needs can be addressed privately through a professional consultation</p>
            </div>
            <div className='absolute flex justify-start transform -translate-y-1/2 left-40 top-3/4 w-2/5'>
                <div className="card-actions justify-center my-5 ">
                    <Link to='/services'>
                        <p className='flex items-center border-2 p-2 rounded-full hover:bg-black '><span className='text-2xl text-white font-bold duration-500 ease-in-out'>Get Consultation</span><BsArrowRight className='text-white text-2xl mt-1 ml-3'></BsArrowRight> </p>
                    </Link>
                </div>
            </div>

            {/* services  */}
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
                <div className='flex justify-center mt-10'>
                    <Link to='/services'>
                        <button className='btn btn-outline'>Show All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;