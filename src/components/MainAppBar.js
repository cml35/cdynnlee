import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MainMenu from './MainMenu.js';
import Logo from './Logo.js';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function MainAppBar() {
    const classes = useStyles();
    return (
      <div id='main-app-bar'>
        <AppBar style={{background: '#374785'}}position="static">
            <Toolbar>
            <Logo />
            <MainMenu />
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
      </div>
    )
}
