import { SetCurrentPageAction, Page } from '../actions';

export type CurrentPageState = Page;
export default function(state: CurrentPageState = 'home', action: SetCurrentPageAction): CurrentPageState {
    if(action.type === 'SET_CURRENT_PAGE') {
        return action.page;
    }
    return state;
}
