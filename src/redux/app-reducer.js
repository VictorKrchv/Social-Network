import { getAuthUserData } from "./auth-reducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS"

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default: {
            return state;
        }
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZING_SUCCESS,
})

export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess())
}




export default appReducer 