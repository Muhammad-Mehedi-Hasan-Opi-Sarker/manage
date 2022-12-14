import React from 'react';
import './Progress.css'
import progress from '../../../assets/progress.png';

const Progress = () => {
    return (
        <div className='row mb-5 m-5'>
            <div className='col-lg-6 order-sm-2'>
                <img className='img-fluid' src={progress} alt="" />
            </div>
            <div className='col-lg-6 order-sm-1'>
                <div style={{width:'320px',
                // marginLeft:'20px'
                }}>
                <h1>Bring everyone together to build better products.</h1>
                <p style={{marginTop:'15px'}}>Manage makes it simple for software teams to plan day-to-day tasks while
                    keeping the larger team goals in view.</p>
                    <button style={{backgroundColor:'#FF7F50'}} className='rounded-pill border-0 p-2'>Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default Progress;