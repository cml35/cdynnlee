import React from 'react';
import PortfolioCard from './PortfolioCard.js';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default function Portfolio() {
    const classes = useStyles();

    return (
        <div id='portfolio'>
            <br />
            <Grid container className={classes.root} spacing={4}>
                <Grid item xs={12}> 
                    <Grid container justify="center" spacing={4}>
                        <Grid key={1} item>
                            <PortfolioCard 
                                projectName='Exchange Rate Converter' 
                                projectDescription='This application uses React and Redux to compare different exchange rates over time and at a specific date.'
                            />
                        </Grid>
                        <Grid key={2} item>
                            <PortfolioCard 
                                projectName='Millennial Budget' 
                                projectDescription='This application uses React Native and Redux to allow users to create different types of budgets. There are also graphical reprsentations provided.'
                            />
                        </Grid>
                        <Grid key={3} item>
                            <PortfolioCard 
                                projectName='Movie Rating App'     
                                projectDescription='This application uses React and Laravel to rate different movies and tv shows available on different streaming services.'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    )
}