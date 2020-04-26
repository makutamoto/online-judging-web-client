import React from 'react';
import { Container, Paper } from '@material-ui/core';

import SubmissionFormContainer from './SubmissionFormContainer';
import ResultListContainer from './ResultListContainer';

export default function() {
    return (
        <Container maxWidth="md" component={Paper}>
            <SubmissionFormContainer />
            <ResultListContainer />
        </Container>
    );
}
