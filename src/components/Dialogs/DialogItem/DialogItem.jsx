import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import { useState } from 'react';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    const instance = Axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY": "ef077242-5039-4d29-9155-e3c59332bdf1"
        }
    })

    const [data, setData] = useState('123');

    let getDialog = (id) => {
        instance.get(`dialogs`)
        .then(response => {
            setData(response.data)
        })
    }


    return <div onClick={getDialog.bind(null, props.id)} className={s.dialog + ' ' + s.active}>
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