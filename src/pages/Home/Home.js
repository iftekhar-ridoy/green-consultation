import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1>This is home page</h1>

            {/* services  */}
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 mx-auto'>
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