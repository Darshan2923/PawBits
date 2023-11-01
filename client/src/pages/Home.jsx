import React from 'react'
import Hero from '../components/Hero.jsx'
import AboutHome from '../components/AboutHome.jsx'
import HowWeWork from '../components/HowWeWork.jsx'
import Ourservices from '../components/Ourservices.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
    return (
        <div className='Home'>
            <Hero />
            <AboutHome />
            <HowWeWork />
            <Ourservices />
            <Banner />
            <Footer />
        </div>
    )
}

export default Home