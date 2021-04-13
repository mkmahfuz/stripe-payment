import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Payment from '../Payment/Payment';

const Home = () => {
    return (
        <div>
            <h1>this is home component</h1>
            <Header></Header>
            <Payment></Payment>
            <Footer></Footer>
        </div>
    );
};

export default Home;