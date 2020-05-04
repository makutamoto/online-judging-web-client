import React from 'react';
import { connect } from 'react-redux';

import { StateType } from '../reducers';
import { TaskListRow } from '../actions';
import NextPrevious from '../components/NextPrevious';

interface NextPreviousContainerProps {
    task: number,
    list: TaskListRow[] | null,
}
function NextPreviousContainer(props: NextPreviousContainerProps) {
    let previous = props.list && (props.list[props.task - 2] || null);
    let next = props.list && (props.list[props.task] || null);
    return (
        <NextPrevious
            previous={previous && { title: previous.title, link: (props.task - 1) as any }}
            next={next && { title: next.title, link: (props.task + 1) as any }}
        />
    );
}

const mapStateToProps = (state: StateType) => ({
    list: state.task_list.list,
});

export default connect(mapStateToProps)(NextPreviousContainer);
