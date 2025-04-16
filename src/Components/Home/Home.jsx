import React from 'react';
import Faq from './Faq';
import Marquees from './Marquees';
import Banner from './Banner';
import Benifits from './Benifits';
import Intro from './Intro';
import Reviewes from './Reviewes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marquees></Marquees>
            <Intro></Intro>
            <Benifits></Benifits>
            <Faq></Faq>
            <Reviewes></Reviewes>
        </div>
    );
};

export default Home;