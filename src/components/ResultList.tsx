import React from 'react';
import { List } from '@material-ui/core';

import { Result } from '../actions';
import { ResultRusage, ResultCurrentCase } from './ResultListItem';
import ResultListItemDetail from './ResultListItemDetail';

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
                if(result.details === null) {
                    info = {
                        time: result.data.time,
                        memory: result.data.memory,
                    };
                } else {
                    info = {
                        time: result.details.max_time,
                        memory: result.details.max_memory,
                    };
                }
            }
        }
        return <ResultListItemDetail key={result.id} title={{contest: result.contest, task: result.task}} info={info} status={status} details={result.details} />;
    });
    return (
        <List>
            {content}
        </List>
    );
}
