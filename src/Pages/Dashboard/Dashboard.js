import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="text-center drawer-content">
                <h2 className='text-2xl font-bold text-purple-500 my-4'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side lg:pl-8 lg:my-8">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' className='font-bold'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review' className='font-bold'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history' className='font-bold'>My History</Link></li>
                    {admin && <li><Link to='/dashboard/users' className='font-bold'>All Users</Link></li>}
                    {admin && <li><Link to='/dashboard/addDoctor' className='font-bold'>Add Doctors</Link></li>}
                    {admin && <li><Link to='/dashboard/manageDoctor' className='font-bold'>Manage Doctors</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;