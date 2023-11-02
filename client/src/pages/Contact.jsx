import React from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Footer from '../components/Footer.jsx'

const Contact = () => {
    const onSubmit = () => {

    }
    return (
        <>
            <PageHeader title="Contact" para="Need Assistance or Have a Question?" />
            <section className="contact">
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-text_content">
                            <div className="contact-text-header">Send us a message</div>
                            <div className="contact-text-para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</div>
                            <div className="contact-calls">
                                <div className="call-now">
                                    <i className='fas fa-phone-volume'></i>
                                    <h4>Call Anytime</h4>
                                    <h2>(022) 2243-34871</h2>
                                </div>
                                <div className="call-now">
                                    <i className='far fa-envelope'></i>
                                    <h4>Write Email</h4>
                                    <h2>help@yourcompany.com</h2>
                                </div>
                                <div className="call-now">
                                    <i className='fa fa-map-marker'></i>
                                    <h4>Visit Office</h4>
                                    <h2>B48 Gidc Indl Estate,Jamnagar,Mumbai</h2>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form onSubmit={onSubmit}>
                                <input type="text" placeholder='Your Name' className='name' />
                                <input type="email" placeholder='Your Email' className='email' />
                                <input type="text" placeholder='Your Subject' className='subject' />
                                <input type="text" placeholder='Your PhoneNumber' className='phone' />
                                <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder='Your Message'></textarea>
                                <button type='submit'>Send a message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact