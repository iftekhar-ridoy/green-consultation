import React from 'react';

const Offer = ({ ofr, idx }) => {
    console.log(ofr.idx)
    const { offerName, offerImg, offerDescription } = ofr;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-5 hover:bg-green-400">
                <figure className=' ml-5 w-32'><img src={offerImg} alt="na" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{offerName}</h2>
                    <p className='text-gray-500'>{offerDescription.slice(0, 100)}...</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;