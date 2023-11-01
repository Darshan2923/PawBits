import React, { useEffect, useState } from 'react'
import Jeffery_dog from '../assets/arlington-dog-boarding.webp'
import '../styles/Hero.css'
import bg_img from '../assets/main_bg_img.png'

const Hero = () => {
    const [goUp, setGoUp] = useState(false);
    // scroll top function
    let scrollToTop = () => {
        window.scrollTo({ top: (0, 0), behavior: 'smooth' });
    }

    //bookBtn
    let bookBtn = () => {
        document.querySelector('.main_image').scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.scrollY > 600) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }
        };
        window.addEventListener('scroll', onPageScroll);
        return () => {
            window.removeEventListener("scroll", onPageScroll)
        };
    }, []);


    return (
        <>
            <div class="demo-wrap">
                <img
                    class="demo-bg"
                    src={bg_img}
                    alt="bg_img"
                />
                <section class="main_section">
                    <div className="main_container">
                        <div className="main_content">
                            <div className="main_text">
                                <div className="main_text_header">Help Love <span> Jefferey</span></div>
                                <div className="main_text_subheader">Join Hands And Be A Guardian </div>
                                <div className="main_text_para">Find your furry partner according to your preferences and help us create better for them. </div>
                                <div className="campaign_button">
                                    <a className="campaign-link" href="#campaign">
                                        <i className="fa fa-eye" aria-hidden="true"></i>  Adopt Now
                                    </a>
                                </div>
                            </div>
                            <div className="main_image">
                                <img src={Jeffery_dog} alt="main-img" />
                            </div>
                        </div>
                    </div>
                    {/* page up */}
                    <div
                        onClick={scrollToTop}
                        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
                    >
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero