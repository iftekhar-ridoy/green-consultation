import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';
import Offer from './Offer';
import Process from './Process';

const Details = () => {
    const { _id, title, img, description, offer, process } = useLoaderData();
    const { user } = useContext(AuthContext);

    useTitle(`Details(${title})`);

    const handlePlaceComment = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const rating = form.rating.value;
        const email = user?.email || 'unregistered';
        const comments = form.comments.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
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
                    alert('Reviewed Success');
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

                    <div className=' py-20'>
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


                    <div className=' py-20 my-20'>
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
            </section>


            {/* review form  */}
            <section>
                <div className='bg-slate-200 p-10'>
                    <form onSubmit={handlePlaceComment}>
                        <div className='text-3xl text-center font-bold py-5'>Please give your valuable review about: {title} therapy</div>
                        <div className='divider -mt-2'></div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" required />
                            <input name='phone' type="text" placeholder="Your Phone" className="input w-full input-bordered" required />
                            <input name='rating' type="text" placeholder="Give a rating based on 5" className="input w-full input-bordered" required />
                            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full input-bordered text-gray-500" required />
                        </div>
                        <div className='my-5'>
                            <textarea name='comments' className="textarea textarea-bordered w-full h-24" placeholder="Comments" required
                            ></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <input className='btn mb-5' type="submit" value="Submit Review" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Details;