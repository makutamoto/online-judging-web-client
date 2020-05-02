import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Box, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DispatchType } from '../';
import { fetchContestInfo, ContestInfo } from '../actions';
import { StateType } from '../reducers';
import ContestTabContainer from './ContestTabContainer';
import TaskContainer from './TaskContainer';
import TaskListContainer from './TaskListContainer';
import ContestOverviewContainer from './ContestOverviewContainer';
import ContestExplanationContainer from './ContestExplanationContainer';

const useStyles = makeStyles((theme) => ({
    title: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    titleDivider: {
        marginLeft: theme.spacing(-3),
        marginRight: theme.spacing(-3),
    },
    tab: {
        position: 'sticky',
        top: theme.spacing(8),
        marginLeft: theme.spacing(-3),
        marginRight: theme.spacing(-3),
        zIndex: 128,
        background: '#FFFFFF',
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));
interface ContestProps {
    title: string,
}
function Contest(props: ContestProps) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h4">{props.title}</Typography>
            <Divider className={classes.titleDivider} />
            <Box className={classes.tab}>
                <ContestTabContainer />
            </Box>
            <Box className={classes.content}>
                <Switch>
                    <Route exact path="/contests/:contest/tasks/:task(\d+)" component={TaskContainer} />
                    <Route exact path="/contests/:contest/tasks/" component={TaskListContainer} />
                    <Route exact path="/contests/:contest/explanation" component={ContestExplanationContainer} />
                    <Route exact path="/contests/:contest/" component={ContestOverviewContainer} />
                    <Redirect to="/" />
                </Switch>
            </Box>
        </React.Fragment>
    );
}

interface ContestContainerProps {
    data: ContestInfo | null,
    onMount: (contest: string) => void,
    match: { params: { contest: string } },
}
class ContestContainer extends React.Component<ContestContainerProps> {
    componentDidMount() {
        let { contest } = this.props.match.params;
        this.props.onMount(contest);
    }
    render() {
        let title = this.props.data && this.props.data.title;
        return <Contest title={title!} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    data: state.contest.data,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: (contest: string) => dispatch(fetchContestInfo(contest) as any),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestContainer);
