import React, {Fragment} from 'react'
import Heading from '../layout/Heading'
import Partners from '../layout/Partners'
import Team from '../layout/Team'
import ProjectSection from '../layout/ProjectSection'
import About from '../layout/About'
import Contact from '../layout/Contact'

const Home = () => {
    return (
        <Fragment>
            <Heading />
            <Partners />
            <Team />
            <ProjectSection />
            <About />
            <Contact />
        </Fragment>
    )
}

export default Home
