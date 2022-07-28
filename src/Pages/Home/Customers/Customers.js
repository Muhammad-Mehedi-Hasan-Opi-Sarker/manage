import React, { useEffect, useState } from 'react';
import Customer from './Customer';

const Customers = () => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(datas => setData (datas))
    }, [])
    return (
        <div className='text-center mb-5' style={{margin:'13px'}}>
            <h1 className='mb-5'>What they've said</h1>
            <div className='row mb-3'>
            {
                datas.map(data=> <Customer
                key={data.id}
                data={data}
                ></Customer>)
            }
            </div>
            <button style={{backgroundColor:'#FF7F50'}} className='rounded-pill border-0 p-2'>Get Started</button>
        </div>
    );
};

export default Customers;