import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="text-center drawer-content">
                <h2 className='text-2xl font-bold text-purple-500 my-4'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div class="drawer-side lg:pl-8 lg:my-8">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' className='font-bold'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review' className='font-bold'>My Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;