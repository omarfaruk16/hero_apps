import React from 'react';
import Hero from '../../Components/Hero/Hero.jsx';
import TrustedStats from '../../Components/Hero/trust.jsx';
import Trending from '../../Components/Trending-Aps/Trending.jsx';

const Home = () => {
    return (
        <div>
            <Hero/>
            <TrustedStats/>
            <Trending></Trending>
        </div>
    );
};

export default Home;