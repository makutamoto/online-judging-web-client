import { RequestResultAction, UpdateResultAction, ReceiveResultAction, Result } from '../actions';

export interface ResultsState {
    list: Result[],
}
export default function(state: ResultsState = { list: [] }, action: RequestResultAction | UpdateResultAction | ReceiveResultAction): ResultsState {
    let list: Result[];
    switch(action.type) {
        case 'REQUEST_RESULT':
            list = JSON.parse(JSON.stringify(state.list));
            list.unshift({
                isFetching: true,
                id: action.id,
                contest: "BC-1",
                task: "A aaaa",
                data: null,
            });
            return { list };
        case 'UPDATE_RESULT':
            let data = (action as UpdateResultAction).data
            list = JSON.parse(JSON.stringify(state.list));
            for(let result of list) {
                if(result.id === action.id) {
                    result.data = data;
                    break;
                }
            }
            return { list };
        case 'RECEIVE_RESULT':
            list = JSON.parse(JSON.stringify(state.list));
            for(let result of list) {
                if(result.id === action.id) {
                    result.isFetching = false;
                    break;
                }
            }
            return { list };
    }
    return state;
}
