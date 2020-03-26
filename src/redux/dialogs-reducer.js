import { dialogsAPI } from "../api/api"

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "ADD-MESSAGE"
const SET_DIALOGS = "SET_DIALOGS"
const SET_MESSAGES = "SET_MESSAGES"

let initialState = {
    dialogs: [],
    messages: []



}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS: {
            return {
                ...state,
                dialogs: action.dialogs
            }
        }
        case SET_MESSAGES: {
            return {
                ...state,
                messages: action.messages
            }
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 6, message: action.newMessageText }],
            }

        }
        default:
            return state;
    }
}

export const addMessage = (newMessageBody) => ({
    type: SEND_MESSAGE, newMessageText: newMessageBody
})

export const setDialogs = (dialogs) => ({
    type: SET_DIALOGS, dialogs
})
export const setMessages = (messages) => ({
    type: SET_MESSAGES, messages
})



export const getUserDialogs = () => async (dispatch) => {
    let response = await dialogsAPI.getDialogs()

    dispatch(setDialogs(response))
}

export const getMessagesWithUser = (id) => async (dispatch) => {
    let response = await dialogsAPI.getMessages(id)
    dispatch(setMessages(response.items))
}

export const sendMessage = (id, body) => async (dispatch) => {
    let response = await dialogsAPI.sendMessage(id, body)
    if (response.resultCode == 0) {
        let r = await dialogsAPI.getMessages(id)
        dispatch(setMessages(r.items))
    }
}
export const deleteMessage = (id, companionId) => async (dispatch) => {
    let response = await dialogsAPI.deleteMessage(id)
    if (response.resultCode == 0) {
        let rs = await dialogsAPI.getMessages(companionId)
        dispatch(setMessages(rs.items))
    }
}

export default dialogsReducer