import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import copy from 'copy-text-to-clipboard';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        background: '#FAFAFA',
        padding: theme.spacing(2),
    },
    copy: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    },
}));
export interface CodeProps {
    value: any,
}
export default function(props: CodeProps) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Button className={classes.copy} variant="outlined" onClick={() => copy(props.value)}>COPY</Button>
            {props.value}
        </Paper>
    );
}
