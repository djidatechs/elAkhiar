import React from 'react';
import Navbar from '../Components/navbars/AdminNavBar';
function Admin({children}) {
    return (
        <>
        <Navbar/>
        {children}
        </>
    );
}

export default Admin;