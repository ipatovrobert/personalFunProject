import React, {Fragment} from 'react'
import Navbar from '../layout/Navbar'
import BlogList from '../layout/BlogList'


const Blog = () => {
    return (
        <Fragment>
            <Navbar color='black' weight='normal' bgClr='#063A70' colorButton='white'/>
            <BlogList />
        </Fragment>
    )
}

export default Blog
