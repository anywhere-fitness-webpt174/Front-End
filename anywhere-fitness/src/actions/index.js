import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCHING_USER_START = "FETCHING_USER_START";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const FETCHING_USER_FAIL = "FETCHING_USER_FAIL";

export const FETCHING_CLASS_START = "FETCHING_CLASS_START";
export const FETCHING_CLASS_SUCCESS = "FETCHING_CLASS_SUCCESS";
export const FETCHING_CLASS_FAIL = "FETCHING_CLASS_FAIL";

export const UPDATE_CLASS_SUCCESS = "UPDATE_CLASS_SUCCESS";


export const fetchUser = (userid) => dispatch => {
    dispatch({type:FETCHING_USER_START})

    axiosWithAuth()
    .get(`/users/${userid}`)
    .then(res => {
        console.log(res);
        dispatch({
            type:FETCHING_USER_SUCCESS,
            payload: res.data.user
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_USER_FAIL,
            payload: "Can't get user information"
        })
    })
}

export const fetchClasses = () => dispatch => {
    dispatch({type:FETCHING_CLASS_START})

    axiosWithAuth()
    .get(`/classes`)
    .then(res => {
        console.log(res)
        dispatch({
            type: FETCHING_CLASS_SUCCESS,
            payload: res.data,
        })
    })
    .catch(err => {console.error(err)})
}

export const updateClasses = (newClassArr) => dispatch => {
     console.log(newClassArr);
    dispatch({
        type: UPDATE_CLASS_SUCCESS,
        payload: newClassArr,
    })
}