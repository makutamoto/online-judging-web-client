import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { StateType } from '../reducers';
import { setCurrentPage, setEditBuffer, updateContestOverview, ContestInfo, setEditCallback } from '../actions';
import { DispatchType } from '..';
import Markdown from '../components/Markdown';

interface ContestOverviewContainerParams {
    contest: string,
}
interface ContestOverviewContainerProps extends RouteComponentProps<ContestOverviewContainerParams> {
    data: ContestInfo | null,
    edit: boolean,
    onMount: (contest: string) => void,
    onChange: (newValue: string) => void,
}
class ContestOverviewContainer extends React.Component<ContestOverviewContainerProps> {
    componentDidMount() {
        this.props.onMount(this.props.match.params.contest);
    }
    render() {
        let description = this.props.data && this.props.data.description;
        return <Markdown value={description!} edit={this.props.edit} onChange={this.props.onChange} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    data: state.contest.data,
    edit: state.edit.state,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: (contest: string) => {
        dispatch(setCurrentPage('contest'));
        dispatch(setEditCallback(() => dispatch(updateContestOverview(contest) as any)));
    },
    onChange: (val: string) => dispatch(setEditBuffer(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestOverviewContainer);
