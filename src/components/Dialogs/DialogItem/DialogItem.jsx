import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    let setDialog = (id) => {
        props.getDialog(id)
        props.setCompanion(props.id)
    }

    let active = props.currentCompanion === props.id ? s.active : null

    return <div onClick={setDialog.bind(null, props.id)}  className={s.dialog }>
        <NavLink to={path}>
            <div onClick={props.getMessagesWithUser.bind(null, props.id)} className={s.dialog__item + ' ' + active}>
                <div className={s.dialog__avatar}>
                    <img className={s.dialog__photo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg" alt="avatar" />
                </div>
                <div className={s.dialog__name}>{props.name} </div>
            </div>
        </NavLink>
    </div>
}

export default DialogItem;


