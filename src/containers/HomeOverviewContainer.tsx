import React from 'react';
import { connect } from 'react-redux';

import { DispatchType } from '../';
import { StateType } from '../reducers';
import { fetchSystemOverview, setCurrentPage, SystemOverview } from '../actions';
import Markdown from '../components/Markdown';

interface HomeOverviewContainerProps {
    data: SystemOverview | null,
    onMount: () => void,
}
class HomeOverviewContainer extends React.Component<HomeOverviewContainerProps> {
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        let overview = this.props.data && this.props.data.overview;
        return <Markdown value={overview!} />
    }
}

const mapStateToProps = (state: StateType) => ({
    data: state.system.data,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: () => {
        dispatch(setCurrentPage('home'));
        dispatch(fetchSystemOverview() as any);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeOverviewContainer);
