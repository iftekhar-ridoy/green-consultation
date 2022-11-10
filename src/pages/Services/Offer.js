import React from 'react';
import img1 from '../../Assets/Offer/1253977.png';
import img2 from '../../Assets/Offer/1239298.png';
import img3 from '../../Assets/Offer/656588.png';

const Offer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 mt-10'>

            <div className="card card-side bg-base-100 shadow-xl mb-5 hover:bg-green-400">
                <figure className=' ml-5 w-32'><img src={img1} alt="na" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Reliability</h2>
                    <p className='text-gray-500'>Service will perform its intended function adequately for a specified environment without failure</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl mb-5 hover:bg-green-400">
                <figure className=' ml-5 w-32'><img src={img2} alt="na" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Support</h2>
                    <p className='text-gray-500'>The provision of assistance or comfort to others, typically to help them cope with stressors.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl mb-5 hover:bg-green-400">
                <figure className=' ml-5 w-32'><img src={img3} alt="na" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Confidentiality</h2>
                    <p className='text-gray-500'>Identity of a consulted person, takes steps to protect that identity from being discovered by others</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;