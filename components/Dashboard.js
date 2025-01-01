// components/Dashboard.js
import { useEffect, useState } from 'react';
import { fetchNews } from '../utils/api';
import NewsList from './NewsList';
import PayoutCalculator from './PayoutCalculator';

const Dashboard = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const news = await fetchNews();
            setArticles(news);
        };
        getNews();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <NewsList articles={articles} />
            <PayoutCalculator articles={articles} />
        </div>
    );
};

export default Dashboard;