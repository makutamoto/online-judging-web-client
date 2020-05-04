import React from 'react';
import { connect } from 'react-redux';

import { DispatchType } from '..';
import { fetchContestList, setCurrentPage, ContestListRow } from '../actions';
import { StateType } from '../reducers';
import ContestList from '../components/ContestList';

interface HomeContestListContainerProps {
    list: ContestListRow[] | null,
    onMount: () => void,
}
class HomeContestListContainer extends React.Component<HomeContestListContainerProps> {
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        return <ContestList list={this.props.list} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    list: state.contest_list.list,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: () => {
        dispatch(setCurrentPage('contest_list'));
        dispatch(fetchContestList() as any);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContestListContainer);
