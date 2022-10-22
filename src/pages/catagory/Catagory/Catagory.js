import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../sherd/newssamarycart/NewsSummaryCart';

const Catagory = () => {
    const categorNews=useLoaderData();
    return (
        <div>
           <h5>Catagory:{categorNews.length}</h5> 
           {
            categorNews.map(news=><NewsSummaryCart
              key={(news._id)}
              news={news}
            
            ></NewsSummaryCart>)
           }
        </div>
    );
};

export default Catagory;