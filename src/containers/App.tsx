import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box, Container, Paper, Toolbar } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import BarContainer from './BarContainer';
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
            <BarContainer />
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
