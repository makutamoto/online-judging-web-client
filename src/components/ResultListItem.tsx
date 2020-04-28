import React from 'react';
import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import StatusBadge from './StatusBadge';

export interface ResultContestTaskName {
    contest: string,
    task: string,
}
export interface ResultCurrentCase {
    current: number,
    whole: number,
}
export interface ResultRusage {
    time: number,
    memory: number,
}
export interface ResultListItemProps {
    status: number | null,
    title: string | ResultContestTaskName,
    info: ResultRusage | ResultCurrentCase | null,
    open?: boolean,
    onClick?: () => void,
}
export default function(props: ResultListItemProps) {
    let primary: string;
    let secondary: string;
    let progress = false;
    if(typeof props.title === 'string' || props.title instanceof String) {
        primary = props.title as string;
    } else {
        primary = `${props.title.contest} / ${props.title.task}`;
    }
    if(props.status === null) {
        secondary = "Waiting Judge...";
        progress = true;
    } else if((props.info as ResultCurrentCase).current !== undefined) {
        let data = (props.info as ResultCurrentCase);
        secondary = `${data.current} / ${data.whole}`;
        progress = true;
    } else {
        let data = (props.info as ResultRusage);
        secondary = `Time: ${data.time}ms Mem: ${data.memory}kb`;
    }
    return (
        <ListItem button={(props.open !== undefined) as any} onClick={props.onClick}>
            <ListItemAvatar>
                <StatusBadge status={props.status} progress={progress} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
            {props.open !== undefined && (props.open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
    );
}
