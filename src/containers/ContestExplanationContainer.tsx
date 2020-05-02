import React from 'react';
import { connect } from 'react-redux';

import { StateType } from '../reducers';
import { setCurrentPage, ContestInfo } from '../actions';
import { DispatchType } from '..';
import Markdown from '../components/Markdown';

interface ContestExplanationContainerProps {
    data: ContestInfo | null,
    onMount: () => void,
}
class ContestExplanationContainer extends React.Component<ContestExplanationContainerProps> {
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        let explanation = this.props.data && this.props.data.explanation;
        return <Markdown value={explanation!} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    data: state.contest.data,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: () => dispatch(setCurrentPage('explanation')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestExplanationContainer);
