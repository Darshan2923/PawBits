import React, { useState } from 'react'
import '../styles/Navbar.css'
import Main_Logo from '../assets/PawBits.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <nav>
                {/* mobile */}
                <div className={`mobile-navbar ${nav ? 'open-nav' : ""} `}>
                    <div onClick={openNav} className="mobile-navbar__close">
                        <i className='fa-solid fa-xmark'></i>
                    </div>
                    <ul className='mobile-navbar__links'>
                        <li>
                            <a onClick={openNav} href='/'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href='#about'>
                                About
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href='/services'>
                                Services
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href='/adopt'>
                                Adopt Now
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href='/contact'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* desktop */}

                <div className="navbar">
                    <div className="navbar__img">
                        <a href='/' onClick={() => window.scrollhref(0, 0)}>
                            <img src={Main_Logo} alt="Logo" style={{ width: "150px", height: "60px" }} />
                        </a>
                    </div>
                    <ul className="navbar__links">
                        <li>
                            <a className="home-link" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a className="about-link" href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a className="contributors-link" href="/adopt">
                                Adopt Now
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a className="service-link" href="/services">
                                Services
                            </a>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">Register
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>
                                <div className="dropdown-content">
                                    <a href="#Register">Register</a>
                                    <a href="#Login">Login</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            {" "}
                            <a className="contact-link" href="/contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a className="adopt-link" href="/lifestyle">
                                <div className="adopt_button">
                                    Lifestyle Pet
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="mobile-hamb" onClick={openNav}>
                        <i className="fa-solid fa-bars-staggered"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar