import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import Home from '../Layout/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <div className='container mx-auto'>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Main;