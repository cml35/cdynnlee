import React from 'react'; 
import { List, ListItem, Typography, Box } from '@material-ui/core';
 
export default function AreaOfExpertise() {

    const boxStylesLeft = {
        float: 'left'
    }

    const boxStylesRight = {
        float: 'right'
    }

    return (
        <div id='area-of-expertise'>
            <br />
            <List component="nav" aria-label="main mailbox folders">
                <Box style={boxStylesLeft}>
                    <ListItem button>
                        <Typography variant="p">User Experience Design</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Rapid Prototyping</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Strong communication skills</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Team player</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Motivated and dedicated</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Project management</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Organizational effectiveness</Typography>
                    </ListItem>
                </Box>
                <Box style={boxStylesRight}>
                    <ListItem button>
                        <Typography variant="p">Software development</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Flexibility and persistence</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Agile methodologies</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Project scopes</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Backlog grooming</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">JIRA experience</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Scrum master experience</Typography>
                    </ListItem>
                </Box>
            </List>
        </div>
    )
}