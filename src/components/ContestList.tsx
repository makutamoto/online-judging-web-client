import React from 'react';
import { List } from '@material-ui/core';

import { ContestListRow } from '../actions';
import ContestListItem from './ContestListItem'; 

export interface ContestListProps {
    list: ContestListRow[] | null,
}
export default function(props: ContestListProps) {
    return (
        <List>
            {props.list !== null && props.list.map((item) => (
                <ContestListItem key={item.id} id={item.id} title={item.title} />
            ))}
        </List>
    )
}
