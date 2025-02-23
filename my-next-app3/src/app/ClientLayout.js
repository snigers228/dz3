"use client";

import { useEffect } from 'react';
import Cookies from 'js-cookie';

const ClientLayout = ({ children }) => {
    useEffect(() => {
        const token = Cookies.get('token');
        if (!token && window.location.pathname !== '/login') {
            window.location.href = '/login'; 
        }
    }, []);

    return <>{children}</>;
};

export default ClientLayout;