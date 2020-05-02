import React from 'react';
import { connect } from 'react-redux';

import { StateType } from '../reducers';
import Contest from '../components/Contest';
import { setCurrentPage, fetchContestInfo, ContestInfo } from '../actions';
import { DispatchType } from '..';

interface ContestContainerProps {
    data: ContestInfo | null,
    onMount: (contest: string) => void,
    match: { params: { contest: string }},
}
class ContestContainer extends React.Component<ContestContainerProps> {
    componentDidMount() {
        let { contest } = this.props.match.params;
        this.props.onMount(contest);
    }
    render() {
        let title = this.props.data && this.props.data.title;
        let description = this.props.data && this.props.data.description;
        return <Contest title={title!} description={description!} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    data: state.contest.data,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: (contest: string) => {
        dispatch(setCurrentPage('contest'));
        dispatch(fetchContestInfo(contest) as any);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestContainer);
