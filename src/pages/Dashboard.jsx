import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                <li>
                    <Link to="/videos">My Videos</Link>
                </li>
                <li>
                    <Link to="/analytics">Analytics</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;
