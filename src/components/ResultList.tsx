import React from 'react';
import { List } from '@material-ui/core';

import { Result } from '../actions';
import ResultListItem, { ResultRusage, ResultCurrentCase } from './ResultListItem';

export interface ResultListProps {
    list: Result[],
}
export default function(props: ResultListProps) {
    let content = props.list.map((result) => {
        let status: number | null;
        let info: ResultRusage | ResultCurrentCase | null;
        if(result.data === null) {
            status = null;
            info = null;
        } else {
            status = result.data!.whole_result;
            if(result.isFetching) {
                info = {
                    current: result.data.current_case,
                    whole: result.data.whole_case
                };
            } else {
                info = {
                    time: result.data.time,
                    memory: result.data.memory,
                };
            }
        }
        return <ResultListItem key={result.id} contest={result.contest} task={result.task} info={info} status={status} />;
    });
    return (
        <List>
            {content}
        </List>
    );
}
