import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from '../actions/index';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';

import Ban1Img from '../photos/main-banner-slide1.svg'
import Ban2Img from '../photos/main-banner-slide2.svg'
import Ban3Img from '../photos/main-banner-slide3.svg'
import jackImg from '../photos/jack-finnigan-rriAI0nhcbc-unsplash.png'
import kalImg from '../photos/kal-visuals-emxAxutgt-A-unsplash.png'
import peterImg from '../photos/peter-sjo-Nxy-6QwGMzA-unsplash.png'
import whyUsImg from '../photos//why-choose.png'
import mealsImg from '../photos/mainlandmeals-thumbnail.png'
import expressImg from '../photos/postmailexpress-thumbnails.png'
import scheduleImg from '../photos/tep-scheduler-thumbnail.png'

const divMeetUs = {
    position: 'relative'
}
const divArrow = {
    position: 'absolute',
    width: '100%',
    marginTop: '0px'
}
const ArrLeftRight = { fontSize: '50px' }
const h4WhyUs = { marginTop: '100px' }
const imgWhyUs = { width: '100%' }
const TeamStyle = { height: '213.859 !important'}

class Main extends Component {
    constructor(props) {
        super(props);
        this.onContactUsSubmit = this.onContactUsSubmit.bind(this);
    }

    async onContactUsSubmit(formData) {
        // We need to call some action
        const { reset } = this.props;
        await this.props.contactUs(formData);
        reset();
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className="carousel carousel-slider banner-carousel">
                    <Link className="carousel-item" to="#four!"><img className="responsive-img" src={Ban1Img} alt="banner 1" /></Link>
                    <Link className="carousel-item" to="#four!"><img className="responsive-img" src={Ban2Img} alt="banner 2" /></Link>
                    <Link className="carousel-item" to="#four!"><img className="responsive-img" src={Ban3Img} alt="banner 3" /></Link>
                </div>

                <div className="container" id="what-we-do">
                    <div className="row">
                        <div className="col segment-title">
                            <h4>What we do</h4>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l4">
                            <div className="card">
                                <div className="card-content custom-card-title">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons">create</i>
                                        <p>Design</p>
                                    </span>
                                </div>
                                <div className="card-image custom-card-body">
                                    <div className="center-align custom-card-content">
                                        <p>We work closely with our clients to
                                            create aesthetically designed
                                            websites and other materials
                                            (e. Logo, business cards, banners
                                            and flyerse.t.c)</p>
                                    </div>
                                </div>
                                <div className="card-content ">
                                    <span className="card-title activator grey-text text-darken-4 custom-dropup">
                                        <i className="material-icons center-align">arrow_drop_up</i></span>
                                </div>
                                <div className="card-reveal custom-card-reveal">
                                    <span className="card-title grey-text text-darken-4 custom-close"><i
                                            className="material-icons">close</i></span>
                                    <div className="valign-wrapper reverse-content">
                                        <ul>
                                            <li>UI/UX Design</li>
                                            <li>Graphics Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l4">
                            <div className="card">
                                <div className="card-content custom-card-title">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons">developer_mode</i>
                                        <p>Web</p>
                                    </span>
                                </div>
                                <div className="card-image custom-card-body">
                                    <div className="center-align custom-card-content">
                                        <p>To the growth of any business, you can
                                            leverage on the proficiency of our
                                            unique team to bring your ideas to life</p>
                                    </div>
                                </div>
                                <div className="card-content ">
                                    <span className="card-title activator grey-text text-darken-4 custom-dropup">
                                        <i className="material-icons center-align">arrow_drop_up</i></span>
                                </div>
                                <div className="card-reveal custom-card-reveal">
                                    <span className="card-title grey-text text-darken-4 custom-close"><i
                                            className="material-icons">close</i></span>
                                    <div className="valign-wrapper reverse-content">

                                        <ul>
                                            <li>Web Application Development</li>
                                            <li>E-Commerce
                                                Development</li>
                                            <li>Tech Consulting</li>
                                            <li>Website Maintenance
                                                & Support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l4">
                            <div className="card">
                                <div className="card-content custom-card-title">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons">devices</i>
                                        <p>Mobile</p>
                                    </span>
                                </div>
                                <div className="card-image custom-card-body">
                                    <div className="center-align custom-card-content">
                                        <p>Do your products and services need
                                            to be available at fingertips of your
                                            customers?, but no
                                            knowledge of App development?
                                            We are your solution.</p>
                                    </div>
                                </div>
                                <div className="card-content ">
                                    <span className="card-title activator grey-text text-darken-4 custom-dropup">
                                        <i className="material-icons center-align">arrow_drop_up</i></span>
                                </div>
                                <div className="card-reveal custom-card-reveal">
                                    <span className="card-title grey-text text-darken-4 custom-close"><i
                                            className="material-icons">close</i></span>
                                    <div className="valign-wrapper reverse-content">
                                        <ul>
                                            <li>Mobile AppDesign</li>
                                            <li>Andriod App Development</li>
                                            <li>IOS App Development</li>
                                            <li>IOS/Android App Deployment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l4 m12 s12 offset-l2">
                            <div className="card">
                                <div className="card-content custom-card-title">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons">headset_mic</i>
                                        <p>Business Support</p>
                                    </span>
                                </div>
                                <div className="card-image custom-card-body">
                                    <div className="center-align custom-card-content">
                                        <p>We have the resources available for
                                            you to take your business to
                                            the next level.</p>
                                    </div>
                                </div>
                                <div className="card-content ">
                                    <span className="card-title activator grey-text text-darken-4 custom-dropup">
                                        <i className="material-icons center-align">arrow_drop_up</i></span>
                                </div>
                                <div className="card-reveal custom-card-reveal">
                                    <span className="card-title grey-text text-darken-4 custom-close"><i
                                            className="material-icons">close</i></span>
                                    <div className="valign-wrapper reverse-content">
                                        <ul>
                                            <li>Cabling & Networking</li>
                                            <li>PABX & Telecoms</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l4 m12 s12">
                            <div className="card">
                                <div className="card-content custom-card-title">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons">wifi_tethering</i>
                                        <p>Network & Infrastructure</p>
                                    </span>
                                </div>
                                <div className="card-image custom-card-body">
                                    <div className="center-align custom-card-content">
                                        <p>We have a team of skilled Network
                                            Engineers available to cater to your
                                            business needs. </p>
                                    </div>
                                </div>
                                <div className="card-content ">
                                    <span className="card-title activator grey-text text-darken-4 custom-dropup">
                                        <i className="material-icons center-align">arrow_drop_up</i></span>
                                </div>
                                <div className="card-reveal custom-card-reveal">
                                    <span className="card-title grey-text text-darken-4 custom-close"><i
                                            className="material-icons">close</i></span>
                                    <div className="valign-wrapper reverse-content">
                                        <ul>
                                            <li>UI/UX Design</li>
                                            <li>Graphics Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" id="about-us">
                    <div className="row">
                        <div className="col segment-title">
                            <h4>About Us</h4>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="t-info">We are a team of experienced and proficient developers with outstanding work ethics to
                                provide ourstimable clients withremarkable website and mobile applications for your business
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="container" style={divMeetUs}>
                    <div className="row">
                        <div className="col segment-title">
                            <h4>Meet the team</h4>
                            <hr />
                        </div>
                    </div>
                    <div className="carousel carousel-slider team-carousel hide-on-med-and-down" style={TeamStyle} id="carouselFirst">
                        <Link className="carousel-item" to="#one">
                            <div className="row">
                                <div className="col s12 m12 l4">

                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={jackImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col s12 m12 l4">

                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={kalImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col s12 m12 l4">
                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={peterImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="carousel-item" to="#one">
                            <div className="row">
                                <div className="col s12 m12 l4">

                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={jackImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col s12 m12 l4">

                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={kalImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col s12 m12 l4">

                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={peterImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="row hide-on-med-and-down" style={divArrow}>
                        <div className="row hide-on-med-and-down">
                            <div className="col offset-l5">
                                <i className="material-icons carousel-prev" style={ArrLeftRight}>arrow_left</i>
                                <i className="material-icons carousel-next" style={ArrLeftRight}>arrow_right</i>
                            </div>
                        </div>
                    </div>

                    <div className="carousel carousel-slider mobile-team-carousel hide-on-large-only">
                        <Link className="carousel-item" to="#one">
                            <div className="row">
                                <div className="col s12 m12">

                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={jackImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="carousel-item" to="#one">
                            <div className="row">
                                <div className="col s12 m12">

                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={peterImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="carousel-item" to="#one">
                            <div className="row">
                                <div className="col s12 m12">

                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="responsive-img" src={kalImg}
                                                alt="team member" />
                                        </div>
                                        <div className="card-stacked">
                                            <div className="card-content">
                                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="row hide-on-large-only" style={divArrow}>
                        <div className="row hide-on-large-only">
                            <div className="col offset-m5 offset-s4">
                                <i className="material-icons carousel-mprev" style={ArrLeftRight}>arrow_left</i>
                                <i className="material-icons carousel-mnext" style={ArrLeftRight}>arrow_right</i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col segment-title">
                            <h4 style={h4WhyUs}>Why choose us</h4>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img className="responsive-img" src={whyUsImg} alt="why_us" style={imgWhyUs} />
                        </div>
                    </div>
                </div>
                
                <div className="portfolio-wrapper" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col segment-title">
                                <h4>Portfolio</h4>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col l4 m4 s12">
                                <div className="previous-work previous-work1">
                                    <div className="card">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator responsive-img" alt="mainland meals" src={mealsImg} />
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Food app<i
                                                    className="material-icons right">more_vert</i></span>
                                            <p><Link to="https://mainlandmeals.com/" target="_blank" className="work-link"><i
                                                        className="fas fa-eye"></i></Link></p>
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">Card Title<i
                                                    className="material-icons right">close</i></span>
                                            <p>Here is some more information about this product that is only revealed once
                                                clicked
                                                on.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l4 m4 s12">
                                <div className="previous-work previous-work2">
                                    <div className="card">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator responsive-img" alt="mail express" src={expressImg} />
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Logistics<i
                                                    className="material-icons right">more_vert</i></span>
                                            <p><Link to="http://postmailexpress.com/" target="_blank" className="work-link"><i
                                                        className="fas fa-eye"></i></Link></p>
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">Card Title<i
                                                    className="material-icons right">close</i></span>
                                            <p>Here is some more information about this product that is only revealed once
                                                clickedon.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l4 m4 s12">
                                <div className="previous-work previous-work3">
                                    <div className="card">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator responsive-img" alt="schedule book"
                                                src={scheduleImg} />
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Scheduler<i
                                                    className="material-icons right">more_vert</i></span>
                                            <p><Link to="https://tepcentre.com/" target="_blank" className="work-link"><i className="fas fa-eye"></i></Link></p>
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">Card Title<i
                                                    className="material-icons right">close</i></span>
                                            <p>Here is some more information about this product that is only revealed once
                                                clicked
                                                on.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5>Tech News</h5>
                        </div>
                    </div>
                    <div className="row tech-news">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <span className="news-source">Forbes Tech</span><span className="news-date">Jun 10, 2019, 07:35pm</span>
                                    <p className="news-title"><Link to="#">Lorem five centuries, but also the leap into electronic
                                            typesetting, remaining essentially</Link></p>
                                    <p>Fcrambled it to make a type specimen book. It has survived not only five centuries, but also
                                        the
                                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                                        1960s with the release of Letraset sheets containing Lorem five centuries, but also the
                                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                                        1960s with the release of Letraset sheets containing Lorem
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span className="news-source">Twitter</span><span className="news-date">Jun 10, 2019, 07:35pm</span>
                                    <p className="news-title"><Link to="#">Lorem five centuries, but also the leap into electronic
                                            typesetting, remaining essentially</Link></p>
                                    <p>Fcrambled it to make a type specimen book. It has survived not only five centuries, but also
                                        the
                                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                                        1960s with the release of Letraset sheets containing Lorem five centuries, but also the
                                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                                        1960s with the release of Letraset sheets containing Lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container" id="contact-us">
                    <div className="row">
                        <div className="col segment-title">
                            <h4>Contact</h4>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        { this.props.responseMessage ?
                            <div>
                            <span className="pink-text text-darken-2"><h5>{ this.props.responseMessage }</h5></span>
                            </div> : null }
                    </div>
                    <div className="row">
                        <div className="col l8 m12">
                            <div className="row">
                                <form className="col s12 m12 l12 contact-message" onSubmit={handleSubmit(this.onContactUsSubmit)}>
                                    <div className="row">
                                        <Field 
                                            name="client_name"
                                            type="text"
                                            id="client_name"
                                            required="required"
                                            label="Name"
                                            component={CustomInput} />
                                        
                                        <Field 
                                            name="client_company"
                                            type="text"
                                            id="client_company"
                                            required="required"
                                            label="Company"
                                            component={CustomInput} />
                                    </div>
                                    <div className="row">
                                        <Field 
                                            name="client_phone"
                                            type="tel"
                                            id="client_phone"
                                            required="required"
                                            label="Phone number"
                                            component={CustomInput} />
                                        
                                        <Field 
                                            name="client_email"
                                            type="email"
                                            id="client_email"
                                            required="required"
                                            label="Email"
                                            component={CustomInput} />
                                    </div>
                                    <div className="row">
                                        <Field 
                                            name="client_message"
                                            type="textarea"
                                            id="client_message"
                                            required="required"
                                            label="Message"
                                            component={CustomTextArea} />
                                    </div>
                                    <div className="row">
                                        <div className="col l3 offset-l9 m3 offset-m9 s12">
                                            <button className="waves-effect waves-light btn message-button">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        responseMessage: state.auth.responseMessage
    }
}

//passing the action creator name from our action into form redux
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'contactus' })
)(Main) 