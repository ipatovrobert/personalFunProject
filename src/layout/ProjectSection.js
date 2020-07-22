import React, {Fragment, useState, useEffect} from 'react'
import okrPicture from '../images/projects/okr.png'
import firePicture from '../images/projects/fire.png'
import pensionPicture from '../images/projects/pension.png'

const ProjectSection = () => {
    const [orderChanger, setOrderChanger] = useState({
        order: 0
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 1017){
                setOrderChanger({...setOrderChanger, order: 1});
            } else if(window.innerWidth > 1017) {
                setOrderChanger({...setOrderChanger, order: 0});
            }
        });
    }, [])
    return (
        <Fragment>
            <div className='project container'>
                <div className='project-info' style={orderChanger}>
                    <h1 className='project-title'><span className='line-above'>OKR</span> software</h1>
                    <p className='project-description'>
                    <span className='single-line'>We developed an OKR & annual appraisal software for the employees of a listed partner</span>

                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    </p>

                    <a className='project-button button' href='http://localhost/#'>Ask us anything</a>
                </div>
                <div className='project-picture'>
                    <img src={okrPicture} alt='okr project' className='right'></img>
                </div>
            </div>

            <div className='project container'>
                <div className='project-info' style={{order: 1}}>
                    <h1 className='project-title'>Fire damper <span className='line-above'>app</span></h1>
                    <p className='project-description'>
                    <span className='single-line'>We partnered directly with the manufacturer to develop a proof of concept for the future of fire dampers</span>

                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    </p>

                    <a className='project-button button' href='http://localhost/#'>Ask us anything</a>
                </div>
                <div className='project-picture' style={{order: 0}}>
                    <img src={firePicture} alt='fire project' className='left'></img>
                </div>
            </div>

            <div className='project container'>
                <div className='project-info' style={orderChanger}>
                    <h1 className='project-title'><span className='line-above'>Pension</span> mock-up</h1>
                    <p className='project-description'>
                    <span className='single-line'>We tried to help Swiss citizens to better understand their pension plans through a simple website</span>

                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    </p>

                    <a className='project-button button' href='http://localhost/#'>Ask us anything</a>
                </div>
                <div className='project-picture'>
                    <img src={pensionPicture} alt='pension project' className='right'></img>
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectSection
