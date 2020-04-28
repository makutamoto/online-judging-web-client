import React from 'react';
import { Avatar, CircularProgress, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { StatusAC } from '../actions';

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
    const longNames = ['正解', '不正解', '実行時エラー', '時間切れ', 'コンパイルエラー', '内部エラー'];
    let name = names[props.status as any];
    let background: string | null;
    let progress: string | null;
    if(name === undefined) name = "WJ";
    switch(props.status) {
        case null:
            background = null;
            progress = classes.progressNormal;
            break;
        case StatusAC:
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
            <Tooltip title={longNames[props.status as any] || 'ジャッジ待ち'} placement="top">
                <Avatar className={clsx(classes.avatar, background)}>{name}</Avatar>
            </Tooltip>
            {props.progress && <CircularProgress className={clsx(classes.progress, progress)} size={48} />}
        </div>
    );
}
