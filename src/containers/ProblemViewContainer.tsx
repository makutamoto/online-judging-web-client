import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../reducers';
import { TaskData, fetchTaskData } from '../actions';
import { DispatchType } from '..';

import ProblemView from '../components/ProblemView';

interface ProblemViewContainerProps {
    info: TaskData | null,
    onMount: (contest: string, task: number) => void,
    contest: string,
    task: number,
}
class ProblemViewContainer extends React.Component<ProblemViewContainerProps> {
    componentDidMount() {
        this.props.onMount(this.props.contest, this.props.task);
    }
    render() {
        let title = this.props.info && this.props.info.title;
        let problem = this.props.info && this.props.info.problem;
        let timeLimit = this.props.info && this.props.info.time_limit;
        return (
            <React.Fragment>
                <ProblemView title={title} problem={problem} timeLimit={timeLimit} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    info: state.task.data,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: (contest: string, task: number) => dispatch(fetchTaskData(contest, task) as any),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemViewContainer);
