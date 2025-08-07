
import React from 'react'

const scrollToSection = (id) => {
    const section = document.getElementById(id);

     {({ isActive }) => ({ color: isActive ? 'blue' : '#90E0EF' })}

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Header = () => {



    return (

        <nav className='NavBar flex font-bold '>
            <button onClick={() => scrollToSection('home')}>Home</button>

            <button onClick={() => scrollToSection('about')}>About</button>

            <button onClick={() => scrollToSection('projects')}>Projects</button>

            <button onClick={() => scrollToSection('skills')}>Skills</button>


            
            <button onClick={() => scrollToSection('contact')}>Contact</button>

            <button onClick={() => scrollToSection('  articles')}>Articles</button>


        </nav>
    )
}

export default Header

