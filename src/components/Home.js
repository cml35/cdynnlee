import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import FeatureItem from './FeatureItem.js';

export default function Home() {
    const titleStyles = {
        fontFamily: 'Jost',
        fontWeight: 200
    }

    const boxStyles = {
        paddingTop: '100px'
    }
    
    return (
        <div id='home'>
            <Box style={boxStyles}>
                <Container maxWidth='sm'>
                    <Typography style={titleStyles} variant="h1" component="Container">
                        Claudynn Lee.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="body1" component="Container">
                        This is my story. 
                    </Typography>
                    {/* <FeatureItem /> */}
                </Container>
            </Box>
        </div>
    );
}