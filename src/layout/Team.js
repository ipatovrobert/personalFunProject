import React, { useState } from 'react'

import picture1 from '../images/employee/0.png'
import picture2 from '../images/employee/1.png'
import picture3 from '../images/employee/2.png'
import picture4 from '../images/employee/3.png'
import picture5 from '../images/employee/4.png'
import newMemberPicture from '../images/employee/newMember.png'

const Team = () => {
    //eslint-disable-next-line
    const [members, setMembers] = useState([
        {
            name: 'Your name',
            position: 'Founder / CEO',
            picture: picture1,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'
        },
        {
            name: 'Your name',
            position: 'CTO',
            picture: picture2,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'
        },
        {
            name: 'Your name',
            position: 'Senior Developer',
            picture: picture3,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'
        },
        {
            name: 'Your name',
            position: 'Mobile Developer',
            picture: picture4,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'
        },
        {
            name: 'Your name',
            position: 'Junior Consultant',
            picture: picture5,
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'
        },
        {
            name: 'Your name',
            position: 'Frontend Developer',
            picture: newMemberPicture,
            description: `We are looking for a skilled & experience frontend developer. Don't hesitate to contact us`
        }
    ])


    return (
        <div className='team container'>
            <h1 className='team-heading'><span className='line-above'>Who</span> are we</h1>
            <div className='team-container'>

                {members.map(member => 
                <div className='team-member' key={member.name}>
                    <img className='team-member--image' alt='team member' src={member.picture}></img>
                    <p className='team-member--position'>{member.position}</p>
                    <p className='team-member--name'>{member.name}</p>
                    <p className='team-member--description'>
                    {member.description}
                    </p>
                </div>
                )}
            </div>
        </div>
    )
}

export default Team
