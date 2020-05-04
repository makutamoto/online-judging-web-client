import React from 'react';
import path from 'path';
import { Link as RouterLink } from 'react-router-dom';
import { Divider, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { Page } from '../actions';

const pathRegex = /[^/]+/g;

function getLink(base: number, to: string, location: any): string {
    let pathname: string = location.pathname;
    let len = (pathname.match(pathRegex) || []).length;
    if(len > base) return path.join(pathname, '../'.repeat(len - base), to);
    return path.join(pathname, to);
}

export interface TabData {
    id: Page,
    title: string,
    link: string,
}
export interface ContestTabProps {
    base: number,
    value: Page,
    data: TabData[],
}
export default function(props: ContestTabProps) {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    let value = Math.max(0, props.data.map((data) => data.id).indexOf(props.value));
    return (
        <React.Fragment>
            <Tabs value={value} indicatorColor="primary" textColor="primary" variant={xs ? "fullWidth" : undefined} centered>
                {props.data.map((data) => (
                <Tab key={data.id} label={data.title} component={RouterLink} to={getLink.bind(null, props.base, data.link)} />
                ))}
            </Tabs>
            <Divider />
        </React.Fragment>
    )
}
