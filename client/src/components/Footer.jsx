import React from 'react'
import Footer_logo from '../assets/Pawbits_footer.jpg'
import Ficon1 from '../assets/Footer/footer-icon-1.png'
import Ficon2 from '../assets/Footer/footer-icon-2.png'
import Ficon3 from '../assets/Footer/footer-icon-3.png'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="footer_container">
                    <div className="brand_logo_f"><img src={Footer_logo} alt="logo" /></div>
                    <div className="footer_content">
                        <div className="fmain_content">
                            <div className="add_footer">
                                <img src={Ficon1} alt="footer-icon" />
                                <p>B48 Gidc Indl Estate,</p><p> Jamnagar,Mumbai</p>
                            </div>
                            <div className="phone_footer">
                                <img src={Ficon2} alt="footer-icon" />
                                <p>Office: 772-619-639</p>
                                <p>Inquiries:+91 9065309283</p>
                            </div>
                            <div className="open_footer">
                                <img src={Ficon3} alt="footer-icon" />
                                <p>Mon - Fri: 9am - 8pm</p>
                                <p>Sat - Sun: Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="f_nav">
                        <ul className="f_navbar">
                            <li><a href="/">Home</a> </li>
                            <li><a href="/about">About</a> </li>
                            <li><a href="/register">Register</a> </li>
                            <li><a href="/contact">Contact</a> </li>
                        </ul>
                    </div>
                    <div className="f_copyright">
                        <div className="f_text">© Copyrights are Reserved by <span>YourCompany.com</span></div>
                        <div className="f_brands">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-solid fa-envelope"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer