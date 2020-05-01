import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar, Container, Paper, Toolbar, Typography } from '@material-ui/core';

import Path from '../components/Path';
import TaskListContainer from './TaskListContainer';
import Task from './Task';

export default function() {
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">MyCoder</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Container maxWidth="md" component={Paper}>
                <Path />
                <Switch>
                    <Route path="/contests/:contest/tasks/:task(\d+)" component={Task} />
                    <Route path="/contests/:contest/tasks/" component={TaskListContainer} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
