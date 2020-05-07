import React from 'react';
import { Switch, Route, Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Container, Link, Paper, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import HomeContainer from './HomeContainer';
import ContestContainer from './ContestContainer';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1C395C',
        },
    },
});
export default function() {
    return (
        <ThemeProvider theme={theme}>
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
                            <Route exact path="/(contests)?" component={HomeContainer} />
                        </Switch>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
