import React from 'react';
import { Switch, Redirect, Route, Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Container, Link, Paper, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContestContainer from './ContestContainer';
import TaskListContainer from './TaskListContainer';
import TaskContainer from './TaskContainer';
import ContestTabContainer from './ContestTabContainer';

const useStyles = makeStyles((theme) => ({
    tab: {
        position: 'sticky',
        top: theme.spacing(8),
        marginLeft: theme.spacing(-3),
        marginRight: theme.spacing(-3),
        zIndex: 128,
        background: '#FFFFFF',
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));
export default function() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Link component={RouterLink} to="/" color="inherit">
                        <Typography variant="h6">MyCoder</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box className="height100" display="flex" flexDirection="column">
                <Box>
                    <Toolbar />
                </Box>
                <Box flexGrow={1}>
                    <Container className="height100" maxWidth="md" component={Paper} square>
                        <Box className={classes.tab}>
                            <ContestTabContainer />
                        </Box>
                        <Box className={classes.content}>
                            <Switch>
                                <Route exact path="/contests/:contest/tasks/:task(\d+)" component={TaskContainer} />
                                <Route exact path="/contests/:contest/tasks/" component={TaskListContainer} />
                                <Route exact path="/contests/:contest" component={ContestContainer} />
                                <Redirect to="/" />
                            </Switch>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </React.Fragment>
    );
}
