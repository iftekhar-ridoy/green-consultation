import React from 'react';

const Process = ({ prs, idx }) => {
    return (
        <div className='bg-white px-5 py-16 shadow-xl rounded-xl hover:bg-green-400'>
            <p className='text-7xl mb-5 text-gray-400 font-extrabold'>0{idx + 1}</p>
            <p className='text-xl font-bold text-gray-700'>{prs}</p>
        </div>
    );
};

export default Process;