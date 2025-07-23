import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
        if (!isAuthenticated) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');

    if (!isAuthenticated) {
        return null; // ou un loader
    }

    return <>{children}</>;
};

export default ProtectedRoute;