import React from 'react'
import Jeffery_dog from '../assets/arlington-dog-boarding.webp'
import '../styles/Home.css'
import bg_img from '../assets/main_bg_img.png'

const Home = () => {
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
                                <div className="main_text_header">Help Save Jeffery</div>
                                <div className="main_text_subheader">Join Hands And Be A Guardian </div>
                                <div className="main_text_para">Find your furry partner according to your preferences and help us create better for them. </div>
                                <div className="adopt_button">
                                    <a className="adopt-link" href="#about">
                                        Adopt Now
                                    </a>
                                </div>
                            </div>
                            <div className="main-image">
                                <img src={Jeffery_dog} alt="main-img" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home