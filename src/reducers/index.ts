import { combineReducers } from 'redux';

import code, { CodeState } from './code';
import results, { ResultsState } from './results';
import task, { TaskState } from './task';
import tasks, { TasksState } from './tasks';
import contest, { ContestState } from './contest';
import current_page, { CurrentPageState } from './current_page';

export interface StateType {
    code: CodeState,
    results: ResultsState,
    task: TaskState,
    tasks: TasksState,
    contest: ContestState,
    current_page: CurrentPageState,
}

export default combineReducers({
    code,
    results,
    task,
    tasks,
    contest,
    current_page,
});
