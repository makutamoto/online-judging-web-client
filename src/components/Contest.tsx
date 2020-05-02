import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import Code from './Code';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
    },
}));
export interface ContestProps {
    title: string,
    description: string,
}
export default function(props: ContestProps) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">{props.title}</Typography>
            <Divider />
            <ReactMarkdown source={props.description} renderers={{code: Code}} />
        </React.Fragment>
    );
}
