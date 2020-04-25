import { combineReducers } from 'redux';

import code, { CodeState } from './code';
import results, { ResultsState } from './results';

export interface StateType {
    code: CodeState,
    results: ResultsState,
}

export default combineReducers({
    code,
    results,
});
