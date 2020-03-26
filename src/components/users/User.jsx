import React from 'react'
import s from './Users.module.css';
import avatar from '../../assets/images/avatar.png'
import { NavLink } from 'react-router-dom';


let User = (props) => {

    let d = props.d;

    return (
        <div className={s.user__item}>
            <div className={s.user__inner}>
                <div className={s.user__photo}>
                    <NavLink to={'/profile/' + d.id}>
                        <img src={d.photos.small != null ? d.photos.small : avatar} alt="" className={s.user__img} />
                    </NavLink>
                    <div>
                        {d.followed
                            ? <button disabled={props.followingInProgress.some(id => id == d.id)} className={`${s.user__button} ${s.unfollow}`}
                                onClick={() => { props.unfollow(d.id) }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id == d.id)} className={`${s.user__button} ${s.follow}`}
                                onClick={() => { props.follow(d.id) }}>Follow</button>}
                    </div>
                </div>
                <div className={s.user__about}>
                    <div className={s.user__content}>
                        <div className={s.user__name}>{d.name}</    div>
                        <div className={s.user__status}>Status</div>
                    </div>
                    <div className={s.user__location}>
                        <div className={s.user__country}>"country"</div>
                        <div className={s.user__city}>"city"</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;