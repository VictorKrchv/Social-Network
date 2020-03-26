import React from 'react'
import s from './Users.module.css';

import PreLoader from '../common/Preloader';

import { userAPI } from '../../api/api';
import Paginator from './Paginator';
import User from './User';

let Users = (props) => {

    

    return (<div>
        <div className={s.users}>
            <div className={s.users__logo}>Users {props.isFetching ? <PreLoader /> : null}</div>
            <Paginator totalUserCount={props.totalUserCount} 
                        pageSize={props.pageSize} 
                        onPageChanged={props.onPageChanged} 
                        currentPage={props.currentPage}  />
            <div className={s.users__items}>

                {/* user */}
                {props.users.map(d => <User d={d} {...props} key={d.id} />)}

            </div>
        </div>
    </div>
    )
}


export default Users;

