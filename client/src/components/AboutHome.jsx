import React from 'react'
import '../styles/AboutHome.css'
import Dennis from '../assets/abouthome_img.jpg'

const AboutHome = () => {
    return (
        <>
            <section className="about_home">
                <div className="about_home_container">
                    <div className="about_home_content">
                        <div className="about_home_img">
                            <img src={Dennis} alt="dennis-dog" />
                            <p>Meet Denise</p>
                        </div>
                        <div className="about_home_text">
                            <div className="about_home_header">
                                A Little Hand goes a Long Way
                            </div>
                            <div className="about_home_subheader">
                                He Needs A Companion & Your Support
                            </div>
                            <div className="about_home_content">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, provident. Ex error ducimus at quo veritatis aperiam natus, sint quam debitis voluptatem cumque suscipit perspiciatis. Impedit, dolorem. Numquam et exercitationem quo at quam enim. Voluptatem beatae dolorem fuga, laudantium nesciunt eius exercitationem iusto similique vitae? Officia ad distinctio tenetur. Nesciunt qui magni recusandae incidunt. Deserunt vitae perferendis ea mollitia expedita.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutHome