import React from 'react';
import { Link } from 'react-router-dom';

const TramsAndCondition = () => {
    return (
        <div>
            <h3>Here is our trams and conditon</h3>
            <p>Go back to registration <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TramsAndCondition;