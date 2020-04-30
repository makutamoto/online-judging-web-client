import React from 'react';
import { AppBar, Breadcrumbs, Container, Divider, Link, Paper, Toolbar, Typography } from '@material-ui/core';

import Path from '../components/Path';
import ProblemViewContainer from './ProblemViewContainer';
import SubmissionFormContainer from './SubmissionFormContainer';
import ResultListContainer from './ResultListContainer';

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
                <ProblemViewContainer />
                <Divider />
                <Container maxWidth="sm">
                    <SubmissionFormContainer />
                    <ResultListContainer />
                </Container>
            </Container>
        </React.Fragment>
    );
}
