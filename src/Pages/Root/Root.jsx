import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../../Components/Header/Navber.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;