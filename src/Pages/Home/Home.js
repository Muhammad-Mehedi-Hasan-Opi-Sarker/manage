import React from 'react';
import Customers from './Customers/Customers';
import Manage from './Manage/Manage';
import Progress from './Progress/Progress';
import Work from './Work/Work';

const Home = () => {
    return (
        <div>
            <Progress></Progress>
            <Manage></Manage>
            <Customers></Customers>
            <Work></Work>
        </div>
    );
};

export default Home;