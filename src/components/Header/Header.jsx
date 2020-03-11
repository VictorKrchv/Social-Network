import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
            <img className={s.logo} src="https://duraspace.org/wp-content/themes/duraspace/assets/images/duracloud/duracloud-logo-transparent.png" alt=""/>
            <div className={s.loginBlock}>
               <span> {props.isAuth == true && props.login } </span>
               <span> {props.isAuth == true && <button onClick={props.logoutUser}>Unlogin</button> } </span>
            </div>
    </header>
}

export default Header;