import React from 'react';
import { Typography } from '@material-ui/core';

export default function About() {

    const aboutMeStyles = {
        paddingTop: 50,
    }

    const bodyStyles = {
        width: 800,
        margin: 'auto',
    }

    return (
        <div id='about'>
            <Typography variant='h4' style={aboutMeStyles}>
                A little bit about me.
            </Typography>
            <br />
            <Typography variant='body1' style={bodyStyles}>
                I was born and raised in Fiji and moved to New Zealand about 8 years ago for university. 
                I completed a Bachelor of Computing and Mathematical Sciences in 2018 and am currently working for a mature kiwi startup called ezyVet. 
            </Typography>
        </div>
    )
}