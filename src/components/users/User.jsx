import React from 'react'
import s from './Users.module.css';

let User = (props) => {



    return (
        <div className={s.user__item}>
            <div className={s.user__inner}>
                <div className={s.user__photo}>
                    <img src={props.photoURL} alt="" className={s.user__img} />
                    <div>
                        {props.followed
                            ? <button className={`${s.user__button} ${s.unfollow}`} onClick={() => { props.unfollow(props.id) }}>Unfollow</button>
                            : <button className={`${s.user__button} ${s.follow}`} onClick={() => { props.follow(props.id) }}>Follow</button>}
                    </div>
                </div>
                <div className={s.user__about}>
                    <div className={s.user__content}>
                        <div className={s.user__name}>{props.fullname}</div>
                        <div className={s.user__status}>{props.status}</div>
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