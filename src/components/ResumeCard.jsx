import React from 'react';
import EmploymentHistoryCard from './EmploymentHistoryCard';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '800px',
      textAlign: 'center', 
      margin: 'auto'
    },
  });

export default function ResumeCard({ title, content }) {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
    return (
        <div id='resume-card'>
        <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography>{title}</Typography>
            {content}
        </CardContent>
        <CardActions>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    </div>
    )
}