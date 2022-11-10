import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';
import toast, { Toaster } from 'react-hot-toast';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    // delete my review 
    const handleDelete = (id) => {
        const proceed = window.confirm('Want to Delete?')
        if (proceed) {
            fetch(`http://localhost:5000/myReviews/${id}`, {
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

    return (
        <div className='max-w-7xl mx-auto'>
            {/* <div className='text-3xl text-center font-bold py-5'>You Have Reviewed {myReviews.length} Service</div>
            <div className='divider -mt-2'></div>
            <div className="overflow-x-auto w-full mx-auto">
                <div className='mx-3'>
                    {
                        myReviews?.map(myReview =>
                            <MyReviewTable
                                key={myReview._id}
                                myReview={myReview}
                                handleDelete={handleDelete}
                            ></MyReviewTable>)
                    }
                </div>
            </div> */}
            {
                myReviews.length > 0 ?
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
                                        ></MyReviewTable>)
                                }
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className=''>
                            <p>No reviews were added</p>
                        </div>
                    </>
            }
            <Toaster />
        </div>
    );
};

export default MyReviews;