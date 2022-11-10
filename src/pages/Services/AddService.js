import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Offer from './Offer';


const AddService = () => {
    const { offer, process } = useLoaderData();

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.imageURL.value;
        const description = form.description.value;



        const services = {
            title,
            img,
            description,
            offer,
            process
        }

        console.log(services);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added');
                    form.reset();
                }
            })
            .catch(error => console.error(error));


    }


    return (
        <div className='max-w-7xl mx-auto'>
            <section>
                <div className='bg-slate-200 p-10 rounded-xl'>
                    <form className='max-w-2xl mx-auto' onSubmit={handleAddService}>
                        <div className='text-3xl text-center font-bold py-5'>Add Service</div>
                        <div className='divider -mt-2'></div>


                        <div>
                            <p className='mx-3 text-lg font-semibold'>Title:</p>
                            <input name='title' type="text" placeholder="Service title" className="input w-full input-bordered" required />
                        </div>

                        <div className='my-5'>
                            <p className='mx-3 text-lg font-semibold'>Image Link:</p>
                            <input name='imageURL' type="text" placeholder="Service image url" className="input w-full input-bordered" required />
                        </div>

                        <div className='my-5'>
                            <p className='mx-3 text-lg font-semibold'>Description:</p>
                            <input name='description' type="text" placeholder="Service description" className="input w-full input-bordered" required />
                        </div>


                        <div className='flex justify-center'>
                            <input className='btn mb-5' type="submit" value="Add Service" />
                        </div>
                    </form>
                    <Toaster />
                </div>
            </section >


        </div>
    );
};

export default AddService;