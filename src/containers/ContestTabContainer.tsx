import { connect } from 'react-redux';

import { StateType } from '../reducers';
import ContestTab from '../components/ContestTab';

const mapStateToProps = (state: StateType) => ({
    value: state.current_page,
});

export default connect(mapStateToProps)(ContestTab);
