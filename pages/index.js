// pages/index.js
import Auth from '../components/Auth';
import Dashboard from '../components/Dashboard';
import { useState } from 'react';

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            {isAuthenticated ? <Dashboard /> : <Auth setIsAuthenticated={setIsAuthenticated} />}
        </div>
    );
};

export default Home;