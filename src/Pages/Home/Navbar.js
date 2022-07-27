import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div style={{marginBottom:'60px'}}>
            <nav className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to='/'><img src={logo} alt="" /></Link>
                    <div className="collapse navbar-collapse align-content-stretch" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pricing' className="nav-link" href="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/product' className="nav-link" href="#">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link" href="#">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/careers' className="nav-link" href="#">Careers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/community' className="nav-link" href="#">Community</Link>
                            </li>
                            
                        </ul>
                        <button style={{backgroundColor:'#FF7F50'}} className='rounded-pill border-0 p-2'>Get Started</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;