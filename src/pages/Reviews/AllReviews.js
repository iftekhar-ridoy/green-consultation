import React from 'react';

const AllReviews = ({ review }) => {
    const { customer, photo, rating, comments } = review;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-5 hover:bg-green-400 h-full">
                <figure className='ml-3'><img className='h-20 w-20 border-2 rounded-full' src={photo} alt="na" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{customer}</h2>
                    <p className='-my-3'><small>Rating: {rating}</small></p>
                    <p className='text-gray-500'>{comments}...</p>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;