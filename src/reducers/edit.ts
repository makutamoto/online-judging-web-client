import { SetEditAction } from '../actions';

export type EditState = boolean;

export default function(state: EditState = false, action: SetEditAction): EditState {
    if(action.type === 'SET_EDIT') {
        return action.edit;
    }
    return state;
}
