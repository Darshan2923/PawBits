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
                            <a onClick={openNav} href='#home'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href='#about'>
                                About
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href='#projects'>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href='#contact'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* desktop */}

                <div className="navbar">
                    <div className="navbar__img">
                        <a href='/' onClick={() => window.scrollhref(0, 0)}>
                            <img src={Main_Logo} alt="Logo" style={{ width: "150px", height: "150px" }} />
                        </a>
                    </div>
                    <ul className="navbar__links">
                        <li>
                            <a className="home-link" href="#home">
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
                            <a className="contributors-link" href="#contributors">
                                Star Contributors
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a className="register-link" href="#register">
                                Register
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a className="contact-link" href="#projects">
                                Contact
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a className="adopt-link" href="#about">
                                <div className="adopt_button">
                                    Adopt Now
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