import React from 'react';
import { Switch, Route, Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Container, Link, Paper, Toolbar, Typography } from '@material-ui/core';

import ContestContainer from './ContestContainer';

export default function() {
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
                        <Switch>
                            <Route path="/contests/:contest" component={ContestContainer} />
                        </Switch>
                    </Container>
                </Box>
            </Box>
        </React.Fragment>
    );
}
