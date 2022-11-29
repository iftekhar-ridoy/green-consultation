import React from 'react';

const MyReviewEditModal = ({ editReview }) => {
    const { serviceName, comments } = editReview;
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h2 className='text-center mb-6 font-bold text-xl'>Edit Your Comment</h2>
                    <div className='mx-3 mt-2'>
                        <p>Service Name:</p>
                    </div>
                    <div className='mx-3 mt-1'>
                        <input type="text" className='bg-slate-100  rounded py-3 px-3 font-bold w-full text-gray-500' defaultValue={serviceName} readOnly />
                    </div>

                    <div className='mx-3 mt-6'>
                        <p>Review:</p>
                    </div>
                    <div className='mx-3 mt-1'>
                        <textarea
                            className="textarea bg-slate-100  rounded py-3 px-3 font-bold w-full h-32 text-lg"
                            defaultValue={comments}
                        ></textarea>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <input className='btn bg-gray-500 mb-5' type="submit" value="Submit Review" />
                    </div>


                </div>
            </div>
        </>
    );
};

export default MyReviewEditModal;