import React from 'react'
import '../styles/PageHeader.css'

const PageHeader = (props) => {
    return (
        <>
            <section className="page-header">
                <div className="banner-container">
                    <div className="banner-content">
                        <div className="banner-content__text">
                            <h2>{props.title}</h2>
                            <p>
                                {props.para}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageHeader