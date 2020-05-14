import React from 'react';
import { connect } from 'react-redux';

import { StateType } from '../reducers';
import { setCurrentPage, ContestInfo } from '../actions';
import { DispatchType } from '..';
import Markdown from '../components/Markdown';

interface ContestExplanationContainerProps {
    data: ContestInfo | null,
    edit: boolean,
    onMount: () => void,
}
class ContestExplanationContainer extends React.Component<ContestExplanationContainerProps> {
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        let explanation = this.props.data && this.props.data.explanation;
        return <Markdown value={explanation!} edit={this.props.edit} />;
    }
}

const mapStateToProps = (state: StateType) => ({
    data: state.contest.data,
    edit: state.edit.state,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: () => dispatch(setCurrentPage('explanation')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestExplanationContainer);
