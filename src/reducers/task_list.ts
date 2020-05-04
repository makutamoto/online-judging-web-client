import { RequestTaskListAction, ReceiveTaskListAction, TaskListRow } from '../actions';

export interface TaskListState {
    list: TaskListRow[] | null,
}
export default function(state: TaskListState = { list: null }, action: RequestTaskListAction | ReceiveTaskListAction): TaskListState {
    switch(action.type) {
        case 'REQUEST_TASK_LIST':
            return { list: null };
        case 'RECEIVE_TASK_LIST':
            let data = (action as ReceiveTaskListAction).data;
            return { list: data };
    }
    return state;
}
