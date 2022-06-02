import React from 'react';
import Navbar from '../components/navbars/ClientNavBar';
function Client({children}) {
    return (
        <>
        <Navbar/>
        {children}
        </>
    );
}

export default Client;