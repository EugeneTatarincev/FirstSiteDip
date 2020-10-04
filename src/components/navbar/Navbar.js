import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    function hideAll () {
        const links = document.querySelectorAll('.nav-link')
        links.forEach(item => item.classList.remove('on-nav'))  
    }

    function handleClick (event) {
        hideAll()
        event.target.classList.add('on-nav')
    }

    return (
    <nav className="navbar navbar-expand-lg">
        
            {/* <div className="navbar-header">
                <a className="navbar-brand" href="#">LOGO</a>
            </div>
             */}
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
        
    </nav>
    )
}