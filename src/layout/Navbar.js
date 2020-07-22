import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = (props) => {
    const navbarLinks = [
        {
            name: 'Blog',
            to: '/blog',
            button: false
        },
        {
            name: 'Careers',
            to: 'https://apply.workable.com/headbits/',
            button: false
        },
        {
            name: 'Contact',
            to: '#contact',
            button: true
        }
    ]

    const [menu, setMenu] = useState({
        display: 'none'
    });

    const showMenu = () => {
        setMenu({display: 'block'});
    }

    const closeMenu = () => {
        setMenu({display: 'none'});
    }

    return (
        <nav className='navbar container'>
            <Link to='/'><img alt='HeadBits Logo' className='navbar-logo' src={logo}></img></Link>
            <ul className='navbar-nav'>
                <li>
                    {navbarLinks.map(entry => {
                        if(entry.button && entry.to.startsWith('#')){
                            return <a key={entry.name} href={entry.to} className='navbar-nav--link_button' style={{color: props.colorButton, fontWeight: props.weight, backgroundColor: props.bgClr}}>{entry.name}</a>
                        } else if (entry.button){
                            return <Link key={entry.name} to={entry.to} className='navbar-nav--link_button' style={{color: props.colorButton, fontWeight: props.weight, backgroundColor: props.bgClr}}>{entry.name}</Link>
                        } else if (entry.to.startsWith('https://')){
                            return <a key={entry.name} href={entry.to} className='navbar-nav--link' style={{color: props.color}}>{entry.name}</a>
                        }else if (entry.to.startsWith('#')){
                            return <a key={entry.name} href={entry.to} className='navbar-nav--link' style={{color: props.color}}>{entry.name}</a>
                        } else {
                            return <Link key={entry.name} to={entry.to} className='navbar-nav--link' style={{color: props.color}}>{entry.name}</Link>
                        }
                    })}
                </li>
            </ul>

            <svg height="25" viewBox="0 -53 384 384" width="25" fill='white' id='hamburger' onClick={showMenu} style={{cursor: 'pointer', fill: props.color}}>
                <path d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"/>
            </svg>

            <div className='navbar-mobileMenu' style={menu}>
                <div className='navbar-mobileMenu--header'>
                    <Link to='/' onClick={closeMenu}><img alt='HeadBits Logo' className='navbar-logo' src={logo}></img></Link>
                    <svg height="25" viewBox="0 0 512.001 512.001" width="25" onClick={closeMenu} style={{cursor: 'pointer'}}>
                        <path d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/>
                    </svg>
                </div>
                <ul className='navbar-mobileMenu--links'>
                    {navbarLinks.map(entry => {
                        
                        if (entry.to.startsWith('https://')){
                            return <li key={entry.name}><a href={entry.to} onClick={closeMenu}>{entry.name}</a></li>
                        }else if (entry.to.startsWith('#')){
                            return <li key={entry.name}><a href={entry.to} onClick={closeMenu}>{entry.name}</a></li>
                        } else {
                            return <li key={entry.name}><Link to={entry.to} onClick={closeMenu}>{entry.name}</Link></li>
                        }
                    })}
                </ul>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    color: 'white',
    weight: 'normal',
    bgClr: '#0CEEC3',
    colorButton: 'black'
}

export default Navbar
