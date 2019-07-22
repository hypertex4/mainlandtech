import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mltImg from '../photos/brand-logo.png'

const pStyle = {
    marginRight: '20px'
}

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-wrapper">
        <div>
            <div className="container">
                <div className="row">
                    <div className="col l9 m9 col-1">
                        <img className="responsive-img" src={mltImg} alt="brand logo" />
                        <p><Link to="mailto:admin@mainlandtech.com?Subject=Hello%20" target="_top"><span>
                            <i className="fas fa-envelope"></i></span>admin@mainlandtech.com</Link>
                        </p>
                        <p><span><i className="fas fa-phone"></i></span>081 887 76245</p>
                        <p><span style={pStyle}><span><i className="fas fa-calendar"></i></span>Mon-Fri</span>
                            <span>9:00am - 10:00pm</span></p>
                    </div>
                    <div className="col col-2">
                        <span>
                            <h6>Social media</h6>
                        </span>
                        <p className="social-icons">
                            <span><Link to="#"><i className="fab fa-facebook"></i></Link></span>
                            <span><Link to="#"><i className="fab fa-instagram"></i></Link></span>
                            <span><Link to="#"><i className="fab fa-twitter"></i></Link></span>
                            <span><Link to="#"><i className="fab fa-youtube"></i></Link></span></p>
                        <p>Copyright 2019</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        );
    }
}