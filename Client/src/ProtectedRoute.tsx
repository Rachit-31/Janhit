import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      toast.error("You need to log in first.");
    }
  }, [token, location]);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;