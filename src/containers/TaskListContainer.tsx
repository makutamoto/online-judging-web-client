import React from 'react';
import { connect } from 'react-redux';

import { StateType } from '../reducers';
import { TaskListRow } from '../actions';
import TaskList from '../components/TaskList';

interface TaskListContainerProps {
    list: TaskListRow[] | null,
}
class TaskListContainer extends React.Component<TaskListContainerProps> {
    render() {
        return <TaskList list={this.props.list} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    list: state.tasks.list,
});

export default connect(mapStateToProps)(TaskListContainer);
