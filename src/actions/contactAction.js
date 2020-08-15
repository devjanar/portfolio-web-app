import axios from "axios";
import {API_ROOT} from "../services/api";


export const ADD_SUCCESS = 'ADD_SUCCESS';
function addRequest() {
    return { type: ADD_SUCCESS }
}
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const sendRequest = (data) => {
    return { type: SEND_SUCCESS, data}
};
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
function receiveError(error) {
    return { type: RECEIVE_ERROR, error }
}

export const sendHandler = (data) => {
    return  (dispatch) => {
        dispatch(addRequest());
        //Api, Connect to Server
        const rs= axios.post(`${API_ROOT}/send`,data);
        return Promise.resolve(rs).then(
            response => {
                dispatch(sendRequest({data:response.data}));
                return response;
            },
            error => {
                dispatch(receiveError(error.response));
                throw error.response;
            }
        )
    }
};