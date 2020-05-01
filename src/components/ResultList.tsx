import React from 'react';
import { Box, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Result } from '../actions';
import { ResultRusage, ResultCurrentCase } from './ResultListItem';
import ResultListItemDetail from './ResultListItemDetail';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    list: {
        position: 'relative',
        minHeight: 300,
    },
    box: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));
export interface ResultListProps {
    list: Result[],
}
export default function(props: ResultListProps) {
    const classes = useStyles();
    let content: JSX.Element | JSX.Element[];
    if(props.list.length === 0) {
        content = (
            <Box className={classes.box}>
                <Typography variant="h6">ここに提出結果が表示されます。</Typography>
            </Box>
        );
    } else {
        content = props.list.map((result) => {
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
    }
    return (
        <Box className={classes.root}>
            <Typography variant="h5">提出結果</Typography>
            <List className={classes.list}>
                {content}
            </List>
        </Box>
    );
}
