import React from 'react'
import Adoption1 from '../assets/Adoption_Process/adoption1.jpg'
import Adoption2 from '../assets/Adoption_Process/adoption2.jpg'
import Adoption3 from '../assets/Adoption_Process/adoption3.jpg'
import '../styles/HowWeWork.css'

const HowWeWork = () => {
    return (
        <section className='howwework'>
            <div className="howwework_container">
                <div className="hoewework_header_content">
                    <div className="howwework_header">How we Work</div>
                    <div className="howwework_subheader">Pet Adoption Process</div>
                </div>
                <div className="howwework_cards">
                    <div className="howwework_cards__text__icons">
                        <div className="howwework_cards__text__icons__box">
                            <img src={Adoption1} alt="dog-icon" />
                            <span>
                                <h4>Find your pet</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est doloribus, magni doloremque consectetur nihil atque quaerat ex vitae aperiam.</p>
                            </span>
                        </div>
                        <div className="howwework_cards__text__icons__box">
                            <img src={Adoption2} alt="dog-icon" />
                            <span>
                                <h4>Know your pet</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio delectus assumenda doloremque itaque asperiores inventore rerum veniam sunt incidunt libero!</p>
                            </span>
                        </div>
                        <div className="howwework_cards__text__icons__box">
                            <img src={Adoption3} alt="dog-icon" />
                            <span>
                                <h4>Take your pet home</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perspiciatis eius veritatis. Minus, illum alias commodi consequatur sed corporis voluptates.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeWork