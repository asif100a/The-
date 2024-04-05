import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }
    return <Navigate to={'/login'} />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
};

export default ProtectedRoute;