import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HomeTabContainer from './HomeTabContainer';
import HomeOverviewContainer from './HomeOverviewContainer';
import HomeContestListContainer from './HomeContestListContainer';

const useStyles = makeStyles((theme) => ({
    tab: {
        position: 'sticky',
        [theme.breakpoints.down('xs')]: {
            top: theme.spacing(7),
            marginLeft: theme.spacing(-2),
            marginRight: theme.spacing(-2),
        },
        [theme.breakpoints.up('sm')]: {
            top: theme.spacing(8),
            marginLeft: theme.spacing(-3),
            marginRight: theme.spacing(-3),
        },
        zIndex: 128,
        background: '#FFFFFF',
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));
export default function() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box className={classes.tab}>
                <HomeTabContainer />
            </Box>
            <Box className={classes.content}>
                <Switch>
                    <Route exact path="/contests" component={HomeContestListContainer} />
                    <Route exact path="/" component={HomeOverviewContainer} />
                </Switch>
            </Box>
        </React.Fragment>
    );
}
