import React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div className='color row text-center align-items-center'
        style={{margin:'1px'}}
        >
            <div className='col-lg-6'>
            <h1 className='text-white'>Simplify how your team works today.</h1>
            </div>
            <div className='col-lg-6'>
            <button style={{backgroundColor:'white'}} className='rounded-pill border-0 p-2'>Get Started</button>
            </div>
        </div>
    );
};

export default Work;