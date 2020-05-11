import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { StateType } from '../reducers';
import { DispatchType } from '..';
import { TaskData, TaskListRow, fetchTaskData } from '../actions';
import Markdown from '../components/Markdown';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(4),
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    limit: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));
interface ProblemViewContainerProps {
    tasks: TaskListRow[] | null,
    info: TaskData | null,
    onUpdate: (contest: string, task: number) => void,
    contest: string,
    task: number,
    edit: boolean,
}
function ProblemViewContainer(props: ProblemViewContainerProps) {
    let { onUpdate, contest, task } = props;
    useEffect(() => {
        onUpdate(contest, task);
    }, [onUpdate, contest, task]);
    const classes = useStyles();
    let title = props.tasks && props.tasks[task - 1].title;
    let problem = props.info && props.info.problem;
    let timeLimit = props.info && props.info.time_limit;
    return (
        <Box className={classes.root}>
            <Typography className={classes.title} variant="h4">{title}</Typography>
            <Divider />
            <Typography className={classes.limit} variant="h6">実行時間制限: {timeLimit! / 1000} sec</Typography>
            <Markdown value={problem!} edit={props.edit} />
        </Box>
    );
}

const mapStateToProps = (state: StateType) => ({
    tasks: state.task_list.list,
    info: state.task.data,
    edit: state.edit,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onUpdate: (contest: string, task: number) => dispatch(fetchTaskData(contest, task) as any),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemViewContainer);
