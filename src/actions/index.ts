import axios from 'axios';

import { DispatchType } from '../';

export const StatusAC = 0;
export const StatusWA = 1;
export const StatusRE = 2;
export const StatusTLE = 3;
export const StatusCE = 4;

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

export interface TaskData {
    title: string,
    problem: string,
    time_limit: number,
}
export interface RequestTaskDataAction {
    type: string,
}
export const requestTaskData = () => ({
    type: 'REQUEST_TASK_DATA',
});
export interface ReceiveTaskDataAction {
    type: string,
    data: TaskData,
}
export const receiveTaskData = (data: TaskData) => ({
    type: 'RECEIVE_TASK_DATA',
    data,
});
export const fetchTaskData = (contest: string, task: number) => (dispatch: DispatchType) => {
    dispatch(requestTaskData());
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/contests/${contest}/tasks/${task}/json`)
        .then((response) => {
            dispatch(receiveTaskData(response.data));
            resolve();
        })
        .catch(reject);
    });
};

export interface ResultData {
    whole_result: number,
    result: number,
    time: number,
    memory: number,
    current_case: number,
    whole_case: number,
}
export interface Result {
    isFetching: boolean,
    id: string,
    contest: string,
    task: string,
    data: ResultData | null,
    details: Detail | null,
}
export interface DetailRow {
    title: string,
	result: number,
	time: number,
	memory: number,
}
export interface Detail {
    max_time: number,
	max_memory: number,
	compile_error: string,
	details: DetailRow[] | null,
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

export interface ReceiveResultDetailsAction {
    type: string,
    id: string,
    details: Detail,
}
export const receiveResultDetails = (id: string, details: Detail) => ({
    type: 'RECEIVE_RESULT_DETAILS',
    id, details,
});

export const fetchResult = (id: string) => (dispatch: DispatchType, getState: any) => (
    new Promise((resolve, reject) => {
        let socket: WebSocket;
        dispatch(requestResult(id));
        socket = new WebSocket(`ws://localhost:8080/submissions/realtime/${id}`);
        socket.addEventListener('message', (e) => {
            dispatch(updateResult(id, JSON.parse(e.data)));
        });
        socket.addEventListener('error', reject);
        socket.addEventListener('close', () => {
            axios.get(`http://localhost:8080/submissions/details/${id}`)
                .then((response) => {
                    dispatch(receiveResultDetails(id, response.data));
                    dispatch(receiveResult(id));
                    resolve();
                })
                .catch(reject);
        });
    })
);

export interface Submission {
    lang: string,
    code: string,
}
export const submitResult = (submission: Submission) => (dispatch: DispatchType) => {
    dispatch(requestCodeSubmission());
    return axios.post(`http://localhost:8080/contests/bc1/tasks/1`, submission)
        .then((response) => {
            dispatch(receiveCodeSubmission());
            dispatch(fetchResult(response.data.id) as any);
        });
};
