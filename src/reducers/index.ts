import { combineReducers } from 'redux';

import code, { CodeState } from './code';
import results, { ResultsState } from './results';
import task, { TaskState } from './task';

export interface StateType {
    code: CodeState,
    results: ResultsState,
    task: TaskState,
}

export default combineReducers({
    code,
    results,
    task,
});
