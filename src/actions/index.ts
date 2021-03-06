import axios from 'axios';

import { DispatchType } from '../';
import { StateType } from '../reducers';

export const StatusAC = 0;
export const StatusWA = 1;
export const StatusRE = 2;
export const StatusTLE = 3;
export const StatusCE = 4;

export type Page = 'home' | 'contest_list' | 'contest' | 'task' | 'explanation';
export interface SetCurrentPageAction {
    type: string,
    page: Page,
}
export const setCurrentPage = (page: Page) => ({
    type: 'SET_CURRENT_PAGE',
    page,
});

export interface SetEditStateAction {
    type: string,
    state: boolean,
}
export const setEditState = (state: boolean) => ({
    type: 'SET_EDIT_STATE',
    state,
});
export interface SetEditBufferAction {
    type: string,
    buffer: any,
}
export const setEditBuffer = (buffer: any) => ({
    type: 'SET_EDIT_BUFFER',
    buffer,
});
export interface SetEditCallbackAction {
    type: string,
    callback: ((dispatch: DispatchType) => void) | null,
}
export const setEditCallback = (callback: ((dispatch: DispatchType) => void) | null) => ({
    type: 'SET_EDIT_CALLBACK',
    callback,
});
export const callEditCallback = () => (dispatch: DispatchType, getState: () => StateType) => {
    return new Promise((resolve) => {
        let state = getState();
        if(state.edit.buffer !== null && state.edit.callback !== null) state.edit.callback(dispatch);
        resolve();
    });
};

export interface SystemOverview {
    overview: string,
}
export interface RequestSystemOverviewAction {
    type: string,
}
export const requestSystemOverview = () => ({
    type: 'REQUEST_SYSTEM_OVERVIEW',
});
export interface ReceiveSystemOverviewAction {
    type: string,
    data: SystemOverview,
}
export const receiveSystemOverview = (data: SystemOverview) => ({
    type: 'RECEIVE_SYSTEM_OVERVIEW',
    data,
});
export const fetchSystemOverview = () => (dispatch: DispatchType) => {
    dispatch(requestSystemOverview());
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/api/`)
            .then((response) => {
                dispatch(receiveSystemOverview(response.data));
                resolve();
            })
            .catch(reject);
    });
};
export const updateSystemOverview = () => (dispatch: DispatchType, getState: () => StateType) => {
    return new Promise((resolve, reject) => {
        let state = getState();
        axios.put(`http://localhost:8080/api/`, { overview: state.edit.buffer })
            .then(() => {
                dispatch(fetchSystemOverview() as any);
                resolve();
            })
            .catch(reject);
    });
};

export interface ContestListRow {
    id: string,
    title: string,
}
export interface RequestContestListAction {
    type: string,
}
export const requestContestList = () => ({
    type: 'REQUEST_CONTEST_LIST',
});
export interface ReceiveContestListAction {
    type: string,
    list: ContestListRow[],
}
export const receiveContestList = (list: ContestListRow[]) => ({
    type: 'RECEIVE_CONTEST_LIST',
    list,
});
export const fetchContestList = () => (dispatch: DispatchType) => {
    dispatch(requestContestList());
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/api/contests/`)
            .then((response) => {
                dispatch(receiveContestList(response.data));
                resolve();
            })
            .catch(reject);
    });
};

export interface ContestInfo {
    title: string,
    description: string,
    explanation: string,
}
export interface RequestContestInfoAction {
    type: string,
}
export const requestContestInfo = () => ({
    type: 'REQUEST_CONTEST_INFO',
});

export interface ReceiveContestInfoAction {
    type: string,
    data: ContestInfo,
}
export const receiveContestInfo = (data: ContestInfo) => ({
    type: 'RECEIVE_CONTEST_INFO',
    data,
});

export const fetchContestInfo = (contest: string) => (dispatch: DispatchType) => {
    dispatch(requestContestInfo());
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/api/contests/${contest}`)
            .then((response) => {
                dispatch(receiveContestInfo(response.data));
                resolve();
            })
            .catch(reject);
    });
};
export const updateContestOverview = (contest: string) => (dispatch: DispatchType, getState: () => StateType) => {
    return new Promise((resolve, reject) => {
        let state = getState();
        axios.put(`http://localhost:8080/api/contests/${contest}`, { description: state.edit.buffer })
            .then(() => {
                dispatch(fetchContestInfo(contest) as any);
                resolve();
            })
            .catch(reject);
    });
};
export const updateContestExplanation = (contest: string) => (dispatch: DispatchType, getState: () => StateType) => {
    return new Promise((resolve, reject) => {
        let state = getState();
        axios.put(`http://localhost:8080/api/contests/${contest}/explanation`, { explanation: state.edit.buffer })
            .then(() => {
                dispatch(fetchContestInfo(contest) as any);
                resolve();
            })
            .catch(reject);
    });
};

export interface TaskListRow {
    title: string,
    time_limit: number,
}
export interface RequestTaskListAction {
    type: string,
}
export const requestTaskList = () => ({
    type: "REQUEST_TASK_LIST",
});

export interface ReceiveTaskListAction {
    type: string,
    data: TaskListRow[],
}
export const receiveTaskList = (data: TaskListRow[]) => ({
    type: 'RECEIVE_TASK_LIST',
    data,
});

export const fetchTaskList = (contest: string) => (dispatch: DispatchType) => {
    dispatch(requestTaskData());
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/api/contests/${contest}/tasks/`)
            .then((response) => {
                let data: TaskListRow[] = response.data;
                data.forEach((row, i) => row.title = `${String.fromCharCode('A'.charCodeAt(0) + i)}. ${row.title}`);
                dispatch(receiveTaskList(response.data));
                resolve();
            })
            .catch(reject);
    });
};

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
        axios.get(`http://localhost:8080/api/contests/${contest}/tasks/${task}`)
        .then((response) => {
            dispatch(receiveTaskData(response.data));
            resolve();
        })
        .catch(reject);
    });
};
export const updateTaskData = (contest: string, task: number) => (dispatch: DispatchType, getState: () => StateType) => {
    return new Promise((resolve, reject) => {
        let state = getState();
        axios.put(`http://localhost:8080/api/contests/${contest}/tasks/${task}`, { problem: state.edit.buffer })
            .then(() => {
                dispatch(fetchTaskData(contest, task) as any);
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
    lang: string,
    code: string,
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
        socket = new WebSocket(`ws://localhost:8080/api/submissions/realtime/${id}`);
        socket.addEventListener('message', (e) => {
            dispatch(updateResult(id, JSON.parse(e.data)));
        });
        socket.addEventListener('error', reject);
        socket.addEventListener('close', () => {
            axios.get(`http://localhost:8080/api/submissions/details/${id}`)
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
export const submitResult = (contest: string, task: number, submission: Submission) => (dispatch: DispatchType) => {
    dispatch(requestCodeSubmission());
    return axios.post(`http://localhost:8080/api/contests/${contest}/tasks/${task}`, submission)
        .then((response) => {
            dispatch(receiveCodeSubmission());
            dispatch(fetchResult(response.data.id) as any);
        });
};
