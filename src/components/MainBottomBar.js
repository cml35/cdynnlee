import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useHistory, Link } from 'react-router-dom';

export default function MainBottomBar() {

    const bottomNavigation = {
        width: '100%',
        textAlign: 'center',
        margin: 'auto', 
        position: 'absolute',
        left: '0',
        bottom: '0',
        right: '0',
        height: '100px'
    }

    return (
        <div id='main-bottom-bar' style={bottomNavigation}>
            <BottomNavigation>
                <a href='https://www.linkedin.com/in/claudynn-lee/'>
                    <BottomNavigationAction label="Linkedin" value="linkedin" icon={<LinkedInIcon />} />
                </a>
                <a href='https://medium.com/@claudynnlee53'>
                    <BottomNavigationAction label="Blog" value="blog" icon={<BookIcon />} />
                </a>
                <Link>
                    <BottomNavigationAction label="Location" value="location" icon={<LocationOnIcon />} />
                </Link>
                <Link>
                    <BottomNavigationAction label="GitHub" value="github" icon={<GitHubIcon />} />
                </Link>
            </BottomNavigation>
        </div>
    )
}