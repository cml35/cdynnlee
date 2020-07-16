import React from 'react';
import ButtonLink from './ButtonLink.js';
import { Button } from '@material-ui/core';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Contact.js';
import Home from './Home.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        margin: 'auto',
        letterSpacing: '2px',
        [theme.breakpoints.down('lg')]: {
            visibility: 'visible',
        },
        [theme.breakpoints.down('md')]: {
            visibility: 'visible',
        },
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden',
        },
    },
}));

const buttonStyles = {
    border: '1px solid',
    letterSpacing: '2px'
}

export default function MainMenu() {
    const classes = useStyles();
    return (
        <div id='main-menu' className={classes.root}>
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
