import { DispatchType } from '../';
import { SetEditCallbackAction, SetEditStateAction, SetEditBufferAction } from '../actions';

export interface EditState {
    state: boolean,
    buffer: any,
    callback: ((dispatch: DispatchType) => void) | null,
}
export default function(state: EditState = { state: false, buffer: null, callback: null }, action: SetEditCallbackAction | SetEditStateAction | SetEditBufferAction): EditState {
    switch(action.type) {
        case 'SET_EDIT_STATE':
            let s = (action as SetEditStateAction).state;
            return { ...state, state: s, buffer: null };
        case 'SET_EDIT_BUFFER':
            let buffer = (action as SetEditBufferAction).buffer;
            return { ...state, buffer };
        case 'SET_EDIT_CALLBACK':
            let callback = (action as SetEditCallbackAction).callback;
            return { ...state, callback };
    }
    return state;
}
