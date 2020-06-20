import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

export default function FeatureItem() {  
    const classes = useStyles();
    return (
        <div id='feature-item' className={classes.root}>
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
        </div>
    )
}