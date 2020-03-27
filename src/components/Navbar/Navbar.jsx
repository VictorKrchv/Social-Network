import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {getUserProfile, getUserStatus} from '../../redux/profile-reducer'


const Navbar = () => {

    const userId = useSelector(state => state.auth.userId)
    const dispatch = useDispatch()
    let setProfile = (userId) => {
        dispatch(getUserProfile(userId))
        dispatch(getUserStatus(userId))
    }
    
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink onClick={() => setProfile(userId)} to={`/profile/${userId}`} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            
            <div className={`${s.item}`}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            
        </nav>
    )
}

export default Navbar;