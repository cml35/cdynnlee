import React from 'react';
import { Box, Typography, Container, Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioCard from './PortfolioCard';
import ProfileImage from '../media/profile_photo.jpg';
import WebIcon from '@material-ui/icons/Web';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
    media: {
      height: 200
    },
    paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      }
}));

export default function Home() {
    const titleStyles = {
        fontFamily: 'Jost',
        fontWeight: 200,
        width: 900,
        paddingRight: 100,
        paddingTop: 50
    }

    const boxStyles = {
        paddingTop: '100px'
    }

    const cardStyles = {
        width: 900,
    }

    const imageStyles = {
        height: '250px',
        width: '250px'
    }

    const classes = useStyles();
    
    return (
        <div id='home'> 
            <Box style={boxStyles}> 
                <Container className={classes.root} maxWidth='md'>
                    <Typography style={titleStyles} variant="h4" component="Container">
                        Hi, my name is <strong>Claudynn.</strong> I'm a software developer wit  h a focus on strong UI/UX designs.
                    </Typography>
                    <img style={imageStyles} src={ProfileImage} alt='profile_photo'/>
                    <br />
                    <br />
                </Container>
                <br />
                <br />
                <br />
                <br />
                <Typography variant="h4" component="Container">
                    What I do
                </Typography>
                <br />
                <br />
                <br />
                <br />
                <Grid container className={classes.root} spacing={4}>
                <Grid item xs={12}> 
                    <Grid container justify="center" spacing={4}>
                        <Grid key={1} item>
                            <PortfolioCard 
                                icon={<EmojiPeopleIcon />}
                                projectName='UI/UX Design' 
                                projectDescription='Creating optimal and elegant software solutions with a user centric focus and design.'
                            />
                        </Grid>
                        <Grid key={2} item>
                            <PortfolioCard 
                                icon={<WebIcon />}
                                projectName='Web development' 
                                projectDescription='Developing different web applications from static websites to small cloud based applications.'
                            />
                        </Grid>
                        <Grid key={3} item>
                            <PortfolioCard 
                                icon={<ArtTrackIcon />}
                                projectName='Rapid prototyping'     
                                projectDescription='Construction of mobile and web based prototypes using Figma and Invision.'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}