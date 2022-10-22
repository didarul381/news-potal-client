import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../sherd/newssamarycart/NewsSummaryCart';

const Home = () => {
    const allNews=useLoaderData();
    return (
        <div>
            <h2>home component:{allNews.length}</h2>
            {
                allNews.map(news=><NewsSummaryCart
                     key={news._id}
                     news={news}
                
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;