import React from 'react';
import { connect } from 'react-redux';

import { Page } from '../actions';
import { StateType } from '../reducers';
import RouteTab from '../components/RouteTab';

interface HomeTabContainerProps {
    value: Page,
}
function HomeTabContainer(props: HomeTabContainerProps) {
    return (
        <RouteTab
            base={0}
            value={props.value}
            data={[
                { id: 'home', title: "ホーム", link: "" },
                { id: 'contest_list', title: "コンテスト一覧", link: "contests" },
            ]}
        />
    );
}

const mapStateToProps = (state: StateType) => ({
    value: state.current_page,
});

export default connect(mapStateToProps)(HomeTabContainer);
