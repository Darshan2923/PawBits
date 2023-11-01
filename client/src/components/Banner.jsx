import React from 'react'
import '../styles/Banner.css'

const Banner = () => {
    return (
        <section className='banner-section'>
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-content__text">
                        <h2>Want a pet for your loved ones?</h2>
                        <p>
                            Elit sanctus mea no. Ne duo vocent vocibus consetetur. Singulis etam pericula an vis, pri graeco partiendo te, alii admodum copiosae id sea. Per no malis liber fierent. Lorem ipsum dolor sit amet.
                        </p>
                        <div className="campaign_button">
                            <a className="campaign-link" href="#campaign">
                                <i className="fa fa-phone" aria-hidden="true"></i>  Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner