import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useHistory } from 'react-router-dom';

export default function MainBottomBar() {
    const history = useHistory();

    const bottomNavigation = {
        width: '500px',
        textAlign: 'center',
        margin: 'auto', 
        height: '250px',
        position: 'absolute',
        left: '0',
        bottom: '0',
        right: '0'
    }

    function handleChange() {
        console.log('it works');  
    }

    return (
        <div id='main-bottom-bar'>
            <BottomNavigation style={bottomNavigation}>
                <BottomNavigationAction label="Linkedin" value="linkedin" icon={<LinkedInIcon />} onChange={handleChange()}/>
                <BottomNavigationAction label="Blog" value="blog" icon={<BookIcon />} />
                <BottomNavigationAction label="Location" value="location" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="GitHub" value="github" icon={<GitHubIcon />} />
            </BottomNavigation>
        </div>
    )
}