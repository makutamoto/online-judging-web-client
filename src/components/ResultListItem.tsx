import React from 'react';
import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

import StatusBadge from './StatusBadge';

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
    contest: string,
    task: string,
    info: ResultRusage | ResultCurrentCase | null,
}
export default function(props: ResultListItemProps) {
    let primary = `${props.contest} / ${props.task}`;
    let secondary: string;
    let progress = false;
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
        <ListItem>
            <ListItemAvatar>
                <StatusBadge status={props.status} progress={progress} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
    );
}
