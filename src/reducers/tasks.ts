import { RequestTaskListAction, ReceiveTaskListAction, TaskListRow } from '../actions';

export interface TasksState {
    list: TaskListRow[] | null,
}
export default function(state: TasksState = { list: null }, action: RequestTaskListAction | ReceiveTaskListAction): TasksState {
    switch(action.type) {
        case 'REQUEST_TASK_LIST':
            return { list: null };
        case 'RECEIVE_TASK_LIST':
            let data = (action as ReceiveTaskListAction).data;
            return { list: data };
    }
    return state;
}
