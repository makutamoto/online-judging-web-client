import React from 'react';
import { Typography } from '@material-ui/core';

export interface SectionProps {
    title: string,
    children?: any,
}
export default function(props: SectionProps) {
    return (
        <React.Fragment>
            <Typography variant="h5">{props.title}</Typography>
            {props.children}
        </React.Fragment>
    );
}
