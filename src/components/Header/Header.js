import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/register">Register</Link>
                <span style={{ margin: '5px', color: 'gray', fontSize: '20px' }}>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to="/login">Login</Link>}
            </nav>
        </div>
    );
};

export default Header;