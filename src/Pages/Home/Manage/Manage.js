import React from 'react';
import './Manage.css';

const Manage = () => {
    return (
        <div className='row'>
            <section className='col-lg-6'>
                <div className='first'>
                    <h1>What's different about Manage?</h1>
                    <p>Manage provides all the functionality you
                        team needs, without the complexity.
                        Our software is tailor-made for modern digital product teams.</p>
                </div>
            </section>

            <section className='col-lg-6 write'>
                <div className='second'>
                    <div className='mb-5 d-flex'>

                        <button style={{ backgroundColor: '#FF7F50' }}
                            className='text-white rounded-pill border-0 but'>01
                        </button>
                        <div className='st'>
                            <h5 className='fw-bold'>Track company-wide progress</h5>
                            <p>See how your day-to- tasks fit into the wider vision. Go from tracking
                                progress at the milestone level all the way done to the smallest of details.
                                Never lose sight of the bigger picture again.</p>
                        </div>
                    </div>
                    <div className='mb-5 d-flex'>

                        <button style={{ backgroundColor: '#FF7F50' }}
                            className='text-white rounded-pill border-0 but'>01
                        </button>
                        <div className='st'>
                            <h5 className='fw-bold'>Advanced built-in reports</h5>
                            <p>Set internal delivery estimates and track progress
                                toward company goals.Our customisable dashboard help
                                s you build out the reports you need to keep key s
                                takeholders informed.</p>
                        </div>
                    </div>
                    <div className='mb-5 d-flex'>

                        <button style={{ backgroundColor: '#FF7F50' }}
                            className='text-white rounded-pill border-0 but'>01
                        </button>
                        <div className='st'>
                            <h5 className='fw-bold'>Everything you need in one place</h5>
                            <p>Stop jumping from one service to anot
                                her to communicate, store files, track t
                                asks and share documents. Manage offers an all-
                                in-one team productivity solution.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Manage;