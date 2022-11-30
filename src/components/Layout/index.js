import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';

const Layout = ({children}) => {

    return (
        <div className='b_layout'>
            <div className='home'>
                <Header />
            </div>
            {children}
        </div>
    )
}

export default Layout