import { RequestSystemOverviewAction, ReceiveSystemOverviewAction, SystemOverview } from '../actions';

export interface SystemState {
    data: SystemOverview | null,
}
export default function(state: SystemState = { data: null }, action: RequestSystemOverviewAction | ReceiveSystemOverviewAction): SystemState {
    switch(action.type) {
        case 'REQUEST_SYSTEM_OVERVIEW':
            return  { data: null };
        case 'RECEIVE_SYSTEM_OVERVIEW':
            let data = (action as ReceiveSystemOverviewAction).data;
            return { data };
    }
    return state;
}
