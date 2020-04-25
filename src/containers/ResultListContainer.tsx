import { connect } from 'react-redux';

import { StateType } from '../reducers';
import ResultList from '../components/ResultList';

const mapStateToProps = (state: StateType) => ({
    list: state.results.list,
});

export default connect(mapStateToProps)(ResultList);
