import React from 'react';
import { RiDeleteBin5Fill, RiEdit2Fill } from 'react-icons/ri'
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';



const MyReviewTable = ({ myReview, handleDelete }) => {
    const { _id, serviceName, comments, rating } = myReview;

    return (
        <div>
            <div className='my-5 max-w-2xl mx-auto shadow-xl border-2 rounded-xl'>
                <div className='py-3'>
                    <div className='flex justify-between mx-3'>
                        <p>Service Name: </p>
                        <p>
                            <Link to='/myReviewEdit'><button className='mr-3'><RiEdit2Fill></RiEdit2Fill></button></Link>

                            <button onClick={() => handleDelete(_id)}><RiDeleteBin5Fill></RiDeleteBin5Fill></button>
                        </p>
                    </div>
                    <div className='mx-3 mt-1'>
                        <p className='bg-slate-100  rounded py-1 px-3 font-semibold'>{serviceName}</p>
                    </div>
                    <div className='mx-3 mt-2'>
                        <p>Review:</p>
                    </div>
                    <div className='mx-3 mt-1'>
                        <p className='bg-slate-100 rounded py-1 px-3 font-semibold'>{comments}</p>
                    </div>
                    <div className='mx-3 mt-2'>
                        <p>Rating: <small>(Based on 5)</small></p>
                    </div>
                    <div className='mx-3 mt-1'>
                        <p className='bg-slate-100 rounded py-1 px-3 font-semibold'>{rating}</p>
                    </div>
                </div>
                <Toaster />
            </div>
        </div>
    );
};

export default MyReviewTable;