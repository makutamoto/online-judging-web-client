import React from 'react';
import { Avatar, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    avatar: {
        fontSize: '1em',
    },
    ac: {
        background: 'green',
    },
    other: {
        background: 'orange',
    },
    progress: {
        position: 'absolute',
        top: -4,
        left: -4,
    },
    progressNormal: {
        color: 'gray',
    },
    progressOther: {
        color: 'darkorange',
    },
});
interface StatusBadgeProps {
    status: number | null,
    progress: boolean,
}
export default function(props: StatusBadgeProps) {
    const classes = useStyles();
    const names = ['AC', 'WA', 'RE', 'TLE', 'CE', 'IE'];
    let name = names[props.status as any];
    let background: string | null;
    let progress: string | null;
    if(name === undefined) name = "WJ";
    switch(props.status) {
        case null:
            background = null;
            progress = classes.progressNormal;
            break;
        case 0:
            if(props.progress) background = null;
            else background = classes.ac;
            progress = classes.progressNormal;
            break;
        default:
            background = classes.other;
            progress = classes.progressOther;
            break;
    }
    return (
        <div className={classes.root}>
            <Avatar className={clsx(classes.avatar, background)}>{name}</Avatar>
            {props.progress && <CircularProgress className={clsx(classes.progress, progress)} size={48} />}
        </div>
    );
}
