import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, ListItem, ListItemText, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
}));
export interface TaskListItemProps {
    task: number,
    title: string,
    timeLimit: number,
}
export default function(props: TaskListItemProps) {
    const classes = useStyles();
    let primary = `${String.fromCharCode('A'.charCodeAt(0) + props.task)}. ${props.title}`;
    let secondary = `実行時間制限: ${props.timeLimit / 1000} sec`;
    return (
        <ListItem className={classes.root} component={Paper} variant="outlined">
            <ListItemText primary={<Link color="textPrimary" component={RouterLink} to={`./tasks/${props.task + 1}`}>{primary}</Link>} secondary={secondary} />
        </ListItem>
    );
}
