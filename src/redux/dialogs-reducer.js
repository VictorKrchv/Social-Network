const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "ADD-MESSAGE"

let initialState = {
    dialogs: [
        { id: '1', name: 'Alexander', surname: "Kirilenko" },
        { id: '2', name: 'Vadim', surname: "Romanets" },
        { id: '3', name: 'Victor', surname: "Korhevoi" },
        { id: '4', name: 'Alexander', surname: "Balyaba" },
        { id: '5', name: 'Zhan', surname: "Kolesnikov" },
        { id: '6', name: 'Sergey', surname: "Suvorov" },
        { id: '7', name: 'Denis', surname: "Lola" },
        { id: '8', name: 'Maksim', surname: "Astafiev" },
    ],
    messages: [
        { id: '1', message: 'Hola' },
        { id: '2', message: 'Hello' },
        { id: '3', message: 'yoyoy' },
        { id: '4', message: 'Privet' },
    ],


}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
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


export default dialogsReducer