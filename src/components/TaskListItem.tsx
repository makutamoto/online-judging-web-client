import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, ListItem, ListItemText } from '@material-ui/core';

export interface TaskListItemProps {
    task: number,
    title: string,
    timeLimit: number,
}
export default function(props: TaskListItemProps) {
    let primary = `${String.fromCharCode('A'.charCodeAt(0) + props.task)}. ${props.title}`;
    let secondary = `実行時間制限: ${props.timeLimit / 1000} sec`;
    return (
        <ListItem>
            <ListItemText primary={<Link color="textPrimary" component={RouterLink} to={`./${props.task + 1}`}>{primary}</Link>} secondary={secondary} />
        </ListItem>
    );
}
