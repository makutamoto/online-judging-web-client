import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { DispatchType } from '../';
import { fetchTaskList, setCurrentPage } from '../actions';
import TaskContainer from './TaskContainer';
import TaskListContainer from './TaskListContainer';

interface TaskTabContainerProps {
    onMount: (contest: string) => void,
    match: { params: { contest: string } },
}
class TaskTabContainer extends React.Component<TaskTabContainerProps> {
    componentDidMount() {
        let { contest } = this.props.match.params;
        this.props.onMount(contest);
    }
    render() {
        return (
            <Switch>
                <Route exact path="/contests/:contest/tasks/:task(\d+)" component={TaskContainer} />
                <Route exact path="/contests/:contest/tasks/" component={TaskListContainer} />
            </Switch>
        );
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: (contest: string) => {
        dispatch(setCurrentPage('task'));
        dispatch(fetchTaskList(contest) as any);
    },
});

export default connect(null, mapDispatchToProps)(TaskTabContainer);
