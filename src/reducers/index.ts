import { combineReducers } from 'redux';

import code, { CodeState } from './code';
import results, { ResultsState } from './results';
import task, { TaskState } from './task';
import task_list, { TaskListState } from './task_list';
import contest, { ContestState } from './contest';
import current_page, { CurrentPageState } from './current_page';
import system, { SystemState } from './system';
import contest_list, { ContestListState } from './contest_list';
import edit, { EditState } from './edit';

export interface StateType {
    code: CodeState,
    results: ResultsState,
    task: TaskState,
    task_list: TaskListState,
    contest: ContestState,
    current_page: CurrentPageState,
    system: SystemState,
    contest_list: ContestListState,
    edit: EditState,
}

export default combineReducers({
    code,
    results,
    task,
    task_list,
    contest,
    current_page,
    system,
    contest_list,
    edit,
});
