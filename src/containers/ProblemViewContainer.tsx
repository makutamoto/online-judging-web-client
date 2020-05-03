import React from 'react';
import { connect } from 'react-redux';
import { StateType } from '../reducers';
import { TaskData, fetchTaskData } from '../actions';
import { DispatchType } from '..';

import { TaskListRow } from '../actions';
import ProblemView from '../components/ProblemView';

interface ProblemViewContainerProps {
    tasks: TaskListRow[] | null,
    info: TaskData | null,
    onUpdate: (contest: string, task: number) => void,
    contest: string,
    task: number,
}
class ProblemViewContainer extends React.Component<ProblemViewContainerProps> {
    componentDidMount() {
        this.props.onUpdate(this.props.contest, this.props.task);
    }
    componentDidUpdate(prevProps: ProblemViewContainerProps) {
        if(this.props.contest !== prevProps.contest || this.props.task !== prevProps.task) {
            this.props.onUpdate(this.props.contest, this.props.task);
        }
    }
    render() {
        let title = this.props.tasks && this.props.tasks[this.props.task - 1].title;
        let problem = this.props.info && this.props.info.problem;
        let timeLimit = this.props.info && this.props.info.time_limit;
        return <ProblemView title={title} problem={problem} timeLimit={timeLimit} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    tasks: state.tasks.list,
    info: state.task.data,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onUpdate: (contest: string, task: number) => dispatch(fetchTaskData(contest, task) as any),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemViewContainer);
