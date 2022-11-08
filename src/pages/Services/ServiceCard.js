import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ service }) => {
    const { title, img, description, _id } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="na" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold"> {title}</h2>
                <p className='font-semibold'><span className='font-bold'>Description:</span> <br />{description.slice(0, 150)}...</p>
                <div className="card-actions justify-center my-5">
                    <Link to={`details/${_id}`}>
                        <p className='flex items-center'><span className='mr-2 text-green-800 hover:text-xl font-bold'>Full Details </span><BsArrowRight></BsArrowRight> </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;