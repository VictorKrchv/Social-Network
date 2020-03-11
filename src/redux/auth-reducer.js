import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"
let initialState = {
    userId: 2,
    login: null,
    email: null,
    isAuth: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.auth
            }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (auth, userId, login, email, ) => ({
    type: SET_USER_DATA, payload: { userId, login, email }, auth
})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(true, id, login, email));
            } else if (response.data.resultCode === 1) {

                dispatch(setAuthUserData(false));
            }
        })
}

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}



export const logoutUser = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(false, null, null, null));
            }
        })
}



export default authReducer 