import React from 'react';

import { Button, CircularProgress } from '@material-ui/core';

export interface SubmitButtonProps {
    isSubmitting: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}
export default function(props: SubmitButtonProps) {
    return (
        <Button variant="contained" color="primary" disabled={props.isSubmitting} onClick={props.onClick}>
            {props.isSubmitting ? <CircularProgress size={24} /> : '提出'}
        </Button>
    )
}
