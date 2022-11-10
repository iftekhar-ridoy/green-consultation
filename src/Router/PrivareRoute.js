import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivareRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivareRoute;