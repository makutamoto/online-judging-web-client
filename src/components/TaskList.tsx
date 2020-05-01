import React from 'react';
import { List } from '@material-ui/core';

import { TaskListRow } from '../actions';
import TaskListItem from './TaskListItem'; 

export interface TaskListProps {
    list: TaskListRow[] | null,
}
export default function(props: TaskListProps) {
    return (
        <List>
            {props.list !== null && props.list.map((item, index) => (
                <TaskListItem key={index} task={index} title={item.title} timeLimit={item.time_limit} />
            ))}
        </List>
    )
}
