import { RequestCodeSubmissionAction, ReceiveCodeSubmissionAction, SetCodeLangAction, SetCodeAction } from '../actions';

export interface CodeState {
    isSubmitting: boolean,
    lang: string,
    code: string,
}
export default function(state: CodeState = { isSubmitting: false, lang: window.localStorage.codeLang || "gcc", code: "" }, action: RequestCodeSubmissionAction | ReceiveCodeSubmissionAction | SetCodeLangAction | SetCodeAction): CodeState {
    switch(action.type) {
        case 'REQUEST_CODE_SUBMISSION':
            return { ...state, isSubmitting: true };
        case 'RECEIVE_CODE_SUBMISSION':
            return { ...state, isSubmitting: false };
        case 'SET_CODE_LANG':
            let lang = (action as SetCodeLangAction).lang;
            window.localStorage.codeLang = lang;
            return { ...state, lang };
        case 'SET_CODE':
            let code = (action as SetCodeAction).code;
            return { ...state, code };
    }
    return state;
}
