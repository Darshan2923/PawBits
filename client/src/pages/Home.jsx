import React from 'react'
import Hero from '../components/Hero.jsx'
import AboutHome from '../components/AboutHome.jsx'
import HowWeWork from '../components/HowWeWork.jsx'

const Home = () => {
    return (
        <div className='Home'>
            <Hero />
            <AboutHome />
            <HowWeWork />
        </div>
    )
}

export default Home