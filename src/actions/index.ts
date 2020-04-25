import axios from 'axios';

import { DispatchType } from '../';

export interface RequestCodeSubmissionAction {
    type: string,
}
export const requestCodeSubmission = () => ({
    type: 'REQUEST_CODE_SUBMISSION',
});

export interface ReceiveCodeSubmissionAction {
    type: string,
}
export const receiveCodeSubmission = () => ({
    type: 'RECEIVE_CODE_SUBMISSION',
});

export interface SetCodeLangAction {
    type: string,
    lang: string,
}
export const setCodeLang = (lang: string) => ({
    type: 'SET_CODE_LANG',
    lang,
});

export interface SetCodeAction {
    type: string,
    code: string,
}
export const setCode = (code: string) => ({
    type: 'SET_CODE',
    code,
});

export interface ResultData {
    whole_result: number,
    result: number,
    time: number,
    memory: number,
    current_case: number,
    whole_case: number,
    description: string,
}
export interface Result {
    isFetching: boolean,
    id: string,
    contest: string,
    task: string,
    data: ResultData | null,
}

export interface RequestResultAction {
    type: string,
    id: string,
}
export const requestResult = (id: string) => ({
    type: 'REQUEST_RESULT',
    id,
});

export interface UpdateResultAction {
    type: string,
    id: string,
    data: ResultData,
}
export const updateResult = (id: string, data: ResultData) => ({
    type: 'UPDATE_RESULT',
    id, data,
});

export interface ReceiveResultAction {
    type: string,
    id: string,
}
export const receiveResult = (id: string) => ({
    type: 'RECEIVE_RESULT',
    id,
});

export const fetchResult = (id: string) => (dispatch: DispatchType, getState: any) => (
    new Promise((resolve, reject) => {
        let socket: WebSocket;
        dispatch(requestResult(id));
        socket = new WebSocket('ws://localhost:8080/submissions');
        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({ id }));
        });
        socket.addEventListener('message', (e) => {
            dispatch(updateResult(id, JSON.parse(e.data)));
        });
        socket.addEventListener('error', reject);
        socket.addEventListener('close', () => {
            dispatch(receiveResult(id));
            resolve();
        });
    })
);

export interface Submission {
    lang: string,
    code: string,
}
export const submitResult = (submission: Submission) => (dispatch: DispatchType) => {
    dispatch(requestCodeSubmission());
    return axios.post('http://localhost:8080/submit', submission)
        .then((response) => {
            dispatch(receiveCodeSubmission());
            dispatch(fetchResult(response.data.id) as any);
        });
};
