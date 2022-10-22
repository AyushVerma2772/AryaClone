import React from 'react';
import Banner from './Banner';
import FilterBox from './FilterBox';
import Navbar from './navbar/Navbar';


const Header = () => {
    return (
        <>
            <Navbar />
            <FilterBox />
            <Banner />
        </>
    )
}

export default Header