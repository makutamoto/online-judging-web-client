import { RequestTaskDataAction, ReceiveTaskDataAction, TaskData } from '../actions';

export interface TaskState {
    id: string,
    data: TaskData | null,
}
export default function(state: TaskState = { id: "bc01", data: null }, action: RequestTaskDataAction | ReceiveTaskDataAction): TaskState {
    switch(action.type) {
        case 'REQUEST_TASK_DATA':
            return { ...state, data: null };
        case 'RECEIVE_TASK_DATA':
            let data = (action as ReceiveTaskDataAction).data;
            return { ...state, data };
    }
    return state;
}
