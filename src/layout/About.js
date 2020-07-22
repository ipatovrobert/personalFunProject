import React from 'react'

const About = () => {
    return (
        <div className='about container'>
            <h1 className='about-heading'>What we do</h1>
            <div className='about-container'>
                <div className='about-item'>
                    <h1 className='about-item--title'><span className='line-above'>Stra</span>tegy</h1>
                    <p className='about-item--description'>We help to shape your strategy and digital aspirations, turning ideas into a coherent solution blueprint.</p>
                </div>

                <div className='about-item'>
                    <h1 className='about-item--title'><span className='line-above'>Desi</span>gn</h1>
                    <p className='about-item--description'>We design user interfaces, customer journeys, conduct user testings, and repeat to find you an edge.</p>
                </div>

                <div className='about-item'>
                    <h1 className='about-item--title'><span className='line-above'>Deve</span>lopment</h1>
                    <p className='about-item--description'>We help to shape your strategy and digital aspirations, turning ideas into a coherent solution blueprint.</p>
                </div>

                <div className='about-item'>
                    <h1 className='about-item--title'><span className='line-above'>Inve</span>stments</h1>
                    <p className='about-item--description'>We allocate capital to NGOs, early stage ventures and in-house products that reflect the change we'd like to see in this world, fostering positive ideas at scale.</p>
                </div>
            </div>
        </div>
    )
}

export default About
