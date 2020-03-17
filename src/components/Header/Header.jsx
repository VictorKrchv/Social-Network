import React, { useState } from 'react';
import s from './Header.module.css';
import {  NavLink } from 'react-router-dom';
import downArrow from '../../assets/images/down-arrow.svg'
import userAvatar from '../../assets/images/user-avatar.png'

const Header = (props) => {

    let [toggleMode, setToggleMode] = useState(false)

    const handleToggleMenu = () => {
        setToggleMode(!toggleMode)  
    }


    return <header className={s.header}>
        <img className={s.logo} src="https://duraspace.org/wp-content/themes/duraspace/assets/images/duracloud/duracloud-logo-transparent.png" alt="" />
        {props.isAuth == true ?
            <div className={s.user}>
                <div className={s.user__inner} onClick={handleToggleMenu}>
                    <div className={s.user__name}>
                        {props.login}
                    </div>
                    <div className={s.user__avatar}>
                        <img src={userAvatar} alt="" />
                    </div>
                    <div className={s.user__arrow}>
                        <img src={downArrow} alt="" />
                    </div>
                </div>
                {toggleMode &&
                    <ul className={s.autorizeMenu}>
                        <li onClick={props.logoutUser} className={s.menuItem}>
                            <span >Logout</span>
                        </li>
                        <li className={s.menuItem}>
                            <span to='/profile/edit' >Edit profile</span>
                        </li>
                    </ul>
                }
            </div>
            : <NavLink className={s.login} to='/login'>Login</NavLink>}
    </header>
}

export default Header;
