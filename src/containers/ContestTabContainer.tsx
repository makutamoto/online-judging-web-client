import React from 'react';
import { connect } from 'react-redux';

import { Page } from '../actions';
import { StateType } from '../reducers';
import RouteTab from '../components/RouteTab';

interface ContestTabContainerProps {
    value: Page,
}
function ContestTabContainer(props: ContestTabContainerProps) {
    return (
        <RouteTab
            base={2}
            value={props.value}
            data={[
                { id: 'contest', title: "概要", link: "" },
                { id: 'task', title: "問題", link: "tasks" },
                { id: 'explanation', title: "解説", link: "explanation" },
            ]}
        />
    );
}

const mapStateToProps = (state: StateType) => ({
    value: state.current_page,
});

export default connect(mapStateToProps)(ContestTabContainer);
