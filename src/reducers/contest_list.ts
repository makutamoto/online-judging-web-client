import { RequestContestListAction, ReceiveContestListAction, ContestListRow } from '../actions';

export interface ContestListState {
    list: ContestListRow[] | null,
}
export default function(state: ContestListState = { list: null }, action: RequestContestListAction | ReceiveContestListAction): ContestListState {
    switch(action.type) {
        case 'REQUEST_CONTEST_LIST':
            return { list: null };
        case 'RECEIVE_CONTEST_LIST':
            let list = (action as ReceiveContestListAction).list;
            return { list };
    }
    return state;
}
