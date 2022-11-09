import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { title, img, description, _id } = service;
    return (
        <PhotoProvider>
            <div className="card card-compact w-full bg-base-100 shadow-xl hover:-mt-5">
                <PhotoView src={img}>
                    <img src={img} alt="na" />
                </PhotoView>
                <div className="card-body">
                    <h2 className="card-title font-bold"> {title}</h2>
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