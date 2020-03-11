import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {

    let friendItems =
        props.friendsPage.friends.map(friend => (<FriendItem name={friend.name} surname={friend.surname} id={friend.id} />)
        )

    return (

        <div className={s.friendPage}>
            <div className={s.header}>
                Мои друзья:
            </div>
            <div className={s.friends}>
                {friendItems}
            </div>
        </div>
    )
}

export default Friends;