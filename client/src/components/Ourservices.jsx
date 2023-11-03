import React from 'react'
import service from '../assets/ourservices.png'
import '../styles/Ourservices.css'

const Ourservices = () => {
    return (
        <section className='ourservices'>
            <div className="service_container">
                <div className="service_content">
                    <div className="service_header">Our Services</div>
                    <div className="service_subheader">Find A Suitable Pet For Yourselves</div>
                    <div className="service_img2">
                        <img src={service} alt="main_service_img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourservices