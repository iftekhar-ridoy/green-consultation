import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';
import Offer from './Offer';
import Process from './Process';
import toast, { Toaster } from 'react-hot-toast';
import AllReviews from '../Reviews/AllReviews';




const Details = () => {
    const { _id, title, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle(`Details(${title})`);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const handlePlaceComment = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const rating = form.rating.value;
        const email = user?.email || 'unregistered';
        const comments = form.comments.value;
        const photo = user?.photoURL || 'no photo';

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            photo: photo,
            phone,
            rating,
            email,
            comments
        }
        // console.log(review);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Reviewed Success');
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }
    return (
        <div className='max-w-7xl mx-auto'>
            {/* service details  */}
            <section>
                <div className='mx-3 rounded-3xl my-10 pt-10'>
                    <div className=" w-full">
                        <figure><img className='rounded-3xl mx-auto' src={img} alt="na" /></figure>
                        <div className=" w-11/12 mx-auto my-10">
                            <h2 className="font-bold text-4xl text-center mb-10"> {title}</h2>
                            <p className='mt-5 text-lg mb-40'><span className='font-bold text-xl'>Description:</span> <br />{description}</p>
                        </div>
                    </div>

                    {/* offer  */}
                    <div className=' py-20'>
                        <p className='text-4xl font-bold text-center'>In Consultation, You will get</p>
                        <Offer></Offer>
                    </div>

                    {/* process  */}
                    <div className=' py-20 my-20'>
                        <p className='text-4xl font-bold text-center  animate-pulse'>Counseling Process</p>
                        <Process></Process>
                    </div>
                </div>
            </section>

            {/* all reviews  */}
            < section >
                <div className='bg-slate-200 p-10 mt-20 rounded-xl'>
                    <div className='text-3xl text-center font-bold py-5'>Others Reviews</div>
                    <div className='divider -mt-2'></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 mt-10 '>
                        {
                            reviews?.map(review =>
                                <AllReviews
                                    key={review._id}
                                    review={review}
                                ></AllReviews>
                            )
                        }
                    </div>

                </div>
            </section >

            {/* review form  */}
            <section className='mt-40'>
                <div className='bg-slate-200 p-10 rounded-xl'>
                    <form className='max-w-2xl mx-auto' onSubmit={handlePlaceComment}>

                        {
                            user?.email ?
                                <>
                                    <div className='text-3xl text-center font-bold py-5'>Please give your valuable review about: {title} therapy</div>
                                    <div className='divider -mt-2'></div>

                                    <div>
                                        <p className='mx-3 text-lg font-semibold'>Name:</p>
                                        <input name='name' defaultValue={user?.name} type="text" placeholder="Your Name" className="input w-full input-bordered" required />
                                    </div>

                                    <div className='my-5'>
                                        <p className='mx-3 text-lg font-semibold'>Phone:</p>
                                        <input name='phone' type="text" placeholder="Your Phone" className="input w-full input-bordered" required />
                                    </div>

                                    <div className='my-5'>
                                        <p className='mx-3 text-lg font-semibold'>Rating Service:</p>
                                        <input name='rating' type="text" placeholder="Give a rating based on 5" className="input w-full input-bordered" required />
                                    </div>

                                    <div className='my-5'>
                                        <p className='mx-3 text-lg font-semibold'>Email:</p>
                                        <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full input-bordered text-gray-500" required />
                                    </div>

                                    <div className='my-5'>
                                        <p className='mx-3 text-lg font-semibold'>Comments:</p>
                                        <textarea name='comments' className="textarea textarea-bordered w-full h-24" placeholder="Comments" required
                                        ></textarea>
                                    </div>

                                    <div className='flex justify-center'>
                                        <input className='btn mb-5' type="submit" value="Submit Review" />
                                    </div>
                                </>

                                :

                                <>
                                    <div className='text-3xl text-center font-bold py-5'>Sign In to give your valuable review</div>
                                    <div className='divider -mt-2'></div>

                                    <div className='flex justify-center'>
                                        <button className='btn'><Link to='/signin'>Sign In</Link></button>
                                    </div>
                                </>
                        }


                    </form>
                    <Toaster />
                </div>
            </section >

        </div >
    );
};

export default Details;