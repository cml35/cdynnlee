import React from 'react';
import { Box, Typography, Container, Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioCard from './PortfolioCard';

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
        paddingRight: 100
    }

    const boxStyles = {
        paddingTop: '100px'
    }

    const cardStyles = {
        width: 900,
    }

    const classes = useStyles();
    
    return (
        <div id='home'>
            <Box style={boxStyles}>
                <Container className={classes.root} maxWidth='md'>
                    <Typography style={titleStyles} variant="h4" component="Container">
                        Hi, my name is <strong>Claudynn.</strong> I'm a software developer with a focus on strong UI/UX designs.
                    </Typography>
                    <Card style={cardStyles}>
                        <CardActionArea>
                            <CardMedia 
                                className={classes.media}
                                image='../media/home_page.JPG'
                                title='Photo'
                            />
                            <CardContent>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <br />
                    <br />
                    {/* <FeatureItem /> */}
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
                                projectName='UI/UX Design' 
                                projectDescription='This application uses React and Redux to compare different exchange rates over time and at a specific date.'
                            />
                        </Grid>
                        <Grid key={2} item>
                            <PortfolioCard 
                                projectName='Web development' 
                                projectDescription='This application uses React Native and Redux to allow users to create different types of budgets. There are also graphical reprsentations provided.'
                            />
                        </Grid>
                        <Grid key={3} item>
                            <PortfolioCard 
                                projectName='Rapid prototyping'     
                                projectDescription='This application uses React and Laravel to rate different movies and tv shows available on different streaming services.'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}