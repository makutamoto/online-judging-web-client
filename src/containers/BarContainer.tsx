import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link as RouterLink, Prompt, withRouter } from 'react-router-dom';
import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DispatchType } from '../';
import { setEditState, callEditCallback } from '../actions';
import { StateType } from '../reducers';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    cancelButton: {
        marginRight: theme.spacing(1),
    },
}));
interface BarContainerProps extends RouteComponentProps {
    edit: boolean,
    updated: boolean,
    onChange: (val: boolean, cancel: boolean) => void,
    onPageChange: () => void,
}
function BarContainer(props: BarContainerProps) {
    let { onPageChange, history } = props;
    useEffect(() => history.listen(onPageChange), [onPageChange, history]);
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Link className={classes.title} component={RouterLink} to="/" color="inherit">
                    <Typography variant="h6">MyCoder</Typography>
                </Link>
                {props.edit && <Button className={classes.cancelButton} color="secondary" variant="contained" onClick={() => props.onChange(false, true)}>CANCEL</Button>}
                <Button variant="contained" onClick={() => props.onChange(!props.edit, false)}>{props.edit ? "SAVE" : "EDIT"}</Button>
                <Prompt when={props.updated} message="There are unsaved changes. Are you sure you want to leave this page?" />
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state: StateType) => ({
    edit: state.edit.state,
    updated: state.edit.buffer !== null,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onChange: (val: boolean, cancel: boolean) => {
        if(!val && !cancel) dispatch(callEditCallback() as any);
        dispatch(setEditState(val));
    },
    onPageChange: () => dispatch(setEditState(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BarContainer));
