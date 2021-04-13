import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>File or path not found. go back to <Link to="/">Home</Link></h2>
        </div>
    );
};

export default NotFound;