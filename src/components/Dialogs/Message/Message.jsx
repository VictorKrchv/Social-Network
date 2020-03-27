import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    let stl = props.userId === props.senderId ? `${s.message_bg }` : `${s.message_bg} ${s.incoming}`


    return <div className={s.message}>
        <div className={`${stl}`}>{props.message}</div>
        <div className={s.message__delete}><button onClick={props.deleteMessage.bind(null, props.id)}>delete</button></div>
    </div>
}

export default Message;