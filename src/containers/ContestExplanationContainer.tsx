import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { StateType } from '../reducers';
import { setCurrentPage, setEditBuffer, setEditCallback, updateContestExplanation, ContestInfo } from '../actions';
import { DispatchType } from '..';
import Markdown from '../components/Markdown';

interface ContestExplanationContainerParams {
    contest: string,
}
interface ContestExplanationContainerProps extends RouteComponentProps<ContestExplanationContainerParams> {
    data: ContestInfo | null,
    edit: boolean,
    onMount: (contest: string) => void,
    onChange: (newValue: string) => void,
}
function ContestExplanationContainer(props: ContestExplanationContainerProps) {
    let { onMount } = props;
    let { contest } = props.match.params;
    useEffect(() => onMount(contest), [onMount, contest]);
    let explanation = props.data && props.data.explanation;
    return <Markdown value={explanation!} edit={props.edit} onChange={props.onChange} />;
}

const mapStateToProps = (state: StateType) => ({
    data: state.contest.data,
    edit: state.edit.state,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: (contest: string) => {
        dispatch(setCurrentPage('explanation'));
        dispatch(setEditCallback(() => dispatch(updateContestExplanation(contest) as any)));
    },
    onChange: (val: string) => dispatch(setEditBuffer(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestExplanationContainer);
