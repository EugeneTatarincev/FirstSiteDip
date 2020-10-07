import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap'

export const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    // ----- For white undelining event
    function hideAll () {
        const links = document.querySelectorAll('.nav-link')
        links.forEach(item => item.classList.remove('on-nav'))  
    }

    function handleClick (event) {
        hideAll()
        event.target.classList.add('on-nav')
    }
    // -------------->

    // Navbar toggle

    function handleToggle() {
        setToggle(!toggle)
    }

    let classes = "navbar-toggle icon nav-icon-2"

    if(toggle) classes += ' open'

    return (
    <nav className="navbar navbar-expand-lg">
        
            <div className="navbar-header">
            
                <div type="button" className={classes} data-toggle="collapse" data-target="#myNavbar" onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Link className="navbar-brand" to="/"><img src="logo.png" /></Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav container text-center">
                    <li className="nav-item">
                        <Link to="/" className='nav-link' onClick={handleClick}> Главная </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/crew" className='nav-link' onClick={handleClick}> О команде </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/download" className='nav-link' onClick={handleClick}> Скачать </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacts" className='nav-link' onClick={handleClick}> Контакты </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/demo" className='nav-link' onClick={handleClick}> Демо </Link>
                    </li>
                </ul>
            </div>
        
    </nav>
    )
}