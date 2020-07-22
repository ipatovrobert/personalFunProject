import React from 'react'
import Navbar from './Navbar'

const Heading = () => {
    return (
        <div className='heading'>
            <Navbar />
            <div className='container'>
                <h1 className='heading-title'>
                    <span className='single-line'>We foster positive ideas</span>
                    <span className='single-line'>by creating digital products and strategies</span>
                    <span className='single-line'>with our partners</span>
                </h1>

                <p className='heading-text'>
                    <span className='single-line'>Have a project for us? We are a curious bunch, so simply </span> reach out. We’re looking forward to talking to you
                </p>

                <a href='#contact' className='heading-button button'>Contact</a>
            </div>
            <p className='heading-scroll'>Scroll to discover</p>
        </div>
    )
}

export default Heading
