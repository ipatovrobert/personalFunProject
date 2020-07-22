import React from 'react'

import blackforestPic from '../images/blog/blackforest.png'
import headbitsBg from '../images/blog/headbitsBg.png'
import sarasotaPic from '../images/blog/Sarasota.png'

const BlogList = () => {
    const latestBlogs = [
        {
            lineAbv: 'Doub',
            title: 'ling-down on our ‘1% for the Planet’ commitment',
            firstLineDesc: 'As a tiny company, we feel the urge to do something as well, that’s why we’re supporting the following NGOs:',
            description: `1. Cool Earth
            Cool Earth is a non-profit organization that works alongside rainforest communities to halt deforestation and climate change.`,
            picture: blackforestPic

        },
        {
            lineAbv: 'Sailin',
            title: 'g to a new company logo',
            firstLineDesc: 'After 4 years of headbits running with the below logo, it was time for a change. We were looking for something more recognizable and modern.',
            description: `We worked with Vadim Carazan to start the process of creating a new headbits logo. Vadim understood that we’re a consulting and software development company that helps its clients to reduce complexity by making things coherent and easy to understand.`,
            picture: headbitsBg

        },
        {
            lineAbv: 'Sailin',
            title: 'g to a new company logo',
            firstLineDesc: 'After 4 years of headbits running with the below logo, it was time for a change. We were looking for something more recognizable and modern.',
            description: `We worked with Vadim Carazan to start the process of creating a new headbits logo. Vadim understood that we’re a consulting and software development company that helps its clients to reduce complexity by making things coherent and easy to understand.`,
            picture: sarasotaPic

        }
    ]
    return (
        <div className='blogList container'>
            <h1 className='blogList-heading'>
                Latest blogs
            </h1>
            <div className='blogList-container'>
                {latestBlogs.map(blogPost => {
                    return <div className='blogList-item' style={{background: `linear-gradient(to right, hsla(0, 0%, 0%, 0.61), hsla(0, 0%, 0%, 0.61)), url('${blogPost.picture}')`}}>
                    <h1 className='blogList-item--title'><span className='line-above'>{blogPost.lineAbv}</span>{blogPost.title}</h1>
                    <p className='blogList-item--description'>
                    <span className='single-line' style={{marginBottom: 30}}>{blogPost.firstLineDesc}</span>

                    {blogPost.description}
                    </p>
                    <a href='http://localhost:3000/#' className='blogList-item--readMore'>Read more →</a>
                </div>
                })}
            </div>
        </div>
    )
}

export default BlogList
