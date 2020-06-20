import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
    const logoStyles = {
        fontFamily: 'Jost',
        fontWeight: 400,
        color: '#FFFFFF',
        textDecoration: 'none'
    }
    
    return (
        <div id='logo'>
            <Link to="/">
                <h2 style={logoStyles}>cdynnlee.com</h2>
            </Link>
        </div>
    );
}