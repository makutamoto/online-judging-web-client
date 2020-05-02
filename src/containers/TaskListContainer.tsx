import React from 'react';
import { connect } from 'react-redux';

import { DispatchType } from '../';
import { StateType } from '../reducers';
import { setCurrentPage, fetchTaskList, TaskListRow } from '../actions';
import TaskList from '../components/TaskList';

interface TaskListContainerProps {
    list: TaskListRow[] | null,
    onMount: (contest: string) => void,
    match: { params: { contest: string }},
}
class TaskListContainer extends React.Component<TaskListContainerProps> {
    componentDidMount() {
        this.props.onMount(this.props.match.params.contest);
    }
    render() {
        return <TaskList list={this.props.list} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    list: state.tasks.list,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: (contest: string) => {
        dispatch(setCurrentPage('task'));
        dispatch(fetchTaskList(contest) as any);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
