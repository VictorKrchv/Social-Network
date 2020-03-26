import { userAPI, profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"
const DELETE_POST = "DELETE_POST"

let initialState = {
    posts: [
        { id: "1", message: 'Hi, how are you?', likesCount: '0', date: new Date("2017-01-26") },
        { id: "2", message: 'Hola, que tal?', likesCount: '23', date: new Date("2020-03-12") },
        { id: "3", message: 'I gonna take my horse', likesCount: '13', date: new Date(2020, 2, 16, 14, 20, 1) },
    ],
    profile: null,
    status: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let now = new Date()
            let newPost = {
                id: state.posts.length + 1,
                message: action.text,
                likesCount: 0,
                date: new Date(),
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.id)
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status }
        }
        default: {
            return state;
        }
    }
}

export const deletePost = (id) => ({
    type: DELETE_POST, id
})

export const addPost = (text) => ({
    type: ADD_POST, text
})

const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

const setUserStatus = (status) => ({
    type: SET_USER_STATUS, status
})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}






export default profileReducer 