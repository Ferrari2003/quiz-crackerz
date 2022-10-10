import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
           <h1>My Quiz</h1>
           <nav>
            <NavLink   className={({ isActive }) => isActive ? 'active' : undefined  } to={'/'}>Home</NavLink>
            <NavLink   className={({ isActive }) => isActive ? 'active' : undefined  } to={'/topics'}>Topics</NavLink>
            <NavLink   className={({ isActive }) => isActive ? 'active' : undefined  } to={'/statistics'}>Statistics</NavLink>
            <NavLink   className={({ isActive }) => isActive ? 'active' : undefined  } to={'/blog'}>Blog</NavLink>
           </nav>
           
        </div>
    );
};

export default Header;