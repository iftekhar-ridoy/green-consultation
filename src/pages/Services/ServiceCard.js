import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { title, img, description, _id } = service;

    return (
        <PhotoProvider>
            <div className="card card-compact w-full bg-base-100 border-2 hover:shadow-xl hover:-mt-3">
                <PhotoView src={img}>
                    <img className='rounded-xl' src={img} alt="" />
                </PhotoView>
                <div className="card-body">
                    <h2 className="card-title font-bold"> {title}</h2>
                    <p className='font-bold text-green-600'>Fee: $150 per consult</p>
                    <p><span className='font-bold'>Description:</span> <br />{description.slice(0, 150)}...</p>
                    <div className="card-actions justify-center my-5">
                        <Link to={`/services/${_id}`}>
                            <p className='flex items-center'><span className='mr-2 text-green-800 hover:text-xl font-bold duration-500 ease-in-out'>Get Consultation</span><BsArrowRight></BsArrowRight> </p>
                        </Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>

    );
};

export default ServiceCard;