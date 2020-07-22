import React from 'react'
import partner1 from '../images/partners/1.png'
import partner2 from '../images/partners/2.png'
import partner3 from '../images/partners/3.png'
import partner4 from '../images/partners/4.png'
import partner5 from '../images/partners/5.png'
import partner6 from '../images/partners/6.png'
import partner7 from '../images/partners/7.png'
import partner8 from '../images/partners/8.png'

const Partners = () => {
    return (
        <div className='partners'>
            <img src={partner1} alt='partner'></img>
            <img src={partner2} alt='partner'></img>
            <img src={partner3} alt='partner'></img>
            <img src={partner4} alt='partner'></img>
            <img src={partner5} alt='partner'></img>
            <img src={partner6} alt='partner'></img>
            <img src={partner7} alt='partner'></img>
            <img src={partner8} alt='partner'></img>
        </div>
    )
}

export default Partners
