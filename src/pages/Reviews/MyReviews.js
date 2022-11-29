import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import MyReviewEditModal from './MyReviewEditModal';

const MyReviews = () => {
    const { user, loading } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [editReview, setEditReview] = useState({});

    useEffect(() => {
        fetch(`https://assignment-11-server-iftekharul152811.vercel.app/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    // delete my review 
    const handleDelete = (id) => {
        const proceed = window.confirm('Want to Delete?')
        if (proceed) {
            fetch(`https://assignment-11-server-iftekharul152811.vercel.app/myReviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully')
                        const remainning = myReviews.filter(rvw => rvw._id !== id);
                        setMyReviews(remainning);
                    }
                    console.log(data);
                })
        }
    }

    if (loading) {
        return <div className="loader absolute left-1/2 top-20"></div>
    }

    return (
        <div className='max-w-7xl mx-auto'>

            {
                myReviews.length === 0 ?
                    <>
                        <div className='flex justify-center my-44'>
                            <div className=' h-80'>
                                <p className='text-5xl font-bold text-red-600 text-center my-3'>No Review were added</p>
                                <p className='text-center my-3'>To review, Go to <Link to='/services' className='fw-bold text-green-800 font-bold flex items-center justify-center text-xl'> Services<FaArrowRight className='ml-3'></FaArrowRight> </Link></p>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='text-3xl text-center font-bold py-5'>You Have Reviewed {myReviews.length} Service</div>
                        <div className='divider -mt-2'></div>
                        <div className="overflow-x-auto w-full mx-auto">
                            <div className='mx-3'>
                                {
                                    myReviews?.map(myReview =>
                                        <MyReviewTable
                                            key={myReview._id}
                                            myReview={myReview}
                                            handleDelete={handleDelete}
                                            setEditReview={setEditReview}
                                        ></MyReviewTable>)
                                }
                            </div>
                        </div>
                        {
                            <MyReviewEditModal editReview={editReview}></MyReviewEditModal>
                        }
                    </>
            }
            <Toaster />
        </div>
    );
};

export default MyReviews;