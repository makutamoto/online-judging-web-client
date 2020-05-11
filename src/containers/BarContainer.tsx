import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Link, Switch, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DispatchType } from '../';
import { setEdit } from '../actions';
import { StateType } from '../reducers';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
});
interface BarContainerProps {
    edit: boolean,
    onChange: (val: boolean) => void,
}
function BarContainer(props: BarContainerProps) {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Link className={classes.title} component={RouterLink} to="/" color="inherit">
                    <Typography variant="h6">MyCoder</Typography>
                </Link>
                <Switch checked={props.edit} onChange={(e) => props.onChange(e.target.checked)} />
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state: StateType) => ({
    edit: state.edit,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onChange: (val: boolean) => dispatch(setEdit(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarContainer);
