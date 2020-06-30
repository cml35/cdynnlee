import React from 'react';
import { Box, List, ListItem, Typography} from '@material-ui/core';

export default function TechnicalSkills() {
    const boxStylesLeft = {
        float: 'left'
    }

    const boxStylesRight = {
        float: 'right'
    }

    return (
        <div id='technical-skills'>
            <List component="nav" aria-label="main mailbox folders">
            <Box style={boxStylesLeft}>
                    <ListItem button>
                        <Typography variant="p">PHP</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">JavaScript</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">MySQL</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">AWS</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">jQuery</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">React</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Redux</Typography>
                    </ListItem>
                </Box>
                <Box style={boxStylesRight}>
                    <ListItem button>
                        <Typography variant="p">Java</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">C#</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">HTML</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">CSS</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Material UI</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Typescript</Typography>
                    </ListItem>
                    <ListItem button>
                        <Typography variant="p">Git</Typography>
                    </ListItem>
                </Box>
                </List>
        </div>
    )
}