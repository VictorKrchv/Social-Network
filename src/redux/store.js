import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", message: 'Hi, how are you?', likesCount: '0' },
                { id: "2", message: 'Hola, que tal?', likesCount: '23' },
                { id: "3", message: 'I gonna take my horse', likesCount: '13' },
            ],
            newPostText: "Hola, que tal?"
        },
        friendsPage: {
            friends: [
                { id: "1", name: 'Conor', surname: 'McGregor' },
                { id: "2", name: 'Tony', surname: 'Ferguson' },
                { id: "3", name: 'Donald', surname: 'Cerrone' },

            ],
        },

        dialogsPage: {
            dialogs: [
                { id: '1', name: 'Alexander', surname: "Kirilenko" },
                { id: '2', name: 'Vadim', surname: "Romanets" },
                { id: '3', name: 'Victor', surname: "Korhevoi" },
                { id: '4', name: 'Alexander', surname: "Balyaba" },
                { id: '5', name: 'Zhan', surname: "Kolesnikov" },
                { id: '6', name: 'Sergey', surname: "Suvorov" },
                { id: '7', name: 'Denis', surname: "Lola" },
            ],
            messages: [
                { id: '1', message: 'Hola' },
                { id: '2', message: 'Hello' },
                { id: '3', message: 'yoyoy' },
                { id: '4', message: 'Privet' },
            ],
            newMessageText: " "
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
}


export default store;
window.store = store;



