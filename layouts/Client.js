import React from 'react';
import Navbar from '../Components/navbars/ClientNavBar';
function Client({children}) {
    return (
        <>
        <Navbar/>
        {children}
        </>
    );
}

export default Client;