import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { DispatchType } from '../';
import { StateType } from '../reducers';
import { fetchSystemOverview, setCurrentPage, setEditBuffer, setEditCallback, updateSystemOverview, SystemOverview } from '../actions';
import Markdown from '../components/Markdown';

interface HomeOverviewContainerProps {
    data: SystemOverview | null,
    edit: boolean,
    onMount: () => void,
    onChange: (newValue: string) => void,
}
function HomeOverviewContainer(props: HomeOverviewContainerProps) {
    let { onMount } = props;
    useEffect(() => onMount(), [onMount]);
    let overview = props.data && props.data.overview;
    return <Markdown value={overview!} edit={props.edit} onChange={props.onChange} />
}

const mapStateToProps = (state: StateType) => ({
    data: state.system.data,
    edit: state.edit.state,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
    onMount: () => {
        dispatch(setCurrentPage('home'));
        dispatch(fetchSystemOverview() as any);
        dispatch(setEditCallback(() => dispatch(updateSystemOverview() as any)));
    },
    onChange: (val: string) => dispatch(setEditBuffer(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeOverviewContainer);
