import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Divider } from '@material-ui/core';

import ProblemViewContainer from './ProblemViewContainer';
import SubmissionFormContainer from './SubmissionFormContainer';
import ResultListContainer from './ResultListContainer';

export default function() {
    const { contest, task } = useParams();
    return (
        <React.Fragment>
            <ProblemViewContainer contest={contest} task={task} />
            <Divider />
            <Container maxWidth="sm">
                <SubmissionFormContainer contest={contest} task={task} />
                <ResultListContainer />
            </Container>
        </React.Fragment>
    );
}
