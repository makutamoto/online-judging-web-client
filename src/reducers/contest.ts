import { RequestContestInfoAction, ReceiveContestInfoAction, ContestInfo } from '../actions';

export interface ContestState {
    data: ContestInfo | null,
}
export default function(state: ContestState = { data: null }, action: RequestContestInfoAction | ReceiveContestInfoAction): ContestState {
    switch(action.type) {
        case 'REQUEST_CONTEST_INFO':
            return { data: null };
        case 'RECEIVE_CONTEST_INFO':
            let data = (action as ReceiveContestInfoAction).data;
            return { data };
    }
    return state;
}
