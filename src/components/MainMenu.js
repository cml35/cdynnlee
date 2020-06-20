import React from 'react';
import ButtonLink from './ButtonLink.js';
import { Button } from '@material-ui/core';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Contact.js';
import Home from './Home.js';

const mainMenuStyles = {
    textAlign: 'center',
    margin: 'auto',
    letterSpacing: '2px'
}

const buttonStyles = {
    border: '1px solid',
    letterSpacing: '2px'
}

export default function MainMenu() {
    return (
        <div id='main-menu' style={mainMenuStyles}>
            <Link to="/About">
                <ButtonLink name='ABOUT'/>
            </Link>
            <Link to="/Portfolio">
                <ButtonLink name='PORTFOLIO'/>
            </Link>
            <Link to="/Contact">
                <Button style={buttonStyles} variant="contained" color="primary">
                    CONTACT
                </Button>
            </Link>
            <Link to="/Resume">
                <ButtonLink name='RESUME'/>
            </Link>
        </div>
    )
}
