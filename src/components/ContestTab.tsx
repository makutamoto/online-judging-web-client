import path from 'path';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Divider, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { Page } from '../actions';

const pathRegex = /[^/]+/g;

function getLink(to: string, location: any): string {
    let pathname: string = location.pathname;
    let len = (pathname.match(pathRegex) || []).length;
    if(len > 2) {
        return path.join(pathname, '../'.repeat(len - 2), to);
    }
    return path.join(pathname, to);
}

export interface ContestTabProps {
    value: Page,
}
export default function(props: ContestTabProps) {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    let value = Math.max(0, ['contest', 'task', 'explanation'].indexOf(props.value));
    return (
        <React.Fragment>
            <Tabs value={value} indicatorColor="primary" textColor="primary" variant={xs ? "fullWidth" : undefined} centered>
                <Tab label="概要" component={RouterLink} to={getLink.bind(null, '')} />
                <Tab label="問題" component={RouterLink} to={getLink.bind(null, 'tasks')} />
                <Tab label="解説" component={RouterLink} to={getLink.bind(null, 'explanation')} />
            </Tabs>
            <Divider />
        </React.Fragment>
    )
}
