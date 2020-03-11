import React from 'react';
import s from './../Friends.module.css';
import { NavLink } from 'react-router-dom';


const FriendItem = (props) => {
    return (

        <div className={s.friend} >

        <div className={s.friend__inner}>

            <div className={s.friend__icon}>
                <img className={s.friend__logo} src='https://cdn0.iconfinder.com/data/icons/coloricons/50/50X50-10-512.png' alt=""/>
            </div>
            <div className={s.friend__about + " " + s.active}>
                <NavLink to={"/profile/" + props.id} >{props.name} {props.surname}</NavLink>
            </div>
        </div>

        </div>

    )
}


export default FriendItem;