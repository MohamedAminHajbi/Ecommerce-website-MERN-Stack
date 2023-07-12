import React from 'react'
import { useAuth } from '../../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    let { user } = useAuth();
  
    if (user) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  };

export default PrivateRoute