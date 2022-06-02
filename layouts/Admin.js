import React from 'react';
import Navbar from '../components/navbars/AdminNavBar';
function Admin({children}) {
    return (
        <>
        <Navbar/>
        {children}
        </>
    );
}

export default Admin;