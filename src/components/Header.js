import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import animatedScrollTo from 'animated-scroll-to';


export default class Header extends Component {

    animatedToWhatWeDo() {
        animatedScrollTo(document.querySelector('#what-we-do'));
    }
    animatedToHome() {
        animatedScrollTo(document.querySelector('#home'));
    }
    animatedToAboutUs() {
        animatedScrollTo(document.querySelector('#about-us'));
    }
    animatedToPortfolio() {
        animatedScrollTo(document.querySelector('#portfolio'));
    }
    animatedToContactUs() {
        animatedScrollTo(document.querySelector('#contact-us'));
    }

    render() {
        return (
             <div>
            <div className="navbar-fixed main-nav-wrapper">
                <nav className="white">
                    <div className="container">
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo">
                                <h6>Logo</h6>
                            </Link>
                            <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons black-text">menu</i>
                            </Link>
                            <ul className="right hide-on-med-and-down t-menu-list">
                                <li className="custom-active link1"><Link onClick={this.animatedToHome} to="home">Home</Link></li>
                                <li className="link2"><Link onClick={this.animatedToWhatWeDo} to="what-we-do">What we do</Link></li>
                                <li className="link3"><Link onClick={this.animatedToAboutUs} to="about-us">About us</Link></li>
                                <li className="link4"><Link onClick={this.animatedToPortfolio} to="portfolio">Portfolio</Link></li>
                                <li className="link5"><Link onClick={this.animatedToContactUs} to="contact-us">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
           
                <ul className="sidenav white" id="mobile-demo">
                    <li>
                        <Link to="page-body"><i className="material-icons sidenav-close">close</i></Link>
                    </li>
                    <li className="active link1"><Link onClick={this.animatedToHome} to="home">Home</Link></li>
                    <li className="link2"><Link onClick={this.animatedToWhatWeDo} to="what-we-do">What we do</Link></li>
                    <li className="link3"><Link onClick={this.animatedToAboutUs} to="about-us">About us</Link></li>
                    <li className="link4"><Link onClick={this.animatedToPortfolio} to="portfolio">Portfolio</Link></li>
                    <li className="link5"><Link onClick={this.animatedToContactUs} to="contact-us">Contact us</Link></li>
                </ul>
            </div>
        );
    }
}