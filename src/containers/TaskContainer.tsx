import React from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from '@material-ui/core';

import { DispatchType } from '../';
import { setCurrentPage } from '../actions';
import ProblemViewContainer from './ProblemViewContainer';
import SubmissionFormContainer from './SubmissionFormContainer';
import ResultListContainer from './ResultListContainer';

interface TaskContainerProps {
    onMount: () => void,
    match: { params: { contest: string, task: number }},
}
class TaskContainer extends React.Component<TaskContainerProps> {
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        let { contest, task } = this.props.match.params;
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
}

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: () => dispatch(setCurrentPage('task')),
});

export default connect(null, mapDispatchToProps)(TaskContainer);
