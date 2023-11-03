import React from 'react';
import Icon1 from '../assets/service_page/icon-1-1.png'
import Icon2 from '../assets/service_page/icon-2-1.png'
import Icon3 from '../assets/service_page/icon-3-1.png'
import Icon4 from '../assets/service_page/icon-4-1-1.png'
import Icon5 from '../assets/service_page/icon-5.png'
import Icon6 from '../assets/service_page/icon-6.png'
import '../styles/Services.css'
import Sit_Dog from '../assets/service_page/services_dog.jpg'

const Service = () => {
    return (
        <>

            <section className='services'>
                <div className="services-container">
                    <div className="services content">
                        <div className="services-cards">
                            <div className="services_card_i">
                                <img src={Icon1} alt="service-icon" />
                                <h1>Dog Training Services</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque qui, esse cumque autem dolor.</p>
                            </div>
                            <div className="services_card_i">
                                <img src={Icon2} alt="service-icon" />
                                <h1>Dog Veterinary</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque qui, esse cumque autem dolor.</p>
                            </div>
                            <div className="services_card_i">
                                <img src={Icon3} alt="service-icon" />
                                <h1>Dog Food and Nutrition</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque qui, esse cumque autem dolor.</p>
                            </div>
                            <div className="services_card_i">
                                <img src={Icon4} alt="service-icon" />
                                <h1>Pet Care Services</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque qui, esse cumque autem dolor.</p>
                            </div>
                            <div className="services_card_i">
                                <img src={Icon5} alt="service-icon" />
                                <h1>Emergency Services</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque qui, esse cumque autem dolor.</p>
                            </div>
                            <div className="services_card_i">
                                <img src={Icon6} alt="service-icon" />
                                <h1>Report Harassment</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque qui, esse cumque autem dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='touch'>
                <div className="touch_container">
                    <div className="touch_content">
                        <div className="touch_header">Let's get in touch</div>
                        <div className="touch_subheader">Adopt a Puppy Today</div>
                        <div className="service_img">
                            <img src={Sit_Dog} alt="services" className='sitting-dog' />
                            <button><a href="/adopt">See Furrs <i className='fa fa-arrow-right'></i></a></button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Service;
