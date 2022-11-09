import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Offer from './Offer';
import Process from './Process';

const Details = () => {
    const { title, img, description, offer, process } = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mx-3 rounded-3xl my-10 pt-10'>
                <div className=" w-full">
                    <figure><img className='rounded-3xl mx-auto' src={img} alt="na" /></figure>
                    <div className=" w-11/12 mx-auto my-10">
                        <h2 className="font-bold text-4xl text-center mb-10"> {title}</h2>
                        <p className='mt-5 text-lg mb-40'><span className='font-bold text-xl'>Description:</span> <br />{description}</p>
                    </div>
                </div>

                <div className='bg-slate-200 py-20'>
                    <p className='text-4xl font-bold text-center'>In Consultation, You will get</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 mt-10 '>
                        {
                            offer?.map((ofr, idx) => <Offer
                                key={idx}
                                ofr={ofr}
                            ></Offer>)
                        }
                    </div>
                </div>


                <div className='bg-slate-200 py-20 my-20'>
                    <p className='text-4xl font-bold text-center  animate-pulse'>Counseling Process</p>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mx-6 mt-10 pb-10'>
                        {
                            process.map((prs, idx) => <Process
                                key={idx}
                                idx={idx}
                                prs={prs}
                            ></Process>)
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Details;