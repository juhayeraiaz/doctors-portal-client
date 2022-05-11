import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Treatment = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center my-16'>
            <div className='w-[240px] lg:w-[450px]'>
                <img className='ml-7 lg:ml-24 rounded-lg shadow-xl' src={treatment} alt="" />
            </div>
            <div className='mr-0 lg:mr-32'>
                <h2 className='text-5xl my-5'>Exceptional Dental Care, on Your Terms</h2>
                <p className='text-lg my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default Treatment;