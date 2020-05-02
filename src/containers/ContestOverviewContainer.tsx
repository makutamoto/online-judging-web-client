import React from 'react';
import { connect } from 'react-redux';

import { StateType } from '../reducers';
import { setCurrentPage, ContestInfo } from '../actions';
import { DispatchType } from '..';
import Markdown from '../components/Markdown';

interface ContestOverviewContainerProps {
    data: ContestInfo | null,
    onMount: () => void,
}
class ContestOverviewContainer extends React.Component<ContestOverviewContainerProps> {
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        let description = this.props.data && this.props.data.description;
        return <Markdown value={description!} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    data: state.contest.data,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: () => dispatch(setCurrentPage('contest')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestOverviewContainer);
