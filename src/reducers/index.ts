import { combineReducers } from 'redux';

import code, { CodeState } from './code';
import results, { ResultsState } from './results';
import task, { TaskState } from './task';
import tasks, { TasksState } from './tasks';

export interface StateType {
    code: CodeState,
    results: ResultsState,
    task: TaskState,
    tasks: TasksState,
}

export default combineReducers({
    code,
    results,
    task,
    tasks,
});
