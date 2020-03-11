let initialState = {
    friends: [
        { id: "1", name: 'Conor', surname: 'McGregor' },
        { id: "2", name: 'Tony', surname: 'Ferguson' },
        { id: "3", name: 'Donald', surname: 'Cerrone' },
    ],

}

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer