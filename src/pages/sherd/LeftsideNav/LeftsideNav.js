import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
    const[catgories,setCatagories]=useState([]);

    useEffect(()=>{
   fetch('http://localhost:5000/news-catagory')
   .then(res=>res.json())
   .then(data=>setCatagories(data))

    },[])
    return (
        <div>
            <h5>All catagory:{catgories.length}</h5>
            <div>
                {

                     catgories.map(catagory=><p key={catagory.id}>

                       <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                     </p>)
                }
            </div>
        </div>
    );
};

export default LeftsideNav;