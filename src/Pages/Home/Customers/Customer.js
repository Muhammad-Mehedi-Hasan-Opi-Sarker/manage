import React from 'react';
import './Customer.css';

const Customer = ({data}) => {
    // const {name,say,img} = data;
    return (
            <div className="card col-12 col-lg-3 mb-2" style={{backgroundColor:'#f4f0ec'}}>
                <div className="card-body">
                    <img src={data.img} className="rounded-circle" alt="" />
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.say}</p>
                </div>
            </div>
       
    );
};

export default Customer;