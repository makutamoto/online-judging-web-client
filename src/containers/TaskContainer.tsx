import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

import ProblemViewContainer from './ProblemViewContainer';
import SubmissionFormContainer from './SubmissionFormContainer';
import ResultListContainer from './ResultListContainer';
import NextPreviousContainer from './NextPreviousContainer';

export default function() {
    let { contest, task } = useParams();
    task = Number(task);
    return (
        <React.Fragment>
            <ProblemViewContainer contest={contest} task={task} />
            <NextPreviousContainer task={task} />
            <Container maxWidth="sm">
                <SubmissionFormContainer contest={contest} task={task} />
                <ResultListContainer />
            </Container>
        </React.Fragment>
    );
}
