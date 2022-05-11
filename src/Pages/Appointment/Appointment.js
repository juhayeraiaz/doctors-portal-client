import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
import chairbg from '../../assets/images/bg.png'
import AvailableAppointment from './AvailableAppointment';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <section>
            <div className='hero my-[5.5rem]' style={{ background: `url(${chairbg}) no-repeat center/cover` }}>
                <div className='hero-content flex-col lg:flex-row-reverse lg:justify-evenly lg:gap-[18rem]'>
                    <img src={chair} className='lg:max-w-sm rounded-lg shadow-2xl' alt="chair" />
                    <div>
                        <DayPicker mode='single'
                            selected={date}
                            onSelect={setDate}
                            styles={{
                                head: { color: 'red' }
                            }} />
                    </div>
                </div>
            </div>
            <div className='my-28 px-12'>
                <AvailableAppointment date={date}></AvailableAppointment>
            </div>
        </section>
    );
};

export default Appointment;