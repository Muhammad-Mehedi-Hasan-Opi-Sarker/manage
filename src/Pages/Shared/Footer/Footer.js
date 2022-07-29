import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import facebook from '../../../assets/facebook-icon.png';
import twitter from '../../../assets/twitter.png';
import instragram from '../../../assets/instragram.png';
import pinterset from '../../../assets/pinterset.png';

const Footer = () => {
    return (
        <div>
            <div className='row colors align-items-center' 
            style={{marginLeft:'1px',marginRight:'1px'}}
            >
            <section className='media col-lg-4 co container'>
                <img src={logo} alt="" /><br />
                <img src={facebook} alt="" /><br />
                <img src={twitter} alt="" /><br />
                <img src={instragram} alt="" /><br />
                <img src={pinterset} alt="" />

            </section>
            <section className='hearder col-lg-4 container'>
                <div className='row'>
                <div className='col-lg-6'>
                <Link className='nai' to='/home'>Home</Link><br />
                <Link className='nai' to='/pricing'>Pricing</Link><br />
                <Link className='nai' to='/product'>Pruducts</Link><br />
                <Link className='nai' to='/about'>About Us</Link>
                </div>
                <div className='col-lg-6'>
                    <Link className='nai' to='/careers'>Careers</Link><br />
                    <Link className='nai' to='/community'>Community</Link><br />
                    <Link className='nai' to='/privacy'>Privacy Policy</Link>
                </div>
                </div>
            </section>
            <section className='form col-lg-4 container'>
                <input type="text" name="" id="" className='rounded-pill' />
                <button style={{backgroundColor:'#FF7F50'}}
                className='rounded-pill border-0 p-2'>Go</button>
            </section>
            </div>
        </div>
    );
};

export default Footer;