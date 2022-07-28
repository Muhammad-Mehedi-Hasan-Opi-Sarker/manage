import React from 'react';
import Manage from './Manage/Manage';
import Progress from './Progress/Progress';

const Home = () => {
    return (
        <div>
            <Progress></Progress>
            <Manage></Manage>
        </div>
    );
};

export default Home;