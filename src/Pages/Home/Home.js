import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <div className='px-16'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <Treatment></Treatment>
            </div>
            <MakeAppointment></MakeAppointment>
            <div className='px-16'>
                <Testimonials></Testimonials>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;