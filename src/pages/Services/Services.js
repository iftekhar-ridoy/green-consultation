import React, { useEffect, useState } from 'react';
import useTitle from '../../useTitle/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState();
    useTitle('Services');
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center my-5'>
                <div className='text-3xl text-center font-bold py-5'>Services</div>
                <div className='divider -mt-2'></div>
                <h2 className='text-4xl font-semibold mb-10'>Psychotherapy programs for mental health</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3'>
                {
                    services?.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;