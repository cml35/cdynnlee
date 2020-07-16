import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MainMenu from './MainMenu.js';
import Logo from './Logo.js';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#374785'
    },
    mobileMenuStyles: {
      [theme.breakpoints.up('lg')]: {
        visibility: 'hidden',
      },
      [theme.breakpoints.up('md')]: {
        visibility: 'hidden',
      },
      [theme.breakpoints.down('xs')]: {
        visibility: 'visible',
      },
    },
  }));

export default function MainAppBar() {
    const classes = useStyles();
    return (
      <div id='main-app-bar'>
        <AppBar className={classes.root} position="static">
            <Toolbar>
            <Logo />
            <MainMenu />
            <IconButton className={classes.mobileMenuStyles} color="inherit">
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
      </div>
    )
}
