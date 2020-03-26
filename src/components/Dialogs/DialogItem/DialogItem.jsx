import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import { useState } from 'react';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    

    return <div onClick={props.getDialog.bind(null, props.id)} className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            <div onClick={props.getMessagesWithUser.bind(null, props.id)} className={s.dialog__item}>
                <div className={s.dialog__avatar}>
                    <img className={s.dialog__photo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg" alt="avatar" />
                </div>
                <div className={s.dialog__name}>{props.name} </div>
            </div>
        </NavLink>
    </div>
}

export default DialogItem;


{/* <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}> <img className={s.dialog__photo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg" alt="avatar"/> {props.name} {props.surname}</NavLink>
    </div> */}