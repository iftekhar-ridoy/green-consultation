import React from 'react';

const Process = ({ prs, idx }) => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mx-6 mt-10 pb-10'>
            <div className='bg-white px-5 py-16 shadow-xl rounded-xl hover:bg-green-400'>
                <p className='text-7xl mb-5 text-gray-400 font-extrabold'>01</p>
                <p className='text-xl font-bold text-gray-700'>Request on the site</p>
            </div>
            <div className='bg-white px-5 py-16 shadow-xl rounded-xl hover:bg-green-400'>
                <p className='text-7xl mb-5 text-gray-400 font-extrabold'>02</p>
                <p className='text-xl font-bold text-gray-700'>Appointment time</p>
            </div>
            <div className='bg-white px-5 py-16 shadow-xl rounded-xl hover:bg-green-400'>
                <p className='text-7xl mb-5 text-gray-400 font-extrabold'>03</p>
                <p className='text-xl font-bold text-gray-700'>Therapy session</p>
            </div>
            <div className='bg-white px-5 py-16 shadow-xl rounded-xl hover:bg-green-400'>
                <p className='text-7xl mb-5 text-gray-400 font-extrabold'>04</p>
                <p className='text-xl font-bold text-gray-700'>Satisfied review</p>
            </div>
        </div>
    );
};

export default Process;
