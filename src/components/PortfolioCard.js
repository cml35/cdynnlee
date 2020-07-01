import React from 'react';
import { 
    Card, 
    CardActionArea, 
    CardActions, 
    CardMedia, 
    CardContent, 
    Button, 
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      display: 'flex',
      flexDirection: 'row'
    },
    media: {
      height: 140,
    },
});

export default function PortfolioCard({ projectName, projectDescription, icon }) {
    const classes = useStyles();

    return (
        <div id='portfolio-card'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image='../media/home_page.JPG'
                        title='Exchange Rate Converter'
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {icon} {projectName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {projectDescription}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}