import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './image/berkeley.png';
import './Navbar.css';

const Navbar = ({setCurrentPage, unit, setUnit}) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const toggleUnit = () => {  
        setUnit(unit === "SI" ? "IP" : "SI");
    };

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo' onClick={(e) => {
                    e.preventDefault();
                    window.location.href="https://chaium.github.io/infectious-aerosol";
                }}>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <div className='title'>
                    <p>Berkeley Infectious Aerosols Tool</p>   
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>

{/*
        <li className='nav-item'>
        <button 
                            onClick={toggleUnit} 
                            className='unit-btn'
                        >
                            {unit}
                        </button>
</li>

            */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;