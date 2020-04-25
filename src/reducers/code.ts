import { RequestCodeSubmissionAction, ReceiveCodeSubmissionAction, SetCodeLangAction, SetCodeAction } from '../actions';

export interface CodeState {
    isSubmitting: boolean,
    lang: string,
    code: string,
}
export default function(state: CodeState = { isSubmitting: false, lang: "gcc", code: "package main\n\nimport \"fmt\"\n\nfunc fizzBuzz(number int) {\n\tif number%15 == 0 {\n\t\tfmt.Println(\"FizzBuzz\")\n\t} else if number%5 == 0 {\t\tfmt.Println(\"Buzz\")\n\t} else if number%3 == 0 {\n\t\tfmt.Println(\"Fizz\")\n\t} else {\n\t\tfmt.Println(number)\n\t}\n}\n\nfunc main() {\n\tvar N int\n\tfmt.Scan(&N)\n\tfor i := 0; i < N; i++ {\n\t\tvar temp int\n\t\tfmt.Scan(&temp)\n\t\tfizzBuzz(temp)\n\t}}" }, action: RequestCodeSubmissionAction | ReceiveCodeSubmissionAction | SetCodeLangAction | SetCodeAction): CodeState {
    switch(action.type) {
        case 'REQUEST_CODE_SUBMISSION':
            return { ...state, isSubmitting: true };
        case 'RECEIVE_CODE_SUBMISSION':
            return { ...state, isSubmitting: false };
        case 'SET_CODE_LANG':
            let lang = (action as SetCodeLangAction).lang;
            return { ...state, lang };
        case 'SET_CODE':
            let code = (action as SetCodeAction).code;
            return { ...state, code };
    }
    return state;
}
