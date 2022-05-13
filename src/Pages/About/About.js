import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const About = () => {

    const [user] = useAuthState(auth);
    return (
        <div>
            {
                user ?
                    <div className='items-center flex flex-col my-28'>
                        <h2 className='text-center font-bold text-4xl mb-8'>This is About {user.displayName}</h2>
                        <img className='rounded-full' src={user.photoURL} width='300px' alt="" />
                    </div>
                    : <h2 className='text-center font-bold text-4xl my-28' >No about info found</h2>
            }
        </div>
    );
};

export default About;