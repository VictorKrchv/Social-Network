import React from 'react'
import s from './Users.module.css';
import avatar from '../../assets/images/avatar.png'
import PreLoader from '../common/Preloader';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        <div className={s.users}>
            <div className={s.users__logo}>Users {props.isFetching ? <PreLoader /> : null}</div>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span key={p.id} onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
            <div className={s.users__items}>

                {/* user */}
                {props.users.map(d =>
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

                )}

            </div>
        </div>
    </div>
    )
}


export default Users;

